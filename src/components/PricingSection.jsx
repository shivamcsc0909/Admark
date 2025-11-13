// src/components/PricingSection.jsx:
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PricingSection() {
  const [activeService, setActiveService] = useState('seo');
  const [isHovered, setIsHovered] = useState(null);

  // Handle URL hash for direct pricing section navigation
  useEffect(() => {
    const hash = window.location.hash.slice(1); // Remove # symbol
    
    // Valid pricing service IDs
    const validServices = ['seo', 'smo', 'ppc', 'web', 'content', 'branding'];
    
    if (hash && validServices.includes(hash)) {
      setActiveService(hash);
      
      // Smooth scroll to pricing section
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  }, []);

  const services = [
    { 
      id: 'seo', 
      name: 'SEO', 
      icon: '🔍',
      gradient: 'from-amber-400 to-orange-500',
      color: '#F59E0B',
      description: 'Search Engine Optimization'
    },
    { 
      id: 'smo', 
      name: 'SMO', 
      icon: '📱',
      gradient: 'from-blue-500 to-cyan-600',
      color: '#3B82F6',
      description: 'Social Media Optimization'
    },
    { 
      id: 'ppc', 
      name: 'PPC', 
      icon: '💰',
      gradient: 'from-emerald-500 to-green-600',
      color: '#10B981',
      description: 'Pay Per Click Advertising'
    },
    { 
      id: 'web', 
      name: 'Web Dev', 
      icon: '💻',
      gradient: 'from-violet-500 to-purple-600',
      color: '#8B5CF6',
      description: 'Website Development'
    },
    { 
      id: 'content', 
      name: 'Content', 
      icon: '✍️',
      gradient: 'from-rose-500 to-pink-600',
      color: '#EC4899',
      description: 'Content Marketing'
    },
    { 
      id: 'branding', 
      name: 'Branding', 
      icon: '🎨',
      gradient: 'from-indigo-500 to-blue-600',
      color: '#6366F1',
      description: 'Brand Strategy & Design'
    }
  ];

  const pricingPlans = {
    seo: [
      {
        name: 'Starter',
        price: '$199',
        popular: false,
        features: [
          '5 Keywords Tracking',
          'Basic On-Page SEO',
          'Monthly Reports',
          'Email Support'
        ]
      },
      {
        name: 'Basic',
        price: '$399',
        popular: false,
        features: [
          '10 Keywords Tracking',
          'On-Page SEO',
          'Technical Audit',
          'Bi-weekly Reports',
          'Priority Support'
        ]
      },
      {
        name: 'Standard',
        price: '$699',
        popular: true,
        features: [
          '25 Keywords Tracking',
          'Link Building',
          'Content Optimization',
          'Competitor Analysis',
          'Weekly Reports',
          'Dedicated Manager'
        ]
      },
      {
        name: 'Premium',
        price: '$1299',
        popular: false,
        features: [
          '50 Keywords Tracking',
          'Advanced Technical SEO',
          'Local SEO',
          'Content Creation',
          'Daily Monitoring',
          'Priority Support'
        ]
      },
      {
        name: 'Enterprise',
        price: '$2499',
        popular: false,
        features: [
          'Unlimited Keywords',
          'Full SEO Suite',
          'Custom Strategy',
          'White-label Reports',
          'API Access',
          '24/7 Support'
        ]
      }
    ],
    smo: [
      {
        name: 'Basic',
        price: '$199',
        popular: false,
        features: [
          'Facebook & Instagram',
          '10 Posts/Month',
          'Basic Analytics',
          'Community Management',
          'Content Calendar'
        ]
      },
      {
        name: 'Standard',
        price: '$399',
        popular: true,
        features: [
          'All Social Platforms',
          '20 Posts/Month',
          'Advanced Analytics',
          'Paid Ad Management',
          'Influencer Outreach'
        ]
      },
      {
        name: 'Premium',
        price: '$699',
        popular: false,
        features: [
          'Everything in Standard',
          '30+ Posts/Month',
          'Video Content',
          'Dedicated Manager',
          'Growth Strategy'
        ]
      }
    ],
    ppc: [
      {
        name: 'Basic',
        price: '$499',
        popular: false,
        features: [
          'Google Ads Setup',
          '$1000 Ad Budget',
          'Keyword Research',
          'Campaign Optimization',
          'Monthly Reports'
        ]
      },
      {
        name: 'Standard',
        price: '$899',
        popular: true,
        features: [
          'Multi-Platform Ads',
          '$2500 Ad Budget',
          'A/B Testing',
          'Landing Page Optimization',
          'Bi-weekly Reports'
        ]
      },
      {
        name: 'Premium',
        price: '$1499',
        popular: false,
        features: [
          'Everything in Standard',
          '$5000+ Ad Budget',
          'Remarketing Campaigns',
          'Dedicated PPC Specialist',
          'Weekly Reports'
        ]
      }
    ],
    web: [
      {
        name: 'Basic',
        price: '$999',
        popular: false,
        features: [
          'Up to 5 Pages',
          'Responsive Design',
          'SEO Friendly',
          'Contact Form',
          '30 Days Support'
        ]
      },
      {
        name: 'Standard',
        price: '$1999',
        popular: true,
        features: [
          'Up to 10 Pages',
          'Custom Design',
          'CMS Integration',
          'E-commerce Ready',
          '60 Days Support'
        ]
      },
      {
        name: 'Premium',
        price: '$3999',
        popular: false,
        features: [
          'Unlimited Pages',
          'Advanced Features',
          'Custom Development',
          'API Integration',
          '90 Days Support'
        ]
      }
    ],
    content: [
      {
        name: 'Basic',
        price: '$299',
        popular: false,
        features: [
          '4 Blog Posts/Month',
          'SEO Optimization',
          'Keyword Research',
          'Topic Research',
          'Basic Editing'
        ]
      },
      {
        name: 'Standard',
        price: '$599',
        popular: true,
        features: [
          '8 Blog Posts/Month',
          'Advanced SEO',
          'Content Strategy',
          'Social Media Posts',
          'Professional Editing'
        ]
      },
      {
        name: 'Premium',
        price: '$999',
        popular: false,
        features: [
          '12+ Blog Posts/Month',
          'Video Scripts',
          'Email Campaigns',
          'Content Calendar',
          'Dedicated Writer'
        ]
      }
    ],
    branding: [
      {
        name: 'Basic',
        price: '$799',
        popular: false,
        features: [
          'Logo Design',
          'Brand Colors',
          'Typography Guide',
          'Social Media Kit',
          '2 Revisions'
        ]
      },
      {
        name: 'Standard',
        price: '$1499',
        popular: true,
        features: [
          'Everything in Basic',
          'Brand Guidelines',
          'Business Cards',
          'Letterhead Design',
          '5 Revisions'
        ]
      },
      {
        name: 'Premium',
        price: '$2999',
        popular: false,
        features: [
          'Everything in Standard',
          'Brand Strategy',
          'Marketing Collateral',
          'Website Design',
          'Unlimited Revisions'
        ]
      }
    ]
  };

  const currentPlans = pricingPlans[activeService];
  const activeServiceData = services.find(s => s.id === activeService);

  return (
    <section 
      id="pricing" 
      className="relative py-16 px-4 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%)',
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(90deg, #94a3b8 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
        
        {/* Floating Shapes */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-16 h-16 rounded-full opacity-10"
          style={{ background: '#F59E0B' }}
        />
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-32 right-12 w-12 h-12 rounded-lg opacity-10"
          style={{ background: '#3B82F6' }}
        />
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-1/2 left-1/4 w-8 h-8 rounded-full opacity-10"
          style={{ background: '#10B981' }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.p 
            className="text-sm font-semibold mb-3 tracking-wider uppercase"
            style={{ color: '#475569', letterSpacing: '0.1em' }}
          >
            Transparent Pricing
          </motion.p>
          <h2 
            className="text-4xl sm:text-5xl md:text-6xl font-black mb-4"
            style={{
              background: `linear-gradient(135deg, ${activeServiceData?.color || '#F59E0B'} 0%, #1e293b 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontFamily: "'Poppins', sans-serif",
              textShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            CHOOSE YOUR PLAN
          </h2>
          <p style={{ 
            color: '#64748b', 
            fontSize: '1rem', 
            marginTop: '8px',
            fontWeight: '500',
            fontFamily: "'Inter', sans-serif"
          }}>
            Current Section: <span style={{ color: activeServiceData?.color, fontWeight: '600' }}>{activeService.toUpperCase()}</span>
          </p>
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="h-1 w-12 rounded-full" style={{ background: `linear-gradient(90deg, transparent, ${activeServiceData?.color})` }} />
            <div className="h-1 w-20 rounded-full" style={{ background: activeServiceData?.color }} />
            <div className="h-1 w-12 rounded-full" style={{ background: `linear-gradient(90deg, ${activeServiceData?.color}, transparent)` }} />
          </div>
        </motion.div>

        {/* Service Icons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {services.map((service, index) => (
            <motion.button
              key={service.id}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              onClick={() => setActiveService(service.id)}
              whileHover={{ 
                scale: 1.08,
                y: -5
              }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setIsHovered(service.id)}
              onHoverEnd={() => setIsHovered(null)}
              className="flex flex-col items-center gap-3 p-4 rounded-2xl transition-all duration-300 group relative overflow-hidden"
              style={{
                background: activeService === service.id 
                  ? `linear-gradient(135deg, ${service.color}15 0%, ${service.color}08 100%)`
                  : 'rgba(255,255,255,0.7)',
                border: activeService === service.id 
                  ? `2px solid ${service.color}40`
                  : '2px solid rgba(148, 163, 184, 0.2)',
                boxShadow: activeService === service.id 
                  ? `0 8px 32px ${service.color}20, 0 2px 8px rgba(0,0,0,0.1)`
                  : '0 4px 20px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.05)',
                backdropFilter: 'blur(12px)',
                fontFamily: "'Inter', sans-serif",
              }}
            >
              {/* Hover Background Effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(circle at center, ${service.color}08 0%, transparent 70%)`,
                }}
                transition={{ duration: 0.3 }}
              />

              <motion.div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl relative overflow-hidden"
                style={{
                  background: activeService === service.id 
                    ? `linear-gradient(135deg, ${service.color} 0%, ${service.color}dd 100%)`
                    : `linear-gradient(135deg, ${service.color}20 0%, ${service.color}10 100%)`,
                  boxShadow: activeService === service.id 
                    ? `0 6px 20px ${service.color}40, inset 0 1px 1px ${service.color}40`
                    : '0 4px 12px rgba(0,0,0,0.1), inset 0 1px 1px rgba(255,255,255,0.8)',
                }}
                whileHover={{ 
                  rotate: [0, -5, 5, 0],
                  scale: 1.1
                }}
                transition={{ duration: 0.5 }}
              >
                <span 
                  style={{ 
                    filter: activeService === service.id ? 'brightness(2)' : 'none',
                    textShadow: activeService === service.id ? '0 2px 4px rgba(0,0,0,0.2)' : 'none'
                  }}
                >
                  {service.icon}
                </span>
              </motion.div>
              
              <div className="text-center relative z-10">
                <div 
                  className="font-bold text-sm mb-1"
                  style={{ 
                    color: activeService === service.id ? service.color : '#334155',
                    fontFamily: "'Poppins', sans-serif",
                    letterSpacing: '0.5px'
                  }}
                >
                  {service.name}
                </div>
                <div 
                  className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ color: '#64748b' }}
                >
                  {service.description}
                </div>
              </div>

              {/* Active Indicator */}
              {activeService === service.id && (
                <motion.div
                  layoutId="activeService"
                  className="absolute -bottom-1 w-6 h-1 rounded-full"
                  style={{ background: service.color }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Pricing Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className={`grid gap-6 justify-center ${
              activeService === 'seo' 
                ? 'md:grid-cols-3 lg:grid-cols-5' 
                : 'md:grid-cols-3'
            }`}
            style={{
              maxWidth: activeService === 'seo' ? '100%' : '900px',
              margin: '0 auto'
            }}
          >
            {currentPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -8, scale: 1.02 }}
                onHoverStart={() => setIsHovered(`plan-${index}`)}
                onHoverEnd={() => setIsHovered(null)}
                className="relative rounded-3xl p-6 transition-all duration-500 group overflow-hidden cursor-pointer"
                style={{
                  background: plan.popular
                    ? `linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.8) 100%)`
                    : 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.6) 100%)',
                  border: plan.popular
                    ? `2px solid ${activeServiceData.color}40`
                    : '2px solid rgba(148, 163, 184, 0.2)',
                  boxShadow: plan.popular
                    ? `0 20px 40px ${activeServiceData.color}15, 0 8px 25px rgba(0,0,0,0.1), inset 0 1px 1px rgba(255,255,255,0.8)`
                    : '0 12px 30px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.05), inset 0 1px 1px rgba(255,255,255,0.8)',
                  backdropFilter: 'blur(16px)',
                  width: activeService === 'seo' ? 'auto' : '300px',
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {/* Animated Background Glow */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500"
                  style={{
                    background: `radial-gradient(circle at center, ${activeServiceData.color}08 0%, transparent 70%)`,
                  }}
                />

                {/* Popular Badge */}
                {plan.popular && (
                  <motion.div 
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                    className="absolute -top-2 -right-2 w-20 h-20 rounded-full flex items-start justify-end p-2 text-xs font-black shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${activeServiceData.color} 0%, ${activeServiceData.color}dd 100%)`,
                      color: '#fff',
                      zIndex: 10,
                    }}
                  >
                    <span className="transform rotate-45 translate-x-1 -translate-y-1 text-[10px] font-bold">
                      POPULAR
                    </span>
                  </motion.div>
                )}

                <div className="relative z-10">
                  {/* Plan Name with Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <h3 
                      className="text-2xl font-black"
                      style={{ 
                        color: plan.popular ? activeServiceData.color : '#1e293b',
                        fontFamily: "'Poppins', sans-serif",
                        letterSpacing: '0.5px'
                      }}
                    >
                      {plan.name}
                    </h3>
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                      className="text-2xl"
                      style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
                    >
                      {activeServiceData.icon}
                    </motion.div>
                  </div>
                  
                  {/* Price with Animation */}
                  <div className="mb-6">
                    <motion.span 
                      whileHover={{ scale: 1.05 }}
                      className="text-4xl md:text-5xl font-black inline-block"
                      style={{ 
                        background: `linear-gradient(135deg, ${activeServiceData.color} 0%, #1e293b 100%)`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        fontFamily: "'Poppins', sans-serif",
                        textShadow: '0 2px 4px rgba(0,0,0,0.1)',
                      }}
                    >
                      {plan.price}
                    </motion.span>
                    <span className="text-sm ml-1 font-medium" style={{ color: '#64748b' }}>/month</span>
                  </div>

                  {/* Animated Divider */}
                  <motion.div 
                    className="h-0.5 w-full mb-6 rounded-full relative overflow-hidden"
                    style={{ background: 'rgba(148, 163, 184, 0.2)' }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{ background: activeServiceData.color }}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </motion.div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <motion.div 
                        key={idx} 
                        className="flex items-start gap-3 group/feature"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + idx * 0.05 }}
                        whileHover={{ x: 5 }}
                      >
                        <motion.div
                          className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{
                            background: `linear-gradient(135deg, ${activeServiceData.color} 0%, ${activeServiceData.color}dd 100%)`,
                            boxShadow: `0 2px 8px ${activeServiceData.color}40`
                          }}
                          whileHover={{ scale: 1.3, rotate: 360 }}
                          transition={{ duration: 0.3 }}
                        >
                          <span className="text-white text-xs font-bold">✓</span>
                        </motion.div>
                        <span 
                          className="text-sm leading-relaxed font-medium"
                          style={{ color: '#475569' }}
                        >
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Button with Enhanced Effects */}
                  <motion.button
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: `0 12px 30px ${activeServiceData.color}40`
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-4 rounded-2xl font-bold text-sm transition-all duration-300 relative overflow-hidden group/btn"
                    style={{
                      background: plan.popular
                        ? `linear-gradient(135deg, ${activeServiceData.color} 0%, ${activeServiceData.color}dd 100%)`
                        : `linear-gradient(135deg, ${activeServiceData.color}15 0%, ${activeServiceData.color}08 100%)`,
                      border: plan.popular ? 'none' : `2px solid ${activeServiceData.color}40`,
                      color: plan.popular ? '#fff' : activeServiceData.color,
                      boxShadow: plan.popular 
                        ? `0 8px 25px ${activeServiceData.color}40, inset 0 1px 1px ${activeServiceData.color}40`
                        : '0 4px 15px rgba(0,0,0,0.1), inset 0 1px 1px rgba(255,255,255,0.8)',
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: '600',
                      letterSpacing: '0.5px'
                    }}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Get Started 
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </span>
                    
                    {/* Shine Effect */}
                    <motion.span 
                      className="absolute inset-0 opacity-0 group-hover/btn:opacity-100"
                      style={{
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)',
                      }}
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '200%' }}
                      transition={{ duration: 0.8 }}
                    />
                  </motion.button>
                </div>

                {/* Border Animation */}
                <motion.div
                  className="absolute inset-0 rounded-3xl pointer-events-none"
                  style={{
                    background: `conic-gradient(from 0deg, transparent, ${activeServiceData.color}20, transparent)`,
                    opacity: 0,
                  }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p 
            className="text-lg mb-6 font-medium"
            style={{ 
              color: '#475569',
              fontFamily: "'Inter', sans-serif"
            }}
          >
            Need a custom plan tailored to your business?
          </p>
          <motion.a
            href="#get-quote"
            whileHover={{ 
              scale: 1.05,
              boxShadow: `0 15px 35px ${activeServiceData.color}30`
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-12 py-4 rounded-2xl font-bold text-base transition-all duration-300 relative overflow-hidden group"
            style={{
              background: `linear-gradient(135deg, ${activeServiceData.color} 0%, ${activeServiceData.color}dd 100%)`,
              boxShadow: `0 10px 30px ${activeServiceData.color}40, inset 0 1px 1px ${activeServiceData.color}40`,
              color: '#fff',
              fontFamily: "'Poppins', sans-serif",
              fontWeight: '600',
              letterSpacing: '0.5px'
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Contact Us for Custom Plan 
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ↗
              </motion.span>
            </span>
            <motion.span 
              className="absolute inset-0 opacity-0 group-hover:opacity-100"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
              }}
              initial={{ x: '-100%' }}
              whileHover={{ x: '200%' }}
              transition={{ duration: 1 }}
            />
          </motion.a>
        </motion.div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap');
      `}</style>

      <style>{`
        @keyframes gradient-flow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </section>
  );
}