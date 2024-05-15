"use client";
import React, { FC } from "react";
import AccordionComponent from "./AccordionComponent";

const Accordion: FC<{ data: any }> = ({ data }) => {
  return (
    <>
      {data.map((item: any, i: number) => {
        return (
          <div key={i}>
            <AccordionComponent
              title={item.accordionTitle}
              content={item.accordionDescription}
            />
          </div>
        );
      })}
    </>
  );
};

export default Accordion;
