import MovieCarousel from "@/components/Carousel/MovieCarousel";
import Title from "@/components/Title/Title";
import React from "react";
import strings from "@/assets/strings/strings.json";

const TvShows = ({ movieData, title }: any) => {
  return (
    <div className="bg-black flex flex-col gap-[20px] p-[40px] carousel-custom ">
      <Title title={title || strings.tvShows} />
      <MovieCarousel movieData={movieData} />
    </div>
  );
};

export default TvShows;
