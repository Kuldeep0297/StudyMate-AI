
"use client";

import { useState } from "react";

export default function QuizPage() {
  const [topic, setTopic] = useState("");
  const [quiz, setQuiz] = useState([]);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function generateQuiz() {
    if (!topic.trim()) {
      setError("Please enter a topic");
      return;
    }

    setLoading(true);
    setError("");
    setScore(null);
    setAnswers({});

    try {
      const response = await fetch("/api/quiz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ topic }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to generate quiz");
      }

      setQuiz(data.quiz);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  function submitQuiz() {
    let totalScore = 0;

    quiz.forEach((question, index) => {
      const correctAnswer =
        question.options[Number(question.answer)];

      if (answers[index] === correctAnswer) {
        totalScore++;
      }
    });

    // Save progress in localStorage
    const previousProgress = JSON.parse(
      localStorage.getItem("studyProgress") || "null"
    ) || {
      totalQuizzes: 0,
      totalQuestions: 0,
      correctAnswers: 0,
      history: [],
    };

    const updatedProgress = {
      totalQuizzes: previousProgress.totalQuizzes + 1,
      totalQuestions:
        previousProgress.totalQuestions + quiz.length,
      correctAnswers:
        previousProgress.correctAnswers + totalScore,
      history: [
        ...previousProgress.history,
        {
          topic: topic,
          score: totalScore,
          total: quiz.length,
          date: new Date().toLocaleDateString(),
        },
      ],
    };

    localStorage.setItem(
      "studyProgress",
      JSON.stringify(updatedProgress)
    );

    setScore(totalScore);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-blue-400">
          📝 AI Quiz Mode
        </h1>

        <p className="mt-3 text-slate-400">
          Test your knowledge with AI-generated questions.
        </p>

        <div className="mt-8 rounded-2xl border border-slate-700 bg-slate-900 p-6">
          <input
            type="text"
            placeholder="Enter topic (e.g. Java)"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="w-full rounded-xl bg-slate-800 p-4 text-white outline-none"
          />

          <button
            onClick={generateQuiz}
            disabled={loading}
            className="mt-4 w-full rounded-xl bg-blue-600 p-4 font-semibold hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Generating..." : "Generate Quiz ✨"}
          </button>
        </div>

        {error && (
          <p className="mt-4 rounded-xl bg-red-900 p-4 text-red-200">
            {error}
          </p>
        )}

        {score !== null && (
          <div className="mt-6 rounded-2xl bg-green-900 p-6 text-center">
            <h2 className="text-3xl font-bold">
              Your Score: {score} / {quiz.length}
            </h2>

            <button
              onClick={() => setScore(null)}
              className="mt-4 rounded-xl bg-green-600 px-6 py-3 font-semibold"
            >
              Review Answers
            </button>
          </div>
        )}

        <div className="mt-8 space-y-6">
          {quiz.map((question, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-700 bg-slate-900 p-6"
            >
              <h2 className="text-xl font-semibold">
                {index + 1}. {question.question}
              </h2>

              <div className="mt-4 space-y-3">
                {question.options.map((option, optionIndex) => (
                  <label
                    key={optionIndex}
                    className="flex cursor-pointer gap-3 rounded-xl bg-slate-800 p-4 hover:bg-slate-700"
                  >
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={option}
                      checked={answers[index] === option}
                      onChange={() =>
                        setAnswers({
                          ...answers,
                          [index]: option,
                        })
                      }
                    />

                    <span>{option}</span>
                  </label>
                ))}
              </div>

              {score !== null && (
                <p className="mt-4 text-sm text-green-400">
                  Correct Answer:{" "}
                  {question.options[Number(question.answer)]}
                </p>
              )}
            </div>
          ))}
        </div>

        {quiz.length > 0 && score === null && (
          <button
            onClick={submitQuiz}
            className="mt-8 w-full rounded-xl bg-green-600 p-4 text-lg font-bold hover:bg-green-700"
          >
            Submit Quiz ✅
          </button>
        )}
      </div>
    </main>
  );
}