"use client";

import { LogOut, Mail, Settings, UserRound } from "lucide-react";
import type { Movie } from "@/lib/data";
import { MovieCard } from "./movie-card";
import { useEffect, useState } from "react";

export function ProfileClient({ movies }: { movies: Movie[] }) {
  const [watchlist, setWatchlist] = useState<string[]>([]);

  useEffect(() => {
    try { setWatchlist(JSON.parse(localStorage.getItem("techtv_watchlist") || "[]")); } catch {}
  }, []);

  const list = movies.filter((m) => watchlist.includes(m.id));
  const shown = list.length ? list : movies;

  return (
    <div className="mx-auto min-h-screen max-w-7xl px-4 pb-20 pt-28 sm:px-6 lg:px-8">
      <div className="glass flex flex-col gap-6 rounded-3xl p-6 sm:flex-row sm:items-center sm:p-8">
        <div className="grid h-20 w-20 shrink-0 place-items-center rounded-3xl bg-gradient-to-br from-red-500 to-blue-600"><UserRound size={34} /></div>
        <div className="flex-1"><p className="text-sm text-white/40">TechTV Member</p><h1 className="text-3xl font-black">My Profile</h1><div className="mt-2 flex items-center gap-2 text-sm text-white/45"><Mail size={14} /> member@techtv.local</div></div>
        <div className="flex gap-2"><button className="rounded-xl border border-white/10 p-3 hover:bg-white/5"><Settings size={18} /></button><button className="rounded-xl border border-white/10 p-3 hover:bg-white/5"><LogOut size={18} /></button></div>
      </div>

      <section className="mt-12">
        <div className="mb-5 flex items-end justify-between"><div><p className="text-sm text-white/40">Your collection</p><h2 className="text-2xl font-black">My Watchlist</h2></div><span className="text-sm text-white/35">{list.length} saved</span></div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {shown.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </div>
        {!list.length && <p className="mt-5 text-sm text-white/35">Your list is empty, so popular titles are shown as examples. Add a title from any movie card.</p>}
      </section>
    </div>
  );
}