import { URL, headers } from "@/assets/constants/ApiRquest";
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

  const data = await request(URL?.GET_MOVIE, "GET", headers);
  return (
    <div>
      {{
        ["tv-shows"]: <TvShows movieData={data?.titles || []} />,
        ["movies"]: <Movies movieData={data?.titles || []} />,
      }[slug] || <h1>Not Found</h1>}
    </div>
  );
}
