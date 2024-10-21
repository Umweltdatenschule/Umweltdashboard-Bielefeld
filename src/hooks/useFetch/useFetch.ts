import { useState, useEffect, useMemo } from "react";

interface FetchOptions {
  method?: string;
  headers?: HeadersInit;
  body?: BodyInit | null;
}

export function useFetch<T>(url: string, options?: FetchOptions) {
  const [data, setData] = useState<T | null>(null);
  const [isPending, setIsPending] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const memoizedOptions = useMemo(
    () => options,
    [options?.method, options?.headers, options?.body]
  );

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);

      try {
        const response = await fetch(url, {
          method: memoizedOptions?.method || "GET",
          headers: memoizedOptions?.headers,
          body: memoizedOptions?.body ? memoizedOptions.body : null,
        });

        if (!response.ok) throw new Error(response.statusText);

        const json = await response.json();
        setData(json);
        setError(null);
      } catch (err) {
        setError(`${err} Could not fetch data`);
      } finally {
        setIsPending(false);
      }
    };

    fetchData();
  }, [url, memoizedOptions]);

  return { data, isPending, error };
}
