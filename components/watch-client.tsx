"use client";

import Link from "next/link";
import { Bookmark, CalendarDays, ChevronLeft, Play, Star } from "lucide-react";
import { motion } from "framer-motion";
import type { Movie } from "@/lib/data";
import { MovieCard } from "./movie-card";

export function WatchClient({ movie, related }: { movie: Movie; related: Movie[] }) {
  return (
    <div className="mx-auto max-w-7xl px-4 pb-20 pt-24 sm:px-6 lg:px-8">
      <Link href="/" className="mb-5 inline-flex items-center gap-2 text-sm text-white/50 hover:text-white"><ChevronLeft size={17} /> Back</Link>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="overflow-hidden rounded-3xl border border-white/10 bg-black">
        <div className="aspect-video">
          <video controls poster={movie.backdrop} className="h-full w-full bg-black" preload="metadata">
            <source src={movie.videoUrl} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        </div>
      </motion.div>

      <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_300px]">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-red-500/15 px-3 py-1 text-xs font-bold text-red-300">{movie.type === "series" ? "SERIES" : "MOVIE"}</span>
            <span className="text-sm text-white/45">{movie.year}</span>
            <span className="flex items-center gap-1 text-sm text-yellow-300"><Star size={15} fill="currentColor" /> {movie.rating}</span>
          </div>
          <h1 className="mt-3 text-4xl font-black sm:text-5xl">{movie.title}</h1>
          <p className="mt-5 max-w-3xl leading-7 text-white/55">{movie.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {movie.genre.map((g) => <span key={g} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">{g}</span>)}
          </div>
        </div>
        <aside className="glass rounded-2xl p-5">
          <div className="flex items-center gap-3 text-sm text-white/55"><CalendarDays size={17} /> Release date <span className="ml-auto text-white">{movie.releaseDate}</span></div>
          <div className="mt-4 flex items-center gap-3 text-sm text-white/55"><Play size={17} /> Duration <span className="ml-auto text-white">{movie.duration}</span></div>
          <button onClick={() => {
            const current = JSON.parse(localStorage.getItem("techtv_watchlist") || "[]");
            if (!current.includes(movie.id)) localStorage.setItem("techtv_watchlist", JSON.stringify([...current, movie.id]));
          }} className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3 font-bold text-black">
            <Bookmark size={17} /> Add to My List
          </button>
        </aside>
      </div>

      <section className="mt-14">
        <h2 className="mb-5 text-2xl font-black">Related Movies</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {related.map((item) => <MovieCard key={item.id} movie={item} />)}
        </div>
      </section>
    </div>
  );
}