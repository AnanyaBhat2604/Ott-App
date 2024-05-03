"use client";
import React, { useState } from "react";
import DropdownItem from "../DropdownItem/DropdownItem";

const MenuItems = ({ menuData }: any) => {
  return (
    <div className="relative font-sans font-semibold text-20px leading-26.4px text-light-grey flex">
      {menuData.map((item: any, i: number) => {
        return (
          <div key={i}>
            <DropdownItem item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default MenuItems;
