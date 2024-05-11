"use client";
import React, { FC } from "react";
import dynamic from "next/dynamic";
import AuthSkeleton from "@/containers/SkeletonLoaders/AuthSkeleton";

const OtpForm = dynamic(() => import("@/containers/Auth/OtpForm/OtpForm"), {
  loading: () => <AuthSkeleton />,
  ssr: false,
});

const OtpPage: FC = () => {
  return (
    <div className="flex flex-col text-white items-center">
      <OtpForm />
    </div>
  );
};
export default OtpPage;
