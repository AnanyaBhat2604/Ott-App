import { URL, headers } from "@/assets/constants/ApiRquest";
import { request } from "@/services/fetchData";
import Movies from "../package/Movies/movies";
import { constants } from "@/assets/constants/constants";

export default async function Home() {
  const data = await request(URL?.GET_MOVIE, constants.GET, headers);

  return (
    <main>
      <Movies movieData={data?.titles} />
    </main>
  );
}
