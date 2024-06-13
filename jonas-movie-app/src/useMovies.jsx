import { useState, useEffect } from 'react';

export function useMovies(query, callback) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(
    function () {
      callback?.();
      const controller = new AbortController();
      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError('');
          const res = await fetch(
            `http://www.omdbapi.com/?i=tt3896198&apikey=${
              import.meta.env.VITE_OMDB_API_KEY
            }&s=${query}`,
            { signal: controller.signal }
          );

          if (!res.ok) {
            throw new Error('something went wrong with fetching new movies');
          }

          const data = await res.json();
          if (data.Response === 'False')
            throw new Error('movie not found. try another search');

          setMovies(data.Search);
        } catch (err) {
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }

      if (query.length < 3) {
        setMovies([]);
        setError('');
        return;
      }
      fetchMovies();
    },
    [query]
  );

  return { movies, isLoading, error };
}
