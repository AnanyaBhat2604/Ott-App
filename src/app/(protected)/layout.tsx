"use client";

import { frontendRoutes } from "@/assets/constants/frontend-routes";
import { useAuth } from "@/contexts/auth-context/authContext";
import dynamic from "next/dynamic";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

const Children = dynamic(() => import("../../components/Children/Children"), {
  loading: () => <h1>Loading...</h1>,
  ssr: false,
});

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { isLoggedIn } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!isLoggedIn) {
      return router.replace(
        `${frontendRoutes.LOGIN}?redirect=${encodeURIComponent(pathname)}`
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  return (
    <div>
      <Children childData={children} />
    </div>
  );
};

export default Layout;
