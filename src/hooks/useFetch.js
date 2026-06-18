import { useEffect, useState } from "react";

const useFetch = (url, dependencies = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await url();
        setData(response);
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
