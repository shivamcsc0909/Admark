import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [hoveredCard, setHoveredCard] = useState(null);

  // Office Locations
  const offices = [
    {
      city: "Mumbai",
      country: "India",
      icon: "🏢",
      address: "123 Business Tower, Andheri East, Mumbai 400069",
      phone: "+91 22 1234 5678",
      email: "mumbai@company.com",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM"
    },
    {
      city: "Bangalore",
      country: "India",
      icon: "🏢",
      address: "456 Tech Park, Whitefield, Bangalore 560066",
      phone: "+91 80 9876 5432",
      email: "bangalore@company.com",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM"
    },
    {
      city: "Delhi",
      country: "India",
      icon: "🏢",
      address: "789 Corporate Hub, Connaught Place, Delhi 110001",
      phone: "+91 11 5555 6666",
      email: "delhi@company.com",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM"
    }
  ];

  // Contact Methods
  const contactMethods = [
    {
      icon: "📧",
      title: "Email Us",
      info: "info@company.com",
      subInfo: "We'll respond within 24 hours",
      link: "mailto:info@company.com"
    },
    {
      icon: "📞",
      title: "Call Us",
      info: "+91 1800 123 4567",
      subInfo: "Mon-Fri: 9 AM to 6 PM IST",
      link: "tel:+911800123467"
    },
    {
      icon: "💬",
      title: "Live Chat",
      info: "Chat with our team",
      subInfo: "Average response: 2 minutes",
      link: "#"
    },
    {
      icon: "📍",
      title: "Visit Us",
      info: "Mumbai Head Office",
      subInfo: "Schedule a visit",
      link: "#"
    }
  ];

  // Social Media Links
  const socialLinks = [
    { icon: "📘", name: "Facebook", color: "#1877F2", link: "#" },
    { icon: "🐦", name: "Twitter", color: "#1DA1F2", link: "#" },
    { icon: "💼", name: "LinkedIn", color: "#0A66C2", link: "#" },
    { icon: "📷", name: "Instagram", color: "#E4405F", link: "#" },
    { icon: "▶️", name: "YouTube", color: "#FF0000", link: "#" }
  ];

  // Services for dropdown
  const services = [
    "Web Design & Development",
    "Mobile App Development",
    "Digital Marketing",
    "E-commerce Solutions",
    "Branding & Design",
    "SEO Services",
    "Content Marketing",
    "Other"
  ];

  // Budget Options
  const budgetOptions = [
    "Less than $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000+",
    "Not Sure Yet"
  ];

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^\+?[\d\s-()]+$/.test(formData.phone)) {
      newErrors.phone = 'Phone number is invalid';
    }
    
    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      // Submit form
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          budget: '',
          message: ''
        });
      }, 3000);
    } else {
      setErrors(newErrors);
    }
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
            💬 Get In Touch
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
            Let's Build Something<br />Amazing Together
          </h1>

          <p style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
            color: 'rgba(255, 255, 255, 0.8)',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.8'
          }}>
            Have a project in mind? We'd love to hear from you. Send us a message 
            and we'll respond as soon as possible.
          </p>
        </motion.div>
      </section>

      {/* Contact Methods */}
      <section style={{
        padding: '60px 20px',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '25px'
        }}>
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.link}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                background: hoveredCard === index 
                  ? 'rgba(255, 215, 0, 0.1)' 
                  : 'rgba(26, 29, 34, 0.6)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                padding: '35px 25px',
                border: hoveredCard === index 
                  ? '2px solid rgba(255, 215, 0, 0.5)' 
                  : '1px solid rgba(255, 215, 0, 0.2)',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: hoveredCard === index ? 'translateY(-10px)' : 'translateY(0)',
                boxShadow: hoveredCard === index 
                  ? '0 20px 50px rgba(255, 215, 0, 0.3)' 
                  : '0 10px 30px rgba(0, 0, 0, 0.3)',
                textDecoration: 'none',
                display: 'block'
              }}
            >
              <div style={{
                fontSize: '3.5rem',
                marginBottom: '20px',
                filter: hoveredCard === index 
                  ? 'drop-shadow(0 0 20px rgba(255, 215, 0, 0.8))' 
                  : 'none',
                transition: 'all 0.4s ease',
                transform: hoveredCard === index ? 'scale(1.2)' : 'scale(1)'
              }}>
                {method.icon}
              </div>

              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: '700',
                marginBottom: '10px',
                color: hoveredCard === index ? '#FFD700' : 'white',
                transition: 'color 0.3s ease'
              }}>
                {method.title}
              </h3>

              <div style={{
                fontSize: '1.05rem',
                color: '#FFC107',
                marginBottom: '8px',
                fontWeight: '600'
              }}>
                {method.info}
              </div>

              <div style={{
                fontSize: '0.9rem',
                color: 'rgba(255, 255, 255, 0.6)'
              }}>
                {method.subInfo}
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Main Content - Form & Info */}
      <section style={{
        padding: '80px 20px',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
          gap: '50px'
        }}>
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              background: 'rgba(26, 29, 34, 0.6)',
              backdropFilter: 'blur(10px)',
              borderRadius: '25px',
              padding: '50px 40px',
              border: '1px solid rgba(255, 215, 0, 0.2)'
            }}
          >
            <h2 style={{
              fontSize: '2.2rem',
              fontWeight: '900',
              marginBottom: '15px',
              background: 'linear-gradient(135deg, #FFD700, #FFC107)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Send Us a Message
            </h2>
            <p style={{
              fontSize: '1.05rem',
              color: 'rgba(255, 255, 255, 0.7)',
              marginBottom: '35px',
              lineHeight: '1.6'
            }}>
              Fill out the form below and we'll get back to you within 24 hours
            </p>

            {isSubmitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                style={{
                  padding: '40px',
                  background: 'rgba(74, 222, 128, 0.1)',
                  border: '2px solid rgba(74, 222, 128, 0.5)',
                  borderRadius: '15px',
                  textAlign: 'center'
                }}
              >
                <div style={{ fontSize: '4rem', marginBottom: '20px' }}>✓</div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: '#4ADE80',
                  marginBottom: '10px'
                }}>
                  Message Sent Successfully!
                </h3>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '1.05rem'
                }}>
                  We'll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gap: '20px' }}>
                  {/* Name */}
                  <div>
                    <label style={{
                      display: 'block',
                      marginBottom: '8px',
                      color: 'rgba(255, 255, 255, 0.9)',
                      fontWeight: '600',
                      fontSize: '0.95rem'
                    }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      style={{
                        width: '100%',
                        padding: '14px 18px',
                        borderRadius: '12px',
                        border: errors.name 
                          ? '2px solid #EF4444' 
                          : '2px solid rgba(255, 215, 0, 0.3)',
                        background: 'rgba(255, 255, 255, 0.05)',
                        color: 'white',
                        fontSize: '1rem',
                        transition: 'all 0.3s ease',
                        outline: 'none'
                      }}
                      onFocus={(e) => {
                        if (!errors.name) {
                          e.target.style.borderColor = '#FFD700';
                          e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                        }
                      }}
                      onBlur={(e) => {
                        if (!errors.name) {
                          e.target.style.borderColor = 'rgba(255, 215, 0, 0.3)';
                          e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                        }
                      }}
                    />
                    {errors.name && (
                      <div style={{
                        color: '#EF4444',
                        fontSize: '0.85rem',
                        marginTop: '5px'
                      }}>
                        {errors.name}
                      </div>
                    )}
                  </div>

                  {/* Email & Phone */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '20px'
                  }}>
                    {/* Email */}
                    <div>
                      <label style={{
                        display: 'block',
                        marginBottom: '8px',
                        color: 'rgba(255, 255, 255, 0.9)',
                        fontWeight: '600',
                        fontSize: '0.95rem'
                      }}>
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        style={{
                          width: '100%',
                          padding: '14px 18px',
                          borderRadius: '12px',
                          border: errors.email 
                            ? '2px solid #EF4444' 
                            : '2px solid rgba(255, 215, 0, 0.3)',
                          background: 'rgba(255, 255, 255, 0.05)',
                          color: 'white',
                          fontSize: '1rem',
                          transition: 'all 0.3s ease',
                          outline: 'none'
                        }}
                        onFocus={(e) => {
                          if (!errors.email) {
                            e.target.style.borderColor = '#FFD700';
                            e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                          }
                        }}
                        onBlur={(e) => {
                          if (!errors.email) {
                            e.target.style.borderColor = 'rgba(255, 215, 0, 0.3)';
                            e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                          }
                        }}
                      />
                      {errors.email && (
                        <div style={{
                          color: '#EF4444',
                          fontSize: '0.85rem',
                          marginTop: '5px'
                        }}>
                          {errors.email}
                        </div>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label style={{
                        display: 'block',
                        marginBottom: '8px',
                        color: 'rgba(255, 255, 255, 0.9)',
                        fontWeight: '600',
                        fontSize: '0.95rem'
                      }}>
                        Phone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        style={{
                          width: '100%',
                          padding: '14px 18px',
                          borderRadius: '12px',
                          border: errors.phone 
                            ? '2px solid #EF4444' 
                            : '2px solid rgba(255, 215, 0, 0.3)',
                          background: 'rgba(255, 255, 255, 0.05)',
                          color: 'white',
                          fontSize: '1rem',
                          transition: 'all 0.3s ease',
                          outline: 'none'
                        }}
                        onFocus={(e) => {
                          if (!errors.phone) {
                            e.target.style.borderColor = '#FFD700';
                            e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                          }
                        }}
                        onBlur={(e) => {
                          if (!errors.phone) {
                            e.target.style.borderColor = 'rgba(255, 215, 0, 0.3)';
                            e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                          }
                        }}
                      />
                      {errors.phone && (
                        <div style={{
                          color: '#EF4444',
                          fontSize: '0.85rem',
                          marginTop: '5px'
                        }}>
                          {errors.phone}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label style={{
                      display: 'block',
                      marginBottom: '8px',
                      color: 'rgba(255, 255, 255, 0.9)',
                      fontWeight: '600',
                      fontSize: '0.95rem'
                    }}>
                      Company (Optional)
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company Name"
                      style={{
                        width: '100%',
                        padding: '14px 18px',
                        borderRadius: '12px',
                        border: '2px solid rgba(255, 215, 0, 0.3)',
                        background: 'rgba(255, 255, 255, 0.05)',
                        color: 'white',
                        fontSize: '1rem',
                        transition: 'all 0.3s ease',
                        outline: 'none'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#FFD700';
                        e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(255, 215, 0, 0.3)';
                        e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                      }}
                    />
                  </div>

                  {/* Service & Budget */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '20px'
                  }}>
                    {/* Service */}
                    <div>
                      <label style={{
                        display: 'block',
                        marginBottom: '8px',
                        color: 'rgba(255, 255, 255, 0.9)',
                        fontWeight: '600',
                        fontSize: '0.95rem'
                      }}>
                        Service *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '14px 18px',
                          borderRadius: '12px',
                          border: errors.service 
                            ? '2px solid #EF4444' 
                            : '2px solid rgba(255, 215, 0, 0.3)',
                          background: 'rgba(255, 255, 255, 0.05)',
                          color: 'white',
                          fontSize: '1rem',
                          transition: 'all 0.3s ease',
                          outline: 'none',
                          cursor: 'pointer'
                        }}
                        onFocus={(e) => {
                          if (!errors.service) {
                            e.target.style.borderColor = '#FFD700';
                            e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                          }
                        }}
                        onBlur={(e) => {
                          if (!errors.service) {
                            e.target.style.borderColor = 'rgba(255, 215, 0, 0.3)';
                            e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                          }
                        }}
                      >
                        <option value="" style={{ background: '#1A1D22' }}>Select Service</option>
                        {services.map((service, i) => (
                          <option key={i} value={service} style={{ background: '#1A1D22' }}>
                            {service}
                          </option>
                        ))}
                      </select>
                      {errors.service && (
                        <div style={{
                          color: '#EF4444',
                          fontSize: '0.85rem',
                          marginTop: '5px'
                        }}>
                          {errors.service}
                        </div>
                      )}
                    </div>

                    {/* Budget */}
                    <div>
                      <label style={{
                        display: 'block',
                        marginBottom: '8px',
                        color: 'rgba(255, 255, 255, 0.9)',
                        fontWeight: '600',
                        fontSize: '0.95rem'
                      }}>
                        Budget (Optional)
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '14px 18px',
                          borderRadius: '12px',
                          border: '2px solid rgba(255, 215, 0, 0.3)',
                          background: 'rgba(255, 255, 255, 0.05)',
                          color: 'white',
                          fontSize: '1rem',
                          transition: 'all 0.3s ease',
                          outline: 'none',
                          cursor: 'pointer'
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = '#FFD700';
                          e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = 'rgba(255, 215, 0, 0.3)';
                          e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                        }}
                      >
                        <option value="" style={{ background: '#1A1D22' }}>Select Budget</option>
                        {budgetOptions.map((budget, i) => (
                          <option key={i} value={budget} style={{ background: '#1A1D22' }}>
                            {budget}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label style={{
                      display: 'block',
                      marginBottom: '8px',
                      color: 'rgba(255, 255, 255, 0.9)',
                      fontWeight: '600',
                      fontSize: '0.95rem'
                    }}>
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      rows="5"
                      style={{
                        width: '100%',
                        padding: '14px 18px',
                        borderRadius: '12px',
                        border: errors.message 
                          ? '2px solid #EF4444' 
                          : '2px solid rgba(255, 215, 0, 0.3)',
                        background: 'rgba(255, 255, 255, 0.05)',
                        color: 'white',
                        fontSize: '1rem',
                        transition: 'all 0.3s ease',
                        outline: 'none',
                        resize: 'vertical',
                        fontFamily: "'Inter', sans-serif"
                      }}
                      onFocus={(e) => {
                        if (!errors.message) {
                          e.target.style.borderColor = '#FFD700';
                          e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                        }
                      }}
                      onBlur={(e) => {
                        if (!errors.message) {
                          e.target.style.borderColor = 'rgba(255, 215, 0, 0.3)';
                          e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                        }
                      }}
                    />
                    {errors.message && (
                      <div style={{
                        color: '#EF4444',
                        fontSize: '0.85rem',
                        marginTop: '5px'
                      }}>
                        {errors.message}
                      </div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    style={{
                      width: '100%',
                      padding: '16px',
                      borderRadius: '12px',
                      border: 'none',
                      background: 'linear-gradient(135deg, #FFD700, #FFC107)',
                      color: '#000',
                      fontWeight: '700',
                      fontSize: '1.1rem',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      marginTop: '10px',
                      boxShadow: '0 8px 25px rgba(255, 215, 0, 0.4)'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-3px)';
                      e.target.style.boxShadow = '0 12px 35px rgba(255, 215, 0, 0.6)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = '0 8px 25px rgba(255, 215, 0, 0.4)';
                    }}
                  >
                    Send Message 🚀
                  </button>
                </div>
              </form>
            )}
          </motion.div>

          {/* Office Locations & Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Map */}
            <div style={{
              marginBottom: '40px',
              borderRadius: '20px',
              overflow: 'hidden',
              border: '2px solid rgba(255, 215, 0, 0.3)',
              height: '350px',
              background: 'rgba(26, 29, 34, 0.6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '5rem',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '6rem', marginBottom: '15px' }}>🗺️</div>
                <div style={{
                  fontSize: '1.2rem',
                  color: 'rgba(255, 255, 255, 0.7)'
                }}>
                  Google Maps Integration
                </div>
              </div>
              {/* You can integrate actual Google Maps here */}
            </div>

            {/* Office Locations */}
            <h3 style={{
              fontSize: '2rem',
              fontWeight: '900',
              marginBottom: '25px',
              background: 'linear-gradient(135deg, #FFD700, #FFC107)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Our Offices
            </h3>

            <div style={{ display: 'grid', gap: '20px' }}>
              {offices.map((office, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  style={{
                    background: 'rgba(26, 29, 34, 0.6)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '15px',
                    padding: '25px',
                    border: '1px solid rgba(255, 215, 0, 0.2)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '20px'
                  }}>
                    <div style={{
                      fontSize: '3rem',
                      flexShrink: 0
                    }}>
                      {office.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <h4 style={{
                        fontSize: '1.3rem',
                        fontWeight: '700',
                        color: '#FFD700',
                        marginBottom: '5px'
                      }}>
                        {office.city}, {office.country}
                      </h4>
                      <div style={{
                        fontSize: '0.95rem',
                        color: 'rgba(255, 255, 255, 0.8)',
                        marginBottom: '10px',
                        lineHeight: '1.6'
                      }}>
                        {office.address}
                      </div>
                      <div style={{
                        display: 'grid',
                        gap: '8px',
                        fontSize: '0.9rem'
                      }}>
                        <div style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                          📞 {office.phone}
                        </div>
                        <div style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                          📧 {office.email}
                        </div>
                        <div style={{ color: '#FFC107' }}>
                          🕒 {office.hours}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Media */}
            <div style={{ marginTop: '40px' }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                marginBottom: '20px',
                color: 'white'
              }}>
                Follow Us
              </h3>
              <div style={{
                display: 'flex',
                gap: '15px',
                flexWrap: 'wrap'
              }}>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      width: '55px',
                      height: '55px',
                      borderRadius: '50%',
                      background: 'rgba(255, 215, 0, 0.1)',
                      border: '2px solid rgba(255, 215, 0, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.8rem',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{
        padding: '80px 20px',
        background: 'rgba(10, 10, 15, 0.6)'
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '900',
              marginBottom: '20px',
              background: 'linear-gradient(135deg, #FFD700, #FFC107)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Common Questions
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: 'rgba(255, 255, 255, 0.7)',
              marginBottom: '50px'
            }}>
              Quick answers to questions you may have
            </p>
          </motion.div>

          <div style={{
            display: 'grid',
            gap: '20px',
            textAlign: 'left'
          }}>
            {[
              {
                q: "What is your typical response time?",
                a: "We aim to respond to all inquiries within 24 hours during business days."
              },
              {
                q: "Do you offer free consultations?",
                a: "Yes! We offer a free 30-minute consultation to discuss your project needs."
              },
              {
                q: "What are your working hours?",
                a: "Monday to Friday, 9:00 AM to 6:00 PM IST. We're closed on weekends and public holidays."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                style={{
                  background: 'rgba(26, 29, 34, 0.6)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '15px',
                  padding: '25px',
                  border: '1px solid rgba(255, 215, 0, 0.2)'
                }}
              >
                <h4 style={{
                  fontSize: '1.2rem',
                  fontWeight: '700',
                  color: '#FFD700',
                  marginBottom: '10px'
                }}>
                  {faq.q}
                </h4>
                <p style={{
                  fontSize: '1rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  lineHeight: '1.6'
                }}>
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.15; }
          50% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.2; }
        }

        @media (max-width: 1024px) {
          [style*="gridTemplateColumns: repeat(auto-fit, minmax(500px"] {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 768px) {
          section {
            padding: 60px 15px !important;
          }
          [style*="gridTemplateColumns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}