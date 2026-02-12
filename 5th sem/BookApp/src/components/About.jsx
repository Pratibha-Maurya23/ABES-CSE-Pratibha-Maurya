import React, { useState } from 'react';

const aboutSections = [
  {
    title: "Our Mission",
    emoji: "🎯",
    content:
      "At BookApp, our mission is to foster a love for reading by making it easy to discover, save, and purchase your favorite books. We believe everyone deserves access to inspiring stories and knowledge.",
  },
  {
    title: "Features",
    emoji: "✨",
    content:
      "• Wishlist: Save books you want to read.\n• Cart: Organize your purchases before checkout.\n• Personalized Recommendations (coming soon!).\n• Secure login and account management.",
  },
  {
    title: "Meet the Developer",
    emoji: "🧑‍💻",
    content:
      "Hello! I'm the developer behind BookApp. I built this project to make book discovery and reading more enjoyable—and to practice building modern, delightful user experiences with React.",
  },
  {
    title: "How to Contribute",
    emoji: "🌟",
    content:
      "BookApp is open to feedback! Suggest features, report bugs, or contribute on GitHub. Click below to visit our repo.",
    link: {
      label: "BookApp on GitHub",
      url: "https://github.com/",
    },
  },
];

const About = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = idx => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="max-w-2xl mx-auto mt-16 px-4 pb-12">
      <h1 className="text-4xl font-extrabold mb-8 text-indigo-700 text-center flex items-center gap-2 justify-center">
        <span role="img" aria-label="about">📖</span> About BookApp
      </h1>

      <div className="space-y-4">
        {aboutSections.map((section, idx) => (
          <div key={idx} className="border rounded-lg shadow hover:shadow-md bg-white transition-shadow">
            <button
              className="w-full flex justify-between items-center py-4 px-6 focus:outline-none text-left"
              onClick={() => handleToggle(idx)}
              aria-expanded={openIndex === idx}
              aria-controls={`about-panel-${idx}`}
            >
              <div className="flex items-center gap-2 text-lg font-semibold text-gray-800">
                <span role="img" aria-label={section.title}>{section.emoji}</span>
                {section.title}
              </div>
              <span className="ml-2 text-indigo-500 text-2xl transition-transform"
                style={{transform: openIndex === idx ? "rotate(90deg)" : "rotate(0)"}}
              >›</span>
            </button>
            {openIndex === idx && (
              <div
                id={`about-panel-${idx}`}
                className="px-6 pb-6 text-gray-700 whitespace-pre-line animate-fade-in"
              >
                {section.content}
                {section.link && (
                  <div className="mt-3">
                    <a
                      href={section.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 rounded bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
                    >
                      {section.link.label}
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
