"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const CarouselCard = ({ actualData }: any) => {
  const jawSummary = actualData;
  const [isHovered, setIsHovered] = useState(false);

  const [error, setError] = useState(false);

  const src = jawSummary.image.url;

  return (
    <Link
      href={jawSummary.target.path}
      className={` bg-dark-blue backdrop-filter backdrop-blur-md bg-cover bg-center border border-white border-opacity-25 rounded-lg p-6 shadow-lg flex flex-col items-center justify-center text-center  transition-all
       ${isHovered && "scale-110 max-h-[450px]"}
      `}
    >
      <div
        className="w-full relative overflow-visible "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="banner-image overflow-hidden rounded-lg border border-white border-opacity-25">
          <Image
            src={
              error
                ? "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg?w=740&t=st=1714637808~exp=1714638408~hmac=565aff2bd3609247db95a239bf7f4b2530fe714e77b8c8854fb2ea1199facc20"
                : src
            }
            alt={jawSummary.title}
            loader={() => src}
            width={500}
            height={300}
            onError={() => setError(true)}
            className="h-[210px] object-cover"
            unoptimized
          />
        </div>
        {isHovered && (
          <div className="transition-opacity duration-300 ">
            <h1 className="text-white uppercase text-3xl font-semibold mt-4 line-clamp-2">
              {jawSummary.title}
            </h1>
            <p className="text-white text-base mt-4 line-clamp-2">
              {jawSummary.description}
            </p>
          </div>
        )}
      </div>
    </Link>
  );
};

export default CarouselCard;
