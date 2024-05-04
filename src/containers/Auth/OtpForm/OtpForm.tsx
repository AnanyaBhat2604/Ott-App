import OtpRead from "@/components/OtpRead/OtpRead";
import React, { FC } from "react";

const OtpForm: FC = () => {
  const onChange = (data: any) => {
    console.log(data);
  };

  return (
    <form>
      <OtpRead onChange={onChange} />
    </form>
  );
};

export default OtpForm;
