"use client";
import { URL } from "@/assets/constants/ApiRquest";
import { request } from "@/services/fetchData";
import Movies from "../package/Movies/movies";
import { constants } from "@/assets/constants/constants";
import { useEffect, useState } from "react";
import { ErrorLogger } from "@/services/ErrorLogger";

export default function Home() {
  const logger = new ErrorLogger();
  const [movieData, setMovieData] = useState([]);
  useEffect(() => {
    fetchMovieData();
  }, []);

  const fetchMovieData = async () => {
    try {
      const data = await request(URL?.GET_DASHBOARD_LIST, constants.GET);

      setMovieData(data?.data);
    } catch (error) {
      logger.logError("Menu", error, new Date().toISOString());
    }
  };

  return (
    <main className="h-full">
      {movieData.map((content: any, i) => {
        return (
          <div key={i}>
            <Movies movieData={content.data} title={content.name} />
          </div>
        );
      })}
    </main>
  );
}
