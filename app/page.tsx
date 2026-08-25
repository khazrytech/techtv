import { Hero } from "@/components/hero";
import { MovieSection } from "@/components/movie-section";
import { demoMovies } from "@/lib/data";

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Hero movie={demoMovies[0]} />
      <div className="mx-auto max-w-7xl space-y-12 px-4 pb-20 sm:px-6 lg:px-8">
        <MovieSection title="Trending Now" movies={demoMovies.slice(0, 6)} />
        <MovieSection title="Top Rated" movies={demoMovies.slice(2, 8)} />
        <MovieSection title="Action Movies" movies={demoMovies.filter((m) => m.genre.includes("Action")).slice(0, 6)} />
        <MovieSection title="TV Series" movies={demoMovies.filter((m) => m.type === "series").slice(0, 6)} />
      </div>
    </div>
  );
}