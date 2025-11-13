// src/pages/PricingPage.jsx - UPDATED VERSION

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [selectedCategory, setSelectedCategory] = useState('seo');
  const [showPopup, setShowPopup] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isVisible, setIsVisible] = useState(true);

  // URL hash se category detect karo
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    const validCategories = ['seo', 'smo', 'ppc', 'web-dev', 'content', 'branding'];
    
    if (hash && validCategories.includes(hash)) {
      setSelectedCategory(hash);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  }, []);

  // Scroll pe buttons show/hide
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Service Categories
  const categories = [
    { id: 'seo', name: 'SEO', icon: 'fas fa-search' },
    { id: 'smo', name: 'SMO', icon: 'fas fa-share-alt' },
    { id: 'ppc', name: 'PPC', icon: 'fas fa-ad' },
    { id: 'web-dev', name: 'Web Dev', icon: 'fas fa-code' },
    { id: 'content', name: 'Content', icon: 'fas fa-pen-nib' },
    { id: 'branding', name: 'Branding', icon: 'fas fa-palette' }
  ];

  const pricingPlans = {
    'seo': [
      {
        name: 'SEO Starter Plan',
        icon: 'fas fa-rocket',
        monthlyPrice: 200,
        yearlyPrice: 2040,
        features: [
          '5 Keywords Tracking',
          'Basic On-Page SEO',
          'Monthly Reports',
          'Email Support'
        ],
        popular: false,
        services: getSEOServices('starter')
      },
      {
        name: 'SEO Basic Plan',
        icon: 'fas fa-chart-line',
        monthlyPrice: 300,
        yearlyPrice: 3060,
        features: [
          '10 Keywords Tracking',
          'On-Page SEO',
          'Technical Audit',
          'Bi-weekly Reports',
          'Priority Support'
        ],
        popular: false,
        services: getSEOServices('basic')
      },
      {
        name: 'SEO Standard Plan',
        icon: 'fas fa-star',
        monthlyPrice: 450,
        yearlyPrice: 4590,
        features: [
          '25 Keywords Tracking',
          'Link Building',
          'Content Optimization',
          'Competitor Analysis',
          'Weekly Reports',
          'Dedicated Manager'
        ],
        popular: true,
        services: getSEOServices('standard')
      },
      {
        name: 'SEO Premium Plan',
        icon: 'fas fa-crown',
        monthlyPrice: 700,
        yearlyPrice: 7140,
        features: [
          '50 Keywords Tracking',
          'Advanced Technical SEO',
          'Local SEO',
          'Content Creation',
          'Daily Monitoring',
          'Priority Support'
        ],
        popular: false,
        services: getSEOServices('premium')
      },
      {
        name: 'SEO Enterprise Plan',
        icon: 'fas fa-building',
        monthlyPrice: 1200,
        yearlyPrice: 12240,
        features: [
          'Unlimited Keywords',
          'Full SEO Suite',
          'Custom Strategy',
          'White-label Reports',
          'API Access',
          '24/7 Support'
        ],
        popular: false,
        services: getSEOServices('enterprise')
      }
    ],
    'smo': [
      {
        name: 'Starter SMO',
        icon: 'fas fa-rocket',
        monthlyPrice: 300,
        yearlyPrice: 3060,
        features: [
          '2 Social Platforms',
          '10 Posts per Month',
          'Basic Analytics',
          'Monthly Reports'
        ],
        popular: false,
        services: getSMOServices('starter')
      },
      {
        name: 'Professional SMO',
        icon: 'fas fa-chart-line',
        monthlyPrice: 500,
        yearlyPrice: 5100,
        features: [
          '4 Social Platforms',
          '20 Posts per Month',
          'Advanced Analytics',
          'Engagement Management',
          'Weekly Reports'
        ],
        popular: true,
        services: getSMOServices('professional')
      },
      {
        name: 'Enterprise SMO',
        icon: 'fas fa-crown',
        monthlyPrice: 800,
        yearlyPrice: 8160,
        features: [
          'All Social Platforms',
          '30+ Posts per Month',
          'Influencer Outreach',
          'Paid Advertising',
          'Daily Monitoring'
        ],
        popular: false,
        services: getSMOServices('enterprise')
      }
    ],
    'ppc': [
      {
        name: 'Starter PPC',
        icon: 'fas fa-rocket',
        monthlyPrice: 500,
        yearlyPrice: 5100,
        features: [
          'Google Ads Setup',
          '$1000 Ad Budget',
          'Keyword Research',
          'Monthly Reports'
        ],
        popular: false,
        services: getPPCServices('starter')
      },
      {
        name: 'Professional PPC',
        icon: 'fas fa-chart-line',
        monthlyPrice: 900,
        yearlyPrice: 9180,
        features: [
          'Multi-Platform Ads',
          '$2500 Ad Budget',
          'A/B Testing',
          'Landing Page Optimization',
          'Bi-weekly Reports'
        ],
        popular: true,
        services: getPPCServices('professional')
      },
      {
        name: 'Enterprise PPC',
        icon: 'fas fa-crown',
        monthlyPrice: 1500,
        yearlyPrice: 15300,
        features: [
          'Everything in Pro',
          '$5000+ Ad Budget',
          'Remarketing Campaigns',
          'Dedicated Specialist',
          'Weekly Reports'
        ],
        popular: false,
        services: getPPCServices('enterprise')
      }
    ],
    'web-dev': [
      {
        name: 'Basic Website',
        icon: 'fas fa-laptop-code',
        monthlyPrice: 1000,
        yearlyPrice: 10200,
        features: [
          'Up to 5 Pages',
          'Responsive Design',
          'SEO Friendly',
          'Contact Form',
          '30 Days Support'
        ],
        popular: false,
        services: getWebDevServices('basic')
      },
      {
        name: 'Professional Website',
        icon: 'fas fa-desktop',
        monthlyPrice: 2000,
        yearlyPrice: 20400,
        features: [
          'Up to 10 Pages',
          'Custom Design',
          'CMS Integration',
          'E-commerce Ready',
          '60 Days Support'
        ],
        popular: true,
        services: getWebDevServices('professional')
      },
      {
        name: 'Business Website',
        icon: 'fas fa-cogs',
        monthlyPrice: 2500,
        yearlyPrice: 25500,
        features: [
          'Custom Development',
          'Database Design',
          'User Authentication',
          'API Integration',
          '1 Year Support'
        ],
        popular: false,
        services: getWebDevServices('custom')
      }
    ],
    'content': [
      {
        name: 'Starter Content',
        icon: 'fas fa-pen',
        monthlyPrice: 250,
        yearlyPrice: 2550,
        features: [
          '4 Blog Posts/Month',
          'Basic SEO Optimization',
          'Topic Research',
          'Monthly Reports'
        ],
        popular: false,
        services: getContentServices('starter')
      },
      {
        name: 'Professional Content',
        icon: 'fas fa-edit',
        monthlyPrice: 500,
        yearlyPrice: 5100,
        features: [
          '8 Blog Posts/Month',
          'Advanced SEO',
          'Content Strategy',
          'Graphics Included',
          'Weekly Reports'
        ],
        popular: true,
        services: getContentServices('professional')
      },
      {
        name: 'Enterprise Content',
        icon: 'fas fa-newspaper',
        monthlyPrice: 1000,
        yearlyPrice: 10200,
        features: [
          '16 Blog Posts/Month',
          'Content Calendar',
          'Social Media Copies',
          'Video Scripts',
          'Dedicated Writer'
        ],
        popular: false,
        services: getContentServices('enterprise')
      }
    ],
    'branding': [
      {
        name: 'Basic Branding',
        icon: 'fas fa-paint-brush',
        monthlyPrice: 500,
        yearlyPrice: 5100,
        features: [
          'Logo Design',
          'Color Palette',
          'Typography Guide',
          'Basic Brand Guidelines'
        ],
        popular: false,
        services: getBrandingServices('basic')
      },
      {
        name: 'Professional Branding',
        icon: 'fas fa-palette',
        monthlyPrice: 1000,
        yearlyPrice: 10200,
        features: [
          'Complete Logo Suite',
          'Brand Style Guide',
          'Social Media Kit',
          'Business Card Design',
          'Stationery Design'
        ],
        popular: true,
        services: getBrandingServices('professional')
      },
      {
        name: 'Enterprise Branding',
        icon: 'fas fa-crown',
        monthlyPrice: 2000,
        yearlyPrice: 20400,
        features: [
          'Complete Brand System',
          'Brand Voice & Tone',
          'Marketing Materials',
          'Packaging Design',
          'Brand Strategy Session'
        ],
        popular: false,
        services: getBrandingServices('enterprise')
      }
    ]
  };

  // Get Current Plans
  const currentPlans = pricingPlans[selectedCategory] || pricingPlans['seo'];

  const handleGetStarted = (plan) => {
    setSelectedPlan(plan);
    setShowPopup(true);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 50%, #0A0A0A 100%)',
      color: 'white',
      fontFamily: "'Poppins', sans-serif"
    }}>
      <Navbar />
      
{/* Custom Plan Button - Top Left */}
<AnimatePresence>
  {isVisible && (
    <motion.a
      href="./customplan"
      style={{ textDecoration: 'none' }}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <motion.button
        style={{
          position: 'fixed',
          top: '120px',
          left: '20px',
          zIndex: 1000,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: '#FFFFFF',
          padding: '14px 28px',
          borderRadius: '50px',
          fontWeight: '600',
          fontSize: '15px',
          textTransform: 'none',
          letterSpacing: '0.5px',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 6px 20px rgba(102, 126, 234, 0.4)',
          transition: 'all 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          fontFamily: "'Poppins', 'Segoe UI', sans-serif",
          backdropFilter: 'blur(10px)',
          backgroundBlendMode: 'overlay'
        }}
        whileHover={{ 
          scale: 1.08,
          boxShadow: '0 10px 30px rgba(102, 126, 234, 0.6)',
          background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)'
        }}
        whileTap={{ scale: 0.95 }}
      >
        <i className="fas fa-magic" style={{ fontSize: '16px' }}></i>
        Design Your Custom Plan
      </motion.button>
    </motion.a>
  )}
</AnimatePresence>

{/* Website cost calculator Button - Top Right */}
<AnimatePresence>
  {isVisible && (
    <motion.a
      href="./webcalc"
      style={{ textDecoration: 'none' }}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3 }}
    >
      <motion.button
        style={{
          position: 'fixed',
          top: '120px',
          right: '20px',
          zIndex: 1000,
          background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
          color: '#FFFFFF',
          padding: '14px 28px',
          borderRadius: '50px',
          fontWeight: '600',
          fontSize: '15px',
          textTransform: 'none',
          letterSpacing: '0.5px',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 6px 20px rgba(245, 87, 108, 0.4)',
          transition: 'all 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          textAlign: 'center',
          whiteSpace: 'nowrap',
          fontFamily: "'Poppins', 'Segoe UI', sans-serif",
          backdropFilter: 'blur(10px)',
          backgroundBlendMode: 'overlay'
        }}
        whileHover={{ 
          scale: 1.08,
          boxShadow: '0 10px 30px rgba(245, 87, 108, 0.6)',
          background: 'linear-gradient(135deg, #f5576c 0%, #f093fb 100%)'
        }}
        whileTap={{ scale: 0.95 }}
      >
        <i className="fas fa-calculator" style={{ fontSize: '16px' }}></i>
        Calculate Website Cost
      </motion.button>
    </motion.a>
  )}
</AnimatePresence>
      {/* Main Content */}
      <div style={{ padding: '80px 30px 30px', overflowY: 'auto' }}>
        {/* Pricing Section Header */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="section-header"
          style={{ textAlign: 'center', marginBottom: '40px' }}
        >
          <div style={{
            fontSize: '12px',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            color: '#FFC107',
            marginBottom: '10px'
          }}>
            Transparent Pricing
          </div>
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: '900',
            background: 'linear-gradient(135deg, #FFC107, #FF9800)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '20px'
          }}>
            Choose Your Perfect Plan
          </h1>
          <p style={{
            fontSize: '1.1rem',
            color: '#9E9E9E',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Flexible pricing plans designed to grow with your business
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            marginTop: '15px'
          }}>
            <div style={{ width: '20px', height: '2px', borderRadius: '1px', background: 'linear-gradient(90deg, transparent, #FFC107)' }}></div>
            <div style={{ width: '40px', height: '2px', borderRadius: '1px', background: '#FFC107' }}></div>
            <div style={{ width: '20px', height: '2px', borderRadius: '1px', background: 'linear-gradient(90deg, #FFC107, transparent)' }}></div>
          </div>
        </motion.section>

        {/* Pricing Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '40px',
            gap: '15px'
          }}
        >
          <span style={{
            fontWeight: '500',
            color: billingCycle === 'monthly' ? '#FFC107' : '#9E9E9E'
          }}>
            Monthly
          </span>
          
          <div 
            onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
            style={{
              position: 'relative',
              width: '60px',
              height: '30px',
              backgroundColor: billingCycle === 'yearly' ? 'rgba(255, 193, 7, 0.3)' : 'rgba(255, 255, 255, 0.1)',
              borderRadius: '15px',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            <div style={{
              position: 'absolute',
              top: '3px',
              left: billingCycle === 'yearly' ? '33px' : '3px',
              width: '24px',
              height: '24px',
              backgroundColor: '#FFC107',
              borderRadius: '50%',
              transition: 'all 0.3s ease'
            }}></div>
          </div>
          
          <span style={{
            fontWeight: '500',
            color: billingCycle === 'yearly' ? '#FFC107' : '#9E9E9E',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            Yearly 
            <span style={{
              backgroundColor: '#4CAF50',
              color: 'white',
              fontSize: '12px',
              padding: '2px 8px',
              borderRadius: '10px',
              marginLeft: '10px'
            }}>
              15% OFF
            </span>
          </span>
        </motion.div>

        {/* Service Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '15px',
            marginBottom: '40px'
          }}
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '10px',
                padding: '15px',
                borderRadius: '12px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                backgroundColor: selectedCategory === category.id 
                  ? 'rgba(255, 193, 7, 0.15)' 
                  : 'rgba(255, 255, 255, 0.03)',
                border: selectedCategory === category.id 
                  ? '2px solid rgba(255, 193, 7, 0.5)' 
                  : '2px solid rgba(255, 255, 255, 0.1)',
                boxShadow: selectedCategory === category.id 
                  ? '0 4px 20px rgba(255, 193, 7, 0.3)' 
                  : 'none',
                minWidth: '100px'
              }}
            >
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                backgroundColor: selectedCategory === category.id 
                  ? 'rgba(255, 193, 7, 0.1)' 
                  : 'rgba(255, 193, 7, 0.1)',
                background: selectedCategory === category.id 
                  ? 'linear-gradient(135deg, #FFC107, #FF9800)' 
                  : 'rgba(255, 193, 7, 0.1)',
                boxShadow: selectedCategory === category.id 
                  ? '0 4px 15px rgba(255, 193, 7, 0.4)' 
                  : 'none'
              }}>
                <i className={category.icon}></i>
              </div>
              <div style={{
                fontSize: '14px',
                fontWeight: '600',
                textAlign: 'center'
              }}>
                {category.name}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pricing Cards */}
        <AnimatePresence mode='wait'>
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {/* Top Row - First 3 Cards */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '25px',
              marginBottom: '25px',
              justifyContent: 'center'
            }}>
              {currentPlans.slice(0, 3).map((plan, index) => (
                <PricingCard 
                  key={plan.name}
                  plan={plan}
                  index={index}
                  billingCycle={billingCycle}
                  onGetStarted={() => handleGetStarted(plan)}
                />
              ))}
            </div>

            {/* Bottom Row - Remaining Cards */}
            {currentPlans.length > 3 && (
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '25px',
                justifyContent: 'center'
              }}>
                {currentPlans.slice(3).map((plan, index) => (
                  <PricingCard 
                    key={plan.name}
                    plan={plan}
                    index={index + 3}
                    billingCycle={billingCycle}
                    onGetStarted={() => handleGetStarted(plan)}
                  />
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <Footer />

      {/* Services Popup */}
      {showPopup && selectedPlan && (
        <ServicesPopup 
          plan={selectedPlan}
          billingCycle={billingCycle}
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  );
}

// Pricing Card Component
function PricingCard({ plan, index, billingCycle, onGetStarted }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      style={{
        position: 'relative',
        padding: '30px',
        borderRadius: '16px',
        background: plan.popular 
          ? 'linear-gradient(135deg, rgba(255,193,7,0.15) 0%, rgba(255,152,0,0.08) 100%)' 
          : 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
        border: plan.popular 
          ? '2px solid rgba(255,193,7,0.5)' 
          : '2px solid rgba(255,255,255,0.08)',
        boxShadow: plan.popular 
          ? '0 8px 32px rgba(255,193,7,0.25)' 
          : '0 4px 20px rgba(0,0,0,0.3)',
        backdropFilter: 'blur(10px)',
        width: '280px',
        transition: 'all 0.3s ease'
      }}
    >
      {/* Popular Badge */}
      {plan.popular && (
        <div style={{
          position: 'absolute',
          top: '-10px',
          right: '20px',
          background: 'linear-gradient(135deg, #FFD700, #FFC107)',
          color: '#000',
          padding: '5px 15px',
          borderRadius: '20px',
          fontSize: '12px',
          fontWeight: '700',
          boxShadow: '0 4px 15px rgba(255, 193, 7, 0.4)'
        }}>
          POPULAR
        </div>
      )}

      {/* Plan Name & Icon */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px'
      }}>
        <h3 style={{
          fontSize: '1.4rem',
          fontWeight: '700',
          color: plan.popular ? '#FFC107' : 'white'
        }}>
          {plan.name}
        </h3>
        <div style={{ fontSize: '24px', color: '#FFC107' }}>
          <i className={plan.icon}></i>
        </div>
      </div>

      {/* Price */}
      <div style={{
        fontSize: '2.5rem',
        fontWeight: '800',
        marginBottom: '20px',
        background: 'linear-gradient(135deg, #FFC107, #FF9800)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      }}>
        ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
      </div>

      {/* Features */}
      <ul style={{
        listStyle: 'none',
        padding: 0,
        marginBottom: '25px'
      }}>
        {plan.features.map((feature, i) => (
          <li key={i} style={{
            marginBottom: '10px',
            display: 'flex',
            alignItems: 'flex-start'
          }}>
            <i className="fas fa-check" style={{
              color: '#4CAF50',
              marginRight: '10px',
              marginTop: '3px',
              flexShrink: 0
            }}></i>
            {feature}
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <motion.button
        onClick={onGetStarted}
        style={{
          width: '100%',
          padding: '12px',
          borderRadius: '8px',
          border: 'none',
          background: plan.popular 
            ? 'linear-gradient(135deg, #FFC107, #FF9800)' 
            : 'rgba(255, 193, 7, 0.1)',
          color: plan.popular ? '#0A0A0A' : '#FFC107',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          border: plan.popular ? 'none' : '2px solid rgba(255, 193, 7, 0.3)',
          fontSize: '1rem'
        }}
        whileHover={{ 
          scale: 1.05,
          boxShadow: '0 4px 15px rgba(255, 193, 7, 0.4)'
        }}
        whileTap={{ scale: 0.95 }}
      >
        Get Started
      </motion.button>
    </motion.div>
  );
}

// Services Popup Modal Component - UPDATED VERSION
function ServicesPopup({ plan, billingCycle, onClose }) {
  const price = billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: 'fixed',
        top: '10px',
        left: '10px',
        right: '10px',
        bottom: '10px',
        background: 'rgba(0, 0, 0, 0.95)',
        backdropFilter: 'blur(10px)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '16px',
        border: '2px solid rgba(255, 193, 7, 0.3)'
      }}
    >
      {/* Close Button - Outside the popup content */}
      <motion.button
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '-15px',
          right: '-15px',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          border: '2px solid rgba(255, 193, 7, 0.5)',
          background: 'rgba(0, 0, 0, 0.9)',
          color: '#FFC107',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1001,
          boxShadow: '0 4px 15px rgba(255, 193, 7, 0.4)'
        }}
        whileHover={{ 
          background: 'rgba(255, 193, 7, 0.2)',
          scale: 1.1
        }}
        whileTap={{ scale: 0.9 }}
      >
        ×
      </motion.button>

      <motion.div
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'linear-gradient(135deg, rgba(26, 26, 26, 0.95), rgba(10, 10, 10, 0.98))',
          borderRadius: '16px',
          width: '100%',
          height: '100%',
          border: '2px solid rgba(255, 193, 7, 0.2)',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}
      >
        {/* Header */}
        <div style={{
          padding: '25px 30px 20px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          background: 'rgba(255, 193, 7, 0.05)',
          flexShrink: 0
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '15px'
          }}>
            <div style={{ flex: 1 }}>
              <h3 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                margin: '0 0 5px 0',
                background: 'linear-gradient(135deg, #FFC107, #FF9800)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                {plan.name}
              </h3>
              <p style={{
                color: 'rgba(255, 255, 255, 0.7)',
                margin: 0,
                fontSize: '1rem'
              }}>
                All Services Included - Complete Package Details
              </p>
            </div>
            
            <div style={{ 
              textAlign: 'right',
              flexShrink: 0,
              marginLeft: '20px'
            }}>
              <div style={{
                fontSize: '2.2rem',
                fontWeight: '800',
                background: 'linear-gradient(135deg, #FFC107, #FF9800)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '5px'
              }}>
                ${price}
              </div>
              <div style={{
                fontSize: '0.9rem',
                color: 'rgba(255, 255, 255, 0.6)'
              }}>
                {billingCycle === 'monthly' ? 'per month' : 'per year'}
              </div>
            </div>
          </div>
        </div>

        {/* Services Content - Scrollable */}
        <div style={{
          padding: '25px 30px',
          overflowY: 'auto',
          flex: 1,
          display: 'flex',
          flexDirection: 'column'
        }}>
          {/* Two Column Layout for Services */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '30px',
            alignItems: 'start'
          }}>
            {/* Left Column */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '25px'
            }}>
              {plan.services && plan.services.slice(0, Math.ceil(plan.services.length / 2)).map((category, index) => (
                <ServiceCategory key={index} category={category} />
              ))}
            </div>

            {/* Right Column - Starts from where left column heading ends */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '25px',
              marginTop: '60px' /* This ensures right column starts below the header area */
            }}>
              {plan.services && plan.services.slice(Math.ceil(plan.services.length / 2)).map((category, index) => (
                <ServiceCategory key={index + Math.ceil(plan.services.length / 2)} category={category} />
              ))}
            </div>
          </div>
        </div>

        {/* Footer with Pay Button */}
        <div style={{
          padding: '20px 30px',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          background: 'rgba(255, 193, 7, 0.05)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '15px',
          flexShrink: 0
        }}>
          <div style={{
            fontSize: '0.9rem',
            color: 'rgba(255, 255, 255, 0.7)'
          }}>
            <i className="fas fa-shield-alt" style={{ marginRight: '8px', color: '#4CAF50' }}></i>
            Have any query? Ask here
          </div>
          
          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
            <motion.button
              onClick={onClose}
              style={{
                padding: '12px 25px',
                borderRadius: '8px',
                border: '2px solid rgba(255, 193, 7, 0.3)',
                background: 'transparent',
                color: '#FFC107',
                fontWeight: '600',
                cursor: 'pointer',
                fontSize: '1rem',
                transition: 'all 0.3s ease'
              }}
              whileHover={{ 
                background: 'rgba(255, 193, 7, 0.1)'
              }}
            >
              Cancel
            </motion.button>
            
            <motion.button
              onClick={() => {
                alert(`Proceeding to payment for ${plan.name} - $${price}`);
                onClose();
              }}
              style={{
                padding: '12px 30px',
                borderRadius: '8px',
                border: 'none',
                background: 'linear-gradient(135deg, #FFC107, #FF9800)',
                color: '#0A0A0A',
                fontWeight: '700',
                cursor: 'pointer',
                fontSize: '1rem',
                transition: 'all 0.3s ease'
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 4px 15px rgba(255, 193, 7, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-credit-card" style={{ marginRight: '8px' }}></i>
              Pay Now
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Service Category Component
function ServiceCategory({ category }) {
  return (
    <div style={{
      background: 'rgba(255, 255, 255, 0.03)',
      borderRadius: '12px',
      padding: '20px',
      border: '1px solid rgba(255, 255, 255, 0.08)'
    }}>
      <h4 style={{
        fontSize: '1.2rem',
        fontWeight: '600',
        margin: '0 0 15px 0',
        color: '#FFC107',
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }}>
        <i className={category.icon}></i>
        {category.title}
      </h4>
      
      <ul style={{
        listStyle: 'none',
        padding: 0,
        margin: 0
      }}>
        {category.items.map((service, serviceIndex) => (
          <li key={serviceIndex} style={{
            padding: '8px 0',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
            display: 'flex',
            alignItems: 'flex-start',
            fontSize: '0.95rem',
            lineHeight: '1.4'
          }}>
            <i className="fas fa-check" style={{
              color: '#4CAF50',
              marginRight: '10px',
              marginTop: '4px',
              flexShrink: 0,
              fontSize: '0.8rem'
            }}></i>
            {service}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Updated Service Data Functions with Complete SEO Services
function getSEOServices(planType) {
  const services = {
    starter: [
      {
        title: 'SEO ANALYSIS',
        icon: 'fas fa-chart-bar',
        items: [
          'SEO ANALYSIS',
          'Keyword Research & Analysis',
          'Baseline Ranking Check',
          'Duplicate Content Check',
          'Google Penalty Check'
        ]
      },
      {
        title: 'ON-PAGE OPTIMIZATION',
        icon: 'fas fa-cogs',
        items: [
          'Website Canonical Check',
          'Title Tag Optimization',
          'META Tags Optimization',
          'Heading Tags Optimization',
          'Image Alt Tags Optimization',
          'Content Optimization',
          'SEO Friendly URL Setup',
          'Site Navigation Analysis',
          '404 Page Implementation',
          'Broken Links Check',
          'Website Speed Check',
          'Google Indexed Pages Check',
          'Robots.txt Creation',
          'Google XML Sitemap',
          'HTML Sitemap (If Available)',
          'Website Responsive Check',
          'Google Webmaster Tools Setup',
          'Google Analytics Setup',
          'On Site Blog Section Creation',
          'On Site Blog Posting – 1'
        ]
      },
      {
        title: 'OFF-PAGE OPTIMIZATION',
        icon: 'fas fa-external-link-alt',
        items: [
          'Search Engine Submission',
          'Blog Writing - 2',
          'Blog Links - 2',
          'Blog Social Bookmarking - 6',
          'Article Writing - 1',
          'Article Submissions - 1',
          'Article Marketing - 5',
          'Image sharing - 2',
          'Contextual Links',
          'Google Indexed Pages Check',
          'Keyword used in anchor text',
          'Social Blog Sharing',
          'Social Bookmarking - 15',
          'Micro Blogging - 4',
          'Classified Submissions - 5',
          'Bing Local Listing',
          'Video Marketing (if client provides) - 1',
          'Location optimization',
          'Local Business Listings',
          'NAP Syndication'
        ]
      },
      {
        title: 'CUSTOMER SUPPORT',
        icon: 'fas fa-headset',
        items: ['Email', 'Phone', 'Chat']
      }
    ],
    basic: [
      {
        title: 'SEO ANALYSIS',
        icon: 'fas fa-chart-bar',
        items: [
          'Keyword Research & Analysis',
          'Baseline Ranking Check',
          'Duplicate Content Check',
          'Google Penalty Check'
        ]
      },
      {
        title: 'ON-PAGE OPTIMIZATION',
        icon: 'fas fa-cogs',
        items: [
          'Website Canonical Check',
          'Title Tag Optimization',
          'META Tags Optimization',
          'Heading Tags Optimization',
          'Image Alt Tags Optimization',
          'Content Optimization',
          'SEO Friendly URL Setup',
          'Site Navigation Analysis',
          '404 Page Implementation',
          'Broken Links Check',
          'Website Speed Check',
          'Google Indexed Pages Check',
          'Robots.txt Creation',
          'Google XML Sitemap',
          'HTML Sitemap (If Available)',
          'Website Responsive Check',
          'Google Webmaster Tools Setup',
          'Google Analytics Setup',
          'On Site Blog Section Creation',
          'On Site Blog Posting – 2'
        ]
      },
      {
        title: 'OFF-PAGE OPTIMIZATION',
        icon: 'fas fa-external-link-alt',
        items: [
          'Search Engine Submission',
          'Blog Writing - 2',
          'Blog Links - 2',
          'Blog Social Bookmarking - 10',
          'Article Writing - 2',
          'Article Submissions - 2',
          'Article Marketing - 10',
          'Image sharing - 4',
          'Contextual Links',
          'Keyword used in anchor text',
          'Social Blog Sharing',
          'Web 2.0 Profile Creation - 1',
          'Web 2.0 Profiles Bookmarking - 4',
          'Social Bookmarking - 24',
          'Micro Blogging - 7',
          'Classified Submissions - 8',
          'Google Business Page Creation',
          'Bing Local Listing',
          'Video Marketing (if Client provides) - 1',
          'Location optimization - 2',
          'Local Business Listings - 2',
          'NAP Syndication'
        ]
      },
      {
        title: 'SOCIAL MEDIA MARKETING',
        icon: 'fas fa-share-alt',
        items: [
          'Instagram Profile Creation',
          'Instagram Posting & Sharing'
        ]
      },
      {
        title: 'CUSTOMER SUPPORT',
        icon: 'fas fa-headset',
        items: ['Email', 'Phone', 'Chat']
      }
    ],
    standard: [
      {
        title: 'SEO ANALYSIS',
        icon: 'fas fa-chart-bar',
        items: [
          'Website Analysis',
          'Keyword Research & Analysis',
          'Competitor Analysis',
          'Baseline Ranking Check',
          'Duplicate Content Check',
          'Google Penalty Check',
          'Backlink Analysis (if required)'
        ]
      },
      {
        title: 'ON-PAGE OPTIMIZATION',
        icon: 'fas fa-cogs',
        items: [
          'Website Canonical Check',
          'Title Tag Optimization',
          'META Tags Optimization',
          'Heading Tags Optimization',
          'Image Alt Tags Optimization',
          'Content Optimization',
          'SEO Friendly URL Setup',
          'Site Navigation Analysis',
          '404 Page Implementation',
          'Broken Links Check',
          'Website Speed Check',
          'Google Indexed Pages Check',
          'Robots.txt Creation',
          'Google XML Sitemap',
          'HTML Sitemap (If available)',
          'Hyperlink Optimization',
          'Website Responsive Check',
          'Website Permalinks Analysis',
          'Internal Linking Optimization',
          'Google Webmaster Tools Setup',
          'Bing Webmaster Tools Setup',
          'Google Analytics Setup',
          'Structured Data Setup',
          'On Site Blog Section Creation',
          'On Site Blog Posting - 4'
        ]
      },
      {
        title: 'OFF-PAGE OPTIMIZATION',
        icon: 'fas fa-external-link-alt',
        items: [
          'Search Engine Submission',
          'Blog Writing - 3',
          'Blog Links - 3',
          'Blog Social Bookmarking - 16',
          'Article Writing - 3',
          'Article Submissions - 3',
          'Article Marketing - 15',
          'Image sharing - 8',
          'Contextual Links',
          'Keyword used in anchor text',
          'Social Blog Sharing',
          'Web 2.0 Profile Creation',
          'Web 2.0 Profiles Bookmarking Links',
          'Social Bookmarking - 30',
          'Micro Blogging - 12',
          'Classified Submissions - 12',
          'Infographics Creation/Month',
          'Infographics Post/Month',
          'Share each Infographics on Social Media Networks',
          'Google Business Page Creation',
          'Bing Local Listing Creation',
          'PPT Submissions - 1',
          'Video Marketing (if Client provides)',
          'Location optimization -4',
          'Local Business Listings - 4',
          'NAP Syndication'
        ]
      },
      {
        title: 'FACEBOOK',
        icon: 'fab fa-facebook',
        items: [
          'Facebook Profile Creation',
          'Facebook Fan Page Creation',
          'Facebook Posting & Sharing - 8'
        ]
      },
      {
        title: 'INSTAGRAM',
        icon: 'fab fa-instagram',
        items: [
          'Instagram Profile Creation',
          'Instagram Posting & Sharing - 8'
        ]
      },
      {
        title: 'PINTEREST',
        icon: 'fab fa-pinterest',
        items: [
          'Account Creation/Management',
          'Updating of pin boards - 8',
          'Pins (If Client Provides Images)'
        ]
      },
      {
        title: 'CUSTOMER SUPPORT',
        icon: 'fas fa-headset',
        items: ['Email', 'Phone', 'Chat']
      }
    ],
    premium: [
      {
        title: 'SEO ANALYSIS',
        icon: 'fas fa-chart-bar',
        items: [
          'Keyword Research & Analysis',
          'Baseline Ranking Check',
          'Duplicate Content Check',
          'Google Penalty Check',
          'Competitor Analysis',
          'Pre-Optimization Website Analysis',
          'Backlink Analysis (if required)'
        ]
      },
      {
        title: 'ON-PAGE OPTIMIZATION',
        icon: 'fas fa-cogs',
        items: [
          'Website Canonical Check',
          'Title Tag Optimization',
          'META Tags Optimization',
          'Heading Tags Optimization',
          'Image Alt Tags Optimization',
          'Content Optimization',
          'SEO Friendly URL Setup',
          'Site Navigation Analysis',
          '404 Page Implementation',
          'Broken Links Check',
          'Website Speed Check',
          'Google Indexed Pages Check',
          'Robots.txt Creation',
          'Google XML Sitemap',
          'HTML Sitemap (If Available)',
          'Hyperlink Optimization',
          'Website Responsive Check',
          'Website Permalinks Analysis',
          'Internal Linking Optimization',
          'Google Webmaster Tools Setup',
          'Bing Webmaster Tools Setup',
          'Google Analytics Setup',
          'Structured Data Setup',
          'On Site Blog Section Creation',
          'On Site Blog Posting - 5'
        ]
      },
      {
        title: 'OFF-PAGE OPTIMIZATION',
        icon: 'fas fa-external-link-alt',
        items: [
          'Search Engine Submission',
          'Blog Writing - 5',
          'Blog Links - 5',
          'Blog Social Bookmarking - 35',
          'Article Writing - 4',
          'Article Submissions - 4',
          'Article Marketing - 25',
          'Image sharing - 12',
          'Contextual Links',
          'Keyword used in anchor text',
          'Social Blog Sharing',
          'Social Bookmarking - 60',
          'Micro Blogging - 4',
          'Classified Submissions - 5',
          'Bing Local Listing',
          'Web 2.0 Profile Creation - 5',
          'Web 2.0 Profiles Bookmarking Links - 25',
          'Press Release (If Client Provides News)',
          'Press Release Bookmarking Links',
          'Classified Submissions - 20',
          'Infographics Creation/Month',
          'Infographics Post/Month',
          'Infographics Sharing',
          'Bing Local Listing Creation',
          'Google Business Page Creation',
          'PPT Submissions - 3',
          'Video Marketing (if Client provides)',
          'Micro Blogging - 20',
          'Social Bookmarking Links - 60',
          'Video Marketing (if Client provides) - 1',
          'Location optimization - 10',
          'Local Business Listings- 10',
          'NAP Syndication'
        ]
      },
      {
        title: 'FACEBOOK',
        icon: 'fab fa-facebook',
        items: [
          'Facebook Profile Creation',
          'Facebook Fan Page Creation',
          'Facebook Posting & Sharing - 16'
        ]
      },
      {
        title: 'INSTAGRAM',
        icon: 'fab fa-instagram',
        items: [
          'Instagram Profile Creation',
          'Instagram Posting & Sharing - 16'
        ]
      },
      {
        title: 'PINTEREST',
        icon: 'fab fa-pinterest',
        items: [
          'Account Creation/Management',
          'Updating of pin boards - 16',
          'Pins (If Client Provides Images)'
        ]
      },
      {
        title: 'LINKEDIN',
        icon: 'fab fa-linkedin',
        items: [
          'Linkedin Profile Creation',
          'Linkedin Posting & Sharing - 16'
        ]
      },
      {
        title: 'CUSTOMER SUPPORT',
        icon: 'fas fa-headset',
        items: ['Email', 'Phone', 'Chat']
      }
    ],
    enterprise: [
      {
        title: 'SEO ANALYSIS',
        icon: 'fas fa-chart-bar',
        items: [
          'Keyword Research & Analysis',
          'Baseline Ranking Check',
          'Duplicate Content Check',
          'Google Penalty Check',
          'Competitor Analysis',
          'Pre-Optimization Website Analysis',
          'Backlink Analysis (if required)'
        ]
      },
      {
        title: 'ON-PAGE OPTIMIZATION',
        icon: 'fas fa-cogs',
        items: [
          'Website Canonical Check',
          'Title Tag Optimization',
          'META Tags Optimization',
          'Heading Tags Optimization',
          'Image Alt Tags Optimization',
          'Content Optimization',
          'SEO Friendly URL Setup',
          'Site Navigation Analysis',
          '404 Page Implementation',
          'Broken Links Check',
          'Website Speed Check',
          'Google Indexed Pages Check',
          'Robots.txt Creation',
          'Google XML Sitemap',
          'HTML Sitemap (If Available)',
          'Hyperlink Optimization',
          'Website Responsive Check',
          'Website Permalinks Analysis',
          'Internal Linking Optimization',
          'Google Webmaster Tools Setup',
          'Bing Webmaster Tools Setup',
          'Google Analytics Setup',
          'Structured Data Setup',
          'On Site Blog Section Creation',
          'On Site Blog Posting – Applicable from 1st month - 8'
        ]
      },
      {
        title: 'OFF-PAGE OPTIMIZATION',
        icon: 'fas fa-external-link-alt',
        items: [
          'Search Engine Submission',
          'Blog Writing - 8',
          'Blog Links - 8',
          'Blog Social Bookmarking - 40',
          'Article Writing - 6',
          'Article Submissions - 6',
          'Article Marketing - 28',
          'Image sharing - 15',
          'Contextual Links',
          'Keyword used in anchor text',
          'Social Blog Sharing',
          'Social Bookmarking - 60',
          'Micro Blogging - 6',
          'Classified Submissions - 8',
          'Bing Local Listing',
          'Web 2.0 Profile Creation - 8',
          'Web 2.0 Profiles Bookmarking Links - 28',
          'Press Release (If Client Provides News)',
          'Press Release Bookmarking Links',
          'Classified Submissions - 22',
          'Infographics Creation/Month',
          'Infographics Post/Month',
          'Share each Infographics on Social Media Networks',
          'Bing Local Listing Creation',
          'Google Business Page Creation',
          'PPT Submissions - 5',
          'Video Marketing (if Client provides)',
          'Micro Blogging - 22',
          'Social Bookmarking Links - 65',
          'Video Marketing (if Client provides) - 2',
          'Location optimization - 14',
          'Local Business Listings- 14',
          'NAP Syndication'
        ]
      },
      {
        title: 'FACEBOOK',
        icon: 'fab fa-facebook',
        items: [
          'Facebook Profile Creation',
          'Facebook Fan Page Creation',
          'Facebook Posting & Sharing - 20'
        ]
      },
      {
        title: 'INSTAGRAM',
        icon: 'fab fa-instagram',
        items: [
          'Instagram Profile Creation',
          'Instagram Posting & Sharing - 20'
        ]
      },
      {
        title: 'PINTEREST',
        icon: 'fab fa-pinterest',
        items: [
          'Account Creation/Management',
          'Updating of pin boards - 20',
          'Pins (If Client Provides Images)'
        ]
      },
      {
        title: 'LINKEDIN',
        icon: 'fab fa-linkedin',
        items: [
          'Linkedin Profile Creation',
          'Linkedin Posting & Sharing - 20'
        ]
      },
      {
        title: 'CUSTOMER SUPPORT',
        icon: 'fas fa-headset',
        items: ['Email', 'Phone', 'Chat']
      }
    ]
  };

  return services[planType] || services.starter;
}

function getSMOServices(planType) {
  return [
    {
      title: 'SOCIAL MEDIA',
      icon: 'fas fa-share-alt',
      items: ['Platform Setup', 'Content Creation', 'Engagement']
    }
  ];
}

function getPPCServices(planType) {
  return [
    {
      title: 'PPC CAMPAIGNS',
      icon: 'fas fa-ad',
      items: ['Campaign Setup', 'Ad Creation', 'Optimization']
    }
  ];
}

function getWebDevServices(planType) {
  return [
    {
      title: 'WEB DEVELOPMENT',
      icon: 'fas fa-code',
      items: ['Responsive Design', 'SEO Optimization', 'Performance']
    }
  ];
}

function getContentServices(planType) {
  return [
    {
      title: 'CONTENT CREATION',
      icon: 'fas fa-pen-nib',
      items: ['Blog Posts', 'SEO Content', 'Graphics']
    }
  ];
}

function getBrandingServices(planType) {
  return [
    {
      title: 'BRANDING',
      icon: 'fas fa-palette',
      items: ['Logo Design', 'Brand Guidelines', 'Marketing Materials']
    }
  ];
}