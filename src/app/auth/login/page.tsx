"use client";

import React, { FC } from "react";
import dynamic from "next/dynamic";
import AuthSkeleton from "@/package/SkeletonLoaders/AuthSkeleton";

const LoginForm = dynamic(() => import("@/package/Auth/LoginForm"), {
  loading: () => <AuthSkeleton />,
});

const Login: FC = () => {
  return (
    <div className="flex flex-col text-white items-center h-full">
      <LoginForm />
    </div>
  );
};

export default Login;
