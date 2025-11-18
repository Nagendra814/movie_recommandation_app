import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import { searchMovies } from "../api/tmdb";


export default function Home() {
const [query, setQuery] = useState("");
const [movies, setMovies] = useState([]);


const handleSearch = async () => {
const results = await searchMovies(query);
setMovies(results);
};


return (
<div className="p-6">
<SearchBar query={query} setQuery={setQuery} handleSearch={handleSearch} />


<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
{movies.map((movie) => (
<MovieCard key={movie.id} movie={movie} />
))}
</div>
</div>
);
}