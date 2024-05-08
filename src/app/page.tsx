import { URL, headers } from "@/assets/constants/ApiRquest";
import { request } from "@/services/fetchData";
import Movies from "../package/Movies/movies";

export default async function Home() {
  const data = await request(URL?.GET_MOVIE, "GET", headers);

  return (
    <main>
      <Movies movieData={data?.titles} />
    </main>
  );
}
