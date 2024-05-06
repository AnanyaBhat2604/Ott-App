import { decryptData, encryptData } from "../crypto/crypto";

export const getData = <T extends any>(key: string): T | null => {
  const data: string | any =
    (typeof localStorage !== "undefined" && localStorage.getItem(key)) || "";
  const decryptedData = decryptData(data as string);
  return decryptedData ? (JSON.parse(decryptedData) as T | null) : null;
};

export const setData = (key: string, data: any): void => {
  const stringData = JSON.stringify(data);
  const encryptedData = encryptData(stringData);
  localStorage.setItem(key, encryptedData);
};

export const removeData = (key: string): void => {
  localStorage.removeItem(key);
};

export const clearLocalStorage = (): void => {
  localStorage.clear();
};
