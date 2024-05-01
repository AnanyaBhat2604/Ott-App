import React, { FC, FormEvent, useRef, useState } from "react";
import Link from "next/link";
import { frontendRoutes } from "@/assets/constants/frontend-routes";
import strings from "@/assets/strings/strings.json";
import countryCodes from "@/assets/data/country-codes.json";
import InputWithDropdown from "@/components/DropdownInput/DropdownInput";
import Button from "@/components/Button/Button";
import { validateInput } from "@/utils/validation";
import {
  LoginWithPhone,
  LoginWithPhoneValidation,
} from "@/interfaces/interfaces";

const PhoneLogin: FC = () => {
  const [errorFields, setErrorFields] = useState<LoginWithPhoneValidation>({
    phone: "",
  });

  const [formData, setFormData] = useState<LoginWithPhone>({
    phone: {
      dropdownValue: "",
      inputValue: "",
    },
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log(formData);

    Object.keys(formData).forEach((key: string) => {
      const errorMessage: string = validateInput(
        key,
        formData[key as keyof LoginWithPhone]["inputValue"],
        "phone"
      );

      setErrorFields((prev: LoginWithPhoneValidation) => ({
        ...prev,
        [key]: errorMessage,
      }));
    });
  };

  const onInputChange = (
    data: Partial<LoginWithPhone>,
    hasError: string
  ): void => {
    setFormData((prevState: LoginWithPhone) => ({
      ...prevState,
      ...data,
    }));

    const key = Object.keys(data)[0];

    setErrorFields((prev: LoginWithPhoneValidation) => ({
      ...prev,
      [key]: hasError,
    }));
  };

  return (
    <form onSubmit={onSubmit}>
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
      <div className="w-full mt-[24px]">
        <Button name={strings.continue} type="submit" />
      </div>
    </form>
  );
};

export default PhoneLogin;
