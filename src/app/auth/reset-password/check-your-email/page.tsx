import InfoUI from "@/containers/Auth/InfoUI/InfoUI";
import React from "react";

const page = () => {
  const email = "abcd@gmail.com";
  return (
    <div className="max-w-[520px]">
      <InfoUI param={email} />
    </div>
  );
};

export default page;
