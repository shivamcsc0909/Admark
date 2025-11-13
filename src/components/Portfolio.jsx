import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const categories = ['all', 'web', 'app', 'branding', 'seo'];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      client: 'TechStore',
      description: 'Full-stack e-commerce solution with 300% sales increase',
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80',
      metrics: { traffic: '+450%', revenue: '+300%', conversion: '+85%' },
      tags: ['React', 'Node.js', 'Stripe'],
      color: '#8B5FBF'
    },
    {
      id: 2,
      title: 'Fitness Mobile App',
      category: 'app',
      client: 'FitLife',
      description: 'AI-powered fitness tracking app with 50K+ downloads',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      metrics: { downloads: '50K+', rating: '4.8★', retention: '75%' },
      tags: ['React Native', 'AI/ML', 'Firebase'],
      color: '#2D936C'
    },
    {
      id: 3,
      title: 'Brand Identity Redesign',
      category: 'branding',
      client: 'GreenLeaf Co.',
      description: 'Complete brand overhaul resulting in 200% brand recognition',
      image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&q=80',
      metrics: { recognition: '+200%', engagement: '+160%', reach: '2M+' },
      tags: ['Brand Strategy', 'UI/UX', 'Social Media'],
      color: '#DE6449'
    },
    {
      id: 4,
      title: 'SEO Campaign',
      category: 'seo',
      client: 'LegalEase',
      description: 'Achieved #1 ranking for 50+ keywords in 6 months',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      metrics: { ranking: '#1', keywords: '50+', traffic: '+380%' },
      tags: ['Technical SEO', 'Content', 'Link Building'],
      color: '#391463'
    },
    {
      id: 5,
      title: 'SaaS Dashboard',
      category: 'web',
      client: 'DataFlow',
      description: 'Analytics dashboard serving 10K+ daily active users',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      metrics: { users: '10K+', uptime: '99.9%', satisfaction: '95%' },
      tags: ['Vue.js', 'D3.js', 'Real-time'],
      color: '#3066BE'
    },
    {
      id: 6,
      title: 'Restaurant Booking App',
      category: 'app',
      client: 'Dine&Wine',
      description: 'Reservation system processing 1000+ bookings daily',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      metrics: { bookings: '1K+/day', growth: '+220%', revenue: '+180%' },
      tags: ['Flutter', 'Payment Gateway', 'GPS'],
      color: '#BE3E3E'
    }
  ];

  const clientLogos = [
    { name: 'Google', logo: '🔵' },
    { name: 'Amazon', logo: '🟠' },
    { name: 'Microsoft', logo: '🟦' },
    { name: 'Apple', logo: '🍎' },
    { name: 'Meta', logo: '🔷' },
    { name: 'Netflix', logo: '🔴' },
    { name: 'Tesla', logo: '⚡' },
    { name: 'Spotify', logo: '🟢' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section
      id="portfolio"
      className="relative py-20 md:py-32 px-4 overflow-hidden min-h-screen"
      style={{
        background: 'linear-gradient(135deg, #F8F4FF 0%, #F0F7FF 50%, #F5F7FF 100%)',
        backgroundSize: '400% 400%',
        animation: 'gradientShift 15s ease infinite'
      }}
    >
      {/* Subtle Background Elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-100 rounded-full opacity-60 blur-3xl animate-pulse" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-blue-100 rounded-full opacity-50 blur-3xl animate-float" />
      <div className="absolute bottom-40 left-20 w-80 h-80 bg-pink-100 rounded-full opacity-50 blur-3xl animate-bounce-slow" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-green-100 rounded-full opacity-50 blur-3xl animate-spin-slow" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-5xl md:text-7xl font-black mb-6 font-serif"
            animate={{
              backgroundPosition: ['0%', '100%', '0%']
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'linear'
            }}
            style={{
              background: 'linear-gradient(90deg, #8B5FBF, #2D936C, #3066BE, #DE6449)',
              backgroundSize: '300% 100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 4px 8px rgba(0,0,0,0.1)'
            }}
          >
            Our Portfolio
          </motion.h2>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light tracking-wide mb-4"
            style={{ color: '#2D3748', fontFamily: 'system-ui' }}>
            Transforming ideas into <span className="font-bold" style={{ 
              background: 'linear-gradient(90deg, #8B5FBF, #2D936C)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>digital masterpieces</span> that deliver results
          </p>
        </motion.div>

        {/* Enhanced Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveFilter(category)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 relative overflow-hidden group font-sans"
              style={{
                background: activeFilter === category ? 
                  'linear-gradient(135deg, #8B5FBF, #3066BE)' : 
                  'rgba(255, 255, 255, 0.8)',
                border: activeFilter === category ? 
                  '2px solid transparent' : 
                  '2px solid rgba(139, 95, 191, 0.3)',
                boxShadow: activeFilter === category ? 
                  '0 10px 30px rgba(139, 95, 191, 0.3)' : 
                  '0 4px 15px rgba(0, 0, 0, 0.1)',
                color: activeFilter === category ? '#FFFFFF' : '#4A5568',
                backdropFilter: 'blur(10px)'
              }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(135deg, #3066BE, #8B5FBF)'
                }} />
              <span className="relative z-10 capitalize tracking-wide">{category}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Enhanced Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative rounded-3xl overflow-hidden backdrop-blur-lg border-2"
              style={{
                background: 'rgba(255, 255, 255, 0.9)',
                border: `2px solid ${hoveredProject === project.id ? project.color : 'rgba(255, 255, 255, 0.8)'}`,
                boxShadow: hoveredProject === project.id
                  ? `0 25px 60px ${project.color}30, 0 10px 30px rgba(0, 0, 0, 0.15)`
                  : '0 15px 40px rgba(0, 0, 0, 0.1)',
                transform: hoveredProject === project.id ? 'translateY(-12px) scale(1.02)' : 'translateY(0) scale(1)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              {/* Project Image with Enhanced Overlay */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-500"
                  style={{
                    transform: hoveredProject === project.id ? 'scale(1.1)' : 'scale(1)',
                    filter: hoveredProject === project.id ? 'brightness(1.05) contrast(1.1)' : 'brightness(1) contrast(1)'
                  }}
                />
                <div
                  className="absolute inset-0 transition-all duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${project.color}15 0%, transparent 50%, ${project.color}08 100%)`,
                    opacity: hoveredProject === project.id ? 1 : 0.7
                  }}
                />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className="text-xs font-bold uppercase tracking-wider px-3 py-2 rounded-full"
                    style={{
                      background: `${project.color}15`,
                      color: project.color,
                      border: `1px solid ${project.color}30`,
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 relative">
                {/* Client Name */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium tracking-wide font-sans" style={{ color: '#718096' }}>
                    {project.client}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 tracking-tight font-serif" style={{ color: project.color }}>
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-base mb-4 leading-relaxed font-light font-sans" style={{ color: '#4A5568' }}>
                  {project.description}
                </p>

                {/* Enhanced Metrics */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="text-center p-3 rounded-xl border transition-all duration-300 hover:scale-105" style={{ 
                      background: 'rgba(255, 255, 255, 0.6)', 
                      border: `1px solid ${project.color}20`,
                      boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                    }}>
                      <div className="text-lg font-bold mb-1 font-sans" style={{ color: project.color }}>{value}</div>
                      <div className="text-xs uppercase tracking-wide font-semibold font-sans" style={{ color: '#718096' }}>{key}</div>
                    </div>
                  ))}
                </div>

                {/* Enhanced Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs px-3 py-1.5 rounded-full font-medium transition-all duration-300 hover:scale-105 font-sans" style={{ 
                      background: `${project.color}10`, 
                      color: project.color, 
                      border: `1px solid ${project.color}20` 
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Enhanced View Case Study Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 relative overflow-hidden group font-sans"
                  style={{
                    background: hoveredProject === project.id ? 
                      `linear-gradient(135deg, ${project.color}, ${project.color}DD)` : 
                      'rgba(255, 255, 255, 0.9)',
                    border: `2px solid ${project.color}40`,
                    color: hoveredProject === project.id ? '#FFFFFF' : project.color,
                    boxShadow: hoveredProject === project.id ? 
                      `0 8px 25px ${project.color}40` : 
                      '0 4px 15px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ 
                    background: `linear-gradient(135deg, ${project.color}20, transparent)` 
                  }} />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    View Case Study
                    <motion.span animate={{ x: hoveredProject === project.id ? 5 : 0 }} transition={{ duration: 0.3 }}>→</motion.span>
                  </span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Client Logos Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }} 
          viewport={{ once: true }} 
          className="text-center"
        >
          <h3 className="text-3xl font-bold mb-12 font-serif" style={{
            background: 'linear-gradient(90deg, #8B5FBF, #2D936C)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Trusted by Industry Leaders
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {clientLogos.map((client, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, scale: 0.8 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.4, delay: index * 0.05 }} 
                viewport={{ once: true }} 
                whileHover={{ scale: 1.1, y: -3 }} 
                className="flex flex-col items-center justify-center p-6 rounded-2xl backdrop-blur-lg border transition-all duration-300 group" 
                style={{ 
                  background: 'rgba(255, 255, 255, 0.7)', 
                  border: '1px solid rgba(139, 95, 191, 0.2)', 
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.08)' 
                }}
              >
                <span className="text-4xl mb-2 transition-all duration-300 group-hover:scale-110">{client.logo}</span>
                <span className="text-sm font-semibold tracking-wide font-sans" style={{ color: '#4A5568' }}>{client.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.3 }} 
          viewport={{ once: true }} 
          className="text-center mt-20"
        >
          <p className="text-2xl mb-8 font-light tracking-wide font-sans" style={{ color: '#4A5568' }}>
            Ready to be our next <span className="font-bold" style={{
              background: 'linear-gradient(90deg, #8B5FBF, #2D936C)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>success story</span>?
          </p>
          <motion.button 
            whileHover={{ scale: 1.05, y: -2 }} 
            whileTap={{ scale: 0.95 }} 
            className="px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-300 relative overflow-hidden group font-sans" 
            style={{ 
              background: 'linear-gradient(135deg, #8B5FBF, #3066BE)',
              boxShadow: '0 15px 40px rgba(139, 95, 191, 0.3)',
              color: '#FFFFFF'
            }}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ 
              background: 'linear-gradient(135deg, #3066BE, #8B5FBF)' 
            }} />
            <span className="relative z-10 flex items-center justify-center gap-3 tracking-wide">
              Start Your Project 
              <motion.span animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity }}>🚀</motion.span>
            </span>
          </motion.button>
        </motion.div>
      </div>

      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50% }
          50% { background-position: 100% 50% }
          100% { background-position: 0% 50% }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) }
          50% { transform: translateY(-15px) }
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0) }
          50% { transform: translateY(-20px) }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg) }
          to { transform: rotate(360deg) }
        }

        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 8s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }

        .backdrop-blur-lg { backdrop-filter: blur(16px); }
        
        /* Custom font styles */
        .font-serif {
          font-family: 'Georgia', 'Times New Roman', serif;
        }
        
        .font-sans {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
      `}</style>
    </section>
  );
}