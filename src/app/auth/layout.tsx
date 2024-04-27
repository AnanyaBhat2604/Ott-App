import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="auth-bg center-div">
      <div className="custom-card  z-[1] relative max-h-[90vh] overflow-y-auto scrollbar-custom">
        {children}
      </div>
    </div>
  );
};

export default Layout;
