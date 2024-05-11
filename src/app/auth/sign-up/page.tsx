"use client";

import React, { FC } from "react";
import dynamic from "next/dynamic";
import AuthSkeleton from "@/containers/SkeletonLoaders/AuthSkeleton";

const SignUpForm = dynamic(() => import("@/containers/Auth/SignUpForm"), {
  loading: () => <AuthSkeleton />,
});

const SignUp: FC = () => {
  return (
    <div className="flex flex-col text-white items-center">
      <SignUpForm />
    </div>
  );
};

export default SignUp;
