import AuthSkeleton from "@/package/SkeletonLoaders/AuthSkeleton";
import dynamic from "next/dynamic";
import React from "react";

const InfoUI = dynamic(() => import("@/package/Auth/InfoUI/InfoUI"), {
  loading: () => <AuthSkeleton />,
});

const page = () => {
  const email = "abcd@gmail.com";
  return (
    <div className="w-card-container">
      <InfoUI param={email} />
    </div>
  );
};

export default page;
