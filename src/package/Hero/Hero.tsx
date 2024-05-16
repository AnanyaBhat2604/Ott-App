"use client";
import HeroCard from "@/components/HeroCard/HeroCard";
import React, { FC } from "react";

const Hero: FC<{ data: any }> = ({ data }) => {
  return (
    <div>
      <HeroCard heroData={data} />
    </div>
  );
};

export default Hero;
