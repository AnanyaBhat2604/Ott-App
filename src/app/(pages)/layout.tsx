"use client";
import dynamic from "next/dynamic";
import React from "react";

const Children = dynamic(() => import("../../components/Children/Children"), {
  loading: () => <h1>Loading...</h1>,
  ssr: false,
});

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Children childData={children} />
    </div>
  );
};

export default Layout;
