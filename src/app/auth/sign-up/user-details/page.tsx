"use client";

import React from "react";
import strings from "@/assets/strings/strings.json";
import InputComponent from "@/components/InputComponent/InputComponent";
import ButtonComponent from "@/components/ButtonComponent/ButtonComponent";

const UserDetails = () => {
  const onInputChange = (data: { [key: string]: string }) => {
    console.log("object:", data);
  };

  const onSubmit = (event: any) => {
    event.preventDefault();
    alert("Button clicked");
  };

  return (
    <form className="flex flex-col text-white items-center" onSubmit={onSubmit}>
      <div className="text-lg font-bold">{strings.yourDetails}</div>
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
        <ButtonComponent name={strings.continue} type="submit" />
      </div>
    </form>
  );
};

export default UserDetails;
