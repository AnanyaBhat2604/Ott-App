"use client";

import React from "react";
import strings from "@/assets/strings/strings.json";
import InputWithDropdown from "@/components/InputWithDropdown/InputWithDropdown";
import countryCodes from "@/assets/data/country-codes.json";
import { InputWithDropDown } from "@/interfaces/componentTypes";
import ButtonComponent from "@/components/ButtonComponent/ButtonComponent";

const Login = () => {
  const onInputChange = ({ dropdownValue, inputValue }: InputWithDropDown) => {
    console.log("object:", dropdownValue, inputValue);
  };

  const buttonClick = () => {
    alert("Button clicked");
  };
  return (
    <div className="flex flex-col text-white items-center ">
      <div className="text-lg font-bold">{strings.login}</div>
      <div className="flex justify-between gap-3 pt-[40px] opacity-70 items-center w-full">
        <div className="text-sm font-semibold">{strings.phone}</div>
        <div className="text-xs font-normal">{strings.signInWithEmail}</div>
      </div>
      <div className="pt-[8px]">
        <InputWithDropdown
          dropdownArray={countryCodes}
          defaultDropdownValue={countryCodes[0].value}
          onChange={onInputChange}
          error={""}
          placeholderName={strings.phoneNumber}
          inputType={"number"}
        />
      </div>
      <div className="w-full mt-[24px]">
        <ButtonComponent name={strings.continue} onClick={buttonClick} />
      </div>
    </div>
  );
};

export default Login;
