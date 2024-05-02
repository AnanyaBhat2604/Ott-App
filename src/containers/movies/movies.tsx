"use client";
import CarouselCard from "@/components/Carousel/CarouselCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from "react";
import css from "styled-jsx/css";
import Title from "@/components/Title/Title";
import { getMovieData } from "@/services/fetchData";
import { responsive } from "@/assets/constants/constants";

const Movies = () => {
  const [movieData, setMovieData] = useState([]);

  const fetchMovieData = async () => {
    try {
      const data = await getMovieData();
      setMovieData(data?.titles);
    } catch (error) {
      console.log("Error fetching the value");
    }
  };

  useEffect(() => {
    fetchMovieData();
  }, []);

  const customTransition = {
    // Customize the classNames applied to specific elements
    reactMultiCarouselTrack: css`
      .react-multi-carousel-track {
        gap: 20px; // Add your desired gap value here
      }
    `,
  };
  return (
    <div className="bg-black flex flex-col gap-[20px] p-[40px] carousel-custom ">
      <Title />

      <Carousel responsive={responsive}>
        {movieData.map((curElem: any) => {
          return (
            <CarouselCard key={curElem?.summary?.id} actualData={curElem} />
          );
        })}
      </Carousel>
    </div>
  );
};

export default Movies;
