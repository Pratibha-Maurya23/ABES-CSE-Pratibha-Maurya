import React from 'react';
const wishlistBooks = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    cover:
      "https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg",
    description:
      "A proven framework for improving every day and building good habits for life.",
  },
  {
    id: 2,
    title: "The Alchemist",
    author: "Paulo Coelho",
    cover:
      "https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg",
    description:
      "A magical story about listening to our hearts and following our dreams.",
  },
  {
    id: 3,
    title: "Deep Work",
    author: "Cal Newport",
    cover:
      "https://images-na.ssl-images-amazon.com/images/I/81tWwmAvfNL.jpg",
    description:
      "Rules for focused success in a distracted world.",
  },
];

const Wishlist = () => {
  return (
    <div className="max-w-5xl mx-auto mt-16 px-4">
      <h2 className="text-3xl font-extrabold text-indigo-700 mb-6 text-center flex items-center justify-center gap-2">
        <span role="img" aria-label="wishlist">💖</span>
        Your Wishlist
      </h2>
      {wishlistBooks.length === 0 ? (
        <div className="text-center text-gray-500 mt-16">
          Your wishlist is empty. Start adding some books!
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {wishlistBooks.map((book) => (
            <div
              key={book.id}
              className="rounded-xl border shadow-lg bg-white hover:shadow-2xl transition-shadow duration-200 flex flex-col items-center p-4"
            >
              <img
                src={book.cover}
                alt={book.title}
                className="w-32 h-44 object-cover rounded-md mb-3 shadow-md"
              />
              <div className="flex-1 w-full flex flex-col">
                <h3 className="text-lg font-semibold text-gray-800">
                  {book.title}
                </h3>
                <p className="text-gray-500 text-sm mb-3">{book.author}</p>
                <p className="text-gray-600 text-xs flex-1 mb-4">{book.description}</p>
                <button
                  className="mt-auto inline-block px-4 py-1.5 rounded bg-pink-500 hover:bg-pink-600 text-white font-medium shadow transition"
                  title="Remove from wishlist"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
