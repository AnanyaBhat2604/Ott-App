import React from "react";
import Image from "next/image";
import Logo from "../../assets/icons/logo.png";
import strings from "@/assets/strings/strings.json";
import Link from "next/link";

const Footer = ({ data }: any) => {
  return (
    <div className="bg-black text-white py-8 flex items-center flex-col gap-[12px] pt-[150px]">
      <div>
        <Image
          src={data.logo.src}
          alt={data.logo.alt}
          width={0}
          height={0}
          className="w-auto max-h-[50px]"
        />{" "}
      </div>
      <div className="flex justify-center text-blue-500  gap-[20px]">
        {data.links.map((item: any, i: number) => (
          <Link href={item.link} key={i}>
            {item.name}
          </Link>
        ))}
      </div>
      <div className="text-gray-500">{data?.copyright?.text}</div>
    </div>
  );
};

export default Footer;
