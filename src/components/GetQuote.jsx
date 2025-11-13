import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function GetQuote() {
  const [selectedServices, setSelectedServices] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const services = [
    { 
      id: 'seo', 
      name: 'SEO Services', 
      icon: '🚀',
      price: 'Starting from $999/mo',
      color: '#2563eb'
    },
    { 
      id: 'smo', 
      name: 'Social Media Marketing', 
      icon: '📱',
      price: 'Starting from $799/mo',
      color: '#7c3aed'
    },
    { 
      id: 'ppc', 
      name: 'PPC Advertising', 
      icon: '💰',
      price: 'Starting from $1,299/mo',
      color: '#dc2626'
    },
    { 
      id: 'web', 
      name: 'Web Development', 
      icon: '💻',
      price: 'Starting from $2,999',
      color: '#059669'
    },
    { 
      id: 'app', 
      name: 'App Development', 
      icon: '📱',
      price: 'Starting from $4,999',
      color: '#ea580c'
    },
    { 
      id: 'content', 
      name: 'Content Marketing', 
      icon: '✍️',
      price: 'Starting from $699/mo',
      color: '#9333ea'
    }
  ];

  const budgetRanges = [
    'Under $1,000',
    '$1,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000+'
  ];

  const toggleService = (serviceId) => {
    setSelectedServices(prev =>
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitStatus(null);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          budget: '',
          message: ''
        });
        setSelectedServices([]);
      }, 3000);
    }, 2000);
  };

  return (
    <section 
      id="get-quote" 
      className="relative py-20 md:py-32 px-4 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%)'
      }}
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full opacity-40 blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-200 rounded-full opacity-40 blur-3xl" style={{ animation: 'float 10s ease-in-out infinite', animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-200 rounded-full opacity-30 blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 drop-shadow-lg">
            Get Your Custom Quote
          </h2>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto font-medium text-gray-700">
            Select services, share your requirements, and let's build something amazing together
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Service Selector */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Choose Your Services
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((service) => (
                <motion.div
                  key={service.id}
                  onClick={() => toggleService(service.id)}
                  whileHover={{ 
                    scale: 1.03,
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.98 }}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border-2 ${
                    selectedServices.includes(service.id) 
                      ? 'border-2 shadow-2xl' 
                      : 'border border-gray-200 shadow-lg'
                  } bg-white/80 backdrop-blur-sm hover:shadow-xl`}
                  style={{
                    borderColor: selectedServices.includes(service.id) ? service.color : 'rgba(255, 255, 255, 0.8)',
                    boxShadow: selectedServices.includes(service.id) 
                      ? `0 10px 40px ${service.color}40, 0 0 20px ${service.color}20` 
                      : '0 8px 25px rgba(0,0,0,0.1)'
                  }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-4xl drop-shadow-sm">{service.icon}</span>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                      selectedServices.includes(service.id) ? 'scale-110' : ''
                    }`}
                    style={{
                      borderColor: service.color,
                      background: selectedServices.includes(service.id) ? service.color : 'transparent'
                    }}>
                      {selectedServices.includes(service.id) && (
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-gray-800" style={{ color: service.color }}>
                    {service.name}
                  </h4>
                  <p className="text-sm font-medium text-gray-600">
                    {service.price}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Selected Services Summary */}
            {selectedServices.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-6 bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-lg"
              >
                <h4 className="font-bold text-lg mb-3 text-blue-600">
                  Selected Services ({selectedServices.length})
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedServices.map((id) => {
                    const service = services.find(s => s.id === id);
                    return (
                      <motion.span
                        key={id}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="px-4 py-2 rounded-full text-sm font-semibold shadow-md"
                        style={{
                          background: `${service.color}15`,
                          color: service.color,
                          border: `1px solid ${service.color}30`
                        }}
                      >
                        {service.icon} {service.name}
                      </motion.span>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              Your Requirements
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white border-2 border-gray-200 transition-all focus:ring-4 focus:border-blue-500 shadow-sm"
                  style={{
                    color: '#1f2937'
                  }}
                  placeholder="John Doe"
                />
              </motion.div>

              <motion.div
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white border-2 border-gray-200 transition-all focus:ring-4 focus:border-blue-500 shadow-sm"
                  style={{
                    color: '#1f2937'
                  }}
                  placeholder="john@company.com"
                />
              </motion.div>

              <motion.div
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white border-2 border-gray-200 transition-all focus:ring-4 focus:border-blue-500 shadow-sm"
                  style={{
                    color: '#1f2937'
                  }}
                  placeholder="+1 (555) 123-4567"
                />
              </motion.div>

              <motion.div
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white border-2 border-gray-200 transition-all focus:ring-4 focus:border-blue-500 shadow-sm"
                  style={{
                    color: '#1f2937'
                  }}
                  placeholder="Your Company Inc."
                />
              </motion.div>

              <motion.div
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                  Budget Range
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white border-2 border-gray-200 transition-all focus:ring-4 focus:border-blue-500 shadow-sm"
                  style={{
                    color: '#1f2937'
                  }}
                >
                  <option value="">Select your budget</option>
                  {budgetRanges.map((range, index) => (
                    <option key={index} value={range}>{range}</option>
                  ))}
                </select>
              </motion.div>

              <motion.div
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                  Project Details *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg bg-white border-2 border-gray-200 transition-all focus:ring-4 focus:border-blue-500 shadow-sm resize-none"
                  style={{
                    color: '#1f2937'
                  }}
                  placeholder="Tell us about your project, goals, and timeline..."
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting || selectedServices.length === 0}
                whileHover={{ 
                  scale: selectedServices.length > 0 && !isSubmitting ? 1.03 : 1,
                  y: selectedServices.length > 0 && !isSubmitting ? -2 : 0
                }}
                whileTap={{ scale: selectedServices.length > 0 && !isSubmitting ? 0.98 : 1 }}
                className="w-full py-4 rounded-full font-bold text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl relative overflow-hidden"
                style={{
                  background: isSubmitting 
                    ? 'linear-gradient(90deg, #9ca3af 0%, #6b7280 100%)' 
                    : 'linear-gradient(90deg, #2563eb 0%, #7c3aed 100%)',
                  boxShadow: isSubmitting 
                    ? '0 4px 15px rgba(156, 163, 175, 0.4)'
                    : '0 8px 30px rgba(37, 99, 235, 0.4)',
                }}
              >
                <span className="relative z-10">
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-3">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Submitting...
                    </span>
                  ) : submitStatus === 'success' ? (
                    <span className="flex items-center justify-center gap-2">
                      ✓ Submitted Successfully!
                    </span>
                  ) : (
                    'Submit Your Requirements 🚀'
                  )}
                </span>
                
                {/* Animated gradient overlay */}
                {!isSubmitting && selectedServices.length > 0 && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                )}
              </motion.button>

              {selectedServices.length === 0 && (
                <p className="text-center text-sm font-medium text-red-500">
                  Please select at least one service to continue
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}