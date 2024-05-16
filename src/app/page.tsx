import { request } from "@/services/fetchData";
import { constants } from "@/assets/constants/constants";
import type { Metadata } from "next";

import dynamic from "next/dynamic";
import { URL } from "@/assets/constants/apiRequest";

const Home = dynamic(() => import("@/package/Home/Home"), {
  ssr: false,
});

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
