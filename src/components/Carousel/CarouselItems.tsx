"use client";

import { responsive } from "@/assets/constants/constants";
import React from "react";
import Carousel from "react-multi-carousel";
import CarouselCard from "../CarouselCard/CarouselCard";

const CarouselItems = ({ movieData }: any) => {
  return (
    <Carousel responsive={responsive}>
      {movieData &&
        movieData.length > 0 &&
        movieData.map((curElem: any, i: number) => {
          return (
            <div key={i}>
              <CarouselCard key={curElem?.summary?.id} actualData={curElem} />
            </div>
          );
        })}
    </Carousel>
  );
};

export default CarouselItems;
