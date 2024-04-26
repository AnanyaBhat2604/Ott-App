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

  return (
    <div className="relative flex">
      <div className={`${focus && "border-red-600"} border-normal`}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={10}
          // onChange={handleChange}
          className="w-[114px]"
          onFocus={handleFocus}
          // onBlur={handleBlur}
          onClose={() => {
            setTimeout(() => {
              handleBlur();
            }, 0);
          }}
          sx={{
            "& fieldset": {
              border: "none",
            },
          }}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <TextField
          placeholder="Input"
          onFocus={handleFocus}
          onBlur={handleBlur}
          sx={{
            "& fieldset": {
              border: "none",
            },
          }}
        />
      </div>
    </div>
  );
};

export default InputWithDropdown;
