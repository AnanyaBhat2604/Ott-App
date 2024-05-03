"use client";
import { useState } from "react";
import OtpInput from "react-otp-input";

const OtpRead = () => {
  const [otp, setOtp] = useState("");
  return (
    <div className="pt-[20px]">
      <OtpInput
        value={otp}
        onChange={setOtp}
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
