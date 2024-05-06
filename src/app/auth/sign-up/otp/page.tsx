"use client";

import React, { FC } from "react";
import strings from "@/assets/strings/strings.json";
import OtpForm from "@/containers/Auth/OtpForm/OtpForm";
import Timer from "@/components/Timer/Timer";

const OtpPage: FC = () => {
  return (
    <div className="flex flex-col text-white items-center">
      <div className="text-lg font-bold">{strings.signUp}</div>
      <div className="font-medium text-[20px] leading-tight mt-[40px]">
        {strings.verification}
      </div>
      <div className="text-sm pt-[10px]  text-light-grey">
        {strings.codeSentMessage}9099999999
      </div>
      <OtpForm />
      <div className="mt-[100px] flex gap-[4px] text-gray ">
        {strings.resendOtp}
        <Timer targetDate={new Date("2024-05-06T14:59:00+05:30")} />
      </div>
    </div>
  );
};
export default OtpPage;
