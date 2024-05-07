"use client";
import React, { FC, useEffect, useState } from "react";
import strings from "@/assets/strings/strings.json";
import OtpForm from "@/containers/Auth/OtpForm/OtpForm";
import Timer from "@/components/Timer/Timer";
import { getData } from "@/services/storage/storage";
import { OtpObject } from "@/interfaces/interfaces";
import { apiConstants, constants } from "@/assets/constants/constants";
import { post } from "@/services/api/requests";
import { apiEndpoints } from "@/assets/constants/api-endpoints";
import { frontendRoutes } from "@/assets/constants/frontend-routes";
import { useRouter } from "next/navigation";
import { useSnackbar } from "@/contexts/snackbar-context/snackbar-context";

const OtpPage: FC = () => {
  const [otpData, setOtpData] = useState<OtpObject>({
    type: "",
    destination: "",
    targetTimeStamp: new Date(),
  });

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const { openSnackbar } = useSnackbar();

  useEffect(() => {
    const data = getData("otpData");
    if (data as OtpObject) {
      setOtpData(data as OtpObject);
    }
  }, []);

  const onOtpSubmit = (otp: string): void => {
    const submitData = {
      mode: apiConstants.OTP,
      [otpData.type === apiConstants.EMAIL ? "email" : "mobileNumber"]:
        otpData.destination,
      otp: otp,
    };

    setLoading(true);
    post(apiEndpoints.register, submitData)
      .then((data: any) => {
        if (data.resultInfo.code === constants.SUCCCESS) {
          router.push(frontendRoutes.DASHBOARD);
        }
      })
      .catch((error) => {
        openSnackbar(error.message, "error");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="flex flex-col text-white items-center">
      <div className="text-lg font-bold">{strings.signUp}</div>
      <div className="font-medium text-[20px] leading-tight mt-[40px]">
        {strings.verification}
      </div>
      <div className="text-sm pt-[10px]  text-light-grey">
        {strings.codeSentMessage} {otpData?.destination || ""}
      </div>
      <OtpForm onOtpSubmit={onOtpSubmit} />
      <div className="mt-[100px] flex gap-[4px] text-gray ">
        {strings.resendOtp}
        <Timer targetDate={otpData.targetTimeStamp} />
      </div>
      {loading && "Loading..."}
    </div>
  );
};
export default OtpPage;
