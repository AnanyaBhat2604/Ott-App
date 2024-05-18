"use client";

import React, { FC } from "react";
import dynamic from "next/dynamic";
import AuthSkeleton from "@/package/SkeletonLoaders/AuthSkeleton";

const SignUpForm = dynamic(() => import("@/package/Auth/SignUpForm"), {
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
