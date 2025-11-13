import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQSection() {
  const [selectedCategory, setSelectedCategory] = useState('general');
  const [openFAQ, setOpenFAQ] = useState(null);

  const categories = [
    { id: 'general', label: 'General Related Questions', icon: '❓' },
    { id: 'pricing', label: 'Pricing Related Questions', icon: '💰' },
    { id: 'services', label: 'Services Related Questions', icon: '🛠️' },
    { id: 'technical', label: 'Technical Related Questions', icon: '⚙️' },
    { id: 'support', label: 'Support Related Questions', icon: '💬' }
  ];

  const faqData = {
    general: [
      {
        question: 'What is AdMark Digital Media?',
        answer: 'AdMark Digital Media is a full-service digital marketing agency specializing in SEO, social media marketing, PPC advertising, web development, and content marketing. We help businesses grow their online presence and achieve measurable results.'
      },
      {
        question: 'How long have you been in business?',
        answer: 'We have been providing digital marketing services since 2018, serving over 500+ clients across 15+ countries with proven track record of success.'
      },
      {
        question: 'What industries do you work with?',
        answer: 'We work with businesses across various industries including e-commerce, healthcare, technology, real estate, hospitality, education, and B2B services.'
      },
      {
        question: 'How do I get started?',
        answer: 'Simply click on the "Schedule Meeting" button on our homepage or contact us through the "Get Quote" form. We\'ll schedule a free consultation to discuss your needs and create a custom strategy.'
      }
    ],
    pricing: [
      {
        question: 'What are your pricing plans?',
        answer: 'We offer flexible pricing based on services - Basic, Standard, and Premium plans for SEO, SMO, PPC, Web Development, Content Marketing, and Branding. Prices start from $199/month depending on the service.'
      },
      {
        question: 'Do you offer custom packages?',
        answer: 'Yes! We understand every business is unique. We can create custom packages tailored to your specific needs and budget. Contact us to discuss your requirements.'
      },
      {
        question: 'Is there a setup fee?',
        answer: 'Setup fees vary by service. Most digital marketing services have no setup fee, while web development projects may include an initial setup cost depending on complexity.'
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards, PayPal, bank transfers, and for long-term contracts, we also offer flexible payment terms.'
      },
      {
        question: 'Can I cancel my subscription anytime?',
        answer: 'Yes, we offer month-to-month flexibility. You can cancel or pause your subscription with 30 days notice. No long-term contracts required.'
      }
    ],
    services: [
      {
        question: 'What SEO services do you provide?',
        answer: 'Our SEO services include keyword research, on-page optimization, technical SEO, link building, content optimization, competitor analysis, and monthly reporting with guaranteed rankings improvement.'
      },
      {
        question: 'How does your social media marketing work?',
        answer: 'We create and manage your social media presence across all major platforms, including content creation, posting schedule, community management, paid advertising, and analytics tracking.'
      },
      {
        question: 'Do you build custom websites?',
        answer: 'Yes! We build fully custom, responsive websites tailored to your brand. This includes design, development, CMS integration, e-commerce functionality, and ongoing maintenance.'
      },
      {
        question: 'What is included in PPC advertising?',
        answer: 'Our PPC services include campaign setup, keyword research, ad creation, landing page optimization, A/B testing, budget management, and detailed ROI reporting across Google Ads, Facebook Ads, and other platforms.'
      }
    ],
    technical: [
      {
        question: 'What technologies do you use?',
        answer: 'We use modern technologies including React, Node.js, WordPress, Shopify, Google Analytics, SEMrush, Ahrefs, and various marketing automation tools to deliver the best results.'
      },
      {
        question: 'Will my website be mobile-friendly?',
        answer: 'Absolutely! All websites we develop are fully responsive and optimized for mobile, tablet, and desktop devices, ensuring perfect user experience across all screen sizes.'
      },
      {
        question: 'Do you provide website hosting?',
        answer: 'Yes, we offer reliable hosting solutions with 99.9% uptime guarantee, SSL certificates, daily backups, and 24/7 monitoring as part of our web development packages.'
      },
      {
        question: 'How do you ensure website security?',
        answer: 'We implement SSL certificates, regular security updates, malware scanning, firewall protection, and follow best practices to keep your website secure from threats.'
      }
    ],
    support: [
      {
        question: 'What kind of support do you provide?',
        answer: 'We offer email support, live chat, phone support, and dedicated account managers for premium clients. Support hours are Monday-Friday 9 AM - 6 PM, with emergency support available 24/7.'
      },
      {
        question: 'How quickly do you respond to queries?',
        answer: 'We typically respond within 1-2 business hours for email queries and immediately for live chat during business hours. Emergency issues are addressed within 30 minutes.'
      },
      {
        question: 'Do you provide training?',
        answer: 'Yes! We provide comprehensive training sessions for your team on how to use your website, manage content, understand analytics, and make the most of our services.'
      },
      {
        question: 'What if I need changes after project completion?',
        answer: 'All projects come with a warranty period. Minor changes are included, and we offer ongoing maintenance packages for continuous support and updates.'
      }
    ]
  };

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section 
      id="faq" 
      className="relative py-16 px-4 overflow-hidden"
      style={{ 
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%)',
        fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif"
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)',
            top: '10%',
            right: '5%',
          }}
        />
        <div
          className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #ec4899 0%, transparent 70%)',
            bottom: '10%',
            left: '5%',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 tracking-tight"
            style={{
              color: '#1e293b',
              textShadow: '0 2px 10px rgba(99, 102, 241, 0.1)',
            }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Frequently Asked{' '}
            <span 
              className="bg-clip-text text-transparent"
              style={{
                background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 50%, #f59e0b 100%)',
                backgroundSize: '200% 200%',
                animation: 'gradient-shift 3s ease infinite',
              }}
            >
              Questions
            </span>
          </motion.h2>
          <motion.p 
            className="text-lg font-medium max-w-2xl mx-auto"
            style={{ color: '#475569' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Get answers to all your questions about our services, pricing, and more
          </motion.p>
        </motion.div>

        {/* Grid Layout: Category Tabs + FAQ */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left: Category Tabs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="space-y-3 lg:sticky lg:top-24">
              {categories.map((cat) => (
                <motion.button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setOpenFAQ(null);
                  }}
                  whileHover={{ 
                    x: 8,
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 400 }
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full text-left px-5 py-4 rounded-2xl transition-all duration-300 flex items-center gap-4 group relative overflow-hidden"
                  style={{
                    background: selectedCategory === cat.id
                      ? 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)'
                      : 'rgba(255, 255, 255, 0.8)',
                    border: selectedCategory === cat.id
                      ? '2px solid transparent'
                      : '2px solid rgba(99, 102, 241, 0.2)',
                    boxShadow: selectedCategory === cat.id
                      ? '0 10px 30px rgba(99, 102, 241, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)'
                      : '0 4px 20px rgba(0, 0, 0, 0.08)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  {/* Background overlay for selected */}
                  {selectedCategory === cat.id && (
                    <motion.div
                      className="absolute inset-0 bg-white/10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    />
                  )}
                  
                  <span 
                    className="text-2xl transition-transform duration-300 group-hover:scale-110"
                    style={{
                      color: selectedCategory === cat.id ? 'white' : '#6366f1',
                      filter: selectedCategory === cat.id ? 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' : 'none'
                    }}
                  >
                    {cat.icon}
                  </span>
                  <span 
                    className="text-sm font-bold transition-all duration-300"
                    style={{ 
                      color: selectedCategory === cat.id ? 'white' : '#334155',
                    }}
                  >
                    {cat.label.replace(' Related Questions', '')}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Right: FAQ Items */}
          <div className="lg:col-span-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="space-y-4"
              >
                {faqData[selectedCategory].map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: index * 0.1,
                      ease: "easeOut"
                    }}
                    whileHover={{ 
                      scale: 1.01,
                      transition: { type: "spring", stiffness: 400 }
                    }}
                    className="rounded-2xl overflow-hidden transition-all duration-300 group cursor-pointer"
                    style={{
                      background: openFAQ === index 
                        ? 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248, 250, 252, 0.9) 100%)'
                        : 'rgba(255, 255, 255, 0.7)',
                      border: openFAQ === index 
                        ? '2px solid #6366f1' 
                        : '2px solid rgba(99, 102, 241, 0.15)',
                      boxShadow: openFAQ === index 
                        ? '0 20px 40px rgba(99, 102, 241, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.8)'
                        : '0 8px 25px rgba(0, 0, 0, 0.06)',
                      backdropFilter: 'blur(10px)',
                    }}
                    onClick={() => toggleFAQ(index)}
                  >
                    <div className="px-6 py-5 flex items-center justify-between text-left transition-all duration-300">
                      <span 
                        className="text-base md:text-lg font-bold pr-6 flex-1 leading-relaxed"
                        style={{ 
                          color: openFAQ === index ? '#6366f1' : '#1e293b',
                          fontFamily: "'Inter', system-ui, sans-serif",
                          fontWeight: 700
                        }}
                      >
                        {faq.question}
                      </span>
                      
                      <motion.div
                        animate={{ rotate: openFAQ === index ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300"
                        style={{
                          background: openFAQ === index 
                            ? 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)'
                            : 'rgba(99, 102, 241, 0.1)',
                          color: openFAQ === index ? 'white' : '#6366f1',
                          border: openFAQ === index ? 'none' : '2px solid rgba(99, 102, 241, 0.2)',
                          boxShadow: openFAQ === index 
                            ? '0 4px 15px rgba(99, 102, 241, 0.4)'
                            : '0 2px 10px rgba(0, 0, 0, 0.05)',
                        }}
                      >
                        <motion.span
                          animate={{ scale: openFAQ === index ? 0.8 : 1 }}
                          transition={{ duration: 0.2 }}
                        >
                          {openFAQ === index ? '−' : '+'}
                        </motion.span>
                      </motion.div>
                    </div>

                    <AnimatePresence>
                      {openFAQ === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <div 
                            className="px-6 pb-6 pt-2"
                            style={{
                              borderTop: '1px solid rgba(99, 102, 241, 0.1)',
                            }}
                          >
                            <motion.p 
                              initial={{ y: -10, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ delay: 0.1, duration: 0.25 }}
                              className="text-base leading-relaxed font-medium"
                              style={{ 
                                color: '#475569',
                                lineHeight: '1.8',
                                fontFamily: "'Inter', system-ui, sans-serif"
                              }}
                            >
                              {faq.answer}
                            </motion.p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Enhanced CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mt-14 p-8 rounded-2xl relative overflow-hidden group"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248, 250, 252, 0.9) 100%)',
            border: '2px solid rgba(99, 102, 241, 0.2)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.6)',
            backdropFilter: 'blur(10px)',
          }}
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25px 25px, #6366f1 2px, transparent 0%)`,
              backgroundSize: '50px 50px',
            }} />
          </div>

          <motion.h3 
            className="text-2xl font-black mb-3"
            style={{ color: '#1e293b' }}
            whileHover={{ scale: 1.05 }}
          >
            Still Have Questions?
          </motion.h3>
          <motion.p 
            className="text-lg mb-6 font-medium"
            style={{ color: '#475569' }}
          >
            Our team is here to help you succeed!
          </motion.p>
          <motion.a
            href="#contact"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 15px 35px rgba(99, 102, 241, 0.4)'
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-bold text-base transition-all duration-300 relative overflow-hidden group/btn"
            style={{
              background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
              color: 'white',
              boxShadow: '0 8px 25px rgba(99, 102, 241, 0.3)',
            }}
          >
            <span className="relative z-10">Get Instant Help</span>
            <motion.span
              className="relative z-10"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
            
            {/* Button hover effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
          </motion.a>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  );
}