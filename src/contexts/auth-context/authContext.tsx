"use client";
import { apiEndpoints } from "@/assets/constants/api-endpoints";
import { apiMethods, constants } from "@/assets/constants/constants";
import {
  authRoutes,
  frontendRoutes,
  openRoutes,
} from "@/assets/constants/frontend-routes";
import { request } from "@/services/api";
import { getData, removeData } from "@/services/storage/storage";
import { redirect, usePathname, useRouter } from "next/navigation";
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface AuthContextType {
  isLoggedIn: boolean;
  login: () => void;
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

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    const token = getData("token");

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    setIsLoggedIn(false);

    request(apiEndpoints.logout, apiMethods.GET, headers)
      .then((data: any) => {
        if (data.resultInfo.code === constants.SUCCCESS) {
          removeData("token");
          window.location.reload;
        }
      })
      .catch((error) => {})
      .finally(() => {});
  };

  const pathname = usePathname();

  useEffect(() => {
    const token = getData("token");
    console.log(token);
    if (token) {
      setIsLoggedIn(true);
      if (authRoutes.includes(pathname)) {
        return redirect(frontendRoutes.DASHBOARD);
      }
    } else {
      setIsLoggedIn(false);
      if (!openRoutes.includes(pathname)) {
        return redirect(frontendRoutes.LOGIN);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
