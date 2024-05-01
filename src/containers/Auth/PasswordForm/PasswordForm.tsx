import InputComponent from "@/components/Input/Input";
import React, { FC, FormEvent, useEffect, useState } from "react";
import strings from "@/assets/strings/strings.json";
import Button from "@/components/Button/Button";
import { ValidatePassword, validateInput } from "@/utils/validation";
import PasswordValidation from "./PasswordValidation";
import { newPasswordValidations } from "@/assets/constants/input-validation";
import { NewPassword } from "@/interfaces/interfaces";

const PasswordForm: FC = () => {
  const [formData, setFormData] = useState<NewPassword>({
    password: "",
    confirmPassword: "",
  });

  const [errorFields, setErrorFields] = useState<NewPassword>({
    password: "",
    confirmPassword: "",
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log(formData);

    Object.keys(formData).forEach((key: string) => {
      const errorMessage = validateInput(
        key as keyof NewPassword,
        formData[key as keyof NewPassword],
        key as keyof NewPassword
      );
      setErrorFields((prev: NewPassword) => ({
        ...prev,
        [key]: errorMessage,
      }));

      if (key === "confirmPassword") {
        if (formData.password !== formData[key]) {
          setErrorFields((prev: NewPassword) => ({
            ...prev,
            [key]: strings.passwordsMustBeSame,
          }));
        }
      }
    });
  };

  const onInputChange = (data: any, hasError: string): void => {
    setFormData((prevState: NewPassword) => ({
      ...prevState,
      ...data,
    }));

    const key = Object.keys(data)[0];

    setErrorFields((prev: NewPassword) => ({
      ...prev,
      [key]: hasError,
    }));

    if (key === "password") {
      ValidatePassword(data[key]);
    } else if (key === "confirmPassword") {
      if (formData.password !== data[key]) {
        setErrorFields((prev) => ({
          ...prev,
          [key]: strings.passwordsMustBeSame,
        }));
      }
    }
  };

  return (
    <>
      <form className="pt-[32px]" onSubmit={onSubmit}>
        <div className="pt-medium">
          <InputComponent
            placeholder={strings.newPassword}
            name={"password"}
            type="password"
            onChange={onInputChange}
            validationRequired
            error={errorFields.password}
          />
        </div>
        <div className="pt-medium">
          <InputComponent
            placeholder={strings.reEnterPassword}
            name={"confirmPassword"}
            type="password"
            onChange={onInputChange}
            validationRequired
            error={errorFields.confirmPassword}
          />
        </div>
        <div className="w-full mt-[24px]">
          <Button name={strings.continue} type="submit" />
        </div>
      </form>
      <PasswordValidation passwordValidation={newPasswordValidations} />
    </>
  );
};

export default PasswordForm;
