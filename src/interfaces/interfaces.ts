// types.ts
export interface InputWithDropDown {
  dropdownValue: string;
  inputValue: string;
}

export interface ButtonComponentType {
  name: string;
  onClick?: () => void;
  type?: "button" | "reset" | "submit";
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
}

export interface PhoneValidation {
  phone: "";
}

export interface SignupEmail {
  email: "";
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
