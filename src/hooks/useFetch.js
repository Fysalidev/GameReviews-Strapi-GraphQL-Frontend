import { useEffect, useState } from "react";

const useFetch = (uri) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(uri);
        if (!response.ok) {
          throw Error("Could not fetch the data for that resource");
        }
        const json = await response.json();
        setData(json);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [uri]);

  return { data, error, loading };
};
export default useFetch;
