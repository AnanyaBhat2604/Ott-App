import { responsive } from "@/assets/constants/constants";
import React from "react";
import Carousel from "react-multi-carousel";
import CarouselCard from "../CarouselCard/CarouselCard";

const MovieCarousel = ({ movieData }: any) => {
  return (
    <Carousel responsive={responsive}>
      {movieData.map((curElem: any) => {
        return <CarouselCard key={curElem?.summary?.id} actualData={curElem} />;
      })}
    </Carousel>
  );
};

export default MovieCarousel;
