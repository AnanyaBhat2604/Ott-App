"use client";
import { URL } from "@/assets/constants/apiRequest";
import { constants } from "@/assets/constants/constants";
import InfiniteScroll from "@/components/InfiniteScroll/InfiniteScroll";
import Rails from "@/package/Rails/Rails";
import { ErrorLogger } from "@/services/ErrorLogger";
import { request } from "@/services/fetchData";
import React, { useEffect, useState } from "react";

const TvShows = () => {
  const logger = new ErrorLogger();

  const fetchDataFromApi = async (
    skip: number,
    limit: number
  ): Promise<{ responseData: any[]; totalPages: number }> => {
    try {
      const response = await request(
        `${URL?.GET_ALL_TV_SHOWS}?skip=${skip}&limit=${limit}`,
        constants.GET
      );

      return {
        responseData: response?.curation?.packages,
        totalPages: Math.floor(response?.pagination?.totalItems / limit),
      };
    } catch (error) {
      logger.logError("Menu", error, new Date().toISOString());
      return { responseData: [], totalPages: 0 };
    }
  };

  return (
    <>
      <InfiniteScroll
        fetchData={fetchDataFromApi}
        limit={5}
        containerClassName={""}
      >
        <ItemRenderer />
      </InfiniteScroll>
    </>
  );
};

const ItemRenderer: React.FC<{ item?: any }> = ({ item }) => (
  <div key={item._id}>
    {item?.items?.contents?.map((content: any, i: number) => (
      <div key={i}>
        <Rails data={content.items} title={content?.title} />
      </div>
    ))}
  </div>
);

export default TvShows;
