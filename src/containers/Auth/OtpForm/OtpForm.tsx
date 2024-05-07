import { constants } from "@/assets/constants/constants";
import OtpRead from "@/components/OtpRead/OtpRead";
import React, { FC } from "react";

const OtpForm: FC<{ onOtpSubmit: (otp: string) => void }> = ({
  onOtpSubmit,
}) => {
  const onChange = (data: any) => {
    if (data.otp.length === constants.OTP_LENGTH) {
      onOtpSubmit(data.otp);
    }
  };

  return (
    <form>
      <OtpRead onChange={onChange} />
    </form>
  );
};

export default OtpForm;
