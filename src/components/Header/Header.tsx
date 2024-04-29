"use client";

import React, { useState } from "react";
import Image from "next/image";
import noDetails from "../../assets/icons/arrow-up.svg";
import details from "../../assets/icons/arrow-down.svg";
import search from "../../assets/icons/search.svg";
import profile from "../../assets/icons/profile.svg";

type DropdownKey =
  | "Home"
  | "Store"
  | "Categories"
  | "en"
  | "profile"
  | "Live TV"
  | "search"
  | "tryForFree";

const Header = () => {
  const [dropdownState, setDropdownState] = useState<{
    [key in DropdownKey]: {
      isVisible: boolean;
      isHovered: boolean;
    };
  }>({
    Home: { isVisible: false, isHovered: false },
    Store: { isVisible: false, isHovered: false },
    Categories: { isVisible: false, isHovered: false },
    en: { isVisible: false, isHovered: false },
    "Live TV": { isVisible: false, isHovered: false },
    search: { isVisible: false, isHovered: false },
    tryForFree: { isVisible: false, isHovered: false },
    profile: { isVisible: false, isHovered: false },
  });

  const handleDropdown = (key: DropdownKey, isVisible: boolean) => {
    setDropdownState((prevState) => ({
      ...prevState,
      [key]: { ...prevState[key], isVisible, isHovered: isVisible },
    }));
  };

  const handleHover = (key: DropdownKey, isHovered: boolean) => {
    setDropdownState((prevState) => ({
      ...prevState,
      [key]: { ...prevState[key], isHovered },
    }));
  };

  const menuOptions: { [key in DropdownKey]: string[] } = {
    Home: ["All", "Movies", "Tv Shows"],
    Store: ["All", "Rent", "Channels"],
    Categories: ["Category A", "Category B"],
    en: ["English", "Kannada", "Hindi"],
    profile: [],
    "Live TV": [],
    search: [],
    tryForFree: [],
  };

  const renderDropdown = (key: DropdownKey) => {
    const { isVisible } = dropdownState[key];
    return (
      isVisible && (
        <div className="absolute left-0 top-full bg-dark-grey text-light-grey w-max h-max">
          {menuOptions[key].map((option, index) => (
            <div key={index} className="mx-[20px] py-[10px]">
              {option}
            </div>
          ))}
        </div>
      )
    );
  };

  return (
    <div className="bg-black">
      <div className="container mx-auto flex gap-[50px] justify-center items-center">
        <div className="font-sans font-semibold text-24px leading-26.4px text-white">
          prime video
        </div>
        <div className="relative font-sans font-semibold text-20px leading-26.4px text-light-grey flex">
          {(["Home", "Store", "Categories"] as DropdownKey[]).map((key) => (
            <div
              key={key}
              className={`flex gap-[10px] relative min-w-[100px] justify-center items-center px-[10px] h-[64px]  ${
                dropdownState[key].isHovered ? "bg-gray-800 text-white" : ""
              }`}
              onMouseEnter={() => handleDropdown(key, true)}
              onMouseLeave={() => handleDropdown(key, false)}
            >
              <div>{key}</div>
              <Image
                src={dropdownState[key].isVisible ? noDetails : details}
                alt="details"
                className="w-[30px]"
              />
              {renderDropdown(key)}
            </div>
          ))}
          <div
            className={`flex min-w-[100px] justify-center items-center px-[10px] ${
              dropdownState["Live TV"].isHovered ? "bg-gray-800 text-white" : ""
            }`}
            onMouseEnter={() => handleHover("Live TV", true)}
            onMouseLeave={() => handleHover("Live TV", false)}
          >
            <div>Live TV</div>
          </div>
        </div>
        <div className="relative font-sans font-semibold text-20px leading-26.4px text-light-grey flex gap-[20px] items-center">
          <div
            className={` px-[10px] h-[64px] flex items-center ${
              dropdownState["search"].isHovered ? "bg-gray-800 text-white" : ""
            }`}
            onMouseEnter={() => handleHover("search", true)}
            onMouseLeave={() => handleHover("search", false)}
          >
            <Image src={search} alt="search" />
          </div>
          <div
            onMouseEnter={() => handleHover("tryForFree", true)}
            onMouseLeave={() => handleHover("tryForFree", false)}
            className={`min-w-[100px]  px-[10px] h-[64px] flex items-center justify-center ${
              dropdownState["tryForFree"].isHovered
                ? "bg-gray-800 text-white"
                : ""
            }`}
          >
            Try for free
          </div>
          {(["en"] as DropdownKey[]).map((key) => (
            <div
              key={key}
              className={`flex gap-[10px] relative min-w-[80px] justify-center items-center px-[10px] h-[64px]  ${
                dropdownState[key].isHovered ? "bg-gray-800 text-white" : ""
              }`}
              onMouseEnter={() => handleDropdown(key, true)}
              onMouseLeave={() => handleDropdown(key, false)}
            >
              <div>{key}</div>
              <Image
                src={dropdownState[key].isVisible ? noDetails : details}
                alt="details"
              />
              {renderDropdown(key)}
            </div>
          ))}
          <div
            className={`px-[10px] h-[64px] flex items-center ${
              dropdownState["profile"].isHovered ? "bg-gray-800 text-white" : ""
            }`}
            onMouseEnter={() => handleHover("profile", true)}
            onMouseLeave={() => handleHover("profile", false)}
          >
            <Image src={profile} alt="profile" className="h-[32px] w-[32px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
