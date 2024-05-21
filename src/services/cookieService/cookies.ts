import { CookieOptions } from "@/interfaces/interfaces";
import Cookies from "js-cookie";
import { decryptData, encryptData } from "../crypto/crypto";

export const setCookie = (
  name: string,
  value: any,
  options: CookieOptions = {}
): void => {
  const stringData = JSON.stringify(value);
  const encryptedData = encryptData(stringData);
  Cookies.set(name, encryptedData, options);
};

export const getCookie = (name: string): any | undefined => {
  const data = Cookies.get(name) || "";
  const decryptedData: any = decryptData(data as string);
  return decryptedData ? JSON.parse(decryptedData) : null;
};

export const deleteCookie = (name: string): void => {
  Cookies.remove(name);
};

export const checkCookie = (name: string): boolean => {
  return !!Cookies.get(name);
};
