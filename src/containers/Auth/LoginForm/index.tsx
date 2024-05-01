import React, { FC } from "react";
import { useSearchParams } from "next/navigation";
import { constants } from "@/assets/constants/constants";
import EmailLogin from "./EmailLogin";
import PhoneLogin from "./PhoneLogin";

const LoginForm: FC = () => {
  const searchParams = useSearchParams();
  const loginWithEmail = searchParams.get("email");

  return (
    <div>
      {loginWithEmail === constants.TRUE ? <EmailLogin /> : <PhoneLogin />}
    </div>
  );
};

export default LoginForm;
