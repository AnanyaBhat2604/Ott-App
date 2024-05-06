"use client";
import {
  frontendProtectedRoutes,
  frontendRoutes,
} from "@/assets/constants/frontend-routes";
import Snackbar from "@/components/Snackbar/Snackbar";
import { SnackbarProvider } from "@/contexts/snackbar-context/snackbar-context";
import { getRoutePermissions } from "@/utils/route-permissions";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (
      frontendProtectedRoutes.includes(pathname) &&
      !getRoutePermissions(pathname)
    ) {
      router.push(frontendRoutes.LOGIN);
    } else {
      setLoading(false);
    }
  }, [pathname, router]);

  return (
    <div className="auth-bg center-div">
      <SnackbarProvider>
        <div
          className={`custom-card  z-[1] relative max-h-[90vh] overflow-y-auto scrollbar-custom ${
            loading && "hidden"
          }`}
        >
          {!loading && children}
        </div>
        <Snackbar />
      </SnackbarProvider>
    </div>
  );
};

export default Layout;
