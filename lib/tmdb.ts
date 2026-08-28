
const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY || 'WEKA_API_KEY_YAKO_HAPA';
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

export async function fetchTrendingMovies() {
  const res = await fetch(`${TMDB_BASE_URL}/trending/movie/day?api_key=${TMDB_API_KEY}`);
  const data = await res.json();
  return data.results || [];
}

export async function fetchMovieDetails(id: string) {
  const res = await fetch(`${TMDB_BASE_URL}/movie/${id}?api_key=${TMDB_API_KEY}&append_to_response=videos`);
  const data = await res.json();
  return data;
}
