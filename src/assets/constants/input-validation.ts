import { ValidationRules } from "@/interfaces/componentTypes";
import strings from "@/assets/strings/strings.json";

export const validationData: ValidationRules = {
  phone: {
    regex: /^\d{10}$/,
    message: strings.phoneNumValidation,
  },
  email: {
    regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: strings.emailValidation,
  },
};
