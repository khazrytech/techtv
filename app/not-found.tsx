import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 pt-16 text-center">
      <div>
        <p className="text-sm font-bold uppercase tracking-[.3em] text-red-400">404</p>
        <h1 className="mt-3 text-4xl font-black">Title not found</h1>
        <p className="mt-3 text-white/45">The movie or series you requested does not exist.</p>
        <Link href="/" className="mt-7 inline-block rounded-full bg-white px-6 py-3 font-bold text-black">Back Home</Link>
      </div>
    </div>
  );
}