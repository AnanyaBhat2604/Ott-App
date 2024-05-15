import Accordion from "@/components/Accordion";
import Title from "@/components/Title/Title";
import React, { FC } from "react";

const FAQ: FC<{ data: any; title: string }> = ({ data, title }) => {
  return (
    <div className=" flex flex-col gap-[20px] p-[40px] relative">
      <div className="text-center">
        <Title title={title} />
      </div>

      <Accordion data={data.contents} />
    </div>
  );
};

export default FAQ;
