import MovieCarousel from "@/components/Carousel/MovieCarousel";
import Title from "@/components/Title/Title";
import React from "react";

const TvShows = ({ movieData }: any) => {
  return (
    <div className="bg-black flex flex-col gap-[20px] p-[40px] carousel-custom ">
      <Title title={"TV Shows"} />
      <MovieCarousel movieData={movieData} />
    </div>
  );
};

export default TvShows;
