
import { useState } from 'react';

const Book = (props) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleWishlist = () => {
    setIsWishlisted((prev) => !prev);
  };

  const handleAddToCart = () => {
    setAddedToCart(true);
  };

  const handleGoToCart = () => {
    // redirect to /cart (or whatever cart path)
    window.location.href = "/cart";
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden max-w-sm w-80 transform hover:-translate-y-2">
      <div className="relative w-full h-64 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
        <div className="w-full h-full flex items-center justify-center">
          <img
            src={props.img}
            alt={props.title}
            className="rounded-lg shadow-md object-cover w-full h-full"
            style={{ maxWidth: "100%", maxHeight: "100%", aspectRatio: "3/4" }}
          />
        </div>
        {/* Wishlist button */}
        <button
          onClick={handleWishlist}
          className={`absolute top-4 right-4 text-2xl transition-colors duration-200 rounded-full p-2
            ${isWishlisted ? "bg-pink-100 text-pink-600" : "bg-white text-gray-300 hover:text-pink-400"}
            shadow-sm hover:bg-pink-50`}
          title={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
        >
          {isWishlisted ? (
            <span role="img" aria-label="In wishlist">💖</span>
          ) : (
            <span role="img" aria-label="Add to wishlist">🤍</span>
          )}
        </button>
      </div>
      
      <div className="p-6">
        <h4 className="text-xl font-bold text-gray-800 mb-2 truncate">
          {props.title}
        </h4>
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-indigo-600">
            ₹{props.price}
          </span>
        </div>
        
        {/* Add to Cart section */}
        {!addedToCart ? (
          <button
            onClick={handleAddToCart}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 rounded-lg shadow-md transition mb-2"
          >
            Add to Cart
          </button>
        ) : (
          <button
            onClick={handleGoToCart}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded-lg shadow-md transition"
          >
            Go to Cart
          </button>
        )}
      </div>
    </div>
  )
}

export default Book
