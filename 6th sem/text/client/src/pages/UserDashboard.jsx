import React, { useState } from "react";
import UserProfile from "../components/UserProfile";
import QuizPanel from "../components/QuizPanel";
import Result from "../components/Result";
import Home from "../components/UserHome";

const UserDashboard = () => {
  const [active, setActive] = useState("home");

  const renderContent = () => {
    switch (active) {
      case "home":
        return <Home />;
      case "profile":
        return <UserProfile />;
      case "quiz":
        return <QuizPanel />;
      case "result":
        return <Result />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg p-4">
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>

        <ul className="space-y-3">
          <li>
            <button onClick={() => setActive("home")} className="w-full text-left px-3 py-2 rounded-lg hover:bg-blue-100">
              Home
            </button>
          </li>

          <li>
            <button onClick={() => setActive("profile")} className="w-full text-left px-3 py-2 rounded-lg hover:bg-blue-100">
              User Profile
            </button>
          </li>

          <li>
            <button onClick={() => setActive("quiz")} className="w-full text-left px-3 py-2 rounded-lg hover:bg-blue-100">
              Quiz Panel
            </button>
          </li>

          <li>
            <button onClick={() => setActive("result")} className="w-full text-left px-3 py-2 rounded-lg hover:bg-blue-100">
              Result
            </button>
          </li>
        </ul>
      </div>

      {/* Content */}
      <div className="flex-1 p-6">
        {renderContent()}
      </div>
    </div>
  );
};

export default UserDashboard;