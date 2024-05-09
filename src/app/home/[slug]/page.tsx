import { URL, headers } from "@/assets/constants/ApiRquest";
import { constants } from "@/assets/constants/constants";
import Movies from "@/package/Movies/movies";
import TvShows from "@/package/TvShows/TvShows";
import { request } from "@/services/fetchData";
import React from "react";

export default async function Explore({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const data = await request(URL?.GET_MOVIE, constants.GET, headers);
  const moviesData =
    data?.titles?.filter(
      (item: { summary: { type: string } }) => item.summary?.type === "movie"
    ) || [];
  const tvShowsData =
    data?.titles?.filter(
      (item: { summary: { type: string } }) => item.summary?.type === "show"
    ) || [];
  return (
    <div>
      {{
        ["tv-shows"]: <TvShows movieData={tvShowsData} />,
        ["movies"]: <Movies movieData={moviesData} />,
      }[slug] || <h1>Not Found</h1>}
    </div>
  );
}
