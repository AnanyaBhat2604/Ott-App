import React, { FC } from "react";
import Lottie from "lottie-react";
import circularLoaderAnimation from "@/assets/animations/circularLoader.json";

const CircularLoader: FC<{ height: number; width: number }> = ({
  height,
  width,
}) => {
  return (
    <div className="w-full flex items-center justify-center p-[20px]">
      {" "}
      <Lottie
        animationData={circularLoaderAnimation}
        loop={true}
        className={`h-[${height}px] w-[${width}px]`}
      />
    </div>
  );
};

export default CircularLoader;
