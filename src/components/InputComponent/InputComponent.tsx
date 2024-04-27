import { TextField } from "@mui/material";
import React, { useState } from "react";

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

  return (
    <div className="flex flex-col w-[528px]">
      <TextField
        name={name}
        placeholder={placeholder}
        type={type}
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
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        sx={{ ...inputStyles }}
      />
      {error && <div className="error-text">{error}</div>}
    </div>
  );
};

export default InputComponent;
