import React, { FC, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSnackbar } from "@/contexts/snackbar-context/snackbar-context";
import { getData } from "@/services/storage/storage";
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
    const submitData = {
      mode: apiConstants.PASSWORD,
      [otpData.type === apiConstants.EMAIL ? "email" : "mobileNumber"]:
        otpData.destination,
      otp: otp,
      password: otpData.password,
    };

    setLoading(true);
    request(apiEndpoints.register, apiMethods.POST, {}, submitData)
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
