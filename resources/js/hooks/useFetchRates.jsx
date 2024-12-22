import { useEffect, useState } from "react";
import { format } from "date-fns";

export default function useFetchRates(date) {
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      const url = window.location.href + "api/rates/1";
      const formattedDate = format(date, 'yyyy-MM-dd');

      setIsLoading(true);
      setError("");

      try {
        // For testing purpose
        // await new Promise(resolve => setTimeout(resolve, 2000));

        const res = await fetch(url + "?date=" + formattedDate);
        if (!res.ok) throw new Error(res.statusText || "Unknown error");

        const resJson = await res.json();

        setData(resJson);
        setIsLoading(false);
      } catch (error) {
        setError(String(error));
      }
      setIsLoading(false);
    }
    fetchData();
  }, [date]);

  return { data, isLoading, error };
}
