"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, User, Film, LogIn } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export function Navbar() {
  const pathname = usePathname();
  const [search, setSearch] = useState("");

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#050507]/75 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-5 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="shrink-0 text-xl font-black tracking-tight">
          Tech<span className="text-red-500">TV</span>
        </Link>

        <nav className="hidden items-center gap-5 text-sm text-white/65 md:flex">
          <Link className={pathname === "/" ? "text-white" : "hover:text-white"} href="/">Home</Link>
          <Link className={pathname.startsWith("/movies") ? "text-white" : "hover:text-white"} href="/movies">Movies</Link>
          <Link className="hover:text-white" href="/profile">My List</Link>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (search.trim()) window.location.href = `/movies?q=${encodeURIComponent(search.trim())}`;
            }}
            className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 sm:flex"
          >
            <Search size={16} className="text-white/45" />
            <input
              aria-label="Search movies"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
              className="w-28 bg-transparent text-sm outline-none placeholder:text-white/35"
            />
          </form>
          <Link href="/profile" className="rounded-full border border-white/10 bg-white/5 p-2.5 hover:bg-white/10">
            <User size={18} />
          </Link>
          <Link href="/login" className="hidden rounded-full bg-white px-4 py-2 text-sm font-bold text-black sm:block">
            Sign In
          </Link>
        </div>
      </div>
    </header>
  );
}