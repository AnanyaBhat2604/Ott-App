import React from "react";
import Button from "@mui/material/Button";
import { ButtonComponentType } from "@/interfaces/componentTypes";

const ButtonComponent = ({
  name,
  onClick,
  type = "button",
}: ButtonComponentType) => {
  return (
    <Button
      type={type}
      variant="contained"
      className="w-full !bg-dodger-blue !text-sm !p-small rounded-sm !normal-case"
      disableElevation
      onClick={onClick}
    >
      {name}
    </Button>
  );
};

export default ButtonComponent;
