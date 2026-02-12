import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Special handler for About Us: navigate if not on home, else scroll
  const handleAboutClick = useCallback(
    (e) => {
      e.preventDefault();
      if (location.pathname !== '/') {
        navigate('/', { state: { scrollToAbout: true } });
      } else {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    [location.pathname, navigate]
  );

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="font-bold text-xl text-indigo-700 tracking-wide">
          <span className="inline-block align-middle mr-2">📚</span>
          BookApp
        </div>
        <div className="flex space-x-6">
          <Link
            to="/"
            className="text-gray-700 font-medium hover:text-indigo-600 px-2 py-1 transition-colors duration-200 rounded-md bg-transparent"
          >
            Home
          </Link>
          {/* Use button for About Us because it may scroll rather than navigate */}
          <button
            onClick={handleAboutClick}
            className="text-gray-700 font-medium hover:text-indigo-600 px-2 py-1 transition-colors duration-200 rounded-md bg-transparent border-0 cursor-pointer"
            type="button"
          >
            About Us
          </button>
          <Link
            to="/wishlist"
            className="text-gray-700 font-medium hover:text-indigo-600 px-2 py-1 transition-colors duration-200 rounded-md bg-transparent"
          >
            Wishlist
          </Link>
          <Link
            to="/cart"
            className="text-gray-700 font-medium hover:text-indigo-600 px-2 py-1 transition-colors duration-200 rounded-md bg-transparent"
          >
            My Cart
          </Link>
          <Link
            to="/login"
            className="text-gray-700 font-medium hover:text-indigo-600 px-2 py-1 transition-colors duration-200 rounded-md bg-transparent"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
