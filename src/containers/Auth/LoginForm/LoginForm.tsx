import React, { FC, useRef, useState } from "react";
import Link from "next/link";
import strings from "@/assets/strings/strings.json";
import InputWithDropdown from "@/components/DropdownInput/DropdownInput";
import countryCodes from "@/assets/data/country-codes.json";
import Button from "@/components/Button/Button";
import { useSearchParams } from "next/navigation";
import { constants } from "@/assets/constants/constants";
import InputComponent from "@/components/Input/Input";
import { validateInput } from "@/utils/validation";
import { frontendRoutes } from "@/assets/constants/frontend-routes";

const LoginForm: FC = () => {
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

    Object.keys(formData).map((key) => {
      if (key === "phone") {
        const errorMessage = validateInput(
          key,
          formData[key]["inputValue"],
          "phone"
        );

        setErrorFields((prev: any) => ({
          ...prev,
          [key]: errorMessage,
        }));
      } else {
        const errorMessage = validateInput(key, formData[key], "email");

        setErrorFields((prev: any) => ({
          ...prev,
          [key]: errorMessage,
        }));
      }
    });
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

  const renderLoginWithEmail = (): JSX.Element => {
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

  const renderLoginWithPhone = (): JSX.Element => {
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
    <form onSubmit={onSubmit} ref={formRef}>
      {loginWithEmail === constants.TRUE
        ? renderLoginWithEmail()
        : renderLoginWithPhone()}
      <div className="w-full mt-[24px]">
        <Button name={strings.continue} type="submit" />
      </div>
    </form>
  );
};

export default LoginForm;
