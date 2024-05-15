import Title from "@/components/Title/Title";
import React, { FC } from "react";

const FAQ: FC<{ data: any; title: string }> = ({ data, title }) => {
  return (
    <div>
      <Title title={title} />
    </div>
  );
};

export default FAQ;
