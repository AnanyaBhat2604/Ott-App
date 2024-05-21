"use client";
import { URL } from "@/assets/constants/apiRequest";
import { constants } from "@/assets/constants/constants";
import Rails from "@/package/Rails/Rails";
import { ErrorLogger } from "@/services/ErrorLogger";
import { request } from "@/services/fetchData";
import React, { useEffect, useState } from "react";

const TvShows = () => {
  const [tvShowsData, setTvShowsData] = useState([]);
  const logger = new ErrorLogger();

  const fetchtvShowsData = async () => {
    try {
      const data = await request(URL?.GET_ALL_TV_SHOWS, constants.GET);
      setTvShowsData(data?.curation?.packages);
    } catch (error) {
      logger.logError("Menu", error, new Date().toISOString());
    }
  };

  useEffect(() => {
    fetchtvShowsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {tvShowsData?.map((pkg: any, pkgIndex: number) => (
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

export default TvShows;
