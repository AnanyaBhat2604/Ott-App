import getComponent from "@/services/packageSelector";
import React from "react";

const Home = ({ data }: any) => {
  return (
    <div>
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
    </div>
  );
};

export default Home;
