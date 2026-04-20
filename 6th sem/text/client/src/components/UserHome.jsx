import React from "react";

const UserHome = () => {
  // Dummy data (later replace with API)
  const attemptedQuizzes = [
    { id: 1, title: "JavaScript Basics", score: 8, total: 10 },
    { id: 2, title: "DSA Quiz", score: 12, total: 15 },
  ];

  const activeQuiz = {
    id: 3,
    title: "React Quiz",
    questions: 10,
  };

  const totalScore = attemptedQuizzes.reduce(
    (acc, quiz) => acc + quiz.score,
    0
  );

  const totalMarks = attemptedQuizzes.reduce(
    (acc, quiz) => acc + quiz.total,
    0
  );

  return (
    <div className="space-y-6">
      {/* Heading */}
      <h1 className="text-3xl font-bold">Dashboard Overview</h1>

      {/* Total Score */}
      <div className="bg-white p-6 rounded-2xl shadow">
        <h2 className="text-xl font-semibold mb-2">Total Score</h2>
        <p className="text-2xl font-bold text-blue-600">
          {totalScore} / {totalMarks}
        </p>
      </div>

      {/* Active Quiz */}
      <div className="bg-white p-6 rounded-2xl shadow">
        <h2 className="text-xl font-semibold mb-4">Active Quiz</h2>

        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold">{activeQuiz.title}</h3>
            <p>{activeQuiz.questions} Questions</p>
          </div>

          <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
            Start Now
          </button>
        </div>
      </div>

      {/* Attempted Quizzes */}
      <div className="bg-white p-6 rounded-2xl shadow">
        <h2 className="text-xl font-semibold mb-4">
          Attempted Quizzes
        </h2>

        <div className="space-y-3">
          {attemptedQuizzes.map((quiz) => (
            <div
              key={quiz.id}
              className="flex justify-between items-center border p-3 rounded-lg"
            >
              <h3>{quiz.title}</h3>
              <p className="font-semibold">
                {quiz.score} / {quiz.total}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserHome;