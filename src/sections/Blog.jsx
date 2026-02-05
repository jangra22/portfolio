import React from 'react';
import RevealOnScroll from '../components/common/RevealOnScroll';

const Blog = () => {
  const articles = [
    {
      title: "The Future of AI in Web Development",
      date: "Dec 15, 2025",
      snippet: "Exploring how LLMs are reshaping the frontend landscape and what it means for developers."
    },
    {
      title: "Mastering Tailwind CSS for Luxury UIs",
      date: "Nov 28, 2025",
      snippet: "A deep dive into creating premium, minimal designs using utility-first CSS."
    },
    {
      title: "Scalable MERN Architectures",
      date: "Oct 10, 2025",
      snippet: "Best practices for building robust and scalable full-stack applications."
    }
  ];

  return (
    <section id="blog" className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="max-w-4xl mx-auto w-full">
        <RevealOnScroll>
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Insights
          </h2>
        </RevealOnScroll>

        <div className="space-y-6">
          {articles.map((article, index) => (
            <RevealOnScroll key={index}>
              <div className="group flex flex-col md:flex-row justify-between items-start md:items-center p-6 border-b border-white/10 hover:bg-white/5 transition-colors cursor-pointer">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#d4af37] transition-colors">{article.title}</h3>
                  <p className="text-gray-400 text-sm">{article.snippet}</p>
                </div>
                <span className="text-gray-500 text-sm mt-4 md:mt-0 whitespace-nowrap">{article.date}</span>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
