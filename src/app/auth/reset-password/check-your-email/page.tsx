import InfoUI from "@/containers/Auth/InfoUI/InfoUI";
import React from "react";

const page = () => {
  const email = "abcd@gmail.com";
  return (
    <div className="w-card-container">
      <InfoUI param={email} />
    </div>
  );
};

export default page;
