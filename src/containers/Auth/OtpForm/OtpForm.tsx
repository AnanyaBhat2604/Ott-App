import OtpRead from "@/components/OtpRead/OtpRead";
import React, { FC } from "react";

const OtpForm: FC = () => {
  const onChange = (data: any) => {};

  return (
    <form>
      <OtpRead onChange={onChange} />
    </form>
  );
};

export default OtpForm;
