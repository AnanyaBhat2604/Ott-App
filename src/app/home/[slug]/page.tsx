import { URL } from "@/assets/constants/ApiRquest";
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

  const moviesData = await request(URL?.GET_ALL_MOVIES, constants.GET);
  const tvShowsData = await request(URL?.GET_ALL_TV_SHOWS, constants.GET);

  return (
    <div>
      {{
        ["tvShows"]: (
          <TvShows
            movieData={tvShowsData?.data}
            title={tvShowsData?.data.name}
          />
        ),
        ["Movies"]: (
          <Movies movieData={moviesData?.data} title={moviesData?.data.name} />
        ),
      }[slug] || <h1>Not Found</h1>}
    </div>
  );
}
