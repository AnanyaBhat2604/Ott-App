import React, { FC } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { constants } from "@/assets/constants/constants";
import strings from "@/assets/strings/strings.json";
import { frontendRoutes } from "@/assets/constants/frontend-routes";
import EmailSignup from "./EmailSignup";
import PhoneSignup from "./PhoneSignup";
import MoreOptions from "../MoreOptions";

const SignUpForm: FC = () => {
  const searchParams = useSearchParams();
  const signUpWithEmail = searchParams.get("email");

  return (
    <>
      <div className="text-lg font-bold">{strings.signUp}</div>
      <div className="flex flex-col items-center w-card-container">
        {signUpWithEmail === constants.TRUE ? <EmailSignup /> : <PhoneSignup />}
        <MoreOptions />
      </div>
      <div className="mt-[100px] text-sm ">
        <span className="opacity-70">{strings.alreadyHaveAnAccount}</span>{" "}
        <Link href={frontendRoutes.LOGIN} className="font-thick">
          {strings.signIn}
        </Link>
      </div>
    </>
  );
};

export default SignUpForm;
