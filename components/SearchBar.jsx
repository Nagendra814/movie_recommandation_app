import React from "react";


export default function SearchBar({ query, setQuery, handleSearch }) {
return (
<div className="flex gap-2 mt-6 justify-center">
<input
type="text"
className="w-1/2 p-2 rounded-lg text-white"
placeholder="Search movies..."
value={query}
onChange={(e) => setQuery(e.target.value)}
/>
<button
onClick={handleSearch}
className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg"
>
Search
</button>
</div>
);
}