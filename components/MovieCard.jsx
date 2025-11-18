import React from "react";
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie.imdbID}`}>
      <div className="bg-gray-800 p-3 rounded-xl hover:scale-105 transition duration-300 shadow-lg">
        
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300"}
          alt={movie.Title}
          className="rounded-lg w-full h-64 object-cover"
        />

        <h3 className="text-lg mt-2 font-semibold">{movie.Title}</h3>
        <p className="text-gray-400">{movie.Year}</p>

      </div>
    </Link>
  );
}
