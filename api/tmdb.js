const API_KEY = "257b6eab";
const BASE_URL = "https://www.omdbapi.com/";

export async function searchMovies(query) {
  const res = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${query}`);
  const data = await res.json();
  return data.Search || []; 
}

export async function getMovieDetails(id) {
  const res = await fetch(`${BASE_URL}?apikey=${API_KEY}&i=${id}&plot=full`);
  return res.json();
}

// OMDB does NOT support recommendations → generate based on same genre
export async function getRecommendations(title) {
  const res = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${title}`);
  const data = await res.json();
  return data.Search || [];
}
