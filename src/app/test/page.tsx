"use client";
import React from "react";
import InfiniteScroll from "@/components/InfiniteScroll/InfiniteScroll";

const ParentComponent: React.FC = () => {
  const fetchDataFromApi = async (
    skip: number,
    limit: number
  ): Promise<{ responseData: any[]; totalPages: number }> => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_start=${skip}&_limit=${limit}`
      );
      const newData = await response.json();
      return { responseData: newData, totalPages: 0 };
    } catch (error) {
      console.error("Error fetching data from API:", error);
      return { responseData: [], totalPages: 0 };
    }
  };

  return (
    <div>
      <h1>Infinite Scroll Example</h1>
      <InfiniteScroll
        fetchData={fetchDataFromApi}
        limit={5}
        containerClassName={""}
      >
        <ItemRenderer />
      </InfiniteScroll>
    </div>
  );
};

export default ParentComponent;

interface Item {
  title: string;
  body: string;
}

const ItemRenderer: React.FC<{ item?: Item }> = ({ item }) => (
  <div className="bg-slate-600 mb-1">
    <h2>{item?.title}</h2>
    <p>{item?.body}</p>
  </div>
);
