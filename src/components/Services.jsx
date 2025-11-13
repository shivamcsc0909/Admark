// src/components/Services.jsx - UPDATED VERSION WITH PURE BLACK TRIANGLE
// Black borders on cards, improved heading visibility, premium fonts

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function Services() {
  const navigate = useNavigate();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    websiteUrl: '',
    websiteName: '',
    email: '',
    phone: ''
  });

  const services = [
    { 
      title: 'SEO Services',
      description: 'Boost your search rankings and drive organic traffic with proven SEO strategies.',
      icon: '🎯',
      pricingCategory: 'seo'
    },
    { 
      title: 'Social Media Marketing',
      description: 'Build your brand presence and engage audiences across all social platforms.',
      icon: '📱',
      pricingCategory: 'smo'
    },
    { 
      title: 'PPC Advertising',
      description: 'Maximize ROI with targeted pay-per-click campaigns and data-driven strategies.',
      icon: '💰',
      pricingCategory: 'ppc'
    },
    { 
      title: 'Web Development',
      description: 'Create stunning, high-performance websites that convert visitors into customers.',
      icon: '💻',
      pricingCategory: 'web-dev'
    },
    { 
      title: 'Content Marketing',
      description: 'Engage your audience with compelling content that drives traffic and builds authority.',
      icon: '✍️',
      pricingCategory: 'content'
    },
    { 
      title: 'Brand Strategy & Design',
      description: 'Build a memorable brand identity that resonates with your target audience.',
      icon: '🎨',
      pricingCategory: 'branding'
    }
  ];

  const handleBuyNow = (pricingCategory) => {
    window.location.href = `/pricing#${pricingCategory}`;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setIsPopupOpen(false);
      setFormData({
        websiteUrl: '',
        websiteName: '',
        email: '',
        phone: ''
      });
    }, 3000);
  };

  const openPopup = () => {
    setIsPopupOpen(true);
    setIsSubmitted(false);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setIsSubmitted(false);
    setFormData({
      websiteUrl: '',
      websiteName: '',
      email: '',
      phone: ''
    });
  };

  // Free Audit Popup Component
  const FreeAuditPopup = () => {
    if (!isPopupOpen) return null;

    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10000,
        backdropFilter: 'blur(10px)'
      }}>
        <div style={{
          background: 'linear-gradient(135deg, rgba(26, 29, 34, 0.95) 0%, rgba(10, 10, 10, 0.98) 100%)',
          borderRadius: '20px',
          padding: '40px',
          width: '90%',
          maxWidth: '500px',
          border: '2px solid rgba(255, 215, 0, 0.3)',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.8)',
          position: 'relative',
          backdropFilter: 'blur(20px)'
        }}>
          <button
            onClick={closePopup}
            style={{
              position: 'absolute',
              top: '15px',
              right: '20px',
              background: 'none',
              border: 'none',
              color: '#FFD700',
              fontSize: '24px',
              cursor: 'pointer',
              padding: '5px',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255, 215, 0, 0.1)';
              e.target.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'none';
              e.target.style.transform = 'scale(1)';
            }}
          >
            ×
          </button>

          {!isSubmitted ? (
            <>
              <h2 style={{
                color: '#FFD700',
                textAlign: 'center',
                marginBottom: '30px',
                fontSize: '32px',
                fontWeight: '700',
                fontFamily: "'High Tower', 'Times New Roman', serif",
                textShadow: '0 2px 10px rgba(255, 215, 0, 0.3)',
                letterSpacing: '0.1em'
              }}>
                Free Website Audit
              </h2>
              
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{
                    display: 'block',
                    color: 'rgba(255, 255, 255, 0.9)',
                    marginBottom: '8px',
                    fontWeight: '600',
                    fontFamily: "'Harrington', 'Arial', sans-serif",
                    fontSize: '16px',
                    letterSpacing: '0.05em'
                  }}>
                    Website URL *
                  </label>
                  <input
                    type="url"
                    name="websiteUrl"
                    value={formData.websiteUrl}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      border: '2px solid rgba(255, 215, 0, 0.3)',
                      background: 'rgba(255, 255, 255, 0.05)',
                      color: 'white',
                      fontSize: '16px',
                      transition: 'all 0.3s ease',
                      backdropFilter: 'blur(10px)',
                      fontFamily: "'Merlin', 'Georgia', serif"
                    }}
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{
                    display: 'block',
                    color: 'rgba(255, 255, 255, 0.9)',
                    marginBottom: '8px',
                    fontWeight: '600',
                    fontFamily: "'Harrington', 'Arial', sans-serif",
                    fontSize: '16px',
                    letterSpacing: '0.05em'
                  }}>
                    Website Name *
                  </label>
                  <input
                    type="text"
                    name="websiteName"
                    value={formData.websiteName}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      border: '2px solid rgba(255, 215, 0, 0.3)',
                      background: 'rgba(255, 255, 255, 0.05)',
                      color: 'white',
                      fontSize: '16px',
                      transition: 'all 0.3s ease',
                      backdropFilter: 'blur(10px)',
                      fontFamily: "'Merlin', 'Georgia', serif"
                    }}
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{
                    display: 'block',
                    color: 'rgba(255, 255, 255, 0.9)',
                    marginBottom: '8px',
                    fontWeight: '600',
                    fontFamily: "'Harrington', 'Arial', sans-serif",
                    fontSize: '16px',
                    letterSpacing: '0.05em'
                  }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      border: '2px solid rgba(255, 215, 0, 0.3)',
                      background: 'rgba(255, 255, 255, 0.05)',
                      color: 'white',
                      fontSize: '16px',
                      transition: 'all 0.3s ease',
                      backdropFilter: 'blur(10px)',
                      fontFamily: "'Merlin', 'Georgia', serif"
                    }}
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{
                    display: 'block',
                    color: 'rgba(255, 255, 255, 0.9)',
                    marginBottom: '8px',
                    fontWeight: '600',
                    fontFamily: "'Harrington', 'Arial', sans-serif",
                    fontSize: '16px',
                    letterSpacing: '0.05em'
                  }}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      border: '2px solid rgba(255, 215, 0, 0.2)',
                      background: 'rgba(255, 255, 255, 0.05)',
                      color: 'white',
                      fontSize: '16px',
                      transition: 'all 0.3s ease',
                      backdropFilter: 'blur(10px)',
                      fontFamily: "'Merlin', 'Georgia', serif"
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    width: '100%',
                    padding: '15px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FF8C00 100%)',
                    color: '#1a1d22',
                    border: 'none',
                    fontSize: '18px',
                    fontWeight: '700',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 8px 25px rgba(255, 215, 0, 0.4)',
                    fontFamily: "'Black Chancery', 'Times New Roman', serif",
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase'
                  }}
                >
                  Submit for Free Audit
                </button>
              </form>
            </>
          ) : (
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <div style={{
                fontSize: '60px',
                marginBottom: '20px',
                filter: 'drop-shadow(0 0 10px rgba(255, 215, 0, 0.5))'
              }}>
                ✅
              </div>
              <h3 style={{
                color: '#FFD700',
                fontSize: '28px',
                marginBottom: '15px',
                fontWeight: '700',
                fontFamily: "'High Tower', 'Times New Roman', serif",
                letterSpacing: '0.1em'
              }}>
                Request Submitted Successfully!
              </h3>
              <p style={{
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: '16px',
                lineHeight: '1.6',
                fontFamily: "'Monotype Corsiva', 'Georgia', serif",
                fontStyle: 'italic',
                letterSpacing: '0.03em'
              }}>
                Your request for free audit report has been successfully submitted and your free audit report will soon be sent to your email inbox. Thank you!
              </p>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <section 
      id="services" 
      className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8"
      style={{
        background: 'linear-gradient(180deg, #F8F9FA 0%, #FFFFFF 50%, #F8F9FA 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase relative inline-block"
            style={{
              fontFamily: "'Pressure', ",
              letterSpacing: '0.2em',
              fontWeight: '900',
              lineHeight: '1',
              color: '#000000',
              textShadow: '3px 3px 0px rgba(255, 215, 0, 0.3), 6px 6px 0px rgba(0, 0, 0, 0.1)',
              position: 'relative',
              display: 'inline-block'
            }}
          >
             
            <div 
              style={{
                position: 'absolute',
                bottom: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '200px',
                height: '4px',
                background: 'linear-gradient(90deg, transparent 0%, #FFD700 50%, transparent 100%)',
                borderRadius: '2px'
              }}
            />
          </h2>
          <p 
            className="mt-10 text-lg md:text-xl max-w-3xl mx-auto"
            style={{
              color: '#2D3748',
              fontFamily: "'Black Chancery', 'Times New Roman', serif",
              fontWeight: '500',
              lineHeight: '1.7',
              fontStyle: 'italic',
              letterSpacing: '0.05em',
              fontSize: '1.25rem'
            }}
          >
            Transform your digital presence with our premium marketing solutions
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative overflow-hidden transition-all duration-500"
              style={{
                background: 'linear-gradient(135deg, #FFFFFF 0%, #F8F9FA 100%)',
                minHeight: '320px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '32px 28px',
                borderRadius: '12px',
                border: '2px solid #000000',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.border = '2px solid #000000';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(255, 215, 0, 0.2)';
                e.currentTarget.style.background = 'linear-gradient(135deg, #FFFEF7 0%, #FFF9E6 100%)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border = '2px solid #000000';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
                e.currentTarget.style.background = 'linear-gradient(135deg, #FFFFFF 0%, #F8F9FA 100%)';
              }}
            >
              {/* Background Effects */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'radial-gradient(circle at 50% 50%, rgba(255, 215, 0, 0.1) 0%, transparent 70%)',
                  pointerEvents: 'none'
                }}
              />

              {/* UPDATED: Pure dense black triangle */}
              <div 
                className="absolute top-0 right-0 w-20 h-20"
                style={{
                  background: 'linear-gradient(135deg, transparent 50%, #000000 50%)',
                }}
              />

              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  className="text-5xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {service.icon}
                </motion.div>

                <h3 
                  className="text-xl md:text-2xl font-bold mb-3 transition-colors duration-300"
                  style={{
                    color: '#000000',
                    fontFamily: "'High Tower', 'Times New Roman', serif",
                    fontWeight: '700',
                    lineHeight: '1.2',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    position: 'relative',
                    display: 'inline-block'
                  }}
                >
                  {service.title}
                  <div 
                    style={{
                      position: 'absolute',
                      bottom: '-5px',
                      left: '0',
                      width: '40px',
                      height: '2px',
                      background: '#FFD700',
                      transition: 'width 0.3s ease'
                    }}
                    className="group-hover:w-20"
                  />
                </h3>
                <p 
                  className="text-sm md:text-base mb-6 transition-colors duration-300"
                  style={{
                    color: '#4A5568',
                    lineHeight: '1.6',
                    fontFamily: "'Merlin', 'Georgia', serif",
                    fontWeight: '400',
                    letterSpacing: '0.02em'
                  }}
                >
                  {service.description}
                </p>
              </div>

              {/* Buttons Container */}
              <div className="relative z-10 flex flex-col gap-3">
                {/* Learn More Button */}
                <a
                  href={`/services#${
                    ['seo', 'social-media-marketing', 'ppc', 'wordpress-development', 'content-marketing', 'custom-website-design'][index]
                  }`}
                  className="relative z-10 inline-flex items-center justify-center gap-2 font-bold text-sm transition-all duration-300 group/btn py-3 px-4 rounded-lg"
                  style={{
                    color: '#000000',
                    background: 'rgba(255, 215, 0, 0.1)',
                    border: '2px solid #000000',
                    fontFamily: "'Harrington', 'Arial', sans-serif",
                    textDecoration: 'none',
                    fontWeight: '600',
                    letterSpacing: '0.03em'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(255, 215, 0, 0.3)';
                    e.target.style.border = '2px solid #000000';
                    e.target.style.boxShadow = '0 0 15px rgba(255, 215, 0, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(255, 215, 0, 0.1)';
                    e.target.style.border = '2px solid #000000';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  <span className="group-hover/btn:translate-x-1 transition-transform duration-300">
                    Learn More
                  </span>
                  <motion.span 
                    className="text-xl"
                    animate={{
                      x: [0, 5, 0]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    →
                  </motion.span>
                </a>

                {/* Buy Now Button - Navigate to Pricing with Specific Category */}
                <button
                  onClick={() => handleBuyNow(service.pricingCategory)}
                  className="relative z-10 inline-flex items-center justify-center gap-2 font-bold text-sm transition-all duration-300 group/buynow py-3 px-4 rounded-lg"
                  style={{
                    padding: '12px 24px',
                    borderRadius: '8px',
                    fontWeight: '700',
                    fontSize: '0.9rem',
                    background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                    color: '#000000',
                    fontFamily: "'Harrington', 'Arial', sans-serif",
                    border: '2px solid #000000',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    whiteSpace: 'nowrap',
                    textDecoration: 'none',
                    letterSpacing: '0.03em',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    boxShadow: '0 4px 15px rgba(255, 215, 0, 0.4)',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'linear-gradient(135deg, #FFA500 0%, #FF8C00 100%)';
                    e.target.style.boxShadow = '0 6px 20px rgba(255, 215, 0, 0.6)';
                    e.target.style.border = '2px solid #000000';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)';
                    e.target.style.boxShadow = '0 4px 15px rgba(255, 215, 0, 0.4)';
                    e.target.style.border = '2px solid #000000';
                  }}
                >
                  <span style={{ fontSize: '1.2em' }}>🎯</span>
                  Buy Now
                </button>
              </div>

              {/* Bottom Accent Line */}
              <div 
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent w-0 group-hover:w-full transition-all duration-700"
                style={{
                  opacity: 0.8
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-16"
        >
          <motion.a
            href="#get-quote"
            className="relative inline-block px-10 md:px-12 py-4 md:py-5 rounded-full font-bold text-base md:text-lg overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg, #000000 0%, #2D3748 100%)',
              color: '#FFD700',
              border: '2px solid #000000',
              textDecoration: 'none',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
              fontWeight: '700',
              fontFamily: "'Black Chancery', 'Times New Roman', serif",
              letterSpacing: '0.1em',
              textTransform: 'uppercase'
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Get Started Today</span>
            <div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-FFD700/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
            />
          </motion.a>
        </motion.div>
      </div>

      {/* Free Audit Popup */}
      <FreeAuditPopup />
    </section>
  );
}