"use client";
import { constants } from "@/assets/constants/constants";
import {
  frontendProtectedRoutes,
  frontendRoutes,
} from "@/assets/constants/frontend-routes";
import { useAuth } from "@/contexts/auth-context/authContext";
import AuthSkeleton from "@/package/SkeletonLoaders/AuthSkeleton";
import { getCookie } from "@/services/cookieService/cookies";
import {
  deleteAllRoutePermissions,
  getRoutePermissions,
} from "@/utils/route-permissions";
import dynamic from "next/dynamic";
import {
  redirect,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import React, { useEffect } from "react";

const Children = dynamic(() => import("@/components/Children/Children"), {
  loading: () => <AuthSkeleton />,
  ssr: false,
});

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname: string = usePathname();
  const router = useRouter();

  const { isLoggedIn } = useAuth();

  const searchParams = useSearchParams();
  const redirectPath = searchParams.get("redirect");

  const isBlocked = () =>
    frontendProtectedRoutes.includes(pathname) &&
    !getRoutePermissions(pathname);

  useEffect(() => {
    if (isBlocked()) {
      router.push(frontendRoutes.LOGIN);
    }
    deleteRoutePermissions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const deleteRoutePermissions = () => {
    //Delete route permission on user exit from that page
    const routePermissions: string[] =
      getCookie(constants.ROUTE_PERMISSIONS) || [];

    if (!routePermissions.includes(pathname)) {
      deleteAllRoutePermissions();
      isBlocked();
    }
  };

  return (
    <div className="auth-bg center-div">
      <div className="custom-card  z-[1] relative max-h-[90vh] overflow-y-auto scrollbar-custom">
        <Children childData={children} />
      </div>
    </div>
  );
};

export default Layout;
