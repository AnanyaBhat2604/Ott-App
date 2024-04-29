import React, { FC, useEffect, useState } from "react";
import strings from "@/assets/strings/strings.json";
import InputComponent from "@/components/Input/Input";
import Button from "@/components/Button/Button";

const UserDetailsForm: FC = () => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const onInputChange = (data: { [key: string]: string }) => {
    setFormData((prevState) => ({
      ...prevState,
      ...data,
    }));
  };

  const onSubmit = (event: any) => {
    event.preventDefault();
    alert("Button clicked");
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="pt-[16px]">
        <InputComponent
          placeholder={strings.firstName}
          name={"firstName"}
          onChange={onInputChange}
        />
      </div>
      <div className="pt-[16px]">
        <InputComponent
          placeholder={strings.lastName}
          name={"lastName"}
          onChange={onInputChange}
        />
      </div>
      <div className="pt-[16px]">
        <InputComponent
          placeholder={strings.email}
          name={"email"}
          onChange={onInputChange}
        />
      </div>
      <div className="pt-[16px]">
        <InputComponent
          placeholder={strings.state}
          name={"state"}
          onChange={onInputChange}
        />
      </div>
      <div className="w-full mt-[24px]">
        <Button name={strings.continue} type="submit" />
      </div>
    </form>
  );
};

export default UserDetailsForm;
