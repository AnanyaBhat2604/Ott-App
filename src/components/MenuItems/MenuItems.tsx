import React from "react";
import DropdownItem from "../DropdownItem/DropdownItem";
import { Menu, MenuItem, MenuItemsProps } from "@/interfaces/interfaces";

const MenuItems: React.FC<MenuItemsProps> = ({ menuData }) => {
  return (
    <div className="relative font-sans font-semibold text-20px leading-26.4px text-light-grey flex">
      {menuData.length > 0 &&
        menuData.map((menu: Menu) =>
          menu.items.map((item: MenuItem, index: number) => (
            <div key={index}>
              <DropdownItem item={item} />
            </div>
          ))
        )}
    </div>
  );
};

export default MenuItems;
