"use client";
import React from "react";
import InfiniteScroll from "@/components/InfiniteScroll/InfiniteScroll";

const ParentComponent: React.FC = () => {
  const limit: number = 10; // Number of items per page

  const fetchDataFromApi = async (
    skip: number,
    limit: number
  ): Promise<any[]> => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_start=${skip}&_limit=${limit}`
      );
      const newData = await response.json();
      return newData;
    } catch (error) {
      console.error("Error fetching data from API:", error);
      return [];
    }
  };

  return (
    <div>
      <h1>Infinite Scroll Example</h1>
      <InfiniteScroll
        fetchData={(page) => fetchDataFromApi(page, limit)}
        totalItems={50}
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
