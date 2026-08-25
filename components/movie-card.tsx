"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Bookmark, Play, Star } from "lucide-react";
import type { Movie } from "@/lib/data";

export function MovieCard({ movie }: { movie: Movie }) {
  return (
    <motion.div whileHover={{ y: -6, scale: 1.02 }} transition={{ duration: .2 }} className="group">
      <div className="relative aspect-[2/3] overflow-hidden rounded-2xl border border-white/10 bg-white/5">
        <img src={movie.poster} alt={movie.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
        <div className="absolute inset-x-0 bottom-0 p-3">
          <div className="mb-2 flex items-center justify-between text-xs">
            <span className="flex items-center gap-1 text-yellow-300"><Star size={13} fill="currentColor" /> {movie.rating}</span>
            <span className="text-white/65">{movie.year}</span>
          </div>
          <h3 className="truncate font-bold">{movie.title}</h3>
        </div>
        <Link href={`/watch/${movie.id}`} className="absolute inset-0 flex items-center justify-center bg-black/45 opacity-0 transition group-hover:opacity-100" aria-label={`Watch ${movie.title}`}>
          <span className="rounded-full bg-white p-4 text-black shadow-glow"><Play size={22} fill="currentColor" /></span>
        </Link>
        <button
          onClick={() => {
            const current = JSON.parse(localStorage.getItem("techtv_watchlist") || "[]");
            if (!current.includes(movie.id)) localStorage.setItem("techtv_watchlist", JSON.stringify([...current, movie.id]));
          }}
          className="absolute right-2 top-2 rounded-full bg-black/55 p-2 opacity-0 backdrop-blur transition group-hover:opacity-100"
          aria-label="Add to watchlist"
        >
          <Bookmark size={16} />
        </button>
      </div>
      <div className="mt-2 flex flex-wrap gap-1">
        {movie.genre.slice(0, 2).map((g) => <span key={g} className="text-[10px] text-white/45">{g}</span>)}
      </div>
    </motion.div>
  );
}