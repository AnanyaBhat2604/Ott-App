import strings from "@/assets/strings/strings.json";
import FacebookIcon from "@/assets/icons/facebook.svg";
import AppleIcon from "@/assets/icons/apple.svg";
import GoogleIcon from "@/assets/icons/google.svg";
import EmailIcon from "@/assets/icons/email.svg";
import { LoginOption } from "@/interfaces/interfaces";

export const constants = {
  TRUE: "true",
  PASSWORD: "password",
  SUCCCESS: "SUCCESS",
  ROUTE_PERMISSIONS: "routePermissions",
  OTP_LENGTH: 6,
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
  PASSWORD: "PASSWORD",
  OTP: "OTP",
};
