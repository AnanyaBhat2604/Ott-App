"use client";
import { URL } from "@/assets/constants/apiRequest";
import { constants } from "@/assets/constants/constants";
import Rails from "@/package/Rails/Rails";
import { ErrorLogger } from "@/services/ErrorLogger";
import { request } from "@/services/fetchData";
import React, { useEffect, useState } from "react";

const Movies = () => {
  const [moviesData, setMoviesData] = useState([]);
  const logger = new ErrorLogger();

  const fetchMoviesData = async () => {
    try {
      const data = await request(URL?.GET_ALL_MOVIES, constants.GET);
      setMoviesData(data?.curation?.packages);
    } catch (error) {
      logger.logError("Menu", error, new Date().toISOString());
    }
  };

  useEffect(() => {
    fetchMoviesData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {moviesData?.map((pkg: any, pkgIndex: number) => (
        <div key={pkgIndex}>
          {pkg?.items?.contents?.map((content: any, i: number) => (
            <div key={i}>
              <Rails data={content.items} title={content?.title} />
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default Movies;
