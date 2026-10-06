"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [progress, setProgress] = useState({
    totalQuizzes: 0,
    totalQuestions: 0,
    correctAnswers: 0,
  });

  useEffect(() => {
    const savedProgress = localStorage.getItem("studyProgress");

    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    }
  }, []);

  const accuracy =
    progress.totalQuestions > 0
      ? Math.round(
          (progress.correctAnswers / progress.totalQuestions) * 100
        )
      : 0;

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-6 sm:px-8 lg:px-10">

        {/* NAVBAR */}
        <nav className="mb-12 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 px-5 py-4 backdrop-blur-xl">

          {/* Logo */}
          <Link href="/study" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/20">
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
              </svg>
            </div>

            <div>
              <h2 className="text-lg font-bold">
                StudyMate <span className="text-cyan-400">AI</span>
              </h2>

              <p className="hidden text-[10px] text-slate-500 sm:block">
                Your intelligent study companion
              </p>
            </div>
          </Link>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <div className="hidden text-right sm:block">
              <p className="text-sm font-medium text-slate-200">
                Kuldeep Singh
              </p>

              <p className="text-xs text-slate-500">
                Student
              </p>
            </div>

            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-blue-400/20 bg-blue-500/10 text-sm font-semibold text-blue-300">
              K
            </div>

            <button
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-400 transition hover:border-red-500/40 hover:bg-red-500/20"
            >
              Logout
            </button>
          </div>
        </nav>

        {/* HERO */}
        <section className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1.5 text-xs font-medium text-blue-300">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            Learning Dashboard
          </div>

          <div className="mt-5 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-lg text-blue-400">
                Welcome back, Kuldeep 👋
              </p>

              <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
                Ready to learn?
              </h1>

              <p className="mt-3 max-w-xl text-slate-400">
                Continue your learning journey, practice with AI-generated
                quizzes, and keep improving your skills.
              </p>
            </div>

            <div className="text-left md:text-right">
              <p className="text-xs uppercase tracking-wider text-slate-600">
                Your accuracy
              </p>

              <p className="mt-1 text-3xl font-bold text-cyan-400">
                {accuracy}%
              </p>
            </div>
          </div>
        </section>

        {/* MAIN CARDS */}
        <div className="grid gap-6 lg:grid-cols-3">

          {/* STUDY MATERIAL */}
          <Link
            href="/study"
            className="group rounded-2xl border border-white/10 bg-slate-900/70 p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:shadow-xl hover:shadow-blue-950/20"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-blue-400">
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
                </svg>
              </div>

              <span className="text-xl text-slate-700 transition group-hover:text-blue-400">
                →
              </span>
            </div>

            <h2 className="mt-6 text-xl font-semibold">
              Study Material
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Generate AI-powered learning material tailored to your topic
              and learning needs.
            </p>

            <div className="mt-6 text-sm font-medium text-blue-400">
              Start Learning →
            </div>
          </Link>

          {/* QUIZ */}
          <Link
            href="/quiz"
            className="group rounded-2xl border border-white/10 bg-slate-900/70 p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-emerald-400/40 hover:shadow-xl hover:shadow-emerald-950/20"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-500/10 text-emerald-400">
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M5 4h14v16H5z" />
                  <path d="m8 9 2 2 5-5" />
                  <path d="M8 15h8" />
                </svg>
              </div>

              <span className="text-xl text-slate-700 transition group-hover:text-emerald-400">
                →
              </span>
            </div>

            <h2 className="mt-6 text-xl font-semibold">
              Quiz Mode
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Test your knowledge with AI-generated questions and track your
              performance.
            </p>

            <div className="mt-6 text-sm font-medium text-emerald-400">
              Start Quiz →
            </div>
          </Link>

          {/* PROGRESS */}
          <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-7 backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-500/10 text-cyan-400">
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M4 19V5" />
                  <path d="M4 19h17" />
                  <path d="M8 16v-5" />
                  <path d="M12 16V8" />
                  <path d="M16 16v-3" />
                  <path d="M20 16V5" />
                </svg>
              </div>

              <span className="text-sm font-medium text-cyan-400">
                {accuracy}% accuracy
              </span>
            </div>

            <h2 className="mt-6 text-xl font-semibold">
              Your Progress
            </h2>

            {/* Progress bar */}
            <div className="mt-5">
              <div className="mb-2 flex justify-between text-xs">
                <span className="text-slate-500">
                  Overall performance
                </span>

                <span className="text-slate-300">
                  {accuracy}%
                </span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-700"
                  style={{ width: `${accuracy}%` }}
                />
              </div>
            </div>

            {/* Stats */}
            <div className="mt-6 grid grid-cols-3 gap-2">
              <Stat
                value={progress.totalQuizzes}
                label="Quizzes"
              />

              <Stat
                value={progress.totalQuestions}
                label="Questions"
              />

              <Stat
                value={progress.correctAnswers}
                label="Correct"
              />
            </div>
          </div>
        </div>

        {/* QUICK STATS */}
        <section className="mt-8">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500">
            Learning Overview
          </h2>

          <div className="grid gap-4 sm:grid-cols-3">

            <OverviewCard
              title="Quizzes Completed"
              value={progress.totalQuizzes}
              description="Keep practicing"
              icon="✓"
            />

            <OverviewCard
              title="Questions Attempted"
              value={progress.totalQuestions}
              description="Every question counts"
              icon="?"
            />

            <OverviewCard
              title="Correct Answers"
              value={progress.correctAnswers}
              description="Great progress"
              icon="★"
            />

          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-12 border-t border-white/5 py-6 text-center text-xs text-slate-600">
          StudyMate AI · Learn smarter. Practice better. Grow faster.
        </footer>
      </div>
    </main>
  );
}

/* Stat component */
function Stat({ value, label }) {
  return (
    <div className="rounded-xl border border-white/5 bg-slate-950/50 p-3 text-center">
      <p className="text-lg font-bold text-slate-200">
        {value}
      </p>

      <p className="mt-1 text-[10px] uppercase tracking-wide text-slate-600">
        {label}
      </p>
    </div>
  );
}

/* Overview card */
function OverviewCard({ title, value, description, icon }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-900/60 p-5">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 text-sm font-bold text-blue-400">
        {icon}
      </div>

      <div>
        <p className="text-2xl font-bold text-white">
          {value}
        </p>

        <p className="text-xs font-medium text-slate-400">
          {title}
        </p>

        <p className="mt-1 text-[10px] text-slate-600">
          {description}
        </p>
      </div>
    </div>
  );
}