import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Movie } from "@/lib/data";
import { MovieCard } from "./movie-card";

export function MovieSection({ title, movies }: { title: string; movies: Movie[] }) {
  return (
    <section>
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-2xl font-black sm:text-3xl">{title}</h2>
        <Link href="/movies" className="flex items-center gap-1 text-sm text-white/55 hover:text-white">View all <ArrowRight size={16} /></Link>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </section>
  );
}