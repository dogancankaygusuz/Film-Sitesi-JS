import { useState, useEffect } from "react";
import type { IMovie } from "../Interfaces/IMovie";
import AddMovieForm from "../Components/AddMovieForm";
import MovieItem from "../Components/MovieItem";

function HomePage() {
  const[movies, setMovies] = useState<IMovie[]>(() => {
    const savedMovies = localStorage.getItem("myMovies");
    if (savedMovies) {
      return JSON.parse(savedMovies);
    }
    return[];
  });

  useEffect(() => {
    localStorage.setItem("myMovies", JSON.stringify(movies));
  }, [movies]);

  const addMovie = (title: string) => {
    const newMovie: IMovie = {
      id: Date.now(),
      title: title,
      isWatched: false,
    };
    setMovies([...movies, newMovie]);
  };

  const toggleWatched = (id: number) => {
    setMovies(
      movies.map((movie) =>
        movie.id === id ? { ...movie, isWatched: !movie.isWatched } : movie
      )
    );
  };

  const deleteMovie = (id: number) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  const editMovie = (id: number, newTitle: string) => {
    setMovies(
      movies.map((movie) =>
        movie.id === id ? { ...movie, title: newTitle } : movie
      )
    );
  };

  const totalMovies = movies.length;
  const watchedMovies = movies.filter((m) => m.isWatched).length;

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex justify-between items-center bg-gray-800 p-4 rounded-lg mb-6 shadow-md border border-gray-700">
        <div className="text-center">
          <p className="text-sm text-gray-400">Toplam</p>
          <p className="text-2xl font-bold text-white">{totalMovies}</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-400">İzlenen</p>
          <p className="text-2xl font-bold text-green-400">{watchedMovies}</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-400">Kalan</p>
          <p className="text-2xl font-bold text-yellow-400">{totalMovies - watchedMovies}</p>
        </div>
      </div>

      <AddMovieForm addMovie={addMovie} />

      <div className="mt-6">
        {movies.length === 0 ? (
          <div className="text-center mt-10 p-6 bg-gray-800/50 rounded-lg border border-gray-700 border-dashed">
            <p className="text-gray-400">Listeniz şu an boş.</p>
            <p className="text-sm text-gray-500 mt-2">Hemen yukarıdan ilk filmini ekle!</p>
          </div>
        ) : (
          movies.map((movie) => (
            <MovieItem
              key={movie.id}
              movie={movie}
              onToggle={toggleWatched}
              onDelete={deleteMovie}
              onEdit={editMovie} 
            />
          ))
        )}
      </div>
    </div>
  );
}

export default HomePage;