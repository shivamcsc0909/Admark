import React from 'react';
import { motion } from 'framer-motion';

export default function CaseStudy() {
  const caseStudies = [
    {
      id: 1,
      title: 'E-Commerce Revolution',
      client: 'TechStore Inc.',
      industry: 'Electronics Retail',
      challenge: 'Struggling with 78% cart abandonment and declining online sales',
      solution: 'Comprehensive UX redesign, SEO optimization, and intelligent retargeting',
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=1920&q=80',
      results: [
        { metric: 'Revenue', before: '$50K/mo', after: '$200K/mo', increase: '+300%' },
        { metric: 'Traffic', before: '10K visits', after: '45K visits', increase: '+350%' },
        { metric: 'Conversion', before: '1.2%', after: '4.8%', increase: '+300%' },
        { metric: 'ROI', before: '—', after: '450%', increase: '450%' }
      ],
      testimonial: {
        quote: 'AdMark didn\'t just improve our metrics — they transformed our entire business model. We went from struggling to thriving in 6 months.',
        author: 'Sarah Johnson',
        position: 'CEO, TechStore Inc.',
        avatar: '👩‍💼'
      },
      color: '#2563eb'
    },
    {
      id: 2,
      title: 'SaaS Growth Explosion',
      client: 'CloudFlow Solutions',
      industry: 'B2B SaaS',
      challenge: 'Low brand awareness and difficulty generating qualified B2B leads',
      solution: 'Strategic content marketing, LinkedIn advertising, and marketing automation',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80',
      results: [
        { metric: 'Leads', before: '50/mo', after: '300/mo', increase: '+500%' },
        { metric: 'MRR', before: '$25K', after: '$120K', increase: '+380%' },
        { metric: 'Signups', before: '15', after: '90', increase: '+500%' },
        { metric: 'CAC', before: '$450', after: '$247', increase: '-45%' }
      ],
      testimonial: {
        quote: 'The ROI we achieved with AdMark exceeded all expectations. They understand B2B SaaS like no other agency.',
        author: 'Michael Chen',
        position: 'Founder, CloudFlow',
        avatar: '👨‍💼'
      },
      color: '#dc2626'
    },
    {
      id: 3,
      title: 'Local Business Domination',
      client: 'Urban Fitness Centers',
      industry: 'Health & Wellness',
      challenge: 'Competing with large gym chains on a limited marketing budget',
      solution: 'Hyperlocal SEO, Google My Business optimization, and community engagement',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80',
      results: [
        { metric: 'Members', before: '200', after: '850', increase: '+325%' },
        { metric: 'Revenue', before: '$30K/mo', after: '$140K/mo', increase: '+367%' },
        { metric: 'Locations', before: '2', after: '5', increase: '+150%' },
        { metric: 'Ranking', before: '#8', after: '#1', increase: 'Top' }
      ],
      testimonial: {
        quote: 'From 2 struggling locations to 5 thriving centers. AdMark made the impossible happen.',
        author: 'David Martinez',
        position: 'Owner, Urban Fitness',
        avatar: '👨‍⚕️'
      },
      color: '#16a34a'
    }
  ];

  // Animation variants
  const card3DHover = {
    initial: { 
      scale: 1,
      rotateY: 0,
      rotateX: 0,
      boxShadow: "0px 5px 15px rgba(0,0,0,0.08)"
    },
    hover: { 
      scale: 1.03,
      rotateY: 3,
      rotateX: 1,
      boxShadow: "0px 20px 40px rgba(0,0,0,0.15)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const resultCardHover = {
    initial: { 
      scale: 1,
      y: 0
    },
    hover: { 
      scale: 1.08,
      y: -8,
      boxShadow: "0px 15px 30px rgba(0,0,0,0.12)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  const testimonialHover = {
    initial: { 
      scale: 1,
      rotateY: 0
    },
    hover: { 
      scale: 1.02,
      rotateY: 5,
      boxShadow: "0px 20px 40px rgba(0,0,0,0.1)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const floatingAnimation = {
    initial: { y: 0 },
    hover: { 
      y: [-5, 5, -5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="case-studies" className="relative">
      {/* Header Section */}
      <div className="min-h-screen flex items-center justify-center" style={{ 
        background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #f0fdf4 100%)'
      }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              variants={floatingAnimation}
              initial="initial"
              whileHover="hover"
              className="inline-block mb-6"
            >
              <span className="text-4xl">🚀</span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight" style={{
              background: 'linear-gradient(135deg, #1e40af 0%, #dc2626 50%, #16a34a 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontFamily: "'High Tower Text', 'Times New Roman', serif",
              letterSpacing: '0.1em',
              fontWeight: 'normal'
            }}>
              Success Stories
            </h2>
            <p className="text-xl md:text-2xl mb-8 font-medium tracking-wide" style={{ 
              color: '#374151',
              fontFamily: "'Merlin', 'Georgia', serif",
              fontStyle: 'italic'
            }}>
              Real Results • Real Growth • Real Impact
            </p>
            <motion.div 
              className="flex flex-col items-center gap-2 mt-12"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-sm font-semibold tracking-wide" style={{ 
                color: '#2563eb',
                fontFamily: "'Harrington', 'Verdana', sans-serif"
              }}>
                Scroll to explore
              </span>
              <svg className="w-6 h-6" style={{ color: '#2563eb' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Case Study Sections - Full Screen Each */}
      {caseStudies.map((study, index) => (
        <motion.div
          key={study.id}
          className="min-h-screen relative flex items-center"
          style={{
            background: index % 2 === 0 
              ? 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)'
              : 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)'
          }}
          initial="initial"
          whileHover="hover"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(${study.color}20 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }} />
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Column */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
                className="w-full"
              >
                <motion.div
                  variants={card3DHover}
                  className="w-full"
                >
                  <motion.div 
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 shadow-lg"
                    style={{
                      background: `${study.color}15`,
                      border: `2px solid ${study.color}30`
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-lg">🏷️</span>
                    <span style={{ 
                      color: study.color,
                      fontFamily: "'Pressure', 'Arial Black', sans-serif",
                      letterSpacing: '0.05em'
                    }} className="text-sm font-bold tracking-wide">
                      {study.industry}
                    </span>
                  </motion.div>

                  <h3 className="text-4xl md:text-5xl font-black mb-4 leading-tight tracking-tight" style={{ 
                    color: study.color,
                    fontFamily: "'Black Chancery', 'Palatino Linotype', serif",
                    fontWeight: 'normal',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
                  }}>
                    {study.title}
                  </h3>

                  <p className="text-xl font-bold mb-8 tracking-wide" style={{ 
                    color: '#1f2937',
                    fontFamily: "'Merlin', 'Georgia', serif",
                    fontStyle: 'italic'
                  }}>
                    {study.client}
                  </p>

                  <div className="space-y-6 mb-8 w-full">
                    <motion.div 
                      className="p-6 rounded-2xl w-full shadow-lg backdrop-blur-sm"
                      style={{
                        background: 'rgba(255, 255, 255, 0.7)',
                        border: `2px solid ${study.color}20`
                      }}
                      variants={card3DHover}
                      whileHover="hover"
                    >
                      <h4 className="text-lg font-bold mb-3 flex items-center gap-2 tracking-wide" style={{ 
                        color: study.color,
                        fontFamily: "'Harrington', 'Verdana', sans-serif"
                      }}>
                        <span className="text-xl">🎯</span> Challenge
                      </h4>
                      <p className="text-base leading-relaxed tracking-wide" style={{ 
                        color: '#4b5563', 
                        fontWeight: '500',
                        fontFamily: "'Merlin', 'Georgia', serif"
                      }}>
                        {study.challenge}
                      </p>
                    </motion.div>

                    <motion.div 
                      className="p-6 rounded-2xl w-full shadow-lg backdrop-blur-sm"
                      style={{
                        background: 'rgba(255, 255, 255, 0.7)',
                        border: `2px solid ${study.color}20`
                      }}
                      variants={card3DHover}
                      whileHover="hover"
                    >
                      <h4 className="text-lg font-bold mb-3 flex items-center gap-2 tracking-wide" style={{ 
                        color: study.color,
                        fontFamily: "'Harrington', 'Verdana', sans-serif"
                      }}>
                        <span className="text-xl">💡</span> Solution
                      </h4>
                      <p className="text-base leading-relaxed tracking-wide" style={{ 
                        color: '#4b5563', 
                        fontWeight: '500',
                        fontFamily: "'Merlin', 'Georgia', serif"
                      }}>
                        {study.solution}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Column - Results */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
                className="w-full space-y-8"
              >
                {/* Results Grid */}
                <div className="grid grid-cols-2 gap-4 sm:gap-6 w-full">
                  {study.results.map((result, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="p-4 sm:p-6 rounded-2xl text-center w-full backdrop-blur-sm shadow-lg"
                      style={{
                        background: 'rgba(255, 255, 255, 0.8)',
                        border: `2px solid ${study.color}15`
                      }}
                      variants={resultCardHover}
                      whileHover="hover"
                    >
                      <div className="text-xs font-bold mb-2 uppercase tracking-widest" style={{ 
                        color: '#6b7280',
                        fontFamily: "'Pressure', 'Arial Black', sans-serif",
                        letterSpacing: '0.1em'
                      }}>
                        {result.metric}
                      </div>
                      <div className="flex items-center justify-center gap-1 mb-2 flex-wrap">
                        <span className="text-sm" style={{ 
                          color: '#9ca3af',
                          fontFamily: "'Merlin', 'Georgia', serif"
                        }}>
                          {result.before}
                        </span>
                        <motion.span 
                          style={{ color: study.color }} 
                          className="text-lg font-bold"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                        <span className="text-sm font-bold" style={{ 
                          color: study.color,
                          fontFamily: "'Merlin', 'Georgia', serif"
                        }}>
                          {result.after}
                        </span>
                      </div>
                      <div className="text-xl sm:text-2xl font-black tracking-tight" style={{ 
                        color: study.color,
                        fontFamily: "'Monotype Corsiva', 'Brush Script MT', cursive",
                        fontStyle: 'italic',
                        fontWeight: 'normal'
                      }}>
                        {result.increase}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Testimonial */}
                <motion.div 
                  className="p-6 sm:p-8 rounded-2xl w-full backdrop-blur-sm shadow-lg"
                  style={{
                    background: 'rgba(255, 255, 255, 0.8)',
                    border: `2px solid ${study.color}20`
                  }}
                  variants={testimonialHover}
                  whileHover="hover"
                >
                  <motion.div 
                    className="text-4xl mb-4"
                    style={{ color: study.color }}
                    animate={{ rotate: [0, 5, 0, -5, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                  >
                    ❝
                  </motion.div>
                  <p className="text-base sm:text-lg mb-6 italic leading-relaxed tracking-wide" style={{ 
                    color: '#374151',
                    fontWeight: '500',
                    fontFamily: "'Black Chancery', 'Palatino Linotype', serif",
                    fontSize: '1.1em'
                  }}>
                    {study.testimonial.quote}
                  </p>
                  <div className="flex items-center gap-4">
                    <motion.div 
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-2xl shadow-lg"
                      style={{
                        background: `${study.color}20`,
                        border: `2px solid ${study.color}40`
                      }}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5,
                        transition: { type: "spring", stiffness: 400 }
                      }}
                    >
                      {study.testimonial.avatar}
                    </motion.div>
                    <div>
                      <div className="font-bold text-lg tracking-wide" style={{ 
                        color: study.color,
                        fontFamily: "'Harrington', 'Verdana', sans-serif"
                      }}>
                        {study.testimonial.author}
                      </div>
                      <div className="text-sm tracking-wide" style={{ 
                        color: '#6b7280', 
                        fontWeight: '500',
                        fontFamily: "'Merlin', 'Georgia', serif",
                        fontStyle: 'italic'
                      }}>
                        {study.testimonial.position}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Final CTA Section */}
      <div className="min-h-screen flex items-center justify-center" style={{ 
        background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #f0fdf4 100%)'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-4 text-center w-full"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-5xl mb-6"
          >
            🌟
          </motion.div>
          <h3 className="text-4xl md:text-5xl font-black mb-6 tracking-tight" style={{
            background: 'linear-gradient(135deg, #1e40af 0%, #dc2626 50%, #16a34a 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontFamily: "'Pressure', 'Impact', sans-serif",
            letterSpacing: '0.05em',
            fontWeight: 'bold'
          }}>
            Ready to Be Our Next Success Story?
          </h3>
          <p className="text-xl mb-12 tracking-wide" style={{ 
            color: '#374151',
            fontWeight: '500',
            fontFamily: "'Merlin', 'Georgia', serif",
            fontStyle: 'italic'
          }}>
            Let's create a case study about your incredible growth
          </p>
          <motion.a
            href="#get-quote"
            className="inline-flex items-center gap-3 px-12 py-5 rounded-full font-bold text-lg tracking-wide shadow-lg transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #2563eb 0%, #16a34a 100%)',
              boxShadow: '0 8px 30px rgba(37, 99, 235, 0.3)',
              color: 'white',
              fontFamily: "'Pressure', 'Arial Black', sans-serif",
              letterSpacing: '0.05em'
            }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 15px 40px rgba(37, 99, 235, 0.4)',
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 25
              }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Get Your Free Strategy Session</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              🚀
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}