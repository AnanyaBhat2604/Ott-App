import { URL } from "@/assets/constants/apiRequest";
import { constants } from "@/assets/constants/constants";
import Rails from "@/package/Rails/Rails";
import { request } from "@/services/fetchData";
import React from "react";

export default async function Explore() {
  const moviesData = await request(URL?.GET_ALL_MOVIES, constants.GET);
  return (
    <>
      {moviesData?.curation?.packages?.map((pkg: any, pkgIndex: number) => (
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
}
