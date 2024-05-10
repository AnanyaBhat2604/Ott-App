import Link from "next/link";
import React from "react";

const List = ({ options }: any) => {
  return (
    <div className="absolute  top-full bg-dark-grey text-light-grey  h-max w-max right-0 min-w-[120px] flex flex-col ">
      {options &&
        options.map((option: any, index: number) => {
          return (
            <Link
              href={option?.url || ""}
              key={index}
              className="mx-[20px] py-[10px]"
            >
              {option?.title}
            </Link>
          );
        })}
    </div>
  );
};

export default List;
