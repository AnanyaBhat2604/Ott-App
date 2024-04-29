"use client";

import React, { FC } from "react";
import Link from "next/link";
import strings from "@/assets/strings/strings.json";
import { frontendRoutes } from "@/assets/constants/frontend-routes";
import LoginForm from "@/containers/Auth/LoginForm/LoginForm";

const Login: FC = () => {
  return (
    <div className="flex flex-col text-white items-center">
      <div className="text-lg font-bold">{strings.login}</div>
      <LoginForm />
      <div className="mt-[100px] text-sm ">
        <span className="opacity-70">{strings.dontHaveAccount}</span>{" "}
        <Link href={frontendRoutes.SIGN_UP} className="font-thick">
          {strings.signUp}
        </Link>
      </div>
    </div>
  );
};

export default Login;
