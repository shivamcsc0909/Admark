// ContactUs.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ContactUs() {
  const [showModal, setShowModal] = useState(false);
  const [posts, setPosts] = useState([
    {
      id: 1,
      category: 'SEO',
      title: '10 SEO Trends to Watch in 2025',
      excerpt: 'Naye search algorithms aur user intent ke hisaab se apni strategy kaise banayein – practical tips, examples aur action steps.',
      image: 'https://picsum.photos/seed/seo/1200/800',
      thumb: 'https://picsum.photos/seed/seo_thumb/400/300',
      color: '#2563eb'
    },
    {
      id: 2,
      category: 'PPC',
      title: 'How to Maximize Your PPC ROI',
      excerpt: 'Smart bidding, negative keywords aur landing page testing ke proven tips.',
      image: 'https://picsum.photos/seed/ppc/1200/800',
      thumb: 'https://picsum.photos/seed/ppc_thumb/400/300',
      color: '#dc2626'
    },
    {
      id: 3,
      category: 'Local SEO',
      title: 'The Power of Local SEO for Small Businesses',
      excerpt: 'Local listings aur review management se footfall kaise badhayein.',
      image: 'https://picsum.photos/seed/local/1200/800',
      thumb: 'https://picsum.photos/seed/local_thumb/400/300',
      color: '#16a34a'
    },
    {
      id: 4,
      category: 'Content',
      title: 'Content Systems That Scale',
      excerpt: 'Repeating content workflows aur repurposing se productivity kaise badhe.',
      image: 'https://picsum.photos/seed/content/1200/800',
      thumb: 'https://picsum.photos/seed/content_thumb/400/300',
      color: '#7c3aed'
    },
    {
      id: 5,
      category: 'Dev',
      title: 'Technical SEO Checklist for Developers',
      excerpt: 'Crawling, indexing aur performance optimizations—jo devs ko pata hona chahiye.',
      image: 'https://picsum.photos/seed/dev/1200/800',
      thumb: 'https://picsum.photos/seed/dev_thumb/400/300',
      color: '#ea580c'
    }
  ]);

  const [swapping, setSwapping] = useState(false);
  const [swappedIndex, setSwappedIndex] = useState(null);

  const openCalendlyModal = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  const calendlyUrl = "https://calendly.com/samsmith-admark/30min";

  const handleSmallCardClick = (index) => {
    if (index === 0 || swapping) return;

    setSwapping(true);
    setSwappedIndex(index);

    setTimeout(() => {
      const newPosts = [...posts];
      [newPosts[0], newPosts[index]] = [newPosts[index], newPosts[0]];
      setPosts(newPosts);
      
      setTimeout(() => {
        setSwapping(false);
        setSwappedIndex(null);
      }, 120);
    }, 160);
  };

  const handleReadMore = () => {
    console.log('Open post:', posts[0].title);
  };

  const bigPost = posts[0];
  const smallPosts = posts.slice(1);

  // Animation variants
  const cardHover = {
    initial: { 
      scale: 1,
      y: 0,
      boxShadow: "0 8px 25px rgba(0,0,0,0.08)"
    },
    hover: { 
      scale: 1.02,
      y: -8,
      boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const buttonHover = {
    hover: { 
      scale: 1.05,
      y: -2,
      boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    },
    tap: { scale: 0.98 }
  };

  return (
    <div className="contact-us-page">
      {/* Blog Section */}
      <section className="blog-section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Latest Insights & Strategies
          </motion.h2>

          <div className="layout">
            {/* LEFT (big) */}
            <div className="left">
              <motion.div 
                className={`big-card ${swapping ? 'is-swapping' : ''}`}
                onClick={handleReadMore}
                variants={cardHover}
                whileHover="hover"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div 
                  className="big-media"
                  style={{ backgroundImage: `url(${bigPost.image})` }}
                  aria-hidden="true"
                />
                <div className="big-overlay" aria-hidden="true" />

                <div className="big-content">
                  <motion.div 
                    className="big-meta"
                    style={{ background: `${bigPost.color}15`, borderColor: `${bigPost.color}30` }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {bigPost.category}
                  </motion.div>
                  <h3 className="big-title">{bigPost.title}</h3>
                  <p className="big-excerpt">{bigPost.excerpt}</p>
                </div>

                <motion.button 
                  className="read-more"
                  style={{ background: `linear-gradient(135deg, ${bigPost.color}, ${bigPost.color}dd)` }}
                  variants={buttonHover}
                  whileHover="hover"
                  whileTap="tap"
                >
                  READ MORE <span className="arrow">→</span>
                </motion.button>
              </motion.div>
            </div>

            {/* RIGHT */}
            <div className="right">
              <div className="right-grid">
                {smallPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    className={`small-card ${swappedIndex === index + 1 ? 'is-swapping' : ''}`}
                    onClick={() => handleSmallCardClick(index + 1)}
                    tabIndex={0}
                    role="button"
                    variants={cardHover}
                    whileHover="hover"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="small-media">
                      <img src={post.thumb} alt={post.title} />
                    </div>
                    <div className="small-body">
                      <div 
                        className="small-cat"
                        style={{ color: post.color }}
                      >
                        {post.category}
                      </div>
                      <div className="small-title">{post.title}</div>
                      <div className="small-excerpt">{post.excerpt}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <motion.div 
          className="min-h-screen flex flex-col md:flex-row items-start justify-between px-4 md:px-8 py-12 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* LEFT */}
          <div className="md:w-1/2 space-y-8 w-full">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4 tracking-tight">
                Have a Project? <br /> 
                <span style={{ 
                  background: 'linear-gradient(135deg, #2563eb, #16a34a)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  Let's talk!
                </span>
              </h1>
              <p className="text-lg text-gray-600 font-medium">
                Transform your ideas into exceptional digital experiences
              </p>
            </motion.div>

            <motion.ul 
              className="space-y-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {[
                { icon: "🔒", text: "NDA? Absolutely just ask." },
                { icon: "⚡", text: "We'll respond in 24 hours — fast & focused." },
                { icon: "💼", text: "Work with senior UX experts, not juniors." },
                { icon: "🎯", text: "Proven track record of successful projects." }
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start gap-3 text-gray-700 font-medium"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <span className="text-xl mt-1">{item.icon}</span>
                  <span>{item.text}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* Founder box */}
            <motion.div
              className="info-box rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 max-w-md backdrop-blur-sm"
              role="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
            >
              <div className="flex-1">
                <div className="text-xs font-bold tracking-wider mb-1" style={{ color: '#2563eb' }}>Founder & Lead Strategist</div>
                <div className="text-xl font-black mb-2 tracking-tight" style={{ color: '#1e293b' }}>Vishesh Prabhakar</div>
                <div className="text-sm text-gray-600 font-medium">
                  VISHESHPRABHAKAR@ADMARKDIGITALMEDIA@GMAIL.COM
                </div>
              </div>

              <div className="ml-auto">
                <motion.button
                  onClick={openCalendlyModal}
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-bold tracking-wide shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, #2563eb, #16a34a)',
                    color: 'white'
                  }}
                  variants={buttonHover}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <span>📅</span>
                  Schedule a Call
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* RIGHT - Form */}
          <motion.div 
            className="md:w-1/2 mt-10 md:mt-0 p-8 rounded-3xl shadow-xl backdrop-blur-sm w-full"
            style={{
              background: 'rgba(255, 255, 255, 0.8)',
              border: '2px solid rgba(37, 99, 235, 0.1)'
            }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.input
                  type="email"
                  placeholder="Email Address"
                  className="w-full sm:w-1/2 bg-transparent form-field p-4 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none font-medium"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                <motion.input
                  type="text"
                  placeholder="Full Name"
                  className="w-full sm:w-1/2 bg-transparent form-field p-4 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none font-medium"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.select 
                  className="w-full sm:w-1/2 bg-transparent form-field p-4 rounded-xl text-gray-800 focus:outline-none font-medium"
                  whileFocus={{ scale: 1.02 }}
                >
                  <option>Project Budget</option>
                  <option>$1k - $5k</option>
                  <option>$5k - $10k</option>
                  <option>$10k+</option>
                </motion.select>
                <motion.select 
                  className="w-full sm:w-1/2 bg-transparent form-field p-4 rounded-xl text-gray-800 focus:outline-none font-medium"
                  whileFocus={{ scale: 1.02 }}
                >
                  <option>How did you hear about us?</option>
                  <option>Google</option>
                  <option>LinkedIn</option>
                  <option>Referral</option>
                  <option>Social Media</option>
                </motion.select>
              </div>

              <motion.textarea
                placeholder="Tell us about your product and goals..."
                rows="4"
                className="w-full bg-transparent form-field p-4 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none font-medium resize-none"
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              />

              <div className="flex flex-wrap gap-3">
                {[
                  "UI/UX Design", "SaaS Design", "Branding", "CRO",
                  "Mobile App", "Development", "MVP Development", "Web Design"
                ].map((tag, index) => (
                  <motion.button
                    key={tag}
                    type="button"
                    className="border px-4 py-2 rounded-full font-medium text-sm tracking-wide transition-all"
                    style={{
                      borderColor: 'rgba(37, 99, 235, 0.3)',
                      color: '#2563eb',
                      background: 'rgba(37, 99, 235, 0.05)'
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      background: 'rgba(37, 99, 235, 0.1)'
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    {tag}
                  </motion.button>
                ))}
              </div>

              <motion.button
                type="submit"
                className="w-full font-bold py-4 rounded-xl tracking-wide shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, #2563eb, #16a34a)',
                  color: 'white'
                }}
                variants={buttonHover}
                whileHover="hover"
                whileTap="tap"
              >
                Send Message 🚀
              </motion.button>
            </form>

            <motion.p 
              className="text-sm mt-6 text-right font-medium"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <span className="text-gray-600">Prefer email? </span>
              <span style={{ color: '#2563eb' }} className="font-bold">
                VISHESHPRABHAKAR@ADMARKDIGITALMEDIA@GMAIL.COM
              </span>
            </motion.p>
          </motion.div>
        </motion.div>
      </section>

      {/* Modal for Calendly */}
      {showModal && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          aria-modal="true"
          role="dialog"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeModal}
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
          <motion.div 
            className="relative w-[90vw] max-w-3xl rounded-2xl p-6 shadow-2xl backdrop-blur-sm"
            style={{
              background: 'rgba(255, 255, 255, 0.95)',
              border: '2px solid rgba(37, 99, 235, 0.2)'
            }}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <motion.button
              onClick={closeModal}
              aria-label="Close calendly modal"
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 p-2 rounded-full hover:bg-gray-100"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </motion.button>

            <div className="text-gray-800 mb-4 font-bold text-lg tracking-tight">Schedule a Meeting</div>
            <div className="w-full h-[70vh] md:h-[60vh] bg-white rounded-xl overflow-hidden border border-gray-200">
              <iframe
                title="Calendly scheduling"
                src={calendlyUrl}
                className="w-full h-full border-0"
              />
            </div>
            <div className="mt-4 text-right">
              <motion.button
                onClick={closeModal}
                className="px-6 py-2 rounded-xl font-semibold tracking-wide"
                style={{
                  background: 'linear-gradient(135deg, #2563eb, #16a34a)',
                  color: 'white'
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Close
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}

      <style jsx>{`
        .contact-us-page {
          font-family: 'Inter', 'Poppins', ui-sans-serif, system-ui;
        }

        .blog-section {
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%);
          color: #1e293b;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          padding: 60px 0;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, #1e40af 0%, #dc2626 50%, #16a34a 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: -0.02em;
          margin: 0 0 3rem 0;
          text-align: center;
          font-family: 'Poppins', sans-serif;
        }

        .layout {
          display: flex;
          gap: 2rem;
          align-items: flex-start;
        }

        .left {
          flex: 0 0 50%;
          min-width: 320px;
        }

        .right {
          flex: 0 0 50%;
          min-width: 280px;
        }

        .big-card {
          position: relative;
          height: 420px;
          border-radius: 20px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 2rem;
          gap: 1.5rem;
          cursor: pointer;
          border: 2px solid rgba(255, 255, 255, 0.3);
        }

        .big-media {
          position: absolute;
          inset: 0;
          z-index: 0;
          background-size: cover;
          background-position: center;
          filter: contrast(0.9) saturate(1.1) brightness(0.8);
        }

        .big-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.4) 100%);
        }

        .big-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          width: 100%;
        }

        .big-meta {
          display: inline-block;
          padding: 0.5rem 1rem;
          border-radius: 50px;
          color: #1e293b;
          font-weight: 700;
          font-size: 0.8rem;
          width: max-content;
          backdrop-filter: blur(10px);
          border: 2px solid;
          font-family: 'Poppins', sans-serif;
          letter-spacing: 0.05em;
        }

        .big-title {
          margin: 0;
          font-size: 2.2rem;
          line-height: 1.1;
          color: #1e293b;
          letter-spacing: -0.02em;
          text-shadow: 0 2px 10px rgba(255,255,255,0.5);
          max-width: 100%;
          font-weight: 800;
          font-family: 'Poppins', sans-serif;
        }

        .big-excerpt {
          margin: 0;
          color: #475569;
          opacity: 0.9;
          max-width: 100%;
          line-height: 1.5;
          font-size: 1.1rem;
          font-weight: 500;
        }

        .read-more {
          position: absolute;
          right: 1.5rem;
          bottom: 1.5rem;
          z-index: 3;
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 1.5rem;
          border-radius: 12px;
          border: none;
          color: white;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          cursor: pointer;
          font-family: 'Poppins', sans-serif;
          backdrop-filter: blur(10px);
        }

        .read-more .arrow {
          transition: transform 0.3s ease;
        }

        .read-more:hover .arrow {
          transform: translateX(4px);
        }

        .right-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-auto-rows: 180px;
          gap: 1.5rem;
        }

        .small-card {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          display: flex;
          gap: 1rem;
          padding: 1rem;
          align-items: flex-start;
          cursor: pointer;
          border: 2px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 8px 25px rgba(0,0,0,0.08);
        }

        .small-media {
          width: 40%;
          height: 100%;
          flex-shrink: 0;
          border-radius: 12px;
          overflow: hidden;
          background: #f8fafc;
        }

        .small-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .small-body {
          width: 60%;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          align-items: flex-start;
          justify-content: center;
        }

        .small-cat {
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          font-family: 'Poppins', sans-serif;
        }

        .small-title {
          font-size: 1rem;
          font-weight: 700;
          color: #1e293b;
          line-height: 1.2;
          font-family: 'Poppins', sans-serif;
        }

        .small-excerpt {
          font-size: 0.85rem;
          color: #64748b;
          line-height: 1.4;
          margin-top: 0.5rem;
          font-weight: 500;
        }

        .is-swapping {
          transform: scale(0.98);
          opacity: 0.6;
        }

        .contact-section {
          background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #f0fdf4 100%);
          font-family: 'Inter', sans-serif;
        }

        .info-box {
          background: rgba(255, 255, 255, 0.7);
          border: 2px solid rgba(37, 99, 235, 0.1);
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
        }

        .form-field {
          background: rgba(255, 255, 255, 0.6);
          border: 2px solid rgba(37, 99, 235, 0.1);
          color: #1e293b;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .form-field:focus {
          border-color: rgba(37, 99, 235, 0.4);
          background: rgba(255, 255, 255, 0.9);
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
        }

        .form-field:hover {
          border-color: rgba(37, 99, 235, 0.3);
          background: rgba(255, 255, 255, 0.8);
        }

        /* Responsive */
        @media (max-width: 1000px) {
          .big-card { height: 380px; }
          .small-card { grid-auto-rows: 160px; }
        }

        @media (max-width: 820px) {
          .layout { flex-direction: column; }
          .left, .right { flex-basis: 100%; width: 100%; }
          .big-card { height: 400px; }
          .right { margin-top: 2rem; }
        }

        @media (max-width: 768px) {
          .contact-section .min-h-screen {
            flex-direction: column;
          }
          .contact-section .md\\:w-1/2 {
            width: 100%;
          }
        }

        @media (max-width: 520px) {
          .big-card { height: 350px; padding: 1.5rem; }
          .big-title { font-size: 1.8rem; }
          .right-grid { grid-template-columns: 1fr; grid-auto-rows: 140px; }
          .read-more { padding: 0.75rem 1.25rem; font-size: 0.9rem; }
          .container { padding: 0 15px; }
          .section-title { font-size: 2rem; }
        }
      `}</style>
    </div>
  );
}