import { URL } from "@/assets/constants/ApiRquest";
import { request } from "@/services/fetchData";
import { constants } from "@/assets/constants/constants";
import type { Metadata } from "next";
import getComponent from "@/services/PackageSelector";

export const metadata: Metadata = {
  title: "Home Page",
  description: "...",
};

const page = async () => {
  const data = await request(URL?.GET_Home_Data, constants.GET);
  return (
    <main className="h-full">
      {data?.curation?.packages &&
        data?.curation?.packages?.length > 0 &&
        data?.curation?.packages?.map((content: any, i: number) => {
          const Component = getComponent(content.packageType);

          return (
            <div key={i}>
              <Component data={content.items} title={content.title} />
            </div>
          );
        })}
    </main>
  );
};

export default page;
