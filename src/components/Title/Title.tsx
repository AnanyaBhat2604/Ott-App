import { TitleProps } from "@/interfaces/interfaces";
import React from "react";

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <div className="font-sans font-semibold text-24px leading-26.4px text-white">
      <span>Prime</span> {title}
    </div>
  );
};

export default Title;
