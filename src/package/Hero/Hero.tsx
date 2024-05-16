"use client";
import HeroCard from "@/components/HeroCard/HeroCard";
import React, { FC } from "react";

const Hero: FC<{ data: any }> = ({ data }) => {
  return (
    <>
      {data.contents.map((content: any, i: number) => {
        return (
          <div key={i}>
            <HeroCard heroData={content} index={i} />
          </div>
        );
      })}
    </>
  );
};

export default Hero;
