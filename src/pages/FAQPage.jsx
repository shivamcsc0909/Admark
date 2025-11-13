import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openFAQ, setOpenFAQ] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // FAQ Categories
  const categories = [
    { id: 'all', name: 'All Questions', icon: '📚' },
    { id: 'general', name: 'General', icon: '💡' },
    { id: 'services', name: 'Services', icon: '🛠️' },
    { id: 'pricing', name: 'Pricing & Billing', icon: '💰' },
    { id: 'technical', name: 'Technical', icon: '⚙️' },
    { id: 'support', name: 'Support', icon: '🆘' }
  ];

  // FAQ Data
  const allFAQs = [
    // General
    {
      id: 1,
      category: 'general',
      question: "What services do you offer?",
      answer: "We offer a comprehensive range of digital services including web design & development, mobile app development, digital marketing (SEO, PPC, social media), e-commerce solutions, branding, content marketing, and custom software development. Our team of experts can handle projects of any size and complexity."
    },
    {
      id: 2,
      category: 'general',
      question: "How long have you been in business?",
      answer: "We've been providing digital solutions since 2014, with over 10 years of experience in the industry. During this time, we've successfully completed 500+ projects for clients across various industries worldwide."
    },
    {
      id: 3,
      category: 'general',
      question: "What industries do you work with?",
      answer: "We work with clients across diverse industries including e-commerce, healthcare, finance, education, real estate, hospitality, technology, and more. Our versatile team can adapt to any industry's unique requirements and challenges."
    },
    {
      id: 4,
      category: 'general',
      question: "Do you work with startups?",
      answer: "Absolutely! We love working with startups and have helped numerous early-stage companies launch their digital presence. We offer special packages and flexible payment terms for startups to make our services more accessible."
    },
    {
      id: 5,
      category: 'general',
      question: "Where is your team located?",
      answer: "We have offices in Mumbai, Bangalore, and Delhi, with team members working across India. However, we work with clients globally and are experienced in remote collaboration using modern project management tools."
    },

    // Services
    {
      id: 6,
      category: 'services',
      question: "How long does it take to build a website?",
      answer: "The timeline depends on the project's complexity. A basic website typically takes 4-6 weeks, a business website with custom features takes 8-12 weeks, and complex e-commerce or web applications can take 12-20 weeks. We'll provide a detailed timeline after understanding your requirements."
    },
    {
      id: 7,
      category: 'services',
      question: "Do you provide website maintenance?",
      answer: "Yes! We offer comprehensive maintenance packages starting at $199/month. This includes regular updates, security monitoring, backups, performance optimization, and technical support. We can also handle content updates and feature additions."
    },
    {
      id: 8,
      category: 'services',
      question: "Can you redesign my existing website?",
      answer: "Absolutely! We specialize in website redesigns. We'll analyze your current site, identify areas for improvement, and create a modern, user-friendly design that better serves your business goals while preserving your existing content and SEO rankings."
    },
    {
      id: 9,
      category: 'services',
      question: "Do you offer SEO services?",
      answer: "Yes, SEO is one of our core services. We provide comprehensive SEO strategies including keyword research, on-page optimization, technical SEO, link building, local SEO, and monthly reporting. Most clients see significant improvements within 3-6 months."
    },
    {
      id: 10,
      category: 'services',
      question: "Can you help with social media marketing?",
      answer: "Definitely! Our social media marketing services include strategy development, content creation, community management, paid advertising, influencer partnerships, and analytics. We manage campaigns across all major platforms including Facebook, Instagram, LinkedIn, and Twitter."
    },
    {
      id: 11,
      category: 'services',
      question: "Do you develop mobile apps?",
      answer: "Yes, we develop both native (iOS and Android) and cross-platform mobile apps using React Native and Flutter. We handle everything from concept and design to development, testing, and App Store/Play Store deployment."
    },

    // Pricing
    {
      id: 12,
      category: 'pricing',
      question: "How much does a website cost?",
      answer: "Website costs vary based on complexity. Basic websites start at $2,999, business websites at $5,999, and custom e-commerce or web applications start at $12,999. We'll provide a detailed quote after understanding your specific needs and requirements."
    },
    {
      id: 13,
      category: 'pricing',
      question: "Do you offer payment plans?",
      answer: "Yes! For projects over $10,000, we offer flexible payment plans. Typically, we require 30% upfront, 40% at the midpoint, and 30% upon completion. For long-term projects, we can arrange monthly payment schedules."
    },
    {
      id: 14,
      category: 'pricing',
      question: "What's included in your pricing?",
      answer: "Our pricing includes project planning, design, development, testing, deployment, and initial support. We provide detailed proposals that break down all costs clearly. Additional features or ongoing services like maintenance are quoted separately."
    },
    {
      id: 15,
      category: 'pricing',
      question: "Do you charge for consultations?",
      answer: "No! Initial consultations are completely free. We'll discuss your project, provide recommendations, and give you a detailed proposal at no cost. This helps us understand your needs and helps you understand what we can offer."
    },
    {
      id: 16,
      category: 'pricing',
      question: "Can I get a refund if I'm not satisfied?",
      answer: "We have a satisfaction guarantee. If you're not happy with the initial designs or concepts, we'll revise them until you're satisfied. For projects cancelled mid-way, we refund any unused portion of your payment minus completed work."
    },

    // Technical
    {
      id: 17,
      category: 'technical',
      question: "What technologies do you use?",
      answer: "We use modern, industry-standard technologies including React, Next.js, Node.js, Python, PHP for web development; React Native and Flutter for mobile apps; and WordPress, Shopify for CMS solutions. We choose technologies based on your project's specific needs."
    },
    {
      id: 18,
      category: 'technical',
      question: "Will my website be mobile-friendly?",
      answer: "Absolutely! All our websites are fully responsive and optimized for mobile devices. With 60%+ of web traffic coming from mobile, we ensure your site looks and works perfectly on all screen sizes and devices."
    },
    {
      id: 19,
      category: 'technical',
      question: "Do you provide hosting services?",
      answer: "Yes, we offer managed hosting services optimized for performance and security. We use reliable providers like AWS, Google Cloud, and DigitalOcean. Hosting costs vary based on your site's traffic and resource requirements, typically starting at $50/month."
    },
    {
      id: 20,
      category: 'technical',
      question: "Will I be able to update content myself?",
      answer: "Yes! We build websites with user-friendly content management systems (CMS) like WordPress or custom admin panels. We also provide training and documentation so you can easily update text, images, and pages without technical knowledge."
    },
    {
      id: 21,
      category: 'technical',
      question: "How do you ensure website security?",
      answer: "We implement multiple security measures including SSL certificates, regular security updates, firewall protection, secure authentication, data encryption, and regular backups. We also conduct security audits and follow industry best practices."
    },
    {
      id: 22,
      category: 'technical',
      question: "What about website speed and performance?",
      answer: "Performance is a priority for us. We optimize images, implement caching, use CDNs, minimize code, and follow Core Web Vitals guidelines. We aim for loading times under 3 seconds and regularly monitor and optimize performance."
    },

    // Support
    {
      id: 23,
      category: 'support',
      question: "What kind of support do you provide?",
      answer: "We offer various support levels: email support (24-48hr response), priority support (4-8hr response), and premium 24/7 support. Support includes bug fixes, technical assistance, minor updates, and guidance on using your website or app."
    },
    {
      id: 24,
      category: 'support',
      question: "How long is the warranty period?",
      answer: "All our projects come with a 90-day warranty covering any bugs or issues that arise from our work. After the warranty period, we offer maintenance packages to keep your site running smoothly with ongoing support."
    },
    {
      id: 25,
      category: 'support',
      question: "Do you provide training?",
      answer: "Yes! We provide comprehensive training on how to use and manage your website or app. This includes live training sessions, video tutorials, and written documentation. Training is included in all our project packages."
    },
    {
      id: 26,
      category: 'support',
      question: "What if something breaks after launch?",
      answer: "If any issues occur within the 90-day warranty period, we'll fix them at no extra cost. For issues after that, our maintenance packages cover fixes and updates. We also offer emergency support for critical issues."
    },
    {
      id: 27,
      category: 'support',
      question: "Can you help migrate my existing site?",
      answer: "Absolutely! We handle complete website migrations including content transfer, database migration, SEO preservation, and testing. We ensure zero downtime and that everything works perfectly on the new platform."
    },
    {
      id: 28,
      category: 'support',
      question: "How do I get started?",
      answer: "Simply contact us through our website, email, or phone. We'll schedule a free consultation to discuss your needs, provide recommendations, and give you a detailed proposal. Once approved, we can start immediately!"
    }
  ];

  // Calculate category counts
  const categoryCounts = useMemo(() => {
    const counts = {};
    allFAQs.forEach(faq => {
      counts[faq.category] = (counts[faq.category] || 0) + 1;
    });
    counts.all = allFAQs.length;
    return counts;
  }, []);

  // Filter FAQs
  const filteredFAQs = useMemo(() => {
    let filtered = selectedCategory === 'all' 
      ? allFAQs 
      : allFAQs.filter(faq => faq.category === selectedCategory);

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(faq => 
        faq.question.toLowerCase().includes(query) || 
        faq.answer.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [selectedCategory, searchQuery]);

  // Popular FAQs
  const popularFAQs = allFAQs.slice(0, 6);

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0A0A0A 0%, #1A1D22 50%, #0A0A0A 100%)',
      color: 'white',
      fontFamily: "'Inter', sans-serif"
    }}>
      {/* Hero Section */}
      <section style={{
        padding: '120px 20px 80px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '800px',
          background: 'radial-gradient(circle, rgba(255, 215, 0, 0.15) 0%, transparent 70%)',
          filter: 'blur(80px)',
          animation: 'pulse 4s ease-in-out infinite'
        }} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ position: 'relative', zIndex: 1 }}
        >
          <div style={{
            display: 'inline-block',
            padding: '8px 25px',
            background: 'rgba(255, 215, 0, 0.1)',
            border: '1px solid rgba(255, 215, 0, 0.3)',
            borderRadius: '50px',
            marginBottom: '20px',
            color: '#FFD700',
            fontSize: '0.9rem',
            fontWeight: '600'
          }}>
            ❓ Help Center
          </div>

          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            fontWeight: '900',
            marginBottom: '25px',
            background: 'linear-gradient(135deg, #FFD700 0%, #FFC107 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            lineHeight: '1.2'
          }}>
            Frequently Asked<br />Questions
          </h1>

          <p style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
            color: 'rgba(255, 255, 255, 0.8)',
            maxWidth: '800px',
            margin: '0 auto 40px',
            lineHeight: '1.8'
          }}>
            Find answers to common questions about our services, pricing, and processes
          </p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{
              maxWidth: '700px',
              margin: '0 auto',
              position: 'relative'
            }}
          >
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '18px 60px 18px 25px',
                borderRadius: '50px',
                border: '2px solid rgba(255, 215, 0, 0.3)',
                background: 'rgba(26, 29, 34, 0.8)',
                backdropFilter: 'blur(10px)',
                color: 'white',
                fontSize: '1.05rem',
                outline: 'none',
                transition: 'all 0.3s ease'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#FFD700';
                e.target.style.background = 'rgba(26, 29, 34, 0.95)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(255, 215, 0, 0.3)';
                e.target.style.background = 'rgba(26, 29, 34, 0.8)';
              }}
            />
            <div style={{
              position: 'absolute',
              right: '25px',
              top: '50%',
              transform: 'translateY(-50%)',
              fontSize: '1.5rem',
              color: '#FFD700'
            }}>
              🔍
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Popular Questions */}
      {!searchQuery && selectedCategory === 'all' && (
        <section style={{
          padding: '60px 20px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              fontWeight: '900',
              marginBottom: '40px',
              textAlign: 'center',
              background: 'linear-gradient(135deg, #FFD700, #FFC107)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              🔥 Popular Questions
            </h2>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '25px'
          }}>
            {popularFAQs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                onClick={() => {
                  setSelectedCategory(faq.category);
                  setOpenFAQ(faq.id);
                  window.scrollTo({ top: 600, behavior: 'smooth' });
                }}
                style={{
                  background: 'rgba(26, 29, 34, 0.6)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '15px',
                  padding: '25px',
                  border: '1px solid rgba(255, 215, 0, 0.2)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                <h3 style={{
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  color: '#FFD700',
                  marginBottom: '10px',
                  lineHeight: '1.4'
                }}>
                  {faq.question}
                </h3>
                <p style={{
                  fontSize: '0.95rem',
                  color: 'rgba(255, 255, 255, 0.7)',
                  lineHeight: '1.6',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {faq.answer}
                </p>
                <div style={{
                  marginTop: '15px',
                  fontSize: '0.9rem',
                  color: '#FFC107',
                  fontWeight: '600'
                }}>
                  Read more →
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Category Filters */}
      <section style={{
        padding: '60px 20px',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '15px',
          marginBottom: '50px'
        }}>
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setSelectedCategory(category.id);
                setSearchQuery('');
              }}
              style={{
                padding: '12px 30px',
                borderRadius: '50px',
                border: selectedCategory === category.id 
                  ? '2px solid #FFD700' 
                  : '2px solid rgba(255, 215, 0, 0.3)',
                background: selectedCategory === category.id 
                  ? 'linear-gradient(135deg, #FFD700, #FFC107)' 
                  : 'rgba(26, 29, 34, 0.6)',
                color: selectedCategory === category.id ? '#000' : 'rgba(255, 255, 255, 0.9)',
                fontWeight: '600',
                fontSize: '1rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)',
                boxShadow: selectedCategory === category.id 
                  ? '0 8px 25px rgba(255, 215, 0, 0.4)' 
                  : '0 4px 15px rgba(0, 0, 0, 0.2)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <span style={{ fontSize: '1.2rem' }}>{category.icon}</span>
              {category.name}
              <span style={{
                fontSize: '0.85rem',
                opacity: 0.8,
                marginLeft: '5px'
              }}>
                ({categoryCounts[category.id] || 0})
              </span>
            </motion.button>
          ))}
        </div>

        {/* FAQ List */}
        <div style={{
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          {searchQuery && (
            <div style={{
              marginBottom: '30px',
              padding: '15px 25px',
              background: 'rgba(255, 215, 0, 0.1)',
              border: '1px solid rgba(255, 215, 0, 0.3)',
              borderRadius: '12px',
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: '1.05rem'
            }}>
              Found <strong style={{ color: '#FFD700' }}>{filteredFAQs.length}</strong> result{filteredFAQs.length !== 1 ? 's' : ''} for "<strong>{searchQuery}</strong>"
            </div>
          )}

          {filteredFAQs.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{
                padding: '60px 40px',
                background: 'rgba(26, 29, 34, 0.6)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                border: '1px solid rgba(255, 215, 0, 0.2)',
                textAlign: 'center'
              }}
            >
              <div style={{ fontSize: '5rem', marginBottom: '20px' }}>🔍</div>
              <h3 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                color: '#FFD700',
                marginBottom: '15px'
              }}>
                No results found
              </h3>
              <p style={{
                fontSize: '1.1rem',
                color: 'rgba(255, 255, 255, 0.7)',
                marginBottom: '25px'
              }}>
                Try adjusting your search or browse by category
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                style={{
                  padding: '12px 30px',
                  borderRadius: '50px',
                  border: 'none',
                  background: 'linear-gradient(135deg, #FFD700, #FFC107)',
                  color: '#000',
                  fontWeight: '600',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                Clear Search
              </button>
            </motion.div>
          ) : (
            <AnimatePresence mode='wait'>
              <motion.div
                key={selectedCategory + searchQuery}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  display: 'grid',
                  gap: '15px'
                }}
              >
                {filteredFAQs.map((faq, index) => (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    style={{
                      background: openFAQ === faq.id 
                        ? 'rgba(255, 215, 0, 0.08)' 
                        : 'rgba(26, 29, 34, 0.6)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '15px',
                      overflow: 'hidden',
                      border: openFAQ === faq.id 
                        ? '1px solid rgba(255, 215, 0, 0.4)' 
                        : '1px solid rgba(255, 215, 0, 0.2)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <div
                      onClick={() => toggleFAQ(faq.id)}
                      style={{
                        padding: '25px 30px',
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '20px'
                      }}
                    >
                      <h3 style={{
                        fontSize: '1.15rem',
                        fontWeight: '700',
                        color: openFAQ === faq.id ? '#FFD700' : 'white',
                        transition: 'color 0.3s ease',
                        flex: 1,
                        lineHeight: '1.5'
                      }}>
                        {faq.question}
                      </h3>
                      <div style={{
                        fontSize: '1.5rem',
                        color: '#FFD700',
                        transition: 'transform 0.3s ease',
                        transform: openFAQ === faq.id ? 'rotate(45deg)' : 'rotate(0)',
                        fontWeight: '300',
                        flexShrink: 0
                      }}>
                        +
                      </div>
                    </div>

                    <AnimatePresence>
                      {openFAQ === faq.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          style={{ overflow: 'hidden' }}
                        >
                          <div style={{
                            padding: '0 30px 25px',
                            color: 'rgba(255, 255, 255, 0.85)',
                            fontSize: '1.05rem',
                            lineHeight: '1.8'
                          }}>
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '100px 20px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'rgba(10, 10, 15, 0.6)'
      }}>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(255, 215, 0, 0.2) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animation: 'pulse 3s ease-in-out infinite'
        }} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ position: 'relative', zIndex: 1 }}
        >
          <div style={{ fontSize: '5rem', marginBottom: '20px' }}>💬</div>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: '900',
            marginBottom: '25px',
            color: 'white'
          }}>
            Still Have Questions?
          </h2>
          <p style={{
            fontSize: '1.3rem',
            color: 'rgba(255, 255, 255, 0.7)',
            marginBottom: '40px',
            maxWidth: '700px',
            margin: '0 auto 40px'
          }}>
            Can't find what you're looking for? Our support team is here to help!
          </p>

          <div style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button style={{
              padding: '18px 45px',
              fontSize: '1.1rem',
              fontWeight: '700',
              borderRadius: '50px',
              border: 'none',
              background: 'linear-gradient(135deg, #FFD700 0%, #FFC107 100%)',
              color: '#000',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 10px 30px rgba(255, 215, 0, 0.4)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-5px)';
              e.target.style.boxShadow = '0 15px 40px rgba(255, 215, 0, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 10px 30px rgba(255, 215, 0, 0.4)';
            }}
            >
              Contact Support
            </button>

            <button style={{
              padding: '18px 45px',
              fontSize: '1.1rem',
              fontWeight: '700',
              borderRadius: '50px',
              border: '2px solid #FFD700',
              background: 'transparent',
              color: '#FFD700',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255, 215, 0, 0.1)';
              e.target.style.transform = 'translateY(-5px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.transform = 'translateY(0)';
            }}
            >
              Schedule a Call
            </button>
          </div>

          {/* Quick Contact */}
          <div style={{
            marginTop: '60px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px',
            maxWidth: '900px',
            margin: '60px auto 0'
          }}>
            {[
              { icon: '📧', label: 'Email', value: 'support@company.com' },
              { icon: '📞', label: 'Phone', value: '+91 1800 123 4567' },
              { icon: '💬', label: 'Live Chat', value: 'Available 24/7' }
            ].map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                style={{
                  padding: '25px',
                  background: 'rgba(26, 29, 34, 0.6)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '15px',
                  border: '1px solid rgba(255, 215, 0, 0.2)'
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>
                  {contact.icon}
                </div>
                <div style={{
                  fontSize: '0.9rem',
                  color: 'rgba(255, 255, 255, 0.6)',
                  marginBottom: '5px'
                }}>
                  {contact.label}
                </div>
                <div style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: '#FFD700'
                }}>
                  {contact.value}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <style>{`
        @keyframes pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.15; }
          50% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.2; }
        }

        @media (max-width: 768px) {
          section {
            padding: 60px 15px !important;
          }
        }
      `}</style>
    </div>
  );
}