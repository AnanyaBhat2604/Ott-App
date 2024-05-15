import Accordion from "@/components/Accordion/Accordion";
import Title from "@/components/Title/Title";
import React, { FC } from "react";

const FAQ: FC<{ data: any; title: string }> = ({ data, title }) => {
  return (
    <div className=" flex flex-col gap-[20px] p-[40px] relative">
      <Title title={title} />
      <div>
        <Accordion />
      </div>
    </div>
  );
};

export default FAQ;
