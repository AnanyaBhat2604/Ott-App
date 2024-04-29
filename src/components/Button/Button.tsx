import React, { ReactElement } from "react";
import { Button as MUIButton } from "@mui/material";
import { ButtonComponentType } from "@/interfaces/componentTypes";

const Button = ({
  name,
  onClick,
  type = "button",
}: ButtonComponentType): ReactElement => {
  return (
    <MUIButton
      type={type}
      variant="contained"
      className="w-full !bg-dodger-blue !text-sm !p-small rounded-sm !normal-case"
      disableElevation
      onClick={onClick}
    >
      {name}
    </MUIButton>
  );
};

export default Button;
