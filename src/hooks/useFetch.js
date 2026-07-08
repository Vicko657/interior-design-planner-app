import { useEffect, useState } from "react";

const useFetch = (url, dependencies = [], guard = undefined) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (guard !== undefined && !guard) {
      setLoading(false);
      return;
    }
    const fetch = async () => {
      try {
        const response = await url();
        setData(response);
        setLoading(true);
        setError(null);
      } catch (err) {
        console.log(err);
        const errors = err.response?.data;
        setError(errors || "Loading failed");
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, dependencies);
  return { data, loading, error };
};

export default useFetch;
