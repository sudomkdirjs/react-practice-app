import { useState } from "react";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadData = url => {
    setIsLoading(true);
    fetch(url)
      .then(response => response.json())
      .then(json => {
        setData(json);
        setIsLoading(false);
        setError(null);
      })
      .catch(e => {
        setIsLoading(false);
        setData(null);
        setError(e);
      });
  };

  const fetchStatus = { data, isLoading, error };

  return [fetchStatus, loadData];
};

export default useFetch;