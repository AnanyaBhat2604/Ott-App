import { useSearchParams } from "next/navigation";
import countryCodes from "@/assets/data/country-codes.json";
import React, { FC, ReactElement, useEffect, useState } from "react";
import { constants, loginOptions } from "@/assets/constants/constants";
import strings from "@/assets/strings/strings.json";
import Button from "@/components/Button/Button";
import Link from "next/link";
import InputComponent from "@/components/Input/Input";
import InputWithDropdown from "@/components/DropdownInput/DropdownInput";
import DownArrowIcon from "../../../../public/assets/icons/down-arrow.svg";
import Image from "next/image";
import { frontendRoutes } from "@/assets/constants/frontend-routes";
import { validateInput } from "@/utils/validation";

const SignUpForm: FC = () => {
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  const [formData, setFormData] = useState<any>({});
  const [errorFields, setErrorFields] = useState<any>({});

  const searchParams = useSearchParams();
  const signUpWithEmail = searchParams.get("email");

  useEffect(() => {
    setFormData({
      ...(signUpWithEmail ? { email: "" } : { phone: "" }),
      password: "",
    });
    setErrorFields({
      ...(signUpWithEmail ? { email: "" } : { phone: "" }),
      password: "",
    });
  }, [signUpWithEmail]);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    console.log(formData);

    Object.keys(formData).forEach((key: string) => {
      if (key === "phone") {
        const errorMessage: string = validateInput(
          key,
          formData[key]["inputValue"],
          "phone"
        );

        setErrorFields((prev: any) => ({
          ...prev,
          [key]: errorMessage,
        }));
      } else {
        const errorMessage: string = validateInput(key, formData[key], "email");
        setErrorFields((prev: any) => ({
          ...prev,
          [key]: errorMessage,
        }));
      }
    });
  };
  const renderSignUpWithEmail = (): ReactElement => {
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
            validationRequired
            validationType="email"
            error={errorFields.email}
          />
        </div>
      </>
    );
  };

  const renderSignUpWithPhone = (): ReactElement => {
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
            validationRequired
            validationType="phone"
            error={errorFields.phone}
          />
        </div>
      </>
    );
  };

  const renderShowMoreOptions = (): ReactElement => {
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

  const renderMoreOptions = (): ReactElement => {
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

  const onInputChange = (data: any, hasError: string) => {
    const removeField = (fields: any) => {
      const nextState = { ...fields };
      if (signUpWithEmail && "phone" in nextState) {
        delete nextState["phone"];
      } else if (!signUpWithEmail && "email" in nextState) {
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

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <form onSubmit={onSubmit} className="flex flex-col items-center">
      {signUpWithEmail === constants.TRUE
        ? renderSignUpWithEmail()
        : renderSignUpWithPhone()}
      <div className="pt-medium">
        <InputComponent
          placeholder={strings.password}
          name={"password"}
          onChange={onInputChange}
          type="password"
          validationRequired
          validationType="password"
          error={errorFields.password}
        />
      </div>
      <div className="w-full mt-[24px]">
        <Button name={strings.continue} type="submit" />
      </div>
      {showMoreOptions ? renderMoreOptions() : renderShowMoreOptions()}
    </form>
  );
};

export default SignUpForm;
