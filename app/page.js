
"use client";

import ReactMarkdown from "react-markdown";
import { useState } from "react";

export default function Home() {
  const [topic, setTopic] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function generateStudyMaterial() {
    if (!topic.trim()) {
      setError("Please enter a study topic.");
      return;
    }

    setLoading(true);
    setError("");
    setResult("");

    try {
      const response = await fetch("/api/study", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ topic }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setResult(data.result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <div className="mb-10 text-center">
          <div className="mb-4 text-5xl">🎓</div>

          <h1 className="text-4xl font-bold tracking-tight">
            StudyMate AI
          </h1>

          <p className="mt-3 text-slate-400">
            Your personal AI-powered study assistant
          </p>
        </div>

        {/* Input Card */}
        <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-xl">

          <label className="mb-3 block text-lg font-semibold">
            What do you want to learn today?
          </label>

          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                generateStudyMaterial();
              }
            }}
            placeholder="e.g. Java OOPs, Machine Learning, DBMS"
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-blue-500"
          />

          <button
            onClick={generateStudyMaterial}
            disabled={loading}
            className="mt-5 w-full rounded-xl bg-blue-600 px-4 py-3 font-semibold transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Generating..." : "✨ Generate Study Material"}
          </button>

          {error && (
            <p className="mt-4 text-sm text-red-400">
              {error}
            </p>
          )}

        </div>

        {/* Results */}
        {result && (
          <div className="mt-8 rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-xl">

            <h2 className="mb-5 text-2xl font-bold text-blue-400">
              📚 Your Study Material
            </h2>

            <div className="leading-7 text-slate-200">

              <ReactMarkdown
                components={{
                  h1: ({ children }) => (
                    <h1 className="mb-4 mt-6 text-3xl font-bold text-blue-400">
                      {children}
                    </h1>
                  ),

                  h2: ({ children }) => (
                    <h2 className="mb-3 mt-6 text-2xl font-bold text-blue-300">
                      {children}
                    </h2>
                  ),

                  h3: ({ children }) => (
                    <h3 className="mb-2 mt-4 text-xl font-semibold text-white">
                      {children}
                    </h3>
                  ),

                  p: ({ children }) => (
                    <p className="mb-4">
                      {children}
                    </p>
                  ),

                  ul: ({ children }) => (
                    <ul className="mb-4 list-disc space-y-2 pl-6">
                      {children}
                    </ul>
                  ),

                  ol: ({ children }) => (
                    <ol className="mb-4 list-decimal space-y-2 pl-6">
                      {children}
                    </ol>
                  ),

                  strong: ({ children }) => (
                    <strong className="font-bold text-blue-300">
                      {children}
                    </strong>
                  ),

                  code: ({ children }) => (
                    <code className="rounded bg-slate-800 px-1.5 py-0.5 text-sm text-green-300">
                      {children}
                    </code>
                  ),

                  hr: () => (
                    <hr className="my-6 border-slate-700" />
                  ),
                }}
              >
                {result}
              </ReactMarkdown>

            </div>
          </div>
        )}

        
{/* Footer */}
<footer className="mt-10 text-center text-sm text-slate-500">
  <p>
    <span className="font-semibold text-blue-400">
      Kuldeep Singh
    </span>
    {" "}• AI-Powered Learning Platform
  </p>

  <p className="mt-1 text-xs text-slate-600">
    Engineered with Next.js & Generative AI
  </p>

  <a
    href="https://www.linkedin.com/in/kuldeep-singh-565b11340"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-3 inline-block font-medium text-blue-400 transition hover:text-blue-300"
  >
    ↗ Connect on LinkedIn
  </a>
</footer>

      </div>
    </main>
  );
}