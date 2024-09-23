import { useEffect, useState } from "react";

export const useFetchData = (url) => {
  const [fetchState, setFetchState] = useState({
    isLoading: false,
    isFinish: false,
    isError: false,
  });

  useEffect(() => {
    const fetchData = (url) => {
      // fetch Data 시도
      setFetchState({
        isLoading: true,
        isFinish: false,
        isError: false,
      });

      fetch(() => {
        // fetch Data 성공
        setFetchState({
          isLoading: false,
          isFinish: true,
          isError: false,
        });
      }).catch(() => {
        // fetch Data 실패
        setFetchState({
          isLoading: false,
          isFinish: false,
          isError: true,
        });
      });

      fetchData(url);
    };
  }, [url]);

  return fetchState;
};
