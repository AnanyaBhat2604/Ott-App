"use client";

import React, { FC } from "react";
import Link from "next/link";
import { frontendRoutes } from "@/assets/constants/frontend-routes";
// import LoginForm from "@/containers/Auth/LoginForm";
import dynamic from "next/dynamic";
import AuthSkeleton from "@/containers/SkeletonLoaders/AuthSkeleton";
const LoginForm = dynamic(() => import("@/containers/Auth/LoginForm"), {
  loading: () => <AuthSkeleton />,
  // ssr: false,
});

const Login: FC = () => {
  return (
    <div className="flex flex-col text-white items-center w-card-container">
      <LoginForm />
    </div>
  );
};

export default Login;
