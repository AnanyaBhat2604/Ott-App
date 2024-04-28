import { validationData } from "@/assets/constants/input-validation";
import strings from "@/assets/strings/strings.json";

export const validateInput = (name: string, value: string, type?: string) => {
  let validation = null;
  if (type) {
    validation = validationData[type];
  }

  console.log(validation?.regex.test(value));

  let error = "";
  if (!value?.trim()) {
    error = `*${strings.pleaseEnter} ${
      name.charAt(0).toUpperCase() + name.slice(1)
    } `;
  } else if (validation && !validation.regex.test(value)) {
    error = validation.message;
  } else {
    error = "";
  }
  return error;
};
