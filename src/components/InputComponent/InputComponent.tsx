import { constants } from "@/assets/constants/constants";
import { InputAdornment, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import EyeIcon from "../../../public/assets/icons/eye.svg";
import EyeSlashIcon from "../../../public/assets/icons/eye-slash.svg";
import Image from "next/image";

const inputStyles = {
  "& fieldset": {
    border: "none",
  },
  "& input[type=number]": {
    MozAppearance: "textfield",
  },
  "& input[type=number]::-webkit-outer-spin-button": {
    WebkitAppearance: "none",
    margin: 0,
  },
  "& input[type=number]::-webkit-inner-spin-button": {
    WebkitAppearance: "none",
    margin: 0,
  },
};

const InputComponent = ({
  error,
  type = "text",
  placeholder,
  name,
  onChange,
}: {
  error?: string;
  type?: string;
  placeholder: string;
  name: string;
  onChange: (data: any) => void;
}) => {
  const [focus, setFocus] = useState(false);
  const [inputType, setInputType] = useState(type);

  return (
    <div className="flex flex-col w-[528px]">
      <TextField
        name={name}
        placeholder={placeholder}
        type={inputType}
        onChange={(event: any) => {
          onChange({ [event.target.name]: event.target.value });
        }}
        className={`text-white text-sm !border-normal !border-solid !rounded-sm ${
          focus ? "!border-dodger-blue" : "!border-gray-light"
        }`}
        inputProps={{
          style: {
            padding: "15px 20px",
            color: "white",
          },
        }}
        InputProps={
          type === constants.PASSWORD
            ? {
                endAdornment: (
                  <InputAdornment position="end" className="cursor-pointer">
                    {inputType === "password" ? (
                      <Image
                        src={EyeIcon}
                        alt=""
                        onClick={() => setInputType("text")}
                      />
                    ) : (
                      <Image
                        src={EyeSlashIcon}
                        alt=""
                        onClick={() => setInputType("password")}
                      />
                    )}
                  </InputAdornment>
                ),
              }
            : {}
        }
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        sx={{ ...inputStyles }}
        autoComplete="off"
      />
      {error && <div className="error-text">{error}</div>}
    </div>
  );
};

export default InputComponent;
