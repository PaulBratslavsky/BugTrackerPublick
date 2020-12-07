import { useState, useEffect } from "react";

export default function useGetDataHook(url) {

  console.log(url, "WTF")
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();

    if (!url) return;

    const fetchData = async () => {
      setIsLoading(true);
     
      const response = await fetch(url, { signal: abortController.signal });
      const data = await response.json();
      console.log(data)
      setData(data);
      setIsLoading(false);
    };

    try {
      fetchData();
    } catch (err) {
      console.error("ERROR IN GET DATA HOOK OR REQUEST ABORTED: " + err);
    }

    return () => {
      abortController.abort();
    };
  }, [url]);

  return { isLoading, data };
}
