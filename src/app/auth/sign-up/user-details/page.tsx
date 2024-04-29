"use client";

import React, { FC } from "react";
import strings from "@/assets/strings/strings.json";
import UserDetailsForm from "@/containers/Auth/UserDetailsForm/UserDetailsForm";

const UserDetails: FC = () => {
  return (
    <div className="flex flex-col text-white items-center">
      <div className="text-lg font-bold">{strings.yourDetails}</div>
      <UserDetailsForm />
    </div>
  );
};

export default UserDetails;
