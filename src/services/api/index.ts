import strings from "@/assets/strings/strings.json";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL_AUTH;

export const request = async (
  url: string,
  method: string,
  headers: Record<string, string> = {},
  body: any = null
) => {
  try {
    const response = await fetch(`${baseUrl}${url}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: body ? JSON.stringify(body) : null,
    });

    if (!response.ok) {
      const errorData = await response.json();

      throw new Error(
        errorData?.resultInfo?.message || strings.somethingWentWrong
      );
    }

    return await response.json();
  } catch (error: any) {
    throw error;
  }
};
