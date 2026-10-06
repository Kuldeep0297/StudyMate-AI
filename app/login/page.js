"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    setLoading(true);

    await signIn("google", {
      callbackUrl: "/dashboard",
    });
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Main container */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-5 py-10">
        <div className="grid w-full max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 shadow-2xl shadow-blue-950/20 backdrop-blur-xl lg:grid-cols-2">
          
          {/* LEFT SECTION */}
          <section className="relative hidden flex-col justify-between overflow-hidden p-10 lg:flex xl:p-14">
            {/* Decorative glow */}
            <div className="absolute -right-20 top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/20">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
                  </svg>
                </div>

                <div>
                  <h2 className="text-xl font-bold tracking-tight">
                    StudyMate <span className="text-cyan-400">AI</span>
                  </h2>
                  <p className="text-xs text-slate-500">
                    Your intelligent study companion
                  </p>
                </div>
              </div>

              {/* Main heading */}
              <div className="mt-24 max-w-md">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1.5 text-xs font-medium text-blue-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  AI-Powered Learning
                </div>

                <h1 className="text-4xl font-bold leading-tight xl:text-5xl">
                  Learn smarter.
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    Achieve more.
                  </span>
                </h1>

                <p className="mt-6 text-base leading-7 text-slate-400">
                  StudyMate AI helps you learn, practice and understand
                  concepts with the power of artificial intelligence.
                </p>
              </div>

              {/* Features */}
              <div className="mt-12 space-y-4">
                <Feature
                  icon="✦"
                  title="AI-Powered Assistance"
                  description="Get intelligent help whenever you need it."
                />

                <Feature
                  icon="✓"
                  title="Learn at Your Pace"
                  description="Study according to your goals and learning style."
                />

                <Feature
                  icon="⚡"
                  title="Smart & Simple"
                  description="Focus on learning instead of managing your study."
                />
              </div>
            </div>

            <p className="relative mt-12 text-xs text-slate-600">
              Built for students who want to learn better.
            </p>
          </section>

          {/* RIGHT SECTION */}
          <section className="flex items-center justify-center p-6 sm:p-10 lg:p-12">
            <div className="w-full max-w-md">
              
              {/* Mobile logo */}
              <div className="mb-10 flex items-center justify-center gap-3 lg:hidden">
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

                <h2 className="text-xl font-bold">
                  StudyMate <span className="text-cyan-400">AI</span>
                </h2>
              </div>

              {/* Login card */}
              <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-7 shadow-xl sm:p-9">
                
                <div className="text-center">
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-7 w-7 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path d="M12 3v18" />
                      <path d="M3 12h18" />
                      <path d="M5.5 5.5l13 13" />
                      <path d="M18.5 5.5l-13 13" />
                    </svg>
                  </div>

                  <h1 className="text-2xl font-bold sm:text-3xl">
                    Welcome back
                  </h1>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Sign in to continue your personalized learning journey.
                  </p>
                </div>

                {/* Google button */}
                <button
                  onClick={handleGoogleLogin}
                  disabled={loading}
                  className="mt-8 flex w-full items-center justify-center gap-3 rounded-xl border border-slate-700 bg-white px-5 py-3.5 font-semibold text-slate-900 shadow-lg transition duration-200 hover:-translate-y-0.5 hover:bg-slate-100 hover:shadow-blue-500/10 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
                >
                  {loading ? (
                    <>
                      <span className="h-5 w-5 animate-spin rounded-full border-2 border-slate-300 border-t-slate-900" />
                      Signing you in...
                    </>
                  ) : (
                    <>
                      {/* Google logo */}
                      <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5"
                      >
                        <path
                          fill="#4285F4"
                          d="M21.35 12.23c0-.79-.07-1.55-.23-2.27H12v4.3h5.24a4.48 4.48 0 0 1-1.94 2.94v2.45h3.14c1.84-1.7 2.91-4.2 2.91-7.42Z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 21.5c2.63 0 4.84-.87 6.45-2.35l-3.14-2.45c-.87.58-1.98.92-3.31.92-2.54 0-4.7-1.72-5.47-4.03H3.28v2.53A9.74 9.74 0 0 0 12 21.5Z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M6.53 13.59A5.85 5.85 0 0 1 6.23 12c0-.55.1-1.08.3-1.59V7.88H3.28A9.5 9.5 0 0 0 2.5 12c0 1.53.37 2.98 1.03 4.12l3-2.53Z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 6.38c1.43 0 2.71.49 3.72 1.45l2.79-2.79C16.83 3.47 14.63 2.5 12 2.5a9.74 9.74 0 0 0-8.72 5.38l3.25 2.53C7.3 8.1 9.46 6.38 12 6.38Z"
                        />
                      </svg>

                      Continue with Google
                    </>
                  )}
                </button>

                {/* Divider */}
                <div className="my-7 flex items-center gap-4">
                  <div className="h-px flex-1 bg-slate-800" />
                  <span className="text-xs text-slate-600">SECURE LOGIN</span>
                  <div className="h-px flex-1 bg-slate-800" />
                </div>

                {/* Security message */}
                <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
                  <div className="flex gap-3">
                    <div className="mt-0.5 text-emerald-400">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4Z" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-slate-300">
                        Secure authentication
                      </p>
                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        Your account is securely authenticated through Google.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-7 text-center text-xs leading-5 text-slate-600">
                  By continuing, you agree to use StudyMate AI responsibly
                  for your learning journey.
                </p>
              </div>

              <p className="mt-6 text-center text-xs text-slate-600">
                © 2026 StudyMate AI · Learn. Practice. Grow.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

/* Feature component */
function Feature({ icon, title, description }) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-blue-400/10 bg-blue-500/10 text-sm text-blue-400">
        {icon}
      </div>

      <div>
        <h3 className="text-sm font-semibold text-slate-200">
          {title}
        </h3>

        <p className="mt-1 text-xs leading-5 text-slate-500">
          {description}
        </p>
      </div>
    </div>
  );
}