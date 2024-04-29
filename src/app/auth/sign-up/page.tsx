"use client";

import React, { FC } from "react";
import strings from "@/assets/strings/strings.json";
import Link from "next/link";
import { frontendRoutes } from "@/assets/constants/frontend-routes";
import SignUpForm from "@/containers/Auth/SignUpForm/SignUpForm";

const SignUp: FC = () => {
  return (
    <div className="flex flex-col text-white items-center">
      <div className="text-lg font-bold">{strings.signUp}</div>
      <SignUpForm />
      <div className="mt-[100px] text-sm ">
        <span className="opacity-70">{strings.alreadyHaveAnAccount}</span>{" "}
        <Link href={frontendRoutes.LOGIN} className="font-thick">
          {strings.signIn}
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
