import React from 'react';

export default function BlogSection() {
  const posts = [
    {
      title: '10 SEO Trends to Watch in 2025',
      category: 'SEO',
      icon: '📊',
      image: '/api/placeholder/400/250' // Add image URLs here
    },
    {
      title: 'How to Maximize Your PPC ROI',
      category: 'PPC',
      icon: '💰',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'The Power of Local SEO for Small Businesses',
      category: 'Local SEO',
      icon: '📍',
      image: '/api/placeholder/400/250'
    }
  ];

  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-16 text-center lg:text-left">
          <div className="mb-8 lg:mb-0">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Latest Insights
              </span>
            </h2>
            <p className="text-xl text-gray-700 mt-4 max-w-2xl">
              Expert tips and industry trends to help you succeed in digital marketing
            </p>
          </div>
          <button className="px-8 py-4 bg-white rounded-2xl font-bold border-2 border-blue-200 text-blue-700 hover:border-purple-300 hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-lg">
            View All Posts →
          </button>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <div 
              key={i}
              className="group cursor-pointer"
            >
              {/* Card Container */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-2xl hover:border-blue-300 transition-all duration-500 hover:scale-105">
                
                {/* Image Container with Icon Overlay */}
                <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl overflow-hidden border border-gray-200 group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300 mb-6 flex items-center justify-center">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50"></div>
                  
                  {/* Icon */}
                  <div className="relative text-5xl transform group-hover:scale-110 transition-transform duration-300">
                    {post.icon}
                  </div>
                </div>

                {/* Category Badge */}
                <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-semibold mb-4 border border-blue-200">
                  {post.category}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                  {post.title}
                </h3>
                
                {/* Read More Button */}
                <button className="flex items-center text-blue-600 font-semibold hover:text-purple-600 transition-colors duration-300 group/btn">
                  Read More 
                  <span className="ml-2 transform group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="lg:hidden text-center mt-12">
          <button className="px-8 py-4 bg-white rounded-2xl font-bold border-2 border-blue-200 text-blue-700 hover:border-purple-300 hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-lg">
            View All Posts →
          </button>
        </div>
      </div>
    </section>
  );
}