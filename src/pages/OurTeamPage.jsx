import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function OurTeamPage() {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedMember, setSelectedMember] = useState(null);
  const [hoveredMember, setHoveredMember] = useState(null);

  // Departments
  const departments = [
    { id: 'all', name: 'All Team', icon: '👥' },
    { id: 'leadership', name: 'Leadership', icon: '👔' },
    { id: 'design', name: 'Design', icon: '🎨' },
    { id: 'development', name: 'Development', icon: '💻' },
    { id: 'marketing', name: 'Marketing', icon: '📊' },
    { id: 'sales', name: 'Sales', icon: '💼' }
  ];

  // Team Members Data
  const teamMembers = [
    // Leadership
    {
      id: 1,
      name: "Vikash Kumar",
      role: "CEO & Founder",
      department: "leadership",
      image: "👨‍💼",
      bio: "15+ years of experience in digital transformation and business strategy. Led the company from a 3-person startup to a 50+ member team.",
      email: "vikash@company.com",
      phone: "+91 98765 43210",
      skills: ["Business Strategy", "Leadership", "Digital Transformation"],
      achievements: [
        "Founded company in 2014",
        "Grew revenue by 300% in 3 years",
        "Featured in Forbes 30 Under 30",
        "Keynote speaker at Tech Summit 2023"
      ],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      },
      quote: "Innovation distinguishes between a leader and a follower."
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Chief Operating Officer",
      department: "leadership",
      image: "👩‍💼",
      bio: "Strategic operations expert with 12+ years experience scaling tech companies. Previously VP Operations at Fortune 500 company.",
      email: "priya@company.com",
      phone: "+91 98765 43211",
      skills: ["Operations Management", "Process Optimization", "Team Building"],
      achievements: [
        "Improved operational efficiency by 45%",
        "Implemented agile methodologies",
        "Built teams across 3 countries",
        "MBA from IIM Bangalore"
      ],
      social: {
        linkedin: "#",
        twitter: "#"
      },
      quote: "Excellence is not a destination, it's a continuous journey."
    },
    {
      id: 3,
      name: "Rahul Verma",
      role: "Chief Technology Officer",
      department: "leadership",
      image: "👨‍💻",
      bio: "Full-stack architect with expertise in scalable systems. Former tech lead at Google, passionate about clean code and innovation.",
      email: "rahul@company.com",
      phone: "+91 98765 43212",
      skills: ["System Architecture", "Cloud Computing", "DevOps"],
      achievements: [
        "Built systems serving 10M+ users",
        "20+ patents in software engineering",
        "Speaker at international tech conferences",
        "Contributor to open-source projects"
      ],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      },
      quote: "Code is poetry written in logic."
    },

    // Design Team
    {
      id: 4,
      name: "Anjali Patel",
      role: "Head of Design",
      department: "design",
      image: "👩‍🎨",
      bio: "Award-winning designer with 10+ years creating user-centric experiences. Passionate about accessibility and inclusive design.",
      email: "anjali@company.com",
      phone: "+91 98765 43213",
      skills: ["UI/UX Design", "Brand Strategy", "Design Systems"],
      achievements: [
        "Won 5 international design awards",
        "Designed products used by 5M+ users",
        "Published design thinking author",
        "Mentor at design bootcamps"
      ],
      social: {
        linkedin: "#",
        twitter: "#",
        dribbble: "#"
      },
      quote: "Design is not just what it looks like, it's how it works."
    },
    {
      id: 5,
      name: "Karan Singh",
      role: "Senior UI/UX Designer",
      department: "design",
      image: "👨‍🎨",
      bio: "Creative designer specializing in mobile-first experiences. 7+ years crafting intuitive interfaces for startups and enterprises.",
      email: "karan@company.com",
      phone: "+91 98765 43214",
      skills: ["Mobile Design", "Prototyping", "User Research"],
      achievements: [
        "Redesigned 50+ mobile apps",
        "Improved conversion rates by 40%",
        "Featured on Dribbble Top Shots",
        "Design Sprint facilitator"
      ],
      social: {
        linkedin: "#",
        dribbble: "#"
      },
      quote: "Every pixel tells a story."
    },
    {
      id: 6,
      name: "Neha Gupta",
      role: "Brand Designer",
      department: "design",
      image: "👩‍💼",
      bio: "Visual storyteller creating memorable brand identities. 5+ years helping companies stand out in crowded markets.",
      email: "neha@company.com",
      phone: "+91 98765 43215",
      skills: ["Brand Identity", "Illustration", "Motion Graphics"],
      achievements: [
        "Created brands for 100+ companies",
        "Rebranding projects that increased brand value by 60%",
        "Featured in design magazines",
        "Adobe Creative Jam winner"
      ],
      social: {
        linkedin: "#",
        behance: "#"
      },
      quote: "A brand is a voice, a product is a souvenir."
    },

    // Development Team
    {
      id: 7,
      name: "Arjun Mehta",
      role: "Lead Frontend Developer",
      department: "development",
      image: "👨‍💻",
      bio: "React specialist building lightning-fast web applications. 8+ years turning designs into production-ready code.",
      email: "arjun@company.com",
      phone: "+91 98765 43216",
      skills: ["React", "Next.js", "TypeScript", "Performance Optimization"],
      achievements: [
        "Built 200+ responsive websites",
        "Improved site speed by 70%",
        "Open source contributor",
        "Tech talk speaker at conferences"
      ],
      social: {
        linkedin: "#",
        github: "#"
      },
      quote: "Clean code always looks like it was written by someone who cares."
    },
    {
      id: 8,
      name: "Sneha Reddy",
      role: "Senior Backend Developer",
      department: "development",
      image: "👩‍💻",
      bio: "API architect and database expert. 7+ years building scalable backend systems that handle millions of requests.",
      email: "sneha@company.com",
      phone: "+91 98765 43217",
      skills: ["Node.js", "Python", "Database Design", "Microservices"],
      achievements: [
        "Architected systems for 5M+ users",
        "Reduced server costs by 40%",
        "Published tech articles read by 100K+",
        "AWS certified architect"
      ],
      social: {
        linkedin: "#",
        github: "#"
      },
      quote: "Code is like humor. When you have to explain it, it's bad."
    },
    {
      id: 9,
      name: "Amit Kumar",
      role: "Mobile App Developer",
      department: "development",
      image: "👨‍🔧",
      bio: "Cross-platform mobile expert. 6+ years creating beautiful apps for iOS and Android using React Native and Flutter.",
      email: "amit@company.com",
      phone: "+91 98765 43218",
      skills: ["React Native", "Flutter", "Mobile UI", "App Optimization"],
      achievements: [
        "Developed 50+ mobile apps",
        "Apps with 2M+ downloads",
        "Optimized apps for battery efficiency",
        "App Store featured apps"
      ],
      social: {
        linkedin: "#",
        github: "#"
      },
      quote: "Mobile is not the future, it's the now."
    },

    // Marketing Team
    {
      id: 10,
      name: "Pooja Iyer",
      role: "Marketing Director",
      department: "marketing",
      image: "👩‍💼",
      bio: "Growth marketing strategist with proven track record. 9+ years driving user acquisition and brand awareness.",
      email: "pooja@company.com",
      phone: "+91 98765 43219",
      skills: ["Digital Marketing", "SEO/SEM", "Content Strategy", "Analytics"],
      achievements: [
        "Grew organic traffic by 400%",
        "Managed $5M+ ad budgets",
        "Generated 10K+ qualified leads",
        "Marketing automation expert"
      ],
      social: {
        linkedin: "#",
        twitter: "#"
      },
      quote: "Marketing is no longer about the stuff you make, but the stories you tell."
    },
    {
      id: 11,
      name: "Rohit Sharma",
      role: "SEO Specialist",
      department: "marketing",
      image: "👨‍💼",
      bio: "SEO ninja helping businesses rank #1 on Google. 6+ years of technical and content SEO expertise.",
      email: "rohit@company.com",
      phone: "+91 98765 43220",
      skills: ["Technical SEO", "Link Building", "Keyword Research", "Analytics"],
      achievements: [
        "Ranked 100+ keywords in top 3",
        "Increased organic traffic by 300%",
        "SEO audits for Fortune 500 companies",
        "Published SEO case studies"
      ],
      social: {
        linkedin: "#",
        twitter: "#"
      },
      quote: "SEO is not about gaming the system, it's about learning to play by the rules."
    },
    {
      id: 12,
      name: "Divya Singh",
      role: "Content Strategist",
      department: "marketing",
      image: "👩‍💻",
      bio: "Storyteller crafting compelling content that converts. 5+ years creating content strategies for B2B and B2C brands.",
      email: "divya@company.com",
      phone: "+91 98765 43221",
      skills: ["Content Marketing", "Copywriting", "Social Media", "Email Marketing"],
      achievements: [
        "Created content generating 5M+ views",
        "Improved conversion rates by 50%",
        "Built engaged communities of 100K+",
        "Award-winning blog writer"
      ],
      social: {
        linkedin: "#",
        twitter: "#"
      },
      quote: "Content is king, but engagement is queen."
    },

    // Sales Team
    {
      id: 13,
      name: "Sanjay Verma",
      role: "Sales Director",
      department: "sales",
      image: "👨‍💼",
      bio: "Enterprise sales leader with 11+ years closing deals and building lasting client relationships.",
      email: "sanjay@company.com",
      phone: "+91 98765 43222",
      skills: ["Enterprise Sales", "Negotiation", "Account Management", "CRM"],
      achievements: [
        "Closed deals worth $10M+",
        "Built sales team from 3 to 15",
        "95% client retention rate",
        "Top performer for 5 consecutive years"
      ],
      social: {
        linkedin: "#"
      },
      quote: "Selling is not about convincing, it's about helping people make the right decision."
    },
    {
      id: 14,
      name: "Riya Kapoor",
      role: "Business Development Manager",
      department: "sales",
      image: "👩‍💼",
      bio: "Partnership expert connecting brands and creating mutually beneficial relationships. 6+ years in B2B sales.",
      email: "riya@company.com",
      phone: "+91 98765 43223",
      skills: ["Business Development", "Partnership Management", "Strategic Planning"],
      achievements: [
        "Secured partnerships with 50+ companies",
        "Generated $3M+ in new revenue",
        "Built international client base",
        "Negotiated win-win deals"
      ],
      social: {
        linkedin: "#"
      },
      quote: "Business is all about relationships."
    },
    {
      id: 15,
      name: "Kunal Joshi",
      role: "Account Executive",
      department: "sales",
      image: "👨‍💼",
      bio: "Client success champion ensuring customers achieve their goals. 4+ years managing high-value accounts.",
      email: "kunal@company.com",
      phone: "+91 98765 43224",
      skills: ["Account Management", "Client Relations", "Upselling", "Customer Success"],
      achievements: [
        "Managed accounts worth $5M+",
        "98% customer satisfaction score",
        "Achieved 150% of sales quota",
        "Turned customers into advocates"
      ],
      social: {
        linkedin: "#"
      },
      quote: "Customer success is our success."
    }
  ];

  // Team Stats
  const teamStats = [
    { number: "50+", label: "Team Members" },
    { number: "15+", label: "Countries" },
    { number: "10+", label: "Years Experience" },
    { number: "98%", label: "Employee Satisfaction" }
  ];

  // Company Values
  const companyValues = [
    {
      icon: "🚀",
      title: "Innovation First",
      description: "We constantly push boundaries and embrace new technologies"
    },
    {
      icon: "🤝",
      title: "Teamwork",
      description: "We believe in collaboration and supporting each other"
    },
    {
      icon: "🎯",
      title: "Excellence",
      description: "We strive for the highest quality in everything we do"
    },
    {
      icon: "💡",
      title: "Continuous Learning",
      description: "We invest in growth and development of our team"
    }
  ];

  // Filter team members
  const filteredMembers = selectedDepartment === 'all' 
    ? teamMembers 
    : teamMembers.filter(member => member.department === selectedDepartment);

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
            👥 Meet Our Team
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
            The People Behind<br />Our Success
          </h1>

          <p style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
            color: 'rgba(255, 255, 255, 0.8)',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.8'
          }}>
            We're a diverse team of passionate professionals dedicated to delivering 
            exceptional digital solutions
          </p>
        </motion.div>
      </section>

      {/* Team Stats */}
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
          {teamStats.map((stat, index) => (
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

      {/* Department Filters */}
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
          {departments.map((dept) => (
            <motion.button
              key={dept.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedDepartment(dept.id)}
              style={{
                padding: '12px 30px',
                borderRadius: '50px',
                border: selectedDepartment === dept.id 
                  ? '2px solid #FFD700' 
                  : '2px solid rgba(255, 215, 0, 0.3)',
                background: selectedDepartment === dept.id 
                  ? 'linear-gradient(135deg, #FFD700, #FFC107)' 
                  : 'rgba(26, 29, 34, 0.6)',
                color: selectedDepartment === dept.id ? '#000' : 'rgba(255, 255, 255, 0.9)',
                fontWeight: '600',
                fontSize: '1rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)',
                boxShadow: selectedDepartment === dept.id 
                  ? '0 8px 25px rgba(255, 215, 0, 0.4)' 
                  : '0 4px 15px rgba(0, 0, 0, 0.2)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <span style={{ fontSize: '1.2rem' }}>{dept.icon}</span>
              {dept.name}
            </motion.button>
          ))}
        </div>

        {/* Team Grid */}
        <AnimatePresence mode='wait'>
          <motion.div
            key={selectedDepartment}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '30px'
            }}
          >
            {filteredMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                onMouseEnter={() => setHoveredMember(member.id)}
                onMouseLeave={() => setHoveredMember(null)}
                onClick={() => setSelectedMember(member)}
                style={{
                  background: hoveredMember === member.id 
                    ? 'rgba(255, 215, 0, 0.1)' 
                    : 'rgba(26, 29, 34, 0.6)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '20px',
                  padding: '35px 30px',
                  border: hoveredMember === member.id 
                    ? '2px solid rgba(255, 215, 0, 0.5)' 
                    : '1px solid rgba(255, 215, 0, 0.2)',
                  cursor: 'pointer',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  transform: hoveredMember === member.id ? 'translateY(-10px)' : 'translateY(0)',
                  boxShadow: hoveredMember === member.id 
                    ? '0 20px 50px rgba(255, 215, 0, 0.3)' 
                    : '0 10px 30px rgba(0, 0, 0, 0.3)',
                  textAlign: 'center'
                }}
              >
                {/* Profile Image */}
                <div style={{
                  fontSize: '5rem',
                  marginBottom: '20px',
                  filter: hoveredMember === member.id 
                    ? 'drop-shadow(0 0 20px rgba(255, 215, 0, 0.8))' 
                    : 'none',
                  transition: 'all 0.4s ease',
                  transform: hoveredMember === member.id ? 'scale(1.15)' : 'scale(1)'
                }}>
                  {member.image}
                </div>

                {/* Name */}
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  marginBottom: '8px',
                  color: hoveredMember === member.id ? '#FFD700' : 'white',
                  transition: 'color 0.3s ease'
                }}>
                  {member.name}
                </h3>

                {/* Role */}
                <div style={{
                  fontSize: '1.05rem',
                  color: '#FFC107',
                  marginBottom: '15px',
                  fontWeight: '500'
                }}>
                  {member.role}
                </div>

                {/* Bio Preview */}
                <p style={{
                  fontSize: '0.95rem',
                  color: 'rgba(255, 255, 255, 0.7)',
                  lineHeight: '1.6',
                  marginBottom: '20px',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {member.bio}
                </p>

                {/* View Profile Button */}
                <button style={{
                  padding: '10px 25px',
                  borderRadius: '25px',
                  border: 'none',
                  background: hoveredMember === member.id 
                    ? 'linear-gradient(135deg, #FFD700, #FFC107)' 
                    : 'rgba(255, 215, 0, 0.1)',
                  color: hoveredMember === member.id ? '#000' : '#FFD700',
                  fontWeight: '600',
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  border: hoveredMember === member.id ? 'none' : '2px solid rgba(255, 215, 0, 0.3)'
                }}>
                  View Profile →
                </button>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Company Values */}
      <section style={{
        padding: '100px 20px',
        background: 'rgba(10, 10, 15, 0.6)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: '900',
              marginBottom: '20px',
              background: 'linear-gradient(135deg, #FFD700, #FFC107)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Our Values
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              The principles that guide our work and culture
            </p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px'
          }}>
            {companyValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
                style={{
                  background: 'rgba(26, 29, 34, 0.6)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '20px',
                  padding: '40px 30px',
                  border: '1px solid rgba(255, 215, 0, 0.2)',
                  textAlign: 'center',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{
                  fontSize: '4rem',
                  marginBottom: '20px'
                }}>
                  {value.icon}
                </div>
                <h3 style={{
                  fontSize: '1.4rem',
                  fontWeight: '700',
                  color: '#FFD700',
                  marginBottom: '15px'
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
        </div>
      </section>

      {/* Join Team CTA */}
      <section style={{
        padding: '100px 20px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
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
          <div style={{ fontSize: '5rem', marginBottom: '20px' }}>🚀</div>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: '900',
            marginBottom: '25px',
            color: 'white'
          }}>
            Join Our Amazing Team
          </h2>
          <p style={{
            fontSize: '1.3rem',
            color: 'rgba(255, 255, 255, 0.7)',
            marginBottom: '40px',
            maxWidth: '700px',
            margin: '0 auto 40px'
          }}>
            We're always looking for talented individuals to join our journey
          </p>

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
            View Open Positions
          </button>
        </motion.div>
      </section>

      {/* Member Detail Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMember(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.9)',
              backdropFilter: 'blur(10px)',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
              overflowY: 'auto'
            }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: 'linear-gradient(135deg, rgba(26, 29, 34, 0.95), rgba(10, 10, 10, 0.98))',
                borderRadius: '25px',
                maxWidth: '800px',
                width: '100%',
                maxHeight: '90vh',
                overflowY: 'auto',
                border: '2px solid rgba(255, 215, 0, 0.3)',
                boxShadow: '0 25px 100px rgba(0, 0, 0, 0.8)',
                position: 'relative'
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedMember(null)}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  width: '45px',
                  height: '45px',
                  borderRadius: '50%',
                  border: '2px solid rgba(255, 215, 0, 0.3)',
                  background: 'rgba(255, 215, 0, 0.1)',
                  color: '#FFD700',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  zIndex: 10
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(255, 215, 0, 0.2)';
                  e.target.style.transform = 'rotate(90deg)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255, 215, 0, 0.1)';
                  e.target.style.transform = 'rotate(0)';
                }}
              >
                ×
              </button>

              <div style={{ padding: '50px 40px' }}>
                {/* Profile Header */}
                <div style={{
                  textAlign: 'center',
                  marginBottom: '40px'
                }}>
                  <div style={{
                    fontSize: '6rem',
                    marginBottom: '20px',
                    filter: 'drop-shadow(0 0 20px rgba(255, 215, 0, 0.5))'
                  }}>
                    {selectedMember.image}
                  </div>
                  <h2 style={{
                    fontSize: '2.5rem',
                    fontWeight: '900',
                    marginBottom: '10px',
                    background: 'linear-gradient(135deg, #FFD700, #FFC107)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>
                    {selectedMember.name}
                  </h2>
                  <div style={{
                    fontSize: '1.2rem',
                    color: '#FFC107',
                    fontWeight: '600',
                    marginBottom: '20px'
                  }}>
                    {selectedMember.role}
                  </div>

                  {/* Contact Info */}
                  <div style={{
                    display: 'flex',
                    gap: '20px',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    marginBottom: '20px',
                    fontSize: '0.95rem',
                    color: 'rgba(255, 255, 255, 0.7)'
                  }}>
                    <div>📧 {selectedMember.email}</div>
                    <div>📞 {selectedMember.phone}</div>
                  </div>

                  {/* Social Links */}
                  <div style={{
                    display: 'flex',
                    gap: '15px',
                    justifyContent: 'center'
                  }}>
                    {Object.entries(selectedMember.social).map(([platform, link]) => (
                      <a
                        key={platform}
                        href={link}
                        style={{
                          width: '45px',
                          height: '45px',
                          borderRadius: '50%',
                          background: 'rgba(255, 215, 0, 0.1)',
                          border: '1px solid rgba(255, 215, 0, 0.3)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#FFD700',
                          textDecoration: 'none',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'rgba(255, 215, 0, 0.2)';
                          e.currentTarget.style.transform = 'translateY(-3px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'rgba(255, 215, 0, 0.1)';
                          e.currentTarget.style.transform = 'translateY(0)';
                        }}
                      >
                        {platform === 'linkedin' && 'in'}
                        {platform === 'twitter' && '𝕏'}
                        {platform === 'github' && 'gh'}
                        {platform === 'dribbble' && 'db'}
                        {platform === 'behance' && 'be'}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Bio */}
                <div style={{ marginBottom: '30px' }}>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: '#FFD700',
                    marginBottom: '15px'
                  }}>
                    About
                  </h3>
                  <p style={{
                    fontSize: '1.1rem',
                    lineHeight: '1.8',
                    color: 'rgba(255, 255, 255, 0.9)'
                  }}>
                    {selectedMember.bio}
                  </p>
                </div>

                {/* Quote */}
                {selectedMember.quote && (
                  <div style={{
                    padding: '25px',
                    background: 'rgba(255, 215, 0, 0.05)',
                    borderRadius: '15px',
                    border: '1px solid rgba(255, 215, 0, 0.2)',
                    marginBottom: '30px',
                    fontStyle: 'italic'
                  }}>
                    <div style={{
                      fontSize: '2rem',
                      color: '#FFD700',
                      marginBottom: '10px',
                      opacity: 0.5
                    }}>
                      "
                    </div>
                    <p style={{
                      fontSize: '1.1rem',
                      color: 'rgba(255, 255, 255, 0.9)',
                      lineHeight: '1.7'
                    }}>
                      {selectedMember.quote}
                    </p>
                  </div>
                )}

                {/* Skills */}
                <div style={{ marginBottom: '30px' }}>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: '#FFD700',
                    marginBottom: '15px'
                  }}>
                    Expertise
                  </h3>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '10px'
                  }}>
                    {selectedMember.skills.map((skill, i) => (
                      <span
                        key={i}
                        style={{
                          padding: '8px 20px',
                          background: 'rgba(255, 215, 0, 0.1)',
                          border: '1px solid rgba(255, 215, 0, 0.3)',
                          borderRadius: '25px',
                          fontSize: '0.95rem',
                          color: '#FFD700'
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: '#FFD700',
                    marginBottom: '15px'
                  }}>
                    Key Achievements
                  </h3>
                  <div style={{
                    display: 'grid',
                    gap: '12px'
                  }}>
                    {selectedMember.achievements.map((achievement, i) => (
                      <div
                        key={i}
                        style={{
                          padding: '15px 20px',
                          background: 'rgba(26, 29, 34, 0.6)',
                          borderRadius: '12px',
                          border: '1px solid rgba(255, 215, 0, 0.2)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '15px'
                        }}
                      >
                        <span style={{
                          fontSize: '1.3rem',
                          color: '#FFD700'
                        }}>
                          ✓
                        </span>
                        <span style={{
                          fontSize: '1rem',
                          color: 'rgba(255, 255, 255, 0.9)'
                        }}>
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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

        div::-webkit-scrollbar {
          width: 8px;
        }
        div::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }
        div::-webkit-scrollbar-thumb {
          background: #FFD700;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
}