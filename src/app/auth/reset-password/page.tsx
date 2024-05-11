"use client";

import AuthSkeleton from "@/containers/SkeletonLoaders/AuthSkeleton";
import dynamic from "next/dynamic";
import React, { FC } from "react";

const PasswordAssistanceForm = dynamic(
  () =>
    import("@/containers/Auth/PasswordAssistanceForm/PasswordAssistanceForm"),
  {
    loading: () => <AuthSkeleton />,
  }
);

const ResetPassword: FC = () => {
  return (
    <>
      <PasswordAssistanceForm />
    </>
  );
};
export default ResetPassword;
