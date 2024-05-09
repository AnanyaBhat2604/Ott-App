"use client";

import React, { FC } from "react";
import strings from "@/assets/strings/strings.json";
import PasswordForm from "@/containers/Auth/PasswordForm/index";

const page: FC = () => {
  return (
    <div className="flex flex-col text-white items-center ">
      <div className="text-lg font-bold">{strings.createNewPassword}</div>
      <div className="text-sm pt-[10px]">{strings.askForthisPassword}</div>
      <div className="w-card-container">
        <PasswordForm />
      </div>
    </div>
  );
};

export default page;
