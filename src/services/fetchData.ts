import { ValueResponse } from "@/interfaces/interfaces";

const API_ENDPOINT =
  "https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en";

export const getMovieData = async (): Promise<ValueResponse> => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "7f7d8fff60msh4da5e9a19d90978p11128fjsn5230c7177874",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(`${API_ENDPOINT}`, options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data: ValueResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching the value:", error);
    throw error;
  }
};
