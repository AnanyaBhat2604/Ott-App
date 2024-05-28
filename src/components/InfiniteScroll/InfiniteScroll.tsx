import React, { useState, useEffect, ReactElement, useCallback } from "react";
import CircularLoader from "@/components/CircularLoader/CircularLoader";

interface Props {
  fetchData: (
    start: number,
    limit: number
  ) => Promise<{ responseData: any[]; totalPages: number }>;
  children: ReactElement;
  limit?: number;
  containerClassName?: string;
}

const InfiniteScroll: React.FC<Props> = ({
  fetchData,
  children,
  limit = 10,
  // totalPages,
  containerClassName = "",
}) => {
  const [data, setData] = useState<any[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const handleScroll = useCallback(() => {
    if (
      !loading &&
      hasMore &&
      window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
    ) {
      setPage((prevPage: number) => prevPage + 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, hasMore]);

  useEffect(() => {
    const fetchDataAndUpdateState = async () => {
      setLoading(true);
      try {
        const { responseData, totalPages } = await fetchData(
          (page - 1) * limit,
          limit
        );
        setData((prevData: any[]) => [...prevData, ...responseData]);
        setHasMore(data.length < totalPages);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchDataAndUpdateState();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchData, limit, page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className={containerClassName}>
      {data.map((item: any, index: number) => (
        <React.Fragment key={index}>
          {React.cloneElement(children, { item })}
        </React.Fragment>
      ))}
      {loading && <CircularLoader height={62} width={62} />}
    </div>
  );
};

export default InfiniteScroll;
