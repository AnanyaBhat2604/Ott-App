import React, { useState, useEffect, ReactElement, useCallback } from "react";

interface Props {
  fetchData: (start: number, limit: number) => Promise<any[]>;
  children: ReactElement;
  limit?: number;
  totalItems?: number;
  containerClassName?: string;
}

const InfiniteScroll: React.FC<Props> = ({
  fetchData,
  children,
  limit = 10,
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
      setLoading(true);
      setPage((prevPage: number) => prevPage + 1);
    }
  }, [loading, hasMore]);

  useEffect(() => {
    const fetchDataAndUpdateState = async () => {
      try {
        const newData = await fetchData((page - 1) * limit, limit);
        setData((prevData: any[]) => [...prevData, ...newData]);
        setHasMore(newData.length > 0);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchDataAndUpdateState();
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
      {loading && <div className="bg-slate-400">Loading...</div>}
    </div>
  );
};

export default InfiniteScroll;
