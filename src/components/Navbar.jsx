import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [formData, setFormData] = useState({
    websiteUrl: '',
    websiteName: '',
    email: '',
    phone: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', icon: '🏠' },
    { name: 'Services', href: '/services', icon: '⚡' },
    { name: 'Portfolio', href: '/portfolio', icon: '💼' },
    { name: 'About', href: '/about', icon: '👥' },
    { name: 'Blog', href: '/blog', icon: '📝' },
    { name: 'FAQ', href: '/faq', icon: '❓' },
    { name: 'Testimonial', href: '/testimonial', icon: '⭐' }
  ];

  const handleSmoothScroll = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
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

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Search query:', searchQuery);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
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

  const openSearch = () => {
    setIsSearchOpen(true);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  const FreeAuditPopup = () => {
    if (!isPopupOpen) return null;

    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.95)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10000,
        backdropFilter: 'blur(10px)'
      }}>
        <div style={{
          background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
          borderRadius: '12px',
          padding: '30px',
          width: '95%',
          maxWidth: '450px',
          border: '2px solid #00ff00',
          boxShadow: '0 10px 40px rgba(0, 255, 0, 0.2)',
          position: 'relative'
        }}>
          <button
            onClick={closePopup}
            style={{
              position: 'absolute',
              top: '12px',
              right: '15px',
              background: '#333',
              border: '1px solid #00ff00',
              color: '#00ff00',
              fontSize: '18px',
              cursor: 'pointer',
              padding: '4px',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#00ff00';
              e.target.style.color = '#000';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#333';
              e.target.style.color = '#00ff00';
            }}
          >
            ×
          </button>

          {!isSubmitted ? (
            <>
              <h2 style={{
                color: '#00ff00',
                textAlign: 'center',
                marginBottom: '25px',
                fontSize: '28px',
                fontWeight: '700',
                fontFamily: "'Dancing Script', cursive",
                textShadow: '0 2px 10px rgba(0, 255, 0, 0.3)'
              }}>
                Free Website Audit
              </h2>
              
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '18px' }}>
                  <label style={{
                    display: 'block',
                    color: '#00ff00',
                    marginBottom: '8px',
                    fontWeight: '600',
                    fontSize: '16px',
                    fontFamily: "'Dancing Script', cursive"
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
                      padding: '12px',
                      borderRadius: '6px',
                      border: '1px solid #00ff00',
                      background: '#0a0a0a',
                      color: '#fff',
                      fontSize: '14px',
                      transition: 'all 0.3s ease'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#33ff33';
                      e.target.style.boxShadow = '0 0 10px rgba(0, 255, 0, 0.2)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#00ff00';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <div style={{ marginBottom: '18px' }}>
                  <label style={{
                    display: 'block',
                    color: '#00ff00',
                    marginBottom: '8px',
                    fontWeight: '600',
                    fontSize: '16px',
                    fontFamily: "'Dancing Script', cursive"
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
                      padding: '12px',
                      borderRadius: '6px',
                      border: '1px solid #00ff00',
                      background: '#0a0a0a',
                      color: '#fff',
                      fontSize: '14px',
                      transition: 'all 0.3s ease'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#33ff33';
                      e.target.style.boxShadow = '0 0 10px rgba(0, 255, 0, 0.2)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#00ff00';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <div style={{ marginBottom: '18px' }}>
                  <label style={{
                    display: 'block',
                    color: '#00ff00',
                    marginBottom: '8px',
                    fontWeight: '600',
                    fontSize: '16px',
                    fontFamily: "'Dancing Script', cursive"
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
                      padding: '12px',
                      borderRadius: '6px',
                      border: '1px solid #00ff00',
                      background: '#0a0a0a',
                      color: '#fff',
                      fontSize: '14px',
                      transition: 'all 0.3s ease'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#33ff33';
                      e.target.style.boxShadow = '0 0 10px rgba(0, 255, 0, 0.2)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#00ff00';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <div style={{ marginBottom: '25px' }}>
                  <label style={{
                    display: 'block',
                    color: '#00ff00',
                    marginBottom: '8px',
                    fontWeight: '600',
                    fontSize: '16px',
                    fontFamily: "'Dancing Script', cursive"
                  }}>
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '12px',
                      borderRadius: '6px',
                      border: '1px solid #00ff00',
                      background: '#0a0a0a',
                      color: '#fff',
                      fontSize: '14px',
                      transition: 'all 0.3s ease'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#33ff33';
                      e.target.style.boxShadow = '0 0 10px rgba(0, 255, 0, 0.2)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#00ff00';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    width: '100%',
                    padding: '14px',
                    borderRadius: '6px',
                    background: 'linear-gradient(135deg, #00ff00, #00cc00)',
                    color: '#000',
                    border: 'none',
                    fontWeight: '700',
                    cursor: 'pointer',
                    fontFamily: "'Dancing Script', cursive",
                    fontSize: '18px',
                    transition: 'all 0.3s ease',
                    textShadow: '0 1px 2px rgba(0,0,0,0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'linear-gradient(135deg, #33ff33, #00ff00)';
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 5px 15px rgba(0, 255, 0, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'linear-gradient(135deg, #00ff00, #00cc00)';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  Submit for Free Audit
                </button>
              </form>
            </>
          ) : (
            <div style={{ textAlign: 'center', padding: '20px' }}>
              <div style={{ fontSize: '50px', marginBottom: '15px' }}>✅</div>
              <h3 style={{ 
                color: '#00ff00', 
                fontSize: '24px', 
                marginBottom: '12px', 
                fontWeight: '700',
                fontFamily: "'Dancing Script', cursive",
                textShadow: '0 2px 10px rgba(0, 255, 0, 0.3)'
              }}>
                Request Submitted!
              </h3>
              <p style={{ 
                color: '#ccc', 
                fontSize: '16px',
                fontFamily: "'Dancing Script', cursive",
                lineHeight: '1.5'
              }}>
                Your free audit report will be sent to your email within 24 hours.
              </p>
            </div>
          )}
        </div>
      </div>
    );
  };

  const SearchPopup = () => {
    if (!isSearchOpen) return null;

    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.95)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10000,
        backdropFilter: 'blur(10px)'
      }}>
        <div style={{
          background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
          borderRadius: '12px',
          padding: '30px',
          width: '95%',
          maxWidth: '450px',
          border: '2px solid #00ff00',
          boxShadow: '0 10px 40px rgba(0, 255, 0, 0.2)',
          position: 'relative'
        }}>
          <button
            onClick={closeSearch}
            style={{
              position: 'absolute',
              top: '12px',
              right: '15px',
              background: '#333',
              border: '1px solid #00ff00',
              color: '#00ff00',
              fontSize: '18px',
              cursor: 'pointer',
              padding: '4px',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#00ff00';
              e.target.style.color = '#000';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#333';
              e.target.style.color = '#00ff00';
            }}
          >
            ×
          </button>

          <h2 style={{
            color: '#00ff00',
            textAlign: 'center',
            marginBottom: '25px',
            fontSize: '28px',
            fontWeight: '700',
            fontFamily: "'Dancing Script', cursive",
            textShadow: '0 2px 10px rgba(0, 255, 0, 0.3)'
          }}>
            Search Our Site
          </h2>
          
          <form onSubmit={handleSearchSubmit}>
            <div style={{ marginBottom: '25px' }}>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="What you're looking for..."
                required
                style={{
                  width: '100%',
                  padding: '14px',
                  borderRadius: '6px',
                  border: '1px solid #00ff00',
                  background: '#0a0a0a',
                  color: '#fff',
                  fontSize: '16px',
                  transition: 'all 0.3s ease'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#33ff33';
                  e.target.style.boxShadow = '0 0 15px rgba(0, 255, 0, 0.3)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#00ff00';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                width: '100%',
                padding: '14px',
                borderRadius: '6px',
                background: 'linear-gradient(135deg, #00ff00, #00cc00)',
                color: '#000',
                border: 'none',
                fontWeight: '700',
                cursor: 'pointer',
                fontFamily: "'Dancing Script', cursive",
                fontSize: '18px',
                transition: 'all 0.3s ease',
                textShadow: '0 1px 2px rgba(0,0,0,0.3)'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'linear-gradient(135deg, #33ff33, #00ff00)';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 5px 15px rgba(0, 255, 0, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'linear-gradient(135deg, #00ff00, #00cc00)';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Search Now
            </button>
          </form>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Add Google Fonts for cursive style */}
      <link
        href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&family=Great+Vibes&family=Pacifico&display=swap"
        rel="stylesheet"
      />

      {/* Desktop Vertical Navbar - IMPROVED VERSION */}
      <div className="hidden lg:block">
        <nav 
          className="fixed top-0 left-0 h-full z-[999] transition-all duration-500"
          style={{
            width: '160px', // Optimized width
            background: 'rgba(0, 0, 0, 0.98)',
            backdropFilter: 'blur(15px)',
            borderRight: '2px solid #00ff00',
            overflowY: 'auto',
            overflowX: 'hidden',
            boxShadow: '5px 0 25px rgba(0, 255, 0, 0.1)'
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              padding: '15px 10px'
            }}
          >
            {/* Logo Container - Improved */}
            <div style={{ 
              textAlign: 'center',
              marginBottom: '20px',
              padding: '10px 0'
            }}>
              <a href="#home">
                <div style={{
                  width: '60px',
                  height: '60px',
                  margin: '0 auto',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #00ff00, #00cc00)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid #00ff00',
                  boxShadow: '0 0 20px rgba(0, 255, 0, 0.4)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.boxShadow = '0 0 25px rgba(0, 255, 0, 0.6)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = '0 0 20px rgba(0, 255, 0, 0.4)';
                }}
                >
                  <span style={{
                    color: '#000',
                    fontWeight: 'bold',
                    fontSize: '12px',
                    fontFamily: "'Pacifico', cursive"
                  }}>
                    LOGO
                  </span>
                </div>
                <div style={{ marginTop: '8px' }}>
                  <span style={{
                    color: '#00ff00',
                    fontSize: '16px',
                    fontFamily: "'Pacifico', cursive",
                    fontWeight: 'bold',
                    textShadow: '0 2px 8px rgba(0, 255, 0, 0.3)'
                  }}>
                    ADMARK
                  </span>
                </div>
              </a>
            </div>

            {/* Navigation Links - Improved */}
            <div style={{ 
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              padding: '0 5px'
            }}>
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  style={{
                    color: '#ffffff',
                    textDecoration: 'none',
                    fontSize: '15px',
                    fontWeight: '600',
                    padding: '10px 12px',
                    borderRadius: '6px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid #333',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontFamily: "'Dancing Script', cursive",
                    minHeight: '45px',
                    textShadow: '0 1px 2px rgba(0,0,0,0.5)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(0, 255, 0, 0.2)';
                    e.target.style.border = '1px solid #00ff00';
                    e.target.style.transform = 'translateX(3px)';
                    e.target.style.boxShadow = '0 3px 12px rgba(0, 255, 0, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.target.style.border = '1px solid #333';
                    e.target.style.transform = 'translateX(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  <span style={{ fontSize: '16px', width: '20px', textAlign: 'center' }}>{link.icon}</span>
                  <span style={{ 
                    whiteSpace: 'nowrap', 
                    overflow: 'hidden', 
                    textOverflow: 'ellipsis',
                    fontSize: '15px'
                  }}>
                    {link.name}
                  </span>
                </a>
              ))}
            </div>

            {/* Action Buttons - Improved */}
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column',
              gap: '8px',
              marginTop: '15px',
              padding: '15px 5px 5px 5px',
              borderTop: '1px solid #333'
            }}>
              <button
                onClick={openSearch}
                style={{
                  padding: '10px 12px',
                  borderRadius: '6px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid #444',
                  color: '#00ff00',
                  cursor: 'pointer',
                  fontSize: '15px',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  fontFamily: "'Dancing Script', cursive",
                  minHeight: '45px',
                  textShadow: '0 1px 2px rgba(0,0,0,0.5)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(0, 255, 0, 0.2)';
                  e.target.style.border = '1px solid #00ff00';
                  e.target.style.transform = 'translateY(-1px)';
                  e.target.style.boxShadow = '0 3px 12px rgba(0, 255, 0, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                  e.target.style.border = '1px solid #444';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <span style={{ fontSize: '16px' }}>🔍</span>
                <span>Search</span>
              </button>

              <a
                href="/pricing"
                onClick={(e) => handleSmoothScroll(e, "/pricing")}
                style={{
                  padding: '10px 12px',
                  borderRadius: '6px',
                  fontWeight: '700',
                  fontSize: '15px',
                  background: 'rgba(0, 255, 0, 0.15)',
                  border: '1px solid #00ff00',
                  color: '#00ff00',
                  textDecoration: 'none',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  fontFamily: "'Dancing Script', cursive",
                  minHeight: '45px',
                  textShadow: '0 1px 2px rgba(0,0,0,0.5)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(0, 255, 0, 0.25)';
                  e.target.style.transform = 'translateY(-1px)';
                  e.target.style.boxShadow = '0 3px 12px rgba(0, 255, 0, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(0, 255, 0, 0.15)';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <span style={{ fontSize: '16px' }}>💎</span>
                <span>Pricing</span>
              </a>

              <button
                onClick={openPopup}
                style={{
                  padding: '12px 12px',
                  borderRadius: '6px',
                  fontWeight: '700',
                  fontSize: '15px',
                  background: 'linear-gradient(135deg, #00ff00, #00cc00)',
                  color: '#000',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  fontFamily: "'Dancing Script', cursive",
                  minHeight: '45px',
                  textShadow: '0 1px 2px rgba(0,0,0,0.3)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'linear-gradient(135deg, #33ff33, #00ff00)';
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 5px 15px rgba(0, 255, 0, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'linear-gradient(135deg, #00ff00, #00cc00)';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <span style={{ fontSize: '16px' }}>🎯</span>
                <span>Free Audit</span>
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Horizontal Navbar - Improved */}
      <nav 
        className="lg:hidden fixed top-0 left-0 right-0 z-[999] transition-all duration-500"
        style={{
          background: 'rgba(0, 0, 0, 0.98)',
          backdropFilter: 'blur(15px)',
          borderBottom: '2px solid #00ff00',
          width: '100%',
          boxShadow: '0 5px 25px rgba(0, 255, 0, 0.1)'
        }}
      >
        <div className="px-4 sm:px-6" style={{ width: '100%' }}>
          <div className="flex items-center justify-between py-3" style={{ width: '100%' }}>
            {/* Mobile Logo */}
            <a href="#home" className="block">
              <div style={{
                width: '45px',
                height: '45px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #00ff00, #00cc00)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid #00ff00',
                boxShadow: '0 0 15px rgba(0, 255, 0, 0.4)'
              }}>
                <span style={{
                  color: '#000',
                  fontWeight: 'bold',
                  fontSize: '10px',
                  fontFamily: "'Pacifico', cursive"
                }}>
                  LOGO
                </span>
              </div>
            </a>

            <div className="flex items-center gap-2">
              <button
                onClick={openSearch}
                className="p-2 rounded transition-all duration-300"
                aria-label="Search"
                style={{
                  color: '#00ff00',
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid #444'
                }}
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded transition-all duration-300"
                aria-label="Toggle menu"
                style={{
                  color: '#00ff00',
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid #444'
                }}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMobileMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div 
            style={{
              background: 'rgba(0, 0, 0, 0.98)',
              backdropFilter: 'blur(15px)',
              borderBottom: '2px solid #00ff00',
              width: '100%'
            }}
          >
            <div className="px-4 pt-3 pb-6 space-y-3">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={(e) => {
                    handleSmoothScroll(e, link.href);
                    setIsMobileMenuOpen(false);
                  }}
                  className="block px-4 py-3 rounded transition-all duration-300"
                  style={{
                    color: '#fff',
                    background: 'rgba(255, 255, 255, 0.08)',
                    fontSize: '16px',
                    fontWeight: '600',
                    border: '1px solid #333',
                    textAlign: 'left',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    fontFamily: "'Dancing Script', cursive"
                  }}
                >
                  <span style={{ fontSize: '18px' }}>{link.icon}</span>
                  {link.name}
                </a>
              ))}
              
              <a
                href="/pricing"
                onClick={(e) => {
                  handleSmoothScroll(e, "/pricing");
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full px-4 py-3 rounded transition-all duration-300"
                style={{
                  background: 'rgba(0, 255, 0, 0.15)',
                  color: '#00ff00',
                  fontSize: '16px',
                  border: '1px solid #00ff00',
                  textAlign: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  fontWeight: '700',
                  fontFamily: "'Dancing Script', cursive"
                }}
              >
                <span>💎</span>
                Pricing Plan
              </a>

              <button
                onClick={() => {
                  openPopup();
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full px-4 py-3 rounded transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #00ff00, #00cc00)',
                  color: '#000',
                  fontSize: '16px',
                  border: 'none',
                  marginTop: '5px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  fontWeight: '700',
                  fontFamily: "'Dancing Script', cursive"
                }}
              >
                <span>🎯</span>
                Free Audit
              </button>
            </div>
          </div>
        )}
      </nav>

      <FreeAuditPopup />
      <SearchPopup />

      {/* Add margin for desktop to account for vertical navbar */}
      <div className="hidden lg:block" style={{ marginLeft: '160px' }} />
      <div className="lg:hidden h-16" />
    </>
  );
}