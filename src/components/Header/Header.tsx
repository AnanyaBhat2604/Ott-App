"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import search from "../../assets/icons/search.svg";
import profile from "../../assets/icons/profile.svg";
import { constants } from "@/assets/constants/constants";
import Logo from "../Logo/Logo";
import MenuItems from "../MenuItems/MenuItems";
import List from "../List/List";
import { request } from "@/services/fetchData";
import { URL } from "@/assets/constants/ApiRquest";
import { ErrorLogger } from "@/services/ErrorLogger";

const Header = () => {
  const logger = new ErrorLogger();
  const [dropdown, setDropdown] = useState("");
  const [menuData, setMenuData] = useState({});

  const fetchMenuData = async () => {
    try {
      const data = await request(URL.GET_MENU, constants.GET);
      setMenuData(data);
    } catch (error) {
      logger.logError("Menu", error, new Date().toISOString());
    }
  };

  useEffect(() => {
    fetchMenuData();
  }, []);

  return (
    <div className="bg-black">
      <div className="container mx-auto flex gap-[50px] justify-between items-center relative">
        <Logo />
        {menuData && <MenuItems menuData={menuData} />}

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
            className={` px-[10px] h-[64px] flex items-center relative group hover:bg-gray-800 text-white`}
            // onMouseEnter={() => {
            //   if (constants.PROFILE !== dropdown) {
            //     setDropdown(constants.PROFILE);
            //   }
            // }}
            // onMouseLeave={() => {
            //   setDropdown("");
            // }}
          >
            <Image src={profile} alt="profile" className="h-[32px] w-[32px]" />
            <div className="bg-white hidden group-hover:block">
              {
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
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
