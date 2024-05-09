import React, { FC, FormEvent, useState } from "react";
import Link from "next/link";
import { frontendRoutes } from "@/assets/constants/frontend-routes";
import strings from "@/assets/strings/strings.json";
import countryCodes from "@/assets/data/country-codes.json";
import InputWithDropdown from "@/components/DropdownInput/DropdownInput";
import Button from "@/components/Button/Button";
import { validateInput } from "@/utils/validation";
import { PhoneInput, PhoneValidation } from "@/interfaces/interfaces";
import {
  apiConstants,
  apiMethods,
  constants,
} from "@/assets/constants/constants";
import { apiEndpoints } from "@/assets/constants/api-endpoints";
import { useSnackbar } from "@/contexts/snackbar-context/snackbar-context";
import InputComponent from "@/components/Input/Input";
import { setData } from "@/services/storage/storage";
import { setRoutePermissions } from "@/utils/route-permissions";
import { useRouter } from "next/navigation";
import { request } from "@/services/api";

const PhoneSignup: FC = () => {
  const [errorFields, setErrorFields] = useState<PhoneValidation>({
    phone: "",
    password: "",
  });

  const [formData, setFormData] = useState<PhoneInput>({
    phone: {
      dropdownValue: "",
      inputValue: "",
    },
    password: "",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const { openSnackbar } = useSnackbar();

  const onSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    let hasError = false;

    Object.keys(formData).forEach((key: string) => {
      let value: string;
      if (key === "phone") {
        value = (formData[key as keyof PhoneInput] as PhoneInput["phone"])
          .inputValue;
      } else {
        value = formData[key as keyof PhoneInput] as string;
      }

      const errorMessage = validateInput(key, value, key as keyof PhoneInput);

      if (!formData[key as keyof PhoneInput] || errorMessage) {
        if (!hasError) {
          hasError = true;
        }
      }

      setErrorFields((prev: PhoneValidation) => ({
        ...prev,
        [key]: errorMessage,
      }));
    });

    if (!hasError) {
      const data = {
        destination: formData.phone.inputValue,
        channel: apiConstants.SMS,
      };
      setLoading(true);
      request(apiEndpoints.sendOTP, apiMethods.POST, {}, data)
        .then((data: any) => {
          if (data.resultInfo.code === constants.SUCCCESS) {
            let currentTime = new Date();

            const otpData = {
              type: apiConstants.EMAIL,
              destination: formData.phone.inputValue,
              targetTimeStamp: new Date(
                new Date(currentTime.getTime() + 30 * 1000)
              ), //after 30 seconds
              password: formData.password,
            };
            setData("otpData", otpData);
            setRoutePermissions(frontendRoutes.SIGN_UP_OTP);
            router.push(frontendRoutes.SIGN_UP_OTP);
          }
        })
        .catch((error) => {
          openSnackbar(error.message, "error");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const onInputChange = (data: Partial<PhoneInput>, hasError: string): void => {
    setFormData((prevState: PhoneInput) => ({
      ...prevState,
      ...data,
    }));

    const key = Object.keys(data)[0];

    setErrorFields((prev: PhoneValidation) => ({
      ...prev,
      [key]: hasError,
    }));
  };

  return (
    <form onSubmit={onSubmit} className="w-full">
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
          validationRequired
          validationType="phone"
          placeholderName={strings.phoneNumber}
          inputType={"number"}
          name={"phone"}
          error={errorFields?.phone}
        />
      </div>
      <div className="pt-[16px]">
        <InputComponent
          placeholder={strings.password}
          name={"password"}
          onChange={onInputChange}
          validationRequired
          validationType="password"
          error={errorFields.password}
          type="password"
        />
      </div>
      <div className="w-full mt-[24px]">
        <Button name={strings.continue} type="submit" loading={loading} />
      </div>
    </form>
  );
};

export default PhoneSignup;
