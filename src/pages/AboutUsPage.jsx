import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Configuration constants
const CONFIG = {
  itemWidth: 380,
  itemWidthMobile: 280,
  avatarSize: 120,
  avatarSizeMobile: 80,
  avatarBorder: 3,
  cardBorderCenter: 2,
  cardBorderOther: 1,
  cardPadding: 25,
  cardRadius: 16,
  baseSpacing: 320,
  spacingClampRatio: 0.8,
  perspective: 1200,
  rotateYMultiplier: -8,
  baseScale: 1,
  scaleStep: 0.1,
  opacityStep: 0.2,
  maxSideSlots: 2,
  transitionMs: 600,
  slideIntervalMs: 3000,
};

export default function AboutUsPage() {
  const [hoveredValue, setHoveredValue] = useState(null);
  const [currentTeamIndex, setCurrentTeamIndex] = useState(2);
  const [stageWidth, setStageWidth] = useState(0);
  const stageRef = useRef(null);
  const autoRef = useRef(null);

  // Team Members for Slider
  const teamMembers = [
    {
      id: 1,
      name: "Vikash Kumar",
      role: "CEO & Founder",
      image: "https://i.pravatar.cc/400?img=12",
      bio: "15+ years of digital marketing expertise",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Head of Design",
      image: "https://i.pravatar.cc/400?img=5",
      bio: "Award-winning UI/UX designer",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      id: 3,
      name: "Rahul Verma",
      role: "Lead Developer",
      image: "https://i.pravatar.cc/400?img=32",
      bio: "Full-stack development specialist",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      id: 4,
      name: "Anjali Patel",
      role: "Marketing Director",
      image: "https://i.pravatar.cc/400?img=47",
      bio: "Strategic marketing expert",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      id: 5,
      name: "Arjun Singh",
      role: "Tech Lead",
      image: "https://i.pravatar.cc/400?img=66",
      bio: "Cloud architecture specialist",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      id: 6,
      name: "Sneha Gupta",
      role: "Content Strategist",
      image: "https://i.pravatar.cc/400?img=8",
      bio: "SEO & content marketing pro",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      id: 7,
      name: "Rohan Mehta",
      role: "Frontend Developer",
      image: "https://i.pravatar.cc/400?img=15",
      bio: "React & Next.js expert",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      id: 8,
      name: "Neha Joshi",
      role: "Project Manager",
      image: "https://i.pravatar.cc/400?img=25",
      bio: "Agile project management",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      id: 9,
      name: "Amit Kumar",
      role: "DevOps Engineer",
      image: "https://i.pravatar.cc/400?img=35",
      bio: "Cloud infrastructure specialist",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      id: 10,
      name: "Pooja Reddy",
      role: "Data Scientist",
      image: "https://i.pravatar.cc/400?img=45",
      bio: "AI & Machine Learning expert",
      social: { linkedin: "#", twitter: "#" }
    }
  ];

  // Company Values
  const coreValues = [
    {
      icon: "🎯",
      title: "Client-Focused",
      description: "Your success is our mission. We prioritize your goals and deliver solutions that exceed expectations.",
      color: "#FFD700"
    },
    {
      icon: "💡",
      title: "Innovation",
      description: "We stay ahead with cutting-edge technologies and creative solutions that drive results.",
      color: "#FFC107"
    },
    {
      icon: "🤝",
      title: "Integrity",
      description: "Transparency, honesty, and ethical practices are the foundation of everything we do.",
      color: "#FFB347"
    },
    {
      icon: "⚡",
      title: "Excellence",
      description: "We deliver nothing but the best, maintaining high standards in every project.",
      color: "#F4C430"
    },
    {
      icon: "🌟",
      title: "Collaboration",
      description: "Teamwork makes the dream work. We partner with you for shared success.",
      color: "#FFD700"
    },
    {
      icon: "📈",
      title: "Growth",
      description: "Continuous improvement and learning help us and our clients achieve more.",
      color: "#FFA500"
    }
  ];

  // Achievements
  const achievements = [
    {
      icon: "🏆",
      title: "Best Digital Agency 2024",
      description: "Recognized by Industry Awards"
    },
    {
      icon: "⭐",
      title: "500+ Projects Delivered",
      description: "Successfully completed worldwide"
    },
    {
      icon: "🎖️",
      title: "98% Client Satisfaction",
      description: "Rated by our happy clients"
    },
    {
      icon: "🚀",
      title: "10+ Years Experience",
      description: "Industry leading expertise"
    }
  ];

  // Stats
  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "150+", label: "Happy Clients" },
    { number: "50+", label: "Team Members" },
    { number: "98%", label: "Success Rate" }
  ];

  // Measure stage width for dynamic spacing
  useEffect(() => {
    const measure = () => {
      if (stageRef.current) {
        setStageWidth(stageRef.current.clientWidth);
      }
    };
    
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Auto slide
  useEffect(() => {
    startAuto();
    return stopAuto;
  }, [currentTeamIndex]);

  const startAuto = () => {
    stopAuto();
    autoRef.current = setInterval(() => {
      setCurrentTeamIndex((c) => (c + 1) % teamMembers.length);
    }, CONFIG.slideIntervalMs);
  };

  const stopAuto = () => {
    if (autoRef.current) {
      clearInterval(autoRef.current);
      autoRef.current = null;
    }
  };

  // Dynamic spacing calculation
  const computeSpacing = () => {
    const visibleSlots = CONFIG.maxSideSlots * 2 + 1;
    if (!stageWidth) return CONFIG.baseSpacing;
    const candidate = (stageWidth / visibleSlots) * CONFIG.spacingClampRatio;
    return Math.max(120, Math.min(CONFIG.baseSpacing, candidate));
  };

  const spacing = computeSpacing();
  const itemWidth = stageWidth < 768 ? CONFIG.itemWidthMobile : CONFIG.itemWidth;
  const avatarSize = stageWidth < 768 ? CONFIG.avatarSizeMobile : CONFIG.avatarSize;

  // Circular offset helper
  const circularOffset = (index) => {
    const len = teamMembers.length;
    let raw = index - currentTeamIndex;
    raw = ((raw % len) + len) % len;
    if (raw > len / 2) raw -= len;
    return raw;
  };

  const onClickItem = (idx) => {
    setCurrentTeamIndex(idx);
  };

  const nextSlide = () => {
    setCurrentTeamIndex((current) => (current + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setCurrentTeamIndex((current) => (current - 1 + teamMembers.length) % teamMembers.length);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0A0A0A 0%, #1A1D22 50%, #0A0A0A 100%)',
      color: 'white',
      fontFamily: "'Inter', sans-serif"
    }}>
      <Navbar />

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
            ✨ About Our Journey
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
            Transforming Ideas Into<br />Digital Success
          </h1>

          <p style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
            color: 'rgba(255, 255, 255, 0.8)',
            maxWidth: '800px',
            margin: '0 auto 40px',
            lineHeight: '1.8'
          }}>
            We are a passionate team of digital experts dedicated to helping businesses 
            thrive in the digital landscape through innovative solutions and strategic thinking.
          </p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section style={{
        padding: '60px 20px',
        background: 'rgba(255, 215, 0, 0.05)',
        borderTop: '1px solid rgba(255, 215, 0, 0.2)',
        borderBottom: '1px solid rgba(255, 215, 0, 0.2)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px'
        }}>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              style={{ textAlign: 'center' }}
            >
              <div style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: '900',
                background: 'linear-gradient(135deg, #FFD700, #FFC107)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '10px'
              }}>
                {stat.number}
              </div>
              <div style={{
                fontSize: '1.05rem',
                color: 'rgba(255, 255, 255, 0.7)',
                fontWeight: '500'
              }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Story Section */}
      <section style={{
        padding: '100px 20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: '900',
            marginBottom: '30px',
            textAlign: 'center',
            background: 'linear-gradient(135deg, #FFD700, #FFC107)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Our Story
          </h2>

          <div style={{
            background: 'rgba(26, 29, 34, 0.6)',
            backdropFilter: 'blur(10px)',
            borderRadius: '20px',
            padding: '50px 40px',
            border: '1px solid rgba(255, 215, 0, 0.2)',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            <p style={{
              fontSize: '1.15rem',
              lineHeight: '2',
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: '25px'
            }}>
              Founded in 2014, our journey began with a simple vision: to help businesses 
              harness the power of digital technology to achieve extraordinary growth. What 
              started as a small team of passionate developers and marketers has grown into 
              a full-service digital agency serving clients worldwide.
            </p>
            <p style={{
              fontSize: '1.15rem',
              lineHeight: '2',
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: '25px'
            }}>
              Over the years, we've worked with startups, SMEs, and enterprise clients across 
              various industries, delivering innovative solutions that drive measurable results. 
              Our commitment to excellence, transparency, and client success has earned us 
              recognition as one of the leading digital agencies in the industry.
            </p>
            <p style={{
              fontSize: '1.15rem',
              lineHeight: '2',
              color: 'rgba(255, 255, 255, 0.9)'
            }}>
              Today, we continue to push boundaries, embrace new technologies, and deliver 
              exceptional value to our clients. Our success is measured by the success of 
              the businesses we serve.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section style={{
        padding: '100px 20px',
        background: 'rgba(10, 10, 15, 0.6)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '40px'
        }}>
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              background: 'rgba(255, 215, 0, 0.05)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              padding: '50px 40px',
              border: '1px solid rgba(255, 215, 0, 0.3)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{
              position: 'absolute',
              top: '-50px',
              right: '-50px',
              fontSize: '150px',
              opacity: 0.1
            }}>
              🎯
            </div>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h3 style={{
                fontSize: '2.5rem',
                fontWeight: '900',
                marginBottom: '25px',
                color: '#FFD700'
              }}>
                Our Mission
              </h3>
              <p style={{
                fontSize: '1.15rem',
                lineHeight: '1.9',
                color: 'rgba(255, 255, 255, 0.9)'
              }}>
                To empower businesses with innovative digital solutions that drive growth, 
                enhance customer experiences, and create lasting value. We strive to be 
                the trusted partner that businesses turn to for their digital transformation 
                journey.
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              background: 'rgba(255, 215, 0, 0.05)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              padding: '50px 40px',
              border: '1px solid rgba(255, 215, 0, 0.3)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{
              position: 'absolute',
              top: '-50px',
              right: '-50px',
              fontSize: '150px',
              opacity: 0.1
            }}>
              🔮
            </div>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h3 style={{
                fontSize: '2.5rem',
                fontWeight: '900',
                marginBottom: '25px',
                color: '#FFD700'
              }}>
                Our Vision
              </h3>
              <p style={{
                fontSize: '1.15rem',
                lineHeight: '1.9',
                color: 'rgba(255, 255, 255, 0.9)'
              }}>
                To be the world's most trusted digital agency, recognized for innovation, 
                excellence, and exceptional client outcomes. We envision a future where 
                every business, regardless of size, has access to world-class digital 
                solutions that fuel their success.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section style={{
        padding: '100px 20px',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: '900',
            marginBottom: '20px',
            textAlign: 'center',
            background: 'linear-gradient(135deg, #FFD700, #FFC107)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Our Core Values
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: 'rgba(255, 255, 255, 0.7)',
            textAlign: 'center',
            marginBottom: '60px',
            maxWidth: '700px',
            margin: '0 auto 60px'
          }}>
            The principles that guide everything we do
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px'
        }}>
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              onMouseEnter={() => setHoveredValue(index)}
              onMouseLeave={() => setHoveredValue(null)}
              style={{
                background: hoveredValue === index 
                  ? 'rgba(255, 215, 0, 0.1)' 
                  : 'rgba(26, 29, 34, 0.6)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                padding: '40px 30px',
                border: hoveredValue === index 
                  ? '2px solid rgba(255, 215, 0, 0.5)' 
                  : '1px solid rgba(255, 215, 0, 0.2)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: hoveredValue === index ? 'translateY(-10px) scale(1.02)' : 'translateY(0) scale(1)',
                boxShadow: hoveredValue === index 
                  ? '0 20px 50px rgba(255, 215, 0, 0.3)' 
                  : '0 10px 30px rgba(0, 0, 0, 0.3)',
                cursor: 'pointer',
                textAlign: 'center'
              }}
            >
              <div style={{
                fontSize: '4rem',
                marginBottom: '20px',
                filter: hoveredValue === index 
                  ? 'drop-shadow(0 0 20px rgba(255, 215, 0, 0.8))' 
                  : 'none',
                transition: 'all 0.4s ease',
                transform: hoveredValue === index ? 'scale(1.2)' : 'scale(1)'
              }}>
                {value.icon}
              </div>

              <h3 style={{
                fontSize: '1.6rem',
                fontWeight: '700',
                marginBottom: '15px',
                color: hoveredValue === index ? '#FFD700' : 'white',
                transition: 'color 0.3s ease'
              }}>
                {value.title}
              </h3>

              <p style={{
                fontSize: '1.05rem',
                color: 'rgba(255, 255, 255, 0.8)',
                lineHeight: '1.7'
              }}>
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section - Slider Version */}
      <section style={{
        padding: '100px 20px',
        background: 'rgba(10, 10, 15, 0.6)'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: '900',
              marginBottom: '20px',
              textAlign: 'center',
              background: 'linear-gradient(135deg, #FFD700, #FFC107)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Meet Our Team
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: 'rgba(255, 255, 255, 0.7)',
              textAlign: 'center',
              marginBottom: '60px',
              maxWidth: '700px',
              margin: '0 auto 60px'
            }}>
              The passionate people behind our success
            </p>
          </motion.div>

          {/* Slider Container */}
          <div 
            className="team-slider-container"
            onMouseEnter={stopAuto}
            onMouseLeave={startAuto}
            style={{
              position: 'relative',
              width: '100%',
              marginBottom: '40px'
            }}
          >
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              style={{
                position: 'absolute',
                left: '20px',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 10,
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                border: '2px solid rgba(255, 215, 0, 0.5)',
                background: 'rgba(26, 29, 34, 0.8)',
                color: '#FFD700',
                fontSize: '1.5rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255, 215, 0, 0.2)';
                e.target.style.transform = 'translateY(-50%) scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(26, 29, 34, 0.8)';
                e.target.style.transform = 'translateY(-50%) scale(1)';
              }}
            >
              ‹
            </button>

            <button
              onClick={nextSlide}
              style={{
                position: 'absolute',
                right: '20px',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 10,
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                border: '2px solid rgba(255, 215, 0, 0.5)',
                background: 'rgba(26, 29, 34, 0.8)',
                color: '#FFD700',
                fontSize: '1.5rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255, 215, 0, 0.2)';
                e.target.style.transform = 'translateY(-50%) scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(26, 29, 34, 0.8)';
                e.target.style.transform = 'translateY(-50%) scale(1)';
              }}
            >
              ›
            </button>

            {/* Slider Stage */}
            <div
              className="slider-stage"
              ref={stageRef}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                height: Math.max(400, avatarSize + 200),
                perspective: CONFIG.perspective
              }}
            >
              {teamMembers.map((member, idx) => {
                const offset = circularOffset(idx);
                const absOff = Math.abs(offset);

                if (absOff > CONFIG.maxSideSlots + 3) {
                  return null;
                }

                const tx = offset * spacing;
                const scale = Math.max(0.5, CONFIG.baseScale - absOff * CONFIG.scaleStep);
                const rotateY = offset * CONFIG.rotateYMultiplier;
                const zIndex = 100 - absOff;
                const opacity = absOff > CONFIG.maxSideSlots ? 0 : Math.max(0.35, 1 - absOff * CONFIG.opacityStep);

                const isCenter = offset === 0;
                const borderW = isCenter ? CONFIG.cardBorderCenter : CONFIG.cardBorderOther;

                return (
                  <motion.div
                    key={member.id}
                    className="slider-item"
                    style={{
                      position: 'absolute',
                      top: '50%',
                      transform: `translateX(${tx}px) translateY(-50%) scale(${scale}) rotateY(${rotateY}deg)`,
                      zIndex,
                      opacity,
                      pointerEvents: 'auto',
                      width: itemWidth,
                      transition: `transform ${CONFIG.transitionMs}ms cubic-bezier(0.2,0.9,0.2,1), opacity 300ms ease`
                    }}
                    onClick={() => onClickItem(idx)}
                  >
                    <div
                      className="team-card"
                      style={{
                        background: isCenter 
                          ? 'rgba(255, 215, 0, 0.1)' 
                          : 'rgba(26, 29, 34, 0.6)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: CONFIG.cardRadius,
                        padding: CONFIG.cardPadding,
                        border: `${borderW}px solid rgba(255, 215, 0, ${isCenter ? 0.5 : 0.3})`,
                        boxShadow: isCenter 
                          ? '0 20px 50px rgba(255, 215, 0, 0.3)' 
                          : '0 10px 30px rgba(0, 0, 0, 0.3)',
                        textAlign: 'center',
                        transition: 'all 0.4s ease'
                      }}
                    >
                      <img 
                        src={member.image} 
                        alt={member.name}
                        style={{
                          width: avatarSize,
                          height: avatarSize,
                          borderRadius: '50%',
                          objectFit: 'cover',
                          border: `${CONFIG.avatarBorder}px solid rgba(255, 215, 0, 0.5)`,
                          marginBottom: '20px',
                          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
                        }}
                      />
                      <h3 style={{
                        fontSize: '1.4rem',
                        fontWeight: '700',
                        marginBottom: '8px',
                        color: isCenter ? '#FFD700' : 'white',
                        transition: 'color 0.3s ease'
                      }}>
                        {member.name}
                      </h3>
                      <div style={{
                        fontSize: '1.05rem',
                        color: '#FFC107',
                        marginBottom: '15px',
                        fontWeight: '500'
                      }}>
                        {member.role}
                      </div>
                      <p style={{
                        fontSize: '0.95rem',
                        color: 'rgba(255, 255, 255, 0.7)',
                        marginBottom: '20px',
                        lineHeight: '1.6'
                      }}>
                        {member.bio}
                      </p>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '15px',
                        marginTop: '10px'
                      }}>
                        <a
                          href={member.social.linkedin}
                          style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            background: 'rgba(255, 215, 0, 0.1)',
                            border: '1px solid rgba(255, 215, 0, 0.3)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#FFD700',
                            fontSize: '1.2rem',
                            transition: 'all 0.3s ease',
                            textDecoration: 'none'
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.background = 'rgba(255, 215, 0, 0.2)';
                            e.target.style.transform = 'scale(1.1)';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.background = 'rgba(255, 215, 0, 0.1)';
                            e.target.style.transform = 'scale(1)';
                          }}
                        >
                          in
                        </a>
                        <a
                          href={member.social.twitter}
                          style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            background: 'rgba(255, 215, 0, 0.1)',
                            border: '1px solid rgba(255, 215, 0, 0.3)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#FFD700',
                            fontSize: '1.2rem',
                            transition: 'all 0.3s ease',
                            textDecoration: 'none'
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.background = 'rgba(255, 215, 0, 0.2)';
                            e.target.style.transform = 'scale(1.1)';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.background = 'rgba(255, 215, 0, 0.1)';
                            e.target.style.transform = 'scale(1)';
                          }}
                        >
                          𝕏
                        </a>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Dots Indicator */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            marginTop: '30px'
          }}>
            {teamMembers.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentTeamIndex(i)}
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  border: 'none',
                  background: currentTeamIndex === i 
                    ? '#FFD700' 
                    : 'rgba(255, 215, 0, 0.3)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  transform: currentTeamIndex === i ? 'scale(1.4)' : 'scale(1)'
                }}
                aria-label={`Go to team member ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section style={{
        padding: '100px 20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: '900',
            marginBottom: '20px',
            textAlign: 'center',
            background: 'linear-gradient(135deg, #FFD700, #FFC107)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Our Achievements
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: 'rgba(255, 255, 255, 0.7)',
            textAlign: 'center',
            marginBottom: '60px',
            maxWidth: '700px',
            margin: '0 auto 60px'
          }}>
            Recognition and milestones we're proud of
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '30px'
        }}>
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -10 }}
              style={{
                background: 'rgba(255, 215, 0, 0.05)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                padding: '40px 30px',
                border: '1px solid rgba(255, 215, 0, 0.3)',
                textAlign: 'center',
                transition: 'all 0.4s ease',
                cursor: 'pointer'
              }}
            >
              <div style={{
                fontSize: '4rem',
                marginBottom: '20px',
                filter: 'drop-shadow(0 0 10px rgba(255, 215, 0, 0.5))'
              }}>
                {achievement.icon}
              </div>
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: '700',
                marginBottom: '10px',
                color: '#FFD700'
              }}>
                {achievement.title}
              </h3>
              <p style={{
                fontSize: '1rem',
                color: 'rgba(255, 255, 255, 0.7)',
                lineHeight: '1.6'
              }}>
                {achievement.description}
              </p>
            </motion.div>
          ))}
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
          style={{
            position: 'relative',
            zIndex: 1
          }}
        >
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: '900',
            marginBottom: '25px',
            color: 'white'
          }}>
            Ready to Work With Us?
          </h2>
          <p style={{
            fontSize: '1.3rem',
            color: 'rgba(255, 255, 255, 0.7)',
            marginBottom: '40px',
            maxWidth: '700px',
            margin: '0 auto 40px'
          }}>
            Let's collaborate and create something amazing together
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
              Start Your Project
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
              Contact Us
            </button>
          </div>
        </motion.div>
      </section>

      <Footer />

      <style>{`
        @keyframes pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.15; }
          50% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.2; }
        }

        @media (max-width: 768px) {
          section {
            padding: 60px 15px !important;
          }
          
          .slider-stage {
            height: 350px !important;
          }
          
          button[style*="position: absolute"] {
            width: 40px !important;
            height: 40px !important;
            font-size: 1.2rem !important;
          }
        }

        @media (max-width: 480px) {
          [style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}