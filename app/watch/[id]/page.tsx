'use client';
import { useParams } from 'next/navigation';

export default function WatchPage() {
  const params = useParams();
  const { id } = params;

  // Kutumia Embed Player salama ya HD kwa ajili ya TMDB IDs
  const embedUrl = `https://vidsrc.xyz/embed/movie?tmdb=${id}`;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between">
      {/* Top Navbar */}
      <div className="p-6 flex items-center justify-between bg-gradient-to-b from-black to-transparent">
        <h1 className="text-xl font-black text-red-600 tracking-wider">TechTV Player</h1>
        <a href="/" className="text-sm bg-zinc-800 px-4 py-2 rounded-lg hover:bg-zinc-700 transition">
          ← Back to Home
        </a>
      </div>

      {/* Video Player Container */}
      <div className="flex-1 flex items-center justify-center px-4 py-2">
        <div className="w-full max-w-5xl aspect-video bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl border border-zinc-800">
          <iframe
            src={embedUrl}
            className="w-full h-full border-0"
            allowFullScreen
          />
        </div>
      </div>

      <div className="p-6 text-center text-xs text-gray-500">
        TechTV Streaming Engine powered by TMDB API. Enjoy your movie!
      </div>
    </div>
  );
}
