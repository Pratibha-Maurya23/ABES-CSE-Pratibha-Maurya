import React from "react";

const UserProfile = () => {
  const user = {
    name: "Pratibha",
    email: "pratibha@gmail.com",
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>

      <p className="mb-2"><strong>Name:</strong> {user.name}</p>
      <p className="mb-4"><strong>Email:</strong> {user.email}</p>

      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
        Edit Profile
      </button>
    </div>
  );
};

export default UserProfile;