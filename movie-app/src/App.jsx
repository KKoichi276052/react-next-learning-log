import './App.css';
import Navbar from './Layouts/Navbar';
import Main from './Layouts/Main';
import { useState, useEffect } from 'react';
import Logo from './Components/Logo';
import Search from './Components/Search';
import NumResult from './Components/NumResults';
import Box from './Components/Box';
import MovieList from './Components/MovieList';
import WatchedMovieList from './Components/WatchedMovieList';
import WatchedSummary from './Components/WatchedSummary';
import Loader from './Components/Loader';
import ErrorMessage from './Components/ErrorMessage';
import MovieDetails from './Components/MovieDetails';

export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');
  const [selectedId, setSelectedId] = useState(null);

  const handleSelectMovie = (id) => {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  };

  const handleCloseMovie = () => {
    setSelectedId(null);
  };

  const handleAddWatched = (movie) => {
    setWatched((watched) =>
      watched.some((watchedMovie) => watchedMovie.imdbID === movie.imdbID)
        ? watched
        : [...watched, movie]
    );
  };

  const handleDeleteWatched = (id) => {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  };

  useEffect(
    function () {
      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError('');
          const res = await fetch(
            `http://www.omdbapi.com/?i=tt3896198&apikey=${
              import.meta.env.VITE_OMDB_API_KEY
            }&s=${query}`
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

  return (
    <>
      <Navbar>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <NumResult movies={movies} />
      </Navbar>
      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMovieList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
