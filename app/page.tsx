'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [movies, setMovies] = useState<any[]>([]);
  const [featured, setFeatured] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Weka API key yako hapa ili iweze kusomeka moja kwa moja kwenye browser
    const apiKey = '7f986e6422a0567ea19d9718a2a00ef'; 
    
    fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}&language=en-US`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.results && data.results.length > 0) {
          setMovies(data.results);
          setFeatured(data.results[0]); // Movie ya kwanza inakuwa Hero Banner
        } else {
          console.log("Hakuna data ya movies iliyopatikana.");
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Kosa wakati wa kuunganisha na TMDB API:', err);
        setLoading(false);
      });
  }, []);

  // Loading spinner
  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-red-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pb-16">
      {/* CINEMATIC HERO BANNER */}
      {featured && (
        <div className="relative w-full h-[75vh] flex items-end p-6 md:p-12 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/50 to-transparent z-10" />
          <img
            src={`https://image.tmdb.org/t/p/original${featured.backdrop_path}`}
            alt={featured.title || featured.name}
            className="absolute inset-0 w-full h-full object-cover filter brightness-75"
          />
          <div className="relative z-20 max-w-3xl space-y-4">
            <span className="bg-red-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">🔥 #1 Trending Now</span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-xl">
              {featured.title || featured.name}
            </h1>
            <p className="text-gray-300 text-sm md:text-base line-clamp-3 drop-shadow-md">
              {featured.overview}
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <Link href={`/watch/${featured.id}`} className="bg-white text-black font-bold px-8 py-3 rounded-lg flex items-center space-x-2 hover:bg-gray-200 transition shadow-2xl">
                <span>▶ Watch Now</span>
              </Link>
              <button className="bg-zinc-800/70 backdrop-blur-sm text-white font-medium px-6 py-3 rounded-lg border border-zinc-700 hover:bg-zinc-700 transition">
                + My List
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TRENDING ROWS */}
      <div className="px-6 md:px-12 mt-10 space-y-8">
        <h2 className="text-2xl font-bold tracking-wide border-l-4 border-red-600 pl-3">Trending Movies</h2>
        <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
          {movies.map((movie) => (
            <Link key={movie.id} href={`/watch/${movie.id}`} className="min-w-[160px] md:min-w-[200px] flex-shrink-0 group relative block transform transition duration-300 hover:scale-105">
              <div className="aspect-[2/3] rounded-xl overflow-hidden bg-zinc-900 shadow-lg border border-zinc-800 group-hover:border-zinc-500">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title || movie.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-3 text-sm font-semibold truncate group-hover:text-red-400 transition">
                {movie.title || movie.name}
              </p>
              <p className="text-xs text-gray-400">⭐ {movie.vote_average?.toFixed(1)} • {movie.release_date?.split('-')[0]}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
