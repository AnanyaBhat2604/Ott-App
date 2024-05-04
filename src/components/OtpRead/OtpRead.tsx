"use client";
import { FC, useState } from "react";
import OtpInput from "react-otp-input";

const OtpRead: FC<{ onChange: (data: { [key: string]: string }) => void }> = ({
  onChange,
}) => {
  const [otp, setOtp] = useState("");
  return (
    <div className="pt-[20px]">
      <OtpInput
        value={otp}
        onChange={(data) => {
          setOtp(data);
          onChange({ otp: data });
        }}
        numInputs={4}
        renderSeparator={<span> </span>}
        renderInput={(props) => <input {...props} />}
        inputStyle={
          "!w-[80px] !h-[80px] bg-black rounded-[5px] border border-gray-500"
        }
        containerStyle={"gap-[10px]"}
      />
    </div>
  );
};

export default OtpRead;
