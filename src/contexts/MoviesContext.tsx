import React, { createContext, useContext, useState, useEffect } from 'react';
import { Movie } from '../types';

interface MoviesContextType {
  movies: Movie[];
  addMovie: (movie: Omit<Movie, 'id'>) => void;
  deleteMovie: (id: number) => void;
  filterByGenre: (genre: string) => Movie[];
}

const MoviesContext = createContext<MoviesContextType | undefined>(undefined);

export const MoviesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [movies, setMovies] = useState<Movie[]>(() => {
    const savedMovies = localStorage.getItem('movies');
    return savedMovies ? JSON.parse(savedMovies) : [];
  });

  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(movies));
  }, [movies]);

  const addMovie = (movie: Omit<Movie, 'id'>) => {
    const newMovie: Movie = {
      ...movie,
      id: Date.now(),
    };
    setMovies([...movies, newMovie]);
  };

  const deleteMovie = (id: number) => {
    setMovies(movies.filter(movie => movie.id !== id));
  };

  const filterByGenre = (genre: string) => {
    return genre === 'all' ? movies : movies.filter(movie => movie.genre === genre);
  };

  return (
    <MoviesContext.Provider value={{ movies, addMovie, deleteMovie, filterByGenre }}>
      {children}
    </MoviesContext.Provider>
  );
};

export const useMovies = () => {
  const context = useContext(MoviesContext);
  if (context === undefined) {
    throw new Error('useMovies must be used within a MoviesProvider');
  }
  return context;
}; 