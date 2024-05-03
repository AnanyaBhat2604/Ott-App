"use client";
import { URL, headers } from "@/assets/constants/ApiRquest";
import Movies from "@/containers/movies/movies";
import { request } from "@/services/fetchData";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [movieData, setMovieData] = useState([]);

  const fetchMovieData = async () => {
    try {
      const data = await request(URL?.GET_MOVIE, "GET", headers);
      setMovieData(data?.titles);
    } catch (error) {
      console.log("Error fetching the value");
    }
  };

  useEffect(() => {
    fetchMovieData();
  }, []);
  return (
    <main>
      <Movies movieData={movieData} />
    </main>
  );
}
