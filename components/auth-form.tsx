"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { Film, LockKeyhole, Mail, UserRound } from "lucide-react";
import { motion } from "framer-motion";

export function AuthForm({ mode }: { mode: "login" | "register" }) {
  const register = mode === "register";
  const [message, setMessage] = useState("");

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage(register ? "Account created. You can now sign in." : "Signed in successfully.");
    if (!register) setTimeout(() => (window.location.href = "/"), 600);
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(239,35,60,.22),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(37,99,235,.20),transparent_32%)]" />
      <div className="absolute inset-0 opacity-20" style={{backgroundImage:"url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1800&q=70')",backgroundSize:"cover",backgroundPosition:"center"}} />
      <motion.form
        onSubmit={submit}
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass relative w-full max-w-md rounded-3xl p-7 shadow-2xl sm:p-9"
      >
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-red-500 to-blue-600"><Film /></div>
          <h1 className="text-3xl font-black">{register ? "Create your account" : "Welcome back"}</h1>
          <p className="mt-2 text-sm text-white/45">{register ? "Start your TechTV watchlist." : "Continue watching your favorites."}</p>
        </div>

        {register && <Field icon={<UserRound size={17} />} label="Name" type="text" placeholder="Your name" />}
        <Field icon={<Mail size={17} />} label="Email" type="email" placeholder="you@example.com" />
        <Field icon={<LockKeyhole size={17} />} label="Password" type="password" placeholder="••••••••" />

        <button className="mt-5 w-full rounded-xl bg-white py-3.5 font-bold text-black transition hover:scale-[1.01]">
          {register ? "Create Account" : "Sign In"}
        </button>

        {message && <p className="mt-4 text-center text-sm text-emerald-400">{message}</p>}

        <p className="mt-6 text-center text-sm text-white/45">
          {register ? "Already have an account? " : "New to TechTV? "}
          <Link className="font-bold text-white hover:text-red-400" href={register ? "/login" : "/register"}>
            {register ? "Sign in" : "Register"}
          </Link>
        </p>
      </motion.form>
    </div>
  );
}

function Field({ icon, label, type, placeholder }: { icon: React.ReactNode; label: string; type: string; placeholder: string }) {
  return (
    <label className="mt-4 block">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-white/45">{label}</span>
      <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/25 px-3">
        <span className="text-white/40">{icon}</span>
        <input required type={type} placeholder={placeholder} className="w-full bg-transparent py-3.5 text-sm outline-none placeholder:text-white/25" />
      </div>
    </label>
  );
}