"use client";

import React, { FC } from "react";
import strings from "@/assets/strings/strings.json";
import PasswordForm from "@/containers/Auth/PasswordForm/index";

const page: FC = () => {
  return (
    <div className="flex flex-col text-white items-center ">
      <PasswordForm />
    </div>
  );
};

export default page;
