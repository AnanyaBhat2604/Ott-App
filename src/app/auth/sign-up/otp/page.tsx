import React, { FC } from "react";
import strings from "@/assets/strings/strings.json";
import OtpRead from "@/components/OtpRead/OtpRead";

const OtpPage: FC = () => {
  return (
    <div className="flex flex-col text-white items-center ">
      <div className="text-lg font-bold">{strings.signUp}</div>
      <div className="font-medium text-[20px] leading-tight">
        {strings.verification}
      </div>
      <div className="text-sm pt-[10px]">{strings.codeSentMessage}</div>
      <OtpRead />
    </div>
  );
};
export default OtpPage;
