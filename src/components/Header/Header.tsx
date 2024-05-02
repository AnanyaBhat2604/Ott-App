"use client";

import { useState } from "react";
import Image from "next/image";
import noDetails from "../../assets/icons/arrow-up.svg";
import details from "../../assets/icons/arrow-down.svg";
import search from "../../assets/icons/search.svg";
import profile from "../../assets/icons/profile.svg";
import menu from "@/assets/data/menu.json";
import strings from "@/assets/strings/strings.json";
import language from "@/assets/data/language.json";
import { constants } from "@/assets/constants/constants";
import { MenuItem, SubMenuOption } from "../../interfaces/interfaces";
import Logo from "../Logo/logo";

const Header = () => {
  const [dropdown, setDropdown] = useState("");

  const renderDropdown = (
    name: string,
    subMenu: SubMenuOption[],
    fullscreen?: boolean
  ) => {
    return (
      dropdown === name && (
        <div
          className={[
            "absolute  top-full bg-dark-grey text-light-grey  h-max w-max right-0 min-w-[120px] ",
            fullscreen &&
              "left-0 w-full grid grid-cols-4 gap-[10px] px-[70px] py-[20px]",
          ].join(",")}
        >
          {subMenu.map((option: any, index: number) => {
            return (
              <div key={index} className="mx-[20px] py-[10px]">
                {option.name}
              </div>
            );
          })}
        </div>
      )
    );
  };

  return (
    <div className="bg-black">
      <div className="container mx-auto flex gap-[50px] justify-between items-center relative">
        <Logo />
        <div className="relative font-sans font-semibold text-20px leading-26.4px text-light-grey flex gap-[10px]">
          {menu.map((item, i) => (
            <div
              key={i}
              className={`flex gap-[10px] relative min-w-[100px] justify-center items-center px-[10px] h-[64px] ${
                item.name === dropdown ? "bg-gray-800 text-white" : ""
              }`}
              onMouseEnter={() => {
                if (item.name !== dropdown) {
                  setDropdown(item.name);
                }
              }}
              onMouseLeave={() => {
                setDropdown("");
              }}
            >
              <div>{item.name}</div>
              {item?.options?.length > 0 && (
                <Image
                  src={item.name === dropdown ? noDetails : details}
                  alt="details"
                  className="w-[30px]"
                />
              )}
              {renderDropdown(item.name, item.options)}
            </div>
          ))}
        </div>

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
            onMouseEnter={() => {
              if (constants.TRYFORFREE !== dropdown) {
                setDropdown(constants.TRYFORFREE);
              }
            }}
            onMouseLeave={() => {
              setDropdown("");
            }}
            className={`min-w-[100px]  px-[10px] h-[64px] flex items-center justify-center ${
              constants.TRYFORFREE === dropdown ? "bg-gray-800 text-white" : ""
            }`}
          >
            {strings.tryForFree}
          </div>

          <div
            className={`flex gap-[10px]  min-w-[80px] justify-center items-center px-[10px] h-[64px]  ${
              constants.EN === dropdown ? "bg-gray-800 text-white" : ""
            }`}
            onMouseEnter={() => {
              if (constants.EN !== dropdown) {
                setDropdown(constants.EN);
              }
            }}
            onMouseLeave={() => {
              setDropdown("");
            }}
          >
            <div>{strings.en}</div>
            <Image
              src={constants.EN === dropdown ? noDetails : details}
              alt="details"
            />
            {renderDropdown(constants.EN, language, true)}
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
            {renderDropdown(constants.PROFILE, [
              {
                name: "Sign In",
              },
              {
                name: "Help",
              },
              {
                name: "Watch Anywhere",
              },
            ])}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
