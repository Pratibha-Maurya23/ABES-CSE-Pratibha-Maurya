import React from "react";

const Result = () => {
  const score = 8;
  const total = 10;

  return (
    <div className="p-6 text-center">
      <h2 className="text-3xl font-bold mb-4">Result</h2>

      <p className="text-xl">
        Your Score: {score} / {total}
      </p>

      <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg">
        Go to Dashboard
      </button>
    </div>
  );
};

export default Result;