export const URL = {
  GET_MENU: "https://663379d7f7d50bbd9b49831e.mockapi.io/api/v1/menu",
  GET_MOVIE:
    "https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en",
};

export const headers: Record<string, string> = {
  "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY || "",
  "X-RapidAPI-Host": process.env.NEXT_PUBLIC_API_HOST || "",
};
