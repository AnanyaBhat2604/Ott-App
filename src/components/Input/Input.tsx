import { constants } from "@/assets/constants/constants";
import { InputAdornment, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import EyeIcon from "../../../public/assets/icons/eye.svg";
import EyeSlashIcon from "../../../public/assets/icons/eye-slash.svg";
import Image from "next/image";
import { validateInput } from "@/utils/validation";

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
  validationRequired,
  validationType,
  type = "text",
  placeholder,
  name,
  onChange,
  error = "",
}: {
  validationRequired?: boolean;
  type?: string;
  placeholder: string;
  name: string;
  validationType?: string;
  onChange: (data: any, hasError: string) => void;
  error?: string;
}) => {
  const [focus, setFocus] = useState(false);
  const [inputType, setInputType] = useState(type);

  const handleChange = (event: any) => {
    let hasError = "";
    if (validationRequired) {
      const errorMessage = validateInput(
        event.target.name,
        event.target.value,
        validationType
      );
      if (errorMessage) {
        hasError = errorMessage;
      } else {
        hasError = "";
      }
    }
    onChange({ [event.target.name]: event.target.value }, hasError);
  };

  return (
    <div className="flex flex-col w-[528px]">
      <TextField
        name={name}
        placeholder={placeholder}
        type={inputType}
        onChange={handleChange}
        className={`text-white text-sm !border-normal !border-solid !rounded-sm ${
          focus ? "!border-dodger-blue" : "!border-gray-light"
        }`}
        inputProps={{
          style: {
            padding: "15px 20px",
            color: "white",
          },
          autoComplete: "off",
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
        autoComplete="new-password"
      />
      {error && <div className="error-text">{error}</div>}
    </div>
  );
};

export default InputComponent;