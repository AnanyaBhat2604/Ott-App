"use client";
import dynamic from "next/dynamic";
import React from "react";

const Children = dynamic(() => import("../../components/Children/Children"), {
  loading: () => <h1>Loading...</h1>,
  ssr: false,
});

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <Children childData={children} />;
};

export default Layout;
