import { useEffect } from 'react';

export default function MovieDetails({ selectedId, onCloseMovie }) {
  useEffect(function () {
    async function fetchMovieDetails() {
      const res = await fetch(
        `http://www.omdbapi.com/?i=tt3896198&apikey=${KEY}&i=${selectedId}`
      );

      const data = await res.json();
      console.log(data);
    }
    fetchMovieDetails();
  }, []);

  return (
    <div className="details">
      <button className="btn-back" onClick={onCloseMovie}>
        &larr;
      </button>
      {selectedId}
    </div>
  );
}
