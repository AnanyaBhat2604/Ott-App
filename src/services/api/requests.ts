import { apiMethods } from "@/assets/constants/constants";
import { request } from "./index";

export const get = async (
  url: string,
  headers: Record<string, string> = {}
) => {
  return request(url, apiMethods.GET, headers);
};

export const post = async (
  url: string,
  data: any,
  headers: Record<string, string> = {}
) => {
  return request(url, apiMethods.POST, headers, data);
};

export const put = async (
  url: string,
  data: any,
  headers: Record<string, string> = {}
) => {
  return request(url, apiMethods.PUT, headers, data);
};

export const del = async (
  url: string,
  headers: Record<string, string> = {}
) => {
  return request(url, apiMethods.DELETE, headers);
};
