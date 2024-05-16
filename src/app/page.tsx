import { URL } from "@/assets/constants/ApiRquest";
import { request } from "@/services/fetchData";
import { constants } from "@/assets/constants/constants";
import type { Metadata } from "next";
import Home from "@/package/Home/Home";

export const metadata: Metadata = {
  title: "Home Page",
  description: "...",
};

const page = async () => {
  const data = await request(URL?.GET_Home_Data, constants.GET);
  return (
    <main className="h-full">
      <Home data={data} />
    </main>
  );
};

export default page;
