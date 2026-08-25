"use client";

import { useMemo, useState } from "react";
import { Filter, Search } from "lucide-react";
import type { Movie } from "@/lib/data";
import { MovieCard } from "./movie-card";

const filters = ["All", "Action", "Sci-Fi", "Drama", "Comedy"];

export function MoviesCatalog({ movies }: { movies: Movie[] }) {
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");

  const visible = useMemo(() => movies.filter((m) => {
    const category = filter === "All" || m.genre.includes(filter);
    const q = m.title.toLowerCase().includes(query.toLowerCase());
    return category && q;
  }), [movies, filter, query]);

  return (
    <div className="mx-auto min-h-screen max-w-7xl px-4 pb-20 pt-28 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div><p className="text-sm font-bold uppercase tracking-[.25em] text-red-400">Explore</p><h1 className="mt-2 text-4xl font-black sm:text-5xl">Movie Catalog</h1></div>
        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
          <Search size={17} className="text-white/40" />
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search titles..." className="w-full bg-transparent text-sm outline-none md:w-56" />
        </div>
      </div>

      <div className="my-8 flex flex-wrap items-center gap-2">
        <Filter size={17} className="mr-1 text-white/40" />
        {filters.map((item) => (
          <button key={item} onClick={() => setFilter(item)} className={`rounded-full px-4 py-2 text-sm transition ${filter === item ? "bg-white text-black" : "bg-white/5 text-white/55 hover:bg-white/10 hover:text-white"}`}>
            {item}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {visible.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
      {!visible.length && <div className="py-20 text-center text-white/45">No titles found.</div>}
    </div>
  );
}