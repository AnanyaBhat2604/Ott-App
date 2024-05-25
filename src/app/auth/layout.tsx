"use client";
import { useAuth } from "@/contexts/auth-context/authContext";
import AuthSkeleton from "@/package/SkeletonLoaders/AuthSkeleton";
import dynamic from "next/dynamic";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

const Children = dynamic(() => import("@/components/Children/Children"), {
  loading: () => <AuthSkeleton />,
  ssr: false,
});

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="auth-bg center-div">
      <div className="custom-card  z-[1] relative max-h-[90vh] overflow-y-auto scrollbar-custom">
        <Children childData={children} />
      </div>
    </div>
  );
};

export default Layout;
