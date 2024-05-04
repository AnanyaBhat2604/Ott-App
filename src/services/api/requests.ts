import { apiMethods } from "@/assets/constants/constants";
import { request } from "./index";

export const get = async (
  url: string,
  headers: Record<string, string> = {}
) => {
  try {
    return await request(url, apiMethods.GET, headers);
  } catch (error) {
    throw error;
  }
};

export const post = async (
  url: string,
  data: any,
  headers: Record<string, string> = {}
) => {
  try {
    return await request(url, apiMethods.POST, headers, data);
  } catch (error) {
    throw error;
  }
};

export const put = async (
  url: string,
  data: any,
  headers: Record<string, string> = {}
) => {
  try {
    return await request(url, apiMethods.PUT, headers, data);
  } catch (error) {
    throw error;
  }
};

export const del = async (
  url: string,
  headers: Record<string, string> = {}
) => {
  try {
    return await request(url, apiMethods.DELETE, headers);
  } catch (error) {
    throw error;
  }
};
