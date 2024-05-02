import React, { FC, FormEvent, useState } from "react";
import strings from "@/assets/strings/strings.json";
import Link from "next/link";
import { frontendRoutes } from "@/assets/constants/frontend-routes";
import InputComponent from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import { SignupEmail } from "@/interfaces/interfaces";
import { validateInput } from "@/utils/validation";

const EmailSignup: FC = () => {
  const [errorFields, setErrorFields] = useState<SignupEmail>({
    email: "",
  });

  const [formData, setFormData] = useState<SignupEmail>({
    email: "",
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    let hasError = false;

    Object.keys(formData).forEach((key: string) => {
      const errorMessage = validateInput(
        key as keyof SignupEmail,
        formData[key as keyof SignupEmail],
        key as keyof SignupEmail
      );

      if (!formData[key as keyof SignupEmail] || errorMessage) {
        if (!hasError) {
          hasError = true;
        }
      }

      setErrorFields((prev: SignupEmail) => ({
        ...prev,
        [key]: errorMessage,
      }));
    });

    if (!hasError) {
      alert("Can be submitted");
    }
  };

  const onInputChange = (
    data: Partial<SignupEmail>,
    hasError: string
  ): void => {
    setFormData((prevState: SignupEmail) => ({
      ...prevState,
      ...data,
    }));

    const key = Object.keys(data)[0];

    setErrorFields((prev: SignupEmail) => ({
      ...prev,
      [key]: hasError,
    }));
  };

  return (
    <form onSubmit={onSubmit}>
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
          validationRequired
          validationType="email"
          error={errorFields.email}
        />
      </div>
      <div className="w-full mt-[24px]">
        <Button name={strings.continue} type="submit" />
      </div>
    </form>
  );
};

export default EmailSignup;
