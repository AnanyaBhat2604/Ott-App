"use client";
import {
  Input,
  InputLabel,
  MenuItem,
  Popover,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

const InputWithDropdown = () => {
  const [focus, setFocus] = useState(false);

  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = () => {
    setFocus(false);
  };

  const selectStyles = {
    "& fieldset": {
      border: "none",
    },
    "& .MuiSelect-select": {
      paddingRight: "17px",
      paddingLeft: "17px",
      paddingTop: "15px",
      paddingBottom: "15px",
    },
  };

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

  return (
    <div className="relative flex">
      <div
        className={`border-cod-gray border-normal rounded-sm ${
          focus && "border-dodger-blue"
        }`}
      >
        <Select
          value={10}
          // onChange={handleChange}
          className={`w-[114px] border-cod-gray border-r rounded-none`}
          onFocus={handleFocus}
          onClose={() => {
            setTimeout(() => {
              handleBlur();
            }, 0);
          }}
          sx={selectStyles}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <TextField
          placeholder="Input"
          onFocus={handleFocus}
          onBlur={handleBlur}
          type="number"
          inputProps={{
            style: {
              padding: "15px 20px",
            },
          }}
          sx={{ ...inputStyles }}
        />
      </div>
    </div>
  );
};

export default InputWithDropdown;
