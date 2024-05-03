import strings from "@/assets/strings/strings.json";
import FacebookIcon from "../../../public/assets/icons/facebook.svg";
import AppleIcon from "../../../public/assets/icons/apple.svg";
import GoogleIcon from "../../../public/assets/icons/google.svg";
import EmailIcon from "../../../public/assets/icons/email.svg";
import { LoginOption } from "@/interfaces/interfaces";

export const constants = {
  TRUE: "true",
  PASSWORD: "password",
};

export const loginOptions: LoginOption[] = [
  {
    name: "facebook",
    icon: FacebookIcon,
    text: strings.continueWithFacebook,
  },
  {
    name: "google",
    icon: GoogleIcon,
    text: strings.continueWithGoogle,
  },
  {
    name: "apple",
    icon: AppleIcon,
    text: strings.continueWithApple,
  },
  {
    name: "email",
    icon: EmailIcon,
    text: strings.continueWithEmail,
  },
];

export const apiMethods = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
};

export const apiConstants = {
  EMAIL: "EMAIL",
  SMS: "SMS",
};
