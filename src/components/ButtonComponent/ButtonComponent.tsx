import React from "react";
import Button from "@mui/material/Button";

const ButtonComponent = ({
  name,
  onClick,
}: {
  name: string;
  onClick?: () => void;
}) => {
  return (
    <Button
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
