"use client";
import Snackbar from "@/components/Snackbar/Snackbar";
import { SnackbarProvider } from "@/contexts/snackbar-context/snackbar-context";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="auth-bg center-div">
      <SnackbarProvider>
        <div className="custom-card  z-[1] relative max-h-[90vh] overflow-y-auto scrollbar-custom">
          {children}
        </div>
        <Snackbar />
      </SnackbarProvider>
    </div>
  );
};

export default Layout;
