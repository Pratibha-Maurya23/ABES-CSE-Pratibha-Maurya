import React, { useState } from 'react'

const initialCartItems = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    price: 399,
    quantity: 1,
    cover:
      "https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg",
  },
  {
    id: 2,
    title: "Deep Work",
    author: "Cal Newport",
    price: 499,
    quantity: 2,
    cover:
      "https://images-na.ssl-images-amazon.com/images/I/81tWwmAvfNL.jpg",
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  // Update quantity of an item
  const handleQuantityChange = (id, delta) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + delta),
            }
          : item
      )
    );
  };

  // Remove item from cart (optional feature)
  const handleRemove = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  // Calculate total price
  const cartTotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
      <div className="max-w-5xl mx-auto px-4 py-10 mt-8">
        <h2 className="text-3xl font-bold text-indigo-700 mb-8 text-center flex items-center justify-center gap-2">
          <span role="img" aria-label="cart">🛒</span>
          My Cart
        </h2>
        {cartItems.length === 0 ? (
          <div className="text-center text-gray-500 py-16 bg-white rounded-2xl shadow-lg">
            Your cart is empty. <br />
            <span className="text-sm text-gray-400">Go add some books to your cart!</span>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left side: Cart Items */}
            <div className="flex-1 bg-white rounded-2xl shadow-md p-6">
              <ul className="divide-y divide-gray-200">
                {cartItems.map(item => (
                  <li
                    key={item.id}
                    className="flex items-center py-6 gap-5"
                  >
                    <img
                      src={item.cover}
                      alt={item.title}
                      className="w-20 h-28 object-cover rounded-lg shadow-md border"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-lg text-gray-800 truncate">{item.title}</div>
                      <div className="text-sm text-gray-500 mt-1">{item.author}</div>
                      <div className="flex items-center gap-4 mt-3">
                        <span className="text-indigo-600 font-bold text-base">₹{item.price}</span>
                        {/* Quantity Control */}
                        <div className="flex items-center border rounded-md px-2 bg-gray-50">
                          <button
                            className="px-2 text-lg font-bold text-gray-500 hover:text-indigo-700 focus:outline-none"
                            onClick={() => handleQuantityChange(item.id, -1)}
                            title="Decrease quantity"
                            disabled={item.quantity <= 1}
                          >
                            –
                          </button>
                          <span className="mx-2 font-semibold text-gray-700">{item.quantity}</span>
                          <button
                            className="px-2 text-lg font-bold text-gray-500 hover:text-indigo-700 focus:outline-none"
                            onClick={() => handleQuantityChange(item.id, 1)}
                            title="Increase quantity"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    <button
                      className="ml-2 px-4 py-2 rounded bg-red-500 hover:bg-red-600 text-white font-medium shadow transition"
                      title="Remove from cart"
                      onClick={() => handleRemove(item.id)}
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            {/* Right side: Total Calculation */}
            <div className="w-full md:w-80 bg-gray-50 rounded-2xl shadow-md p-6 h-fit">
              <div className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">Price Details</div>
              <div className="flex flex-col gap-4">
                {/* List each item's name, qty, and subtotal */}
                {cartItems.length > 0 ? (
                  <div className="space-y-2">
                    {cartItems.map(item => (
                      <div className="flex justify-between items-center" key={item.id}>
                        <span className="truncate max-w-[120px] text-gray-700" title={item.title}>
                          {item.title} x{item.quantity}
                        </span>
                        <span className="text-gray-700 font-medium">
                          ₹{item.price * item.quantity}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-gray-400 italic mb-2">Your cart is empty.</div>
                )}

                {/* Show summary */}
                <div className="flex justify-between text-gray-700 mt-4">
                  <span>
                    Price ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} item{cartItems.reduce((sum, item) => sum + item.quantity, 0) !== 1 && "s"})
                  </span>
                  <span>
                    ₹
                    {cartItems.reduce(
                      (acc, item) => acc + item.price * item.quantity,
                      0
                    )}
                  </span>
                </div>
                {/* <div className="flex justify-between text-green-600">
                  <span>Discount</span>
                  <span>−₹0</span>
                </div> */}
                <div className="flex justify-between text-xl font-bold border-t border-dashed pt-5 mt-5 text-indigo-700">
                  <span>Total Amount</span>
                  <span>
                    ₹
                    {cartItems.reduce(
                      (acc, item) => acc + item.price * item.quantity,
                      0
                    )}
                  </span>
                </div>
              </div>
              <button
                className="mt-8 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl shadow-lg transition text-lg"
                disabled={cartItems.length === 0}
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
  );
};

export default Cart
