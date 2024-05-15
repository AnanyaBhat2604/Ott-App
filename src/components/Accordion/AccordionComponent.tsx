"use client";
import React, { FC, useState } from "react";
import ExpandIcon from "@/assets/icons/plus.svg";
import Image from "next/image";

const AccordionComponent: FC<{ title: string; content: string }> = ({
  title,
  content,
}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="flex flex-col">
      <div
        className="bg-dark-grey  z-10 relative text-white w-full hover:bg-light-grey transition-all flex justify-between p-[24px] cursor-pointer overflow-hidden"
        onClick={() => setIsActive(!isActive)}
      >
        <div className="text-[18px] z-[-1]">{title}</div>
        <div
          className={`transform transition-all ${
            isActive ? "rotate-45" : "rotate-0"
          }`}
        >
          {" "}
          <Image src={ExpandIcon} alt="Expand" />
        </div>
      </div>
      {
        <div
          className={`text-white bg-dark-grey  text-[18px] px-[24px] mt-[1.5px] transition-all overflow-hidden relative z-0 ${
            isActive ? "h-full py-[24px]  opacity-100" : "h-0 py-0  opacity-0"
          }`}
        >
          {content}
        </div>
      }
    </div>
  );
};

export default AccordionComponent;
