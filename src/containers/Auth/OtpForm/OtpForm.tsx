import React, { FC, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSnackbar } from "@/contexts/snackbar-context/snackbar-context";
import { getData, removeData, setData } from "@/services/storage/storage";
import { request } from "@/services/api";
import OtpRead from "@/components/OtpRead/OtpRead";
import Timer from "@/components/Timer/Timer";
import strings from "@/assets/strings/strings.json";
import { OtpObject } from "@/interfaces/interfaces";
import {
  apiConstants,
  apiMethods,
  constants,
} from "@/assets/constants/constants";
import { apiEndpoints } from "@/assets/constants/api-endpoints";
import { frontendRoutes } from "@/assets/constants/frontend-routes";

const OtpForm: FC = () => {
  const [otpData, setOtpData] = useState<OtpObject>({
    type: "",
    destination: "",
    targetTimeStamp: new Date(),
    password: "",
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
    const submitData =
      otpData.type === apiConstants.EMAIL
        ? {
            mode: apiConstants.PASSWORD,
            email: otpData.destination,
            otp: otp,
            password: otpData.password,
          }
        : {
            mode: apiConstants.OTP,
            mobileNumber: otpData.destination,
            otp: otp,
          };

    setLoading(true);
    request(
      otpData.type === apiConstants.EMAIL
        ? apiEndpoints.register
        : apiEndpoints.otpLogin,
      apiMethods.POST,
      {},
      submitData
    )
      .then((data: any) => {
        if (data.resultInfo.code === constants.SUCCCESS) {
          if (otpData.type === apiConstants.SMS) {
            removeData("otpData");
            setData("token", data?.data?.tokenInfo?.token);
            setData("refreshToken", data?.data?.tokenInfo?.refreshToken);
            router.push(frontendRoutes.DASHBOARD);
          } else {
            removeData("otpData");
            router.push(frontendRoutes.LOGIN);
          }
        }
      })
      .catch((error) => {
        openSnackbar(error.message, "error");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onChange = (data: any) => {
    if (data.otp.length === constants.OTP_LENGTH) {
      onOtpSubmit(data.otp);
    }
  };

  return (
    <>
      <div className="text-sm pt-[10px]  text-light-grey">
        {strings.codeSentMessage} {otpData?.destination || ""}
      </div>

      <form className="w-card-container">
        <OtpRead onChange={onChange} />
      </form>

      <div className="mt-[100px] flex gap-[4px] text-gray ">
        {strings.resendOtp}
        <Timer targetDate={otpData.targetTimeStamp} />
      </div>
    </>
  );
};

export default OtpForm;
