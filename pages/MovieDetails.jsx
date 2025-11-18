import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails, searchMovies } from "../api/tmdb";
import MovieCard from "../components/MovieCard";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [recs, setRecs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // Fetch main movie details
      const data = await getMovieDetails(id);
      setMovie(data);

      // Fake recommendations: search movies by title keyword
      if (data.Title) {
        const recommended = await searchMovies(data.Title.split(" ")[0]);
        setRecs(recommended.filter(m => m.imdbID !== id)); // remove current movie
      }
    }
    fetchData();
  }, [id]);

  if (!movie) return <p className="p-6 text-white">Loading...</p>;

  return (
    <div className="p-6 text-white min-h-screen bg-gray-900">

      {/* Movie Details Section */}
      <div className="flex flex-col md:flex-row gap-10">

        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300"}
          alt={movie.Title}
          className="rounded-xl w-64 shadow-lg"
        />

        <div>
          <h1 className="text-4xl font-bold">{movie.Title}</h1>

          <p className="text-gray-400 mt-2">{movie.Genre}</p>
          <p className="mt-4 text-gray-300">
            {movie.Plot !== "N/A" ? movie.Plot : "No description available."}
          </p>

          <div className="mt-4 space-y-1 text-gray-300">
            <p><strong>Year:</strong> {movie.Year}</p>
            <p><strong>Rating:</strong> ⭐ {movie.imdbRating}</p>
            <p><strong>Runtime:</strong> {movie.Runtime}</p>
            <p><strong>Director:</strong> {movie.Director}</p>
          </div>
        </div>

      </div>

      {/* Recommendations Section */}
      <h2 className="text-2xl font-bold mt-10 mb-4">Similar Movies</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {recs.length > 0 ? (
          recs.map((m) => (
            <MovieCard key={m.imdbID} movie={m} />
          ))
        ) : (
          <p className="text-gray-400">No recommendations found.</p>
        )}
      </div>

    </div>
  );
}
