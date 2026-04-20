import React from "react";

const quizzes = [
  { id: 1, title: "JavaScript Basics", total: 10, status: "completed", score: 8 },
  { id: 2, title: "DSA Quiz", total: 15, status: "active" },
  { id: 3, title: "React Quiz", total: 10, status: "not_attempted" },
];

const QuizPanel = () => {
  const handleAction = (quiz) => {
    if (quiz.status === "active") {
      console.log("Resume Quiz", quiz.id);
    } else if (quiz.status === "completed") {
      console.log("View Result", quiz.id);
    } else {
      console.log("Start Quiz", quiz.id);
    }
  };

  const getButton = (quiz) => {
    if (quiz.status === "active") {
      return (
        <button
          onClick={() => handleAction(quiz)}
          className="bg-green-500 text-white px-4 py-2 rounded-lg"
        >
          Resume
        </button>
      );
    }

    if (quiz.status === "completed") {
      return (
        <button
          onClick={() => handleAction(quiz)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          View Result
        </button>
      );
    }

    return (
      <button
        onClick={() => handleAction(quiz)}
        className="bg-gray-800 text-white px-4 py-2 rounded-lg"
      >
        Start Quiz
      </button>
    );
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Quizzes</h2>

      <div className="grid gap-4">
        {quizzes.map((quiz) => (
          <div
            key={quiz.id}
            className="bg-white p-5 rounded-xl shadow flex justify-between items-center"
          >
            <div>
              <h3 className="text-lg font-semibold">{quiz.title}</h3>
              <p>{quiz.total} Questions</p>

              {quiz.status === "completed" && (
                <p className="text-sm text-gray-500">
                  Score: {quiz.score}/{quiz.total}
                </p>
              )}

              {quiz.status === "active" && (
                <p className="text-sm text-green-600 font-medium">
                  Active Quiz
                </p>
              )}
            </div>

            {getButton(quiz)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizPanel;