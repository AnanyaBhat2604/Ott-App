import React, { FC } from "react";
import dotLoadingAnimation from "../../../public/assets/animations/dotLoadingAnimation.json";
import Lottie from "lottie-react";

const DotLoader: FC = () => {
  return (
    <Lottie
      animationData={dotLoadingAnimation}
      loop={true}
      className="h-[114px]"
    />
  );
};

export default DotLoader;
