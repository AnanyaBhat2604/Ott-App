import Image from "next/image";
import React, { FC, useState } from "react";
import noDetails from "../../assets/icons/arrow-up.svg";
import details from "../../assets/icons/arrow-down.svg";
import List from "../List/List";

const DropdownItem: FC<{ item: any }> = ({ item }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseOver={() => {
        setHovered(true);
      }}
      onMouseOut={() => {
        setHovered(false);
      }}
    >
      <div
        className={`flex h-[64px] px-[18px] items-center w-max ${
          hovered && "bg-gray-800 text-white"
        }`}
      >
        <span>{item.title}</span>
        {item.children && item.children.length > 0 && (
          <Image
            src={hovered ? noDetails : details}
            alt="details"
            className="w-[30px]"
          />
        )}
      </div>
      <div className="relative z-10">
        {item.children && item.children.length > 0 && hovered && (
          <List options={item?.children} />
        )}
      </div>
    </div>
  );
};

export default DropdownItem;
