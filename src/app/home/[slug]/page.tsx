import { URL } from "@/assets/constants/ApiRquest";
import { constants } from "@/assets/constants/constants";
import Rails from "@/package/Rails/Rails";
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
          <Rails
            data={tvShowsData.curation.packages[0]}
            title={tvShowsData?.title}
          />
        ),
        ["Movies"]: (
          <Rails
            data={moviesData.curation.packages[0]}
            title={moviesData?.title}
          />
        ),
      }[slug] || <h1>Not Found</h1>}
    </div>
  );
}
