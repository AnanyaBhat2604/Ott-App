"use client";
import { useClickOutside } from "@/hooks/useClickOutside";
import { InputWithDropDown } from "@/interfaces/componentTypes";
import { MenuItem, Select, TextField } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import tailwindConfig from "../../../tailwind.config";

const selectStyles = {
  "& fieldset": {
    border: "none",
  },
  "& .MuiSelect-select": {
    paddingRight: "17px",
    paddingLeft: "17px",
    paddingTop: "15px",
    paddingBottom: "15px",
    color: "white",
  },
  "& .MuiSvgIcon-root": { color: "#ffffff" },
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

const InputWithDropdown = ({
  dropdownArray = [],
  defaultDropdownValue,
  onChange,
  error,
  placeholderName,
  inputType = "string",
  name,
}: {
  dropdownArray: { label: string; value: string }[];
  defaultDropdownValue?: string;
  onChange: ({
    [name]: { dropdownValue, inputValue },
  }: {
    [key: string]: InputWithDropDown;
  }) => void;
  error?: string;
  placeholderName?: string;
  inputType?: string;
  name: string;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const menuRef = useRef<HTMLInputElement>(null);

  const [focus, setFocus] = useState(false);

  const [inputdata, setInputData] = useState({
    dropdownValue: defaultDropdownValue || "",
    inputValue: "",
  });

  useEffect(() => {
    const data = { [name]: inputdata };

    onChange(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputdata]);

  useClickOutside([inputRef, menuRef], () => handleBlur());

  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = () => {
    setFocus(false);
  };

  const handleSelect = (event: any) => {
    setInputData((prevState) => ({
      ...prevState,
      dropdownValue: event?.target.value,
    }));
  };

  const handleInputChange = (event: any) => {
    setInputData((prevState) => ({
      ...prevState,
      inputValue: event?.target.value,
    }));
  };

  return (
    <div className="relative flex flex-col">
      <div
        className={`border-gray-light border-normal rounded-sm ${
          focus && "!border-dodger-blue"
        }`}
        ref={inputRef}
      >
        <Select
          value={inputdata.dropdownValue}
          renderValue={(p) => p}
          className={`w-[130px] border-gray-light border-r !rounded-none text-white text-sm`}
          onOpen={handleFocus}
          sx={selectStyles}
          onChange={handleSelect}
          MenuProps={{
            PaperProps: {
              ref: menuRef,
              className: "bg-tundora text-white scrollbar-custom",
              sx: {
                width: `${inputRef.current?.clientWidth}px`,
                maxHeight: "250px",
                marginTop: "10px",
                paddingTop: 0,

                "& .MuiList-root": {
                  padding: 0,
                  fontSize: "16px",
                },

                "& .Mui-selected": {
                  backgroundColor: `${
                    // @ts-ignore
                    tailwindConfig?.theme?.extend?.colors["bay-of-many"] || ""
                  } !important`,
                },
              },
            },
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "left",
            },
            transformOrigin: {
              vertical: "top",
              horizontal: "left",
            },
          }}
        >
          {dropdownArray?.length > 0 &&
            dropdownArray.map((item, index) => {
              return (
                <MenuItem value={item.value} key={index}>
                  {item.label}
                </MenuItem>
              );
            })}
        </Select>
        <TextField
          placeholder={placeholderName}
          onFocus={handleFocus}
          onBlur={handleBlur}
          type={inputType}
          autoComplete="off"
          onChange={handleInputChange}
          className="w-[396px] text-white text-sm"
          inputProps={{
            style: {
              padding: "15px 20px",
              color: "white",
            },
          }}
          sx={{ ...inputStyles }}
        />
      </div>
      {error && <div className="error-text">{error}</div>}
    </div>
  );
};

export default InputWithDropdown;
