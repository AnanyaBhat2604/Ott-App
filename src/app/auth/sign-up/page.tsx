"use client";

import { useSearchParams } from "next/navigation";
import countryCodes from "@/assets/data/country-codes.json";
import React, { useEffect, useState } from "react";
import { constants, loginOptions } from "@/assets/constants/constants";
import strings from "@/assets/strings/strings.json";
import ButtonComponent from "@/components/ButtonComponent/ButtonComponent";
import Link from "next/link";
import InputComponent from "@/components/InputComponent/InputComponent";
import { InputWithDropDown } from "@/interfaces/componentTypes";
import InputWithDropdown from "@/components/InputWithDropdown/InputWithDropdown";
import DownArrowIcon from "../../../../public/assets/icons/down-arrow.svg";
import Image from "next/image";
import { frontendRoutes } from "@/assets/constants/frontend-routes";

const SignUp = () => {
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  const [formData, setFormData] = useState({});

  const searchParams = useSearchParams();
  const signUpWithEmail = searchParams.get("email");

  const onSubmit = (event: any) => {
    event.preventDefault();
    alert("Button clicked");
  };

  const renderSignUpWithEmail = () => {
    return (
      <>
        <div className="flex justify-between gap-3 pt-[40px] opacity-70 items-center w-full">
          <div className="text-sm font-semibold">{strings.email}</div>
          <Link href={frontendRoutes.SIGN_UP} className="text-xs font-normal">
            {strings.signUpWithPhoneNumber}
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
    return (
      <>
        <div className="flex justify-between gap-3 pt-[40px] opacity-70 items-center w-full">
          <div className="text-sm font-semibold">{strings.phone}</div>
          <Link
            href={`${frontendRoutes.SIGN_UP}?email=true`}
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
            placeholderName={strings.phoneNumber}
            inputType={"number"}
            name={"phone"}
          />
        </div>
      </>
    );
  };

  const renderShowMoreOptions = () => {
    return (
      <div
        className="flex items-center mt-[30px] gap-[4px]"
        onClick={() => setShowMoreOptions(true)}
      >
        <span className="text-sm text-dodger-blue cursor-pointer">
          {strings.moreLoginOptions}
        </span>{" "}
        <span>
          <Image src={DownArrowIcon} alt="" />
        </span>
      </div>
    );
  };

  const renderMoreOptions = () => {
    return (
      <div className="mt-[30px] flex flex-col gap-[40px] w-full">
        <div className="flex items-center">
          <div className="bg-tundora w-full h-[1px]"></div>
          <div className="px-[20%] text-wild-sand text-xxs">or</div>
          <div className="bg-tundora w-full h-[1px]"></div>
        </div>
        <div className="flex flex-col gap-[16px]">
          {loginOptions.map((item, i) => {
            return (
              <div
                key={i}
                className="bg-tundora flex cursor-pointer rounded-normal p-small"
              >
                <Image
                  src={item.icon}
                  alt=""
                  height={0}
                  width={0}
                  style={{ width: "22px", height: "auto" }}
                />
                <div className="flex-grow text-center pr-[22px]">
                  {item.text}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const onInputChange = (data: { [key: string]: InputWithDropDown }) => {
    setFormData((prevState) => {
      const nextState = { ...prevState };
      if (signUpWithEmail) {
        if ("phone" in nextState) {
          delete nextState["phone"];
        }
      } else {
        if ("email" in nextState) {
          delete nextState["email"];
        }
      }
      return {
        ...nextState,
        ...data,
      };
    });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <form className="flex flex-col text-white items-center" onSubmit={onSubmit}>
      <div className="text-lg font-bold">{strings.signUp}</div>
      {signUpWithEmail === constants.TRUE
        ? renderSignUpWithEmail()
        : renderSignUpWithPhone()}
      <div className="pt-[16px]">
        <InputComponent
          placeholder={strings.password}
          name={"password"}
          onChange={onInputChange}
          type="password"
        />
      </div>
      <div className="w-full mt-[24px]">
        <ButtonComponent name={strings.continue} type="submit" />
      </div>
      {showMoreOptions ? renderMoreOptions() : renderShowMoreOptions()}
      <div className="mt-[100px] text-sm ">
        <span className="opacity-70">{strings.alreadyHaveAnAccount}</span>{" "}
        <Link href={frontendRoutes.LOGIN} className="font-thick">
          {strings.signIn}
        </Link>
      </div>
    </form>
  );
};

export default SignUp;
