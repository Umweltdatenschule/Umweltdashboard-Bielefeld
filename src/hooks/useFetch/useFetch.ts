import { useState, useEffect } from "react";

interface FetchOptions {
  method?: string;
  headers?: HeadersInit;
  body?: BodyInit | null;
}

export function useFetch<T>(url: string, options?: FetchOptions) {
  const [data, setData] = useState<T | null>(null);
  const [isPending, setIsPending] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);

      try {
        const response = await fetch(url, {
          method: options?.method || "GET",
          headers: options?.headers,
          body: options?.body ? JSON.stringify(options.body) : null,
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
  }, [url, options]);

  return { data, isPending, error };
}
