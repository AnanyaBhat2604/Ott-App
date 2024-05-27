import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FooterProps, LinkItem } from "@/interfaces/interfaces";

const Footer = ({ data }: FooterProps) => {
  return (
    <div className="bg-black text-white py-8 flex items-center flex-col gap-[12px] pt-[150px]">
      <div>
        <Image
          src={data.logo.src}
          alt={data.logo.alt}
          width={100}
          height={50}
        />{" "}
      </div>
      <div className="flex justify-center text-blue-500  gap-[20px]">
        {data.links.map((item: LinkItem, i: number) => (
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
