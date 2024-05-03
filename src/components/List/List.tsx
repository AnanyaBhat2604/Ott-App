import React from "react";

const List = ({ options }: any) => {
  return (
    <div className="absolute  top-full bg-dark-grey text-light-grey  h-max w-max right-0 min-w-[120px] ">
      {options.map((option: any, index: number) => {
        return (
          <div key={index} className="mx-[20px] py-[10px]">
            {option.name}
          </div>
        );
      })}
    </div>
  );
};

export default List;
