"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Bookmark, Info, Play, Star, TrendingUp } from "lucide-react";
import type { Movie } from "@/lib/data";

export function Hero({ movie }: { movie: Movie }) {
  return (
    <section className="relative min-h-[680px] overflow-hidden pt-16">
      <img
        src={movie.backdrop}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-80"
      />
      <div className="hero-overlay absolute inset-0" />
      <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-end px-4 pb-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          className="max-w-2xl"
        >
          <div className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[.25em] text-red-400">
            <TrendingUp size={15} /> #1 Trending
          </div>
          <h1 className="text-5xl font-black leading-[.95] sm:text-7xl">{movie.title}</h1>
          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-white/70">
            <span>{movie.year}</span><span>•</span><span>{movie.duration}</span><span>•</span>
            <span className="flex items-center gap-1 text-yellow-300"><Star size={15} fill="currentColor" /> {movie.rating}</span>
          </div>
          <p className="mt-5 max-w-xl leading-7 text-white/65">{movie.description}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href={`/watch/${movie.id}`} className="flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-black transition hover:scale-105">
              <Play size={18} fill="currentColor" /> Watch Now
            </Link>
            <button
              onClick={() => {
                const current = JSON.parse(localStorage.getItem("techtv_watchlist") || "[]");
                if (!current.includes(movie.id)) localStorage.setItem("techtv_watchlist", JSON.stringify([...current, movie.id]));
              }}
              className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-3 font-bold backdrop-blur-xl hover:bg-white/15"
            >
              <Bookmark size={18} /> My List
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}