
"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4">
      <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center shadow-xl">
        <h1 className="text-3xl font-bold text-white">
          Welcome to StudyMate AI
        </h1>

        <p className="mt-3 text-slate-400">
          Sign in to continue your learning journey.
        </p>

        <button
          onClick={() =>
            signIn("google", {
              callbackUrl: "/dashboard",
            })
          }
          className="mt-8 flex w-full items-center justify-center gap-3 rounded-xl bg-white px-4 py-3 font-semibold text-slate-900 transition hover:bg-slate-200"
        >
          <span className="text-lg">G</span>
          Continue with Google
        </button>

        <p className="mt-6 text-xs text-slate-500">
          Secure authentication powered by Google
        </p>
      </div>
    </main>
  );
}