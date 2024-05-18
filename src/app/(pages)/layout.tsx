// "use client";
import Header from "@/components/Header/Header";
import FooterBlock from "@/package/FooterBlock/FooterBlock";
import dynamic from "next/dynamic";
import React from "react";

const Children = dynamic(() => import("../../components/Children/Children"), {
  loading: () => <h1>Loading...</h1>,
  ssr: false,
});

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <Children childData={children} />
      <FooterBlock />
    </div>
  );
};

export default Layout;
