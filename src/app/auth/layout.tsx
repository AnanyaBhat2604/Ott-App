"use client";
import {
  frontendProtectedRoutes,
  frontendRoutes,
} from "@/assets/constants/frontend-routes";
import Snackbar from "@/components/Snackbar/Snackbar";
import { SnackbarProvider } from "@/contexts/snackbar-context/snackbar-context";
import { getRoutePermissions } from "@/utils/route-permissions";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const router = useRouter();

  const isBlocked =
    frontendProtectedRoutes.includes(pathname) &&
    !getRoutePermissions(pathname);

  useEffect(() => {
    if (isBlocked) {
      router.push(frontendRoutes.LOGIN);
    }
  }, [isBlocked, router]);

  return (
    <div className="auth-bg center-div">
      <SnackbarProvider>
        <div className="custom-card  z-[1] relative max-h-[90vh] overflow-y-auto scrollbar-custom">
          {!isBlocked && children}
        </div>
        <Snackbar />
      </SnackbarProvider>
    </div>
  );
};

export default Layout;
