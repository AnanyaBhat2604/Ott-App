"use client";

import { AuthProvider } from "@/contexts/auth-context/authContext";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default Layout;
