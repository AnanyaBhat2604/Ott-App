import React, { FC, FormEvent, useState } from "react";
import strings from "@/assets/strings/strings.json";
import InputComponent from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import { PasswordAssistanceInterface } from "@/interfaces/interfaces";
import { validateInput } from "@/utils/validation";
import { apiEndpoints } from "@/assets/constants/api-endpoints";
import { apiConstants } from "@/assets/constants/constants";
import { useSnackbar } from "@/contexts/snackbar-context/snackbar-context";
const PasswordAssistanceForm: FC = () => {
  const [errorFields, setErrorFields] = useState<PasswordAssistanceInterface>({
    email: "",
  });

  const [formData, setFormData] = useState<PasswordAssistanceInterface>({
    email: "",
  });

  const [loading, setLoading] = useState<boolean>(false);

  const { openSnackbar } = useSnackbar();

  const onSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    let hasError = false;

    Object.keys(formData).forEach((key: string) => {
      const errorMessage = validateInput(
        key as keyof PasswordAssistanceInterface,
        formData[key as keyof PasswordAssistanceInterface],
        key as keyof PasswordAssistanceInterface
      );

      if (!formData[key as keyof PasswordAssistanceInterface] || errorMessage) {
        if (!hasError) {
          hasError = true;
        }
      }

      setErrorFields((prev: PasswordAssistanceInterface) => ({
        ...prev,
        [key]: errorMessage,
      }));
    });

    if (!hasError) {
      setLoading(true);
    }
  };

  const onInputChange = (
    data: Partial<PasswordAssistanceInterface>,
    hasError: string
  ): void => {
    setFormData((prevState: PasswordAssistanceInterface) => ({
      ...prevState,
      ...data,
    }));

    const key = Object.keys(data)[0];

    setErrorFields((prev: PasswordAssistanceInterface) => ({
      ...prev,
      [key]: hasError,
    }));
  };

  return (
    <form onSubmit={onSubmit} className="mt-[40px] w-full">
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
        <Button name={strings.continue} type="submit" loading={loading} />
      </div>
    </form>
  );
};

export default PasswordAssistanceForm;
