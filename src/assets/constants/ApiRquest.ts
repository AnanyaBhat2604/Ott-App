export const URL = {
  GET_MOVIE:
    "/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en",
};

export const headers = {
  "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY,
  "X-RapidAPI-Host": process.env.NEXT_PUBLIC_API_HOST,
};
