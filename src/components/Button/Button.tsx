import React, { ReactElement } from "react";
import { Button as MUIButton } from "@mui/material";
import { ButtonComponentType } from "@/interfaces/interfaces";
import DotLoader from "../DotLoader/DotLoader";

const Button = ({
  name,
  onClick,
  type = "button",
  disabled = false,
  loading = false,
}: ButtonComponentType): ReactElement => {
  return (
    <MUIButton
      type={type}
      variant="contained"
      className="w-full !bg-dodger-blue !text-sm !p-small rounded-sm !normal-case h-[48px] relative overflow-hidden"
      disableElevation
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? <DotLoader /> : name}
    </MUIButton>
  );
};

export default Button;
