"use client";

import React, { FC } from "react";
import strings from "@/assets/strings/strings.json";
import BackArrow from "@/assets/icons/arrow-left.svg";
import Image from "next/image";
import Link from "next/link";
import { frontendRoutes } from "@/assets/constants/frontend-routes";
import PasswordAssistanceForm from "@/containers/Auth/PasswordAssistanceForm/PasswordAssistanceForm";

const ResetPassword: FC = () => {
  return (
    <div className="flex flex-col text-white items-center py-[70px]">
      <Link
        href={frontendRoutes.LOGIN}
        className="float-left flex gap-[4px] absolute top-[40px] left-[40px]"
      >
        <Image src={BackArrow} alt="" />
        <span className="text-gray text-sm">{strings.back}</span>
      </Link>
      <div className="text-lg font-bold">{strings.passwordAssistance}</div>
      <div className="text-sm pt-[10px] max-w-[520px] text-center">
        {strings.passwordAssistanceInfo}
      </div>
      <PasswordAssistanceForm />
    </div>
  );
};
export default ResetPassword;
