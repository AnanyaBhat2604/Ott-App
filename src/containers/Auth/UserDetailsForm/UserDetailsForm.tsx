import React, { FC, useEffect, useState } from "react";
import strings from "@/assets/strings/strings.json";
import InputComponent from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import { validateInput } from "@/utils/validation";

const UserDetailsForm: FC = () => {
  const [formData, setFormData] = useState<any>({});
  const [errorFields, setErrorFields] = useState<any>({});

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const onInputChange = (data: { [key: string]: string }, hasError: string) => {
    setFormData((prevState: any) => ({
      ...prevState,
      ...data,
    }));

    const key = Object.keys(data)[0];

    setErrorFields((prev: any) => ({
      ...prev,
      [key]: hasError,
    }));
  };

  const onSubmit = (event: any) => {
    event.preventDefault();
    Object.keys(formData).forEach((key: string) => {
      const errorMessage: string = validateInput(key, formData[key], "");
      setErrorFields((prev: any) => ({
        ...prev,
        [key]: errorMessage,
      }));
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="pt-medium">
        <InputComponent
          placeholder={strings.firstName}
          name={"firstName"}
          onChange={onInputChange}
          validationRequired
          error={errorFields.firstName}
        />
      </div>
      <div className="pt-medium">
        <InputComponent
          placeholder={strings.lastName}
          name={"lastName"}
          onChange={onInputChange}
          validationRequired
          error={errorFields.lastName}
        />
      </div>
      <div className="pt-medium">
        <InputComponent
          placeholder={strings.email}
          name={"email"}
          onChange={onInputChange}
          validationRequired
          error={errorFields.email}
        />
      </div>
      <div className="pt-medium">
        <InputComponent
          placeholder={strings.state}
          name={"state"}
          onChange={onInputChange}
          validationRequired
          error={errorFields.state}
        />
      </div>
      <div className="w-full mt-[24px]">
        <Button name={strings.continue} type="submit" />
      </div>
    </form>
  );
};

export default UserDetailsForm;
