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
import { useMovies } from './useMovies';
import { useLocalStorageState } from './useLocalStorageState';

export default function App() {
  const [query, setQuery] = useState('');
  const [selectedId, setSelectedId] = useState(null);

  const { movies, isLoading, error } = useMovies(query, handleCloseMovie);
  const [watched, setWatched] = useLocalStorageState('watched');

  const handleSelectMovie = (id) => {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  };

  function handleCloseMovie() {
    setSelectedId(null);
  }

  const handleAddWatched = (movie) => {
    setWatched((watched) =>
      watched.some((watchedMovie) => watchedMovie.imdbID === movie.imdbID)
        ? watched
        : [...watched, movie]
    );

    // localStorage.setItem('watched', JSON.stringify([...watched, movie]));
  };

  const handleDeleteWatched = (id) => {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  };

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
