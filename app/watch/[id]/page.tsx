import { notFound } from "next/navigation";
import { WatchClient } from "@/components/watch-client";
import { demoMovies } from "@/lib/data";

export default async function WatchPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const movie = demoMovies.find((item) => item.id === id) ?? demoMovies.find((item) => item.id === "1");
  if (!movie) notFound();

  const related = demoMovies.filter((item) => item.id !== movie.id && item.genre.some((g) => movie.genre.includes(g))).slice(0, 6);

  return <WatchClient movie={movie} related={related} />;
}