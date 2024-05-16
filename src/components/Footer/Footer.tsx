import React from "react";
import Image from "next/image";
import Logo from "../../assets/icons/logo.png";
import strings from "@/assets/strings/strings.json";

const Footer = () => {
  return (
    <div className="bg-black text-white py-8 flex items-center flex-col gap-[12px] pt-[150px]">
      <div>
        <Image src={Logo} alt="Logo" width={100} height={50} />{" "}
      </div>
      <div className="flex justify-center text-blue-500  gap-[20px]">
        <div>{strings.terms}</div>
        <div>{strings.feedback}</div>
        <div>{strings.help}</div>
      </div>
      <div className="text-gray-500">{strings.copyright}</div>
    </div>
  );
};

export default Footer;
