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
