"use client";

import React, { useEffect, useRef, useState } from "react";
import strings from "@/assets/strings/strings.json";
import InputWithDropdown from "@/components/InputWithDropdown/InputWithDropdown";
import countryCodes from "@/assets/data/country-codes.json";
import ButtonComponent from "@/components/ButtonComponent/ButtonComponent";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { constants } from "@/assets/constants/constants";
import InputComponent from "@/components/InputComponent/InputComponent";
import { frontendRoutes } from "@/assets/constants/frontend-routes";

const Login = () => {
  const formRef = useRef(null);

  const searchParams = useSearchParams();
  const loginWithEmail = searchParams.get("email");

  const [formData, setFormData] = useState<any>({
    ...(loginWithEmail ? { email: "" } : { phone: "" }),
  });

  const [errorFields, setErrorFields] = useState<any>({
    ...(loginWithEmail ? { email: "" } : { phone: "" }),
  });

  const onSubmit = (event: any) => {
    event.preventDefault();
  };

  const onInputChange = (data: any, hasError: string) => {
    const removeField = (fields: any) => {
      const nextState = { ...fields };
      if (loginWithEmail && "phone" in nextState) {
        delete nextState["phone"];
      } else if (!loginWithEmail && "email" in nextState) {
        delete nextState["email"];
      }
      return nextState;
    };

    setFormData((prevState: any) => ({
      ...removeField(prevState),
      ...data,
    }));

    const key = Object.keys(data)[0];

    setErrorFields((prev: any) => ({
      ...removeField(prev),
      [key]: hasError,
    }));
  };

  const renderLoginWithEmail = () => {
    return (
      <>
        <div className="flex justify-between gap-3 pt-[40px] opacity-70 items-center w-full">
          <div className="text-sm font-semibold">{strings.email}</div>
          <Link href={frontendRoutes.LOGIN} className="text-xs font-normal">
            {strings.signInWithPhoneNumber}
          </Link>
        </div>
        <div className="pt-[8px]">
          <InputComponent
            placeholder={strings.email}
            name={"email"}
            onChange={onInputChange}
            validationRequired
            validationType="email"
            error={errorFields.email}
          />
        </div>
      </>
    );
  };

  const renderLoginWithPhone = () => {
    return (
      <>
        <div className="flex justify-between gap-3 pt-[40px] opacity-70 items-center w-full">
          <div className="text-sm font-semibold">{strings.phone}</div>
          <Link
            href={`${frontendRoutes.LOGIN}?email=true`}
            className="text-xs font-normal"
          >
            {strings.signInWithEmail}
          </Link>
        </div>
        <div className="pt-[8px]">
          <InputWithDropdown
            dropdownArray={countryCodes}
            defaultDropdownValue={countryCodes[0].value}
            onChange={onInputChange}
            validationRequired
            validationType="phone"
            placeholderName={strings.phoneNumber}
            inputType={"number"}
            name={"phone"}
            error={errorFields?.phone}
          />
        </div>
      </>
    );
  };

  return (
    <form
      className="flex flex-col text-white items-center"
      onSubmit={onSubmit}
      ref={formRef}
    >
      <div className="text-lg font-bold">{strings.login}</div>
      {loginWithEmail === constants.TRUE
        ? renderLoginWithEmail()
        : renderLoginWithPhone()}
      <div className="w-full mt-[24px]">
        <ButtonComponent name={strings.continue} type="submit" />
      </div>
      <div className="mt-[100px] text-sm ">
        <span className="opacity-70">{strings.dontHaveAccount}</span>{" "}
        <Link href={frontendRoutes.SIGN_UP} className="font-thick">
          {strings.signUp}
        </Link>
      </div>
    </form>
  );
};

export default Login;
