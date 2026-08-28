'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [movies, setMovies] = useState<any[]>([]);
  const [featured, setFeatured] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiKey = '7f986e6422a0567ea19d9718a2a00ef';
    fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.results) {
          setMovies(data.results);
          setFeatured(data.results[0]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-red-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pb-20">
      {/* CINEMATIC HERO BANNER */}
      {featured && (
        <div className="relative w-full h-[70vh] flex items-end p-6 md:p-12 overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent z-10" />
          <img
            src={`https://image.tmdb.org/t/p/original${featured.backdrop_path}`}
            alt={featured.title}
            className="absolute inset-0 w-full h-full object-cover filter brightness-75 scale-105"
          />
          <div className="relative z-20 max-w-2xl space-y-4">
            <span className="bg-red-600 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
              🔥 #1 Trending Pro
            </span>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight drop-shadow-lg">
              {featured.title}
            </h1>
            <p className="text-gray-200 text-sm md:text-base line-clamp-3 drop-shadow">
              {featured.overview}
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <Link
                href={`/watch/${featured.id}`}
                className="bg-white text-black font-bold px-8 py-3 rounded-xl flex items-center space-x-2 hover:bg-red-600 hover:text-white transition shadow-xl"
              >
                <span>▶ Watch Now</span>
              </Link>
              <button className="bg-zinc-800/80 backdrop-blur-md text-white font-semibold px-6 py-3 rounded-xl border border-zinc-700 hover:bg-zinc-700 transition">
                + My List
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TRENDING NOW ROWS */}
      <div className="px-6 md:px-12 mt-8 space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-black tracking-wide border-l-4 border-red-600 pl-3">Trending Now</h2>
          <span className="text-sm text-red-500 font-semibold cursor-pointer hover:underline">View all →</span>
        </div>
        <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
          {movies.map((movie) => (
            <Link
              key={movie.id}
              href={`/watch/${movie.id}`}
              className="min-w-[150px] md:min-w-[200px] flex-shrink-0 group relative cursor-pointer"
            >
              <div className="rounded-xl overflow-hidden aspect-[2/3] bg-zinc-900 border border-zinc-800 transition transform group-hover:scale-105 group-hover:border-red-500 shadow-xl">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-2 text-sm font-semibold truncate group-hover:text-red-500 transition">
                {movie.title}
              </p>
              <span className="text-xs text-gray-400 font-medium">⭐ {movie.vote_average?.toFixed(1)} • {movie.release_date?.split('-')[0]}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
