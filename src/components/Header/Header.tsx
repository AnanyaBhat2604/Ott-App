"use client";

import { useState } from "react";
import Image from "next/image";
import search from "../../assets/icons/search.svg";
import profile from "../../assets/icons/profile.svg";
import menu from "@/assets/data/menu.json";
import { constants } from "@/assets/constants/constants";
import Logo from "../Logo/Logo";
import MenuItems from "../MenuItems/MenuItems";
import List from "../List/List";

const Header = () => {
  const [dropdown, setDropdown] = useState("");

  return (
    <div className="bg-black">
      <div className="container mx-auto flex gap-[50px] justify-between items-center relative">
        <Logo />
        <MenuItems menuData={menu} />

        <div className=" font-sans font-semibold text-20px leading-26.4px text-light-grey flex gap-[20px] items-center">
          <div
            className={` px-[10px] h-[64px] flex items-center ${
              constants.SEARCH === dropdown ? "bg-gray-800 text-white" : ""
            }`}
            onMouseEnter={() => {
              if (constants.SEARCH !== dropdown) {
                setDropdown(constants.SEARCH);
              }
            }}
            onMouseLeave={() => {
              setDropdown("");
            }}
          >
            <Image src={search} alt={"Search"} />
          </div>

          <div
            className={` px-[10px] h-[64px] flex items-center relative  ${
              constants.PROFILE === dropdown ? "bg-gray-800 text-white" : ""
            }`}
            onMouseEnter={() => {
              if (constants.PROFILE !== dropdown) {
                setDropdown(constants.PROFILE);
              }
            }}
            onMouseLeave={() => {
              setDropdown("");
            }}
          >
            <Image src={profile} alt="profile" className="h-[32px] w-[32px]" />
            {dropdown === constants.PROFILE && (
              <List
                options={[
                  {
                    name: "Sign In",
                  },
                  {
                    name: "Help",
                  },
                  {
                    name: "Watch Anywhere",
                  },
                ]}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
