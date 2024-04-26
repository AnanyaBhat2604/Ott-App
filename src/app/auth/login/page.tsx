import React from "react";
import strings from "@/assets/strings/strings.json";
import InputWithDropdown from "@/components/InputWithDropdown/InputWithDropdown";

const Login = () => {
  return (
    <div className="flex flex-col text-white items-center ">
      <div className="text-lg font-bold">{strings.login}</div>
      <div className="flex justify-between gap-3 pt-[40px] opacity-70 items-center w-full">
        <div className="text-sm font-semibold">{strings.phone}</div>
        <div className="text-xs font-normal">{strings.signInWithEmail}</div>
      </div>
      <div>
        <InputWithDropdown />
      </div>
    </div>
  );
};

export default Login;
