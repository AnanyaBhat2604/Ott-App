// types.ts
export interface InputWithDropDown {
  dropdownValue: string;
  inputValue: string;
}

export interface ButtonComponentType {
  name: string;
  onClick?: () => void;
  type?: "button" | "reset" | "submit";
  disabled?: boolean;
  loading?: boolean;
  ghost?: boolean;
}

export interface LoginOption {
  name: string;
  icon: string;
  text: string;
}

export interface ErrorType {
  [key: string]: {
    message: string;
    type: string;
  };
}

export interface ValidationRules {
  [key: string]: {
    regex: RegExp;
    message: string;
    valid?: boolean;
  };
}

export interface LoginWithEmail {
  email: string;
  password: string;
}

export interface PhoneInput {
  phone: {
    dropdownValue: string;
    inputValue: string;
  };
  password: string;
}

export interface PhoneValidation {
  phone: "";
  password: "";
}

export interface SignupEmail {
  email: "";
  password: "";
}

export interface SignupPhone {
  phone: "";
}

export interface UserDetails {
  firstName: string;
  lastName: string;
  email: string;
  state: string;
}

export interface NewPassword {
  password: string;
  confirmPassword: string;
}

export interface SnackbarContextType {
  open: boolean;
  message: string;
  severity?: "success" | "error" | "info" | "warning";
  openSnackbar: (
    newMessage: string,
    severity: "success" | "error" | "info" | "warning"
  ) => void;
  closeSnackbar: () => void;
}

export interface PasswordAssistanceInterface {
  email: "";
}

export interface OtpObject {
  type: string;
  destination: string;
  password: string;
  targetTimeStamp: Date;
}
