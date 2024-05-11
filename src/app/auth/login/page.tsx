"use client";

import React, { FC } from "react";
import dynamic from "next/dynamic";
import AuthSkeleton from "@/containers/SkeletonLoaders/AuthSkeleton";
const LoginForm = dynamic(() => import("@/containers/Auth/LoginForm"), {
  loading: () => <AuthSkeleton />,
});

const Login: FC = () => {
  return (
    <div className="flex flex-col text-white items-center w-card-container">
      <LoginForm />
    </div>
  );
};

export default Login;
