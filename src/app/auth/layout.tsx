"use client";
import {
  frontendProtectedRoutes,
  frontendRoutes,
} from "@/assets/constants/frontend-routes";
import SkeletonLoader from "@/components/SkeletonLoader/SkeletonLoader";
import Snackbar from "@/components/Snackbar/Snackbar";
import AuthSkeleton from "@/containers/SkeletonLoaders/AuthSkeleton";
import { SnackbarProvider } from "@/contexts/snackbar-context/snackbar-context";
import { getRoutePermissions } from "@/utils/route-permissions";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  const isBlocked =
    frontendProtectedRoutes.includes(pathname) &&
    !getRoutePermissions(pathname);

  useEffect(() => {
    if (isBlocked) {
      router.push(frontendRoutes.LOGIN);
    }

    setMounted(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="auth-bg center-div">
      <SnackbarProvider>
        <div className="custom-card  z-[1] relative max-h-[90vh] overflow-y-auto scrollbar-custom">
          {!isBlocked && mounted ? children : <AuthSkeleton />}
        </div>
        <Snackbar />
      </SnackbarProvider>
    </div>
  );
};

export default Layout;
