"use client";

import { useSearchParams } from "next/navigation";
import countryCodes from "@/assets/data/country-codes.json";

import React from "react";
import { constants } from "@/assets/constants/constants";
import strings from "@/assets/strings/strings.json";
import ButtonComponent from "@/components/ButtonComponent/ButtonComponent";
import Link from "next/link";
import InputComponent from "@/components/InputComponent/InputComponent";
import { InputWithDropDown } from "@/interfaces/componentTypes";
import InputWithDropdown from "@/components/InputWithDropdown/InputWithDropdown";

const SignUp = () => {
  const searchParams = useSearchParams();
  const signUpWithEmail = searchParams.get("email");

  const onSubmit = (event: any) => {
    event.preventDefault();
    alert("Button clicked");
  };

  const renderSignUpWithEmail = () => {
    const onInputChange = (data: any) => {
      console.log("Inputdata", data);
    };

    return (
      <>
        <div className="flex justify-between gap-3 pt-[40px] opacity-70 items-center w-full">
          <div className="text-sm font-semibold">{strings.email}</div>
          <Link href={"/auth/sign-up"} className="text-xs font-normal">
            {strings.signInWithPhoneNumber}
          </Link>
        </div>
        <div className="pt-[8px]">
          <InputComponent
            placeholder={strings.email}
            name={"email"}
            onChange={onInputChange}
          />
        </div>
      </>
    );
  };

  const renderSignUpWithPhone = () => {
    const onInputChange = (data: { [key: string]: InputWithDropDown }) => {
      console.log("object:", data);
    };

    return (
      <>
        <div className="flex justify-between gap-3 pt-[40px] opacity-70 items-center w-full">
          <div className="text-sm font-semibold">{strings.phone}</div>
          <Link
            href={"/auth/sign-up?email=true"}
            className="text-xs font-normal"
          >
            {strings.signUpWithEmail}
          </Link>
        </div>
        <div className="pt-[8px]">
          <InputWithDropdown
            dropdownArray={countryCodes}
            defaultDropdownValue={countryCodes[0].value}
            onChange={onInputChange}
            error={""}
            placeholderName={strings.phoneNumber}
            inputType={"number"}
            name={"phone"}
          />
        </div>
        <div className="pt-[16px]">
          <InputComponent
            placeholder={strings.password}
            name={"password"}
            onChange={onInputChange}
            type="password"
          />
        </div>
      </>
    );
  };

  return (
    <form className="flex flex-col text-white items-center" onSubmit={onSubmit}>
      <div className="text-lg font-bold">{strings.signUp}</div>
      {signUpWithEmail === constants.TRUE
        ? renderSignUpWithEmail()
        : renderSignUpWithPhone()}
      <div className="w-full mt-[24px]">
        <ButtonComponent name={strings.continue} type="submit" />
      </div>
      <div className="mt-[100px] text-sm ">
        <span className="opacity-70">{strings.alreadyHaveAnAccount}</span>{" "}
        <Link href={"/auth/login"} className="font-thick">
          {strings.signIn}
        </Link>
      </div>
    </form>
  );
};

export default SignUp;
