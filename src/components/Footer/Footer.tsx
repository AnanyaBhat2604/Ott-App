import React from "react";
import Image from "next/image";
import Logo from "../../assets/icons/Logo.png";

const Footer = () => {
  return (
    <div className="bg-black text-white py-8 flex items-center flex-col gap-[12px]">
      <div>
        <Image src={Logo} alt="Logo" width={100} height={50} />{" "}
      </div>
      <div className="flex justify-center text-blue-500  gap-[20px]">
        <div>Terms and Privacy Notice</div>
        <div>Send us Feedback</div>
        <div>Help</div>
      </div>
      <div className="text-gray-500">
        © 1996-2024, Amazon.com, Inc. or its affiliates
      </div>
    </div>
  );
};

export default Footer;
