import strings from "@/assets/strings/strings.json";
import FacebookIcon from "@/assets/icons/facebook.svg";
import AppleIcon from "@/assets/icons/apple.svg";
import GoogleIcon from "@/assets/icons/google.svg";
import EmailIcon from "@/assets/icons/email.svg";
import { LoginOption } from "@/interfaces/interfaces";

export const constants = {
  SEARCH: "search",
  TRYFORFREE: "tryforfree",
  EN: "EN",
  PROFILE: "profile",
  GET: "GET",
  TRUE: "true",
  PASSWORD: "password",
  SUCCCESS: "SUCCESS",
  ROUTE_PERMISSIONS: "routePermissions",
  OTP_LENGTH: 6,
};

export const profileOptions = {
  children: [
    {
      title: "Sign In",
    },
    {
      title: "Help",
    },
    {
      title: "Watch Anywhere",
    },
  ],
};

export const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
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
