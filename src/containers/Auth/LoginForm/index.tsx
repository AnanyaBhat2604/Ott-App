import React, { FC } from "react";
import { useSearchParams } from "next/navigation";
import { constants } from "@/assets/constants/constants";
import EmailLogin from "./EmailLogin";
import PhoneLogin from "./PhoneLogin";
import MoreOptions from "../MoreOptions";

const LoginForm: FC = () => {
  const searchParams = useSearchParams();
  const loginWithEmail = searchParams.get("email");

  return (
    <div className="flex flex-col items-center w-full">
      {loginWithEmail === constants.TRUE ? <EmailLogin /> : <PhoneLogin />}
      <MoreOptions />
    </div>
  );
};

export default LoginForm;
