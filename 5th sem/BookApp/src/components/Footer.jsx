import React, { useState } from 'react'

const Footer = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <footer className="bg-indigo-600 text-white px-4 py-5 mt-12 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        <div className="text-center md:text-left font-medium text-lg flex items-center gap-2">
          <span role="img" aria-label="books">📚</span>
          BookApp &copy; {new Date().getFullYear()}
        </div>
        <div className="flex items-center gap-4 mt-2 md:mt-0">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors duration-200 ${hovered ? "text-yellow-300" : "text-white"}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            title="Visit our GitHub"
          >
            <span role="img" aria-label="github">🌟</span> GitHub
          </a>
          <a
            href="mailto:support@bookapp.com"
            className="hover:text-yellow-300 transition-colors duration-200"
            title="Contact support"
          >
            <span role="img" aria-label="mail">✉️</span> Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer
