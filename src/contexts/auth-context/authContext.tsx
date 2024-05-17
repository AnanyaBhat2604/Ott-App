"use client";
import { apiEndpoints } from "@/assets/constants/api-endpoints";
import { apiMethods, constants } from "@/assets/constants/constants";
import {
  authRoutes,
  frontendRoutes,
  openRoutes,
} from "@/assets/constants/frontend-routes";
import strings from "@/assets/strings/strings.json";
import { request } from "@/services/api";
import { getData, removeData, setData } from "@/services/storage/storage";
import {
  redirect,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useSnackbar } from "../snackbar-context/snackbar-context";

interface AuthContextType {
  isLoggedIn: boolean;
  login: (token: string, refreshToken: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const router = useRouter();
  const { openSnackbar } = useSnackbar();

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const login = (token: string, refreshToken: string) => {
    setIsLoggedIn(true);
    setData("token", { token: token, auth: true });
    setData("refreshToken", refreshToken);
    router.push(frontendRoutes.DASHBOARD);
  };

  const logout = () => {
    const tokenData: { token: string; auth: boolean } = getData("token") || {
      token: "",
      auth: false,
    };
    const token = tokenData?.token;

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    setIsLoggedIn(false);

    request(apiEndpoints.logout, apiMethods.GET, headers)
      .then((data: any) => {
        if (data.resultInfo.code === constants.SUCCCESS) {
          removeData("token");
          redirect(frontendRoutes.LOGIN);
        }
      })
      .catch((error) => {
        openSnackbar(error.message || strings.logoutFailed, "error");
      })
      .finally(() => {});
  };

  useEffect(() => {
    const tokenData: { token: string; auth: boolean } = getData("token") || {
      token: "",
      auth: false,
    };

    const redirectPath = searchParams.get("redirect");

    console.log("redirectPath", redirectPath);

    if (tokenData?.token && tokenData?.auth) {
      setIsLoggedIn(true);
      if (authRoutes.includes(pathname)) {
        return redirect(redirectPath ? redirectPath : frontendRoutes.DASHBOARD);
      }
    } else {
      setIsLoggedIn(false);
      if (!openRoutes.includes(pathname)) {
        return redirect(`${frontendRoutes.LOGIN}?redirect=${pathname}`);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
