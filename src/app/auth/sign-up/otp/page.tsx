"use client";
import React, { FC, useEffect, useState } from "react";
import strings from "@/assets/strings/strings.json";
import OtpForm from "@/containers/Auth/OtpForm/OtpForm";
import Timer from "@/components/Timer/Timer";
import { getData } from "@/services/storage/storage";
import { OtpObject } from "@/interfaces/interfaces";

const OtpPage: FC = () => {
  const [otpData, setOtpData] = useState<OtpObject>({
    type: "",
    destination: "",
    targetTimeStamp: new Date(),
  });

  useEffect(() => {
    const data = getData("otpData");
    if (data as OtpObject) {
      setOtpData(data as OtpObject);
    }
  }, []);

  return (
    <div className="flex flex-col text-white items-center">
      <div className="text-lg font-bold">{strings.signUp}</div>
      <div className="font-medium text-[20px] leading-tight mt-[40px]">
        {strings.verification}
      </div>
      <div className="text-sm pt-[10px]  text-light-grey">
        {strings.codeSentMessage} {otpData?.destination || ""}
      </div>
      <OtpForm />
      <div className="mt-[100px] flex gap-[4px] text-gray ">
        {strings.resendOtp}
        <Timer targetDate={otpData.targetTimeStamp} />
      </div>
    </div>
  );
};
export default OtpPage;
