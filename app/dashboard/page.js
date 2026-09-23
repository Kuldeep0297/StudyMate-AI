
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

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-start justify-between">
          <div>
            <p className="text-blue-400">
              Welcome back, Kuldeep 👋
            </p>

            <h1 className="mt-2 text-4xl font-bold">
              StudyMate Dashboard
            </h1>

            <p className="mt-3 text-slate-400">
              Learn smarter. Practice better. Grow faster.
            </p>
          </div>

          <button
            onClick={() => signOut({ callbackUrl: "/login" })}
            className="rounded-xl bg-red-500 px-5 py-3 font-semibold hover:bg-red-600"
          >
            Logout
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/"
            className="rounded-2xl border border-slate-700 bg-slate-900 p-6 hover:border-blue-500"
          >
            <div className="text-3xl">📚</div>
            <h2 className="mt-4 text-xl font-semibold">
              Study Material
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Generate AI-powered learning material.
            </p>
            <span className="mt-4 inline-block text-sm text-blue-400">
              Start Learning →
            </span>
          </Link>

          <Link
            href="/quiz"
            className="rounded-2xl border border-slate-700 bg-slate-900 p-6 hover:border-blue-500"
          >
            <div className="text-3xl">📝</div>
            <h2 className="mt-4 text-xl font-semibold">
              Quiz Mode
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Practice with AI-generated questions.
            </p>
            <span className="mt-4 inline-block text-sm text-green-400">
              Start Quiz →
            </span>
          </Link>

          <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6">
            <div className="text-3xl">📊</div>

            <h2 className="mt-4 text-xl font-semibold">
              Progress
            </h2>

            <div className="mt-4 space-y-2 text-sm text-slate-300">
              <p>
                Total Quizzes:{" "}
                <span className="font-bold text-blue-400">
                  {progress.totalQuizzes}
                </span>
              </p>

              <p>
                Total Questions:{" "}
                <span className="font-bold text-blue-400">
                  {progress.totalQuestions}
                </span>
              </p>

              <p>
                Correct Answers:{" "}
                <span className="font-bold text-green-400">
                  {progress.correctAnswers}
                </span>
              </p>

              <p>
                Accuracy:{" "}
                <span className="font-bold text-yellow-400">
                  {progress.totalQuestions > 0
                    ? Math.round(
                        (progress.correctAnswers /
                          progress.totalQuestions) *
                          100
                      )
                    : 0}
                  %
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}