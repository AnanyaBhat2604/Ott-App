import React, { FC } from "react";
import { useSearchParams } from "next/navigation";
import { constants } from "@/assets/constants/constants";
import EmailSignup from "./EmailSignup";
import PhoneSignup from "./PhoneSignup";
import MoreOptions from "../MoreOptions";

const SignUpForm: FC = () => {
  const searchParams = useSearchParams();
  const signUpWithEmail = searchParams.get("email");

  return (
    <div className="flex flex-col items-center w-card-container">
      {signUpWithEmail === constants.TRUE ? <EmailSignup /> : <PhoneSignup />}
      <MoreOptions />
    </div>
  );
};

export default SignUpForm;
