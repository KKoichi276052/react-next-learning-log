import { useEffect, useState } from "react";

const RANDOM_QUOTE_URL = "https://api.quotable.io/random";

export default function QuoteFetcher() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchInitialQuote() {
      const response = await fetch(RANDOM_QUOTE_URL);
      setData(await response.json());
      setIsLoading(false);
    }
    fetchInitialQuote();
  }, []);

  async function fetchQuote() {
    const response = await fetch(RANDOM_QUOTE_URL);
    setData(await response.json());
  }

  return (
    <div>
      {/* <button onClick={fetchQuote}> Get Quote Using Handler</button> */}
      {isLoading && <p>Loading...</p>}
      {data.content && <h1>{data.content}</h1>}
      {data.author && <h1>{data.author}</h1>}
    </div>
  );
}
