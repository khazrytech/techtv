import { MoviesCatalog } from "@/components/movies-catalog";
import { demoMovies } from "@/lib/data";

export default function MoviesPage() {
  return <MoviesCatalog movies={demoMovies} />;
}