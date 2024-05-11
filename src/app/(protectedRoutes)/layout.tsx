"use client";

import { AuthProvider, useAuth } from "@/contexts/auth-context/authContext";
import React, { useEffect } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1>Hello</h1>
      {children}
    </div>
  );
};

export default Layout;
