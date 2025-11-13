import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);

  // Updated Categories for Digital Marketing Services
  const categories = [
    { id: 'all', name: 'All Projects', icon: '🎯' },
    { id: 'seo', name: 'SEO', icon: '🔍' },
    { id: 'smo', name: 'SMO', icon: '📱' },
    { id: 'ppc', name: 'PPC', icon: '💰' },
    { id: 'web-dev', name: 'Web Development', icon: '💻' },
    { id: 'content-marketing', name: 'Content Marketing', icon: '📝' },
    { id: 'web-design', name: 'Website Design', icon: '🎨' },
    { id: 'branding', name: 'Branding', icon: '✨' }
  ];

  // Enhanced Projects Data for Digital Marketing Agency with Before/After Data
  const projects = [
    {
      id: 1,
      title: "E-commerce SEO Optimization",
      category: 'seo',
      client: "FashionTrendz Store",
      thumbnail: "🛍️",
      tags: ['Technical SEO', 'On-Page SEO', 'Keyword Research', 'E-commerce'],
      description: "Comprehensive SEO strategy for fashion e-commerce store resulting in 300% organic traffic growth.",
      challenge: "Low organic visibility, poor site structure, and high bounce rate affecting online sales.",
      solution: "Implemented technical SEO fixes, optimized product pages, built quality backlinks, and created content strategy.",
      detailedApproach: [
        "Comprehensive technical audit and site structure optimization",
        "Keyword research and on-page optimization for 500+ product pages",
        "Content marketing strategy with fashion guides and trend reports",
        "Local SEO optimization for physical store locations",
        "Mobile-first indexing optimization"
      ],
      toolsUsed: ['Google Analytics', 'SEMrush', 'Ahrefs', 'Screaming Frog', 'Google Search Console'],
      results: [
        "300% increase in organic traffic in 6 months",
        "First page rankings for 45+ primary keywords",
        "65% growth in organic revenue",
        "40% reduction in bounce rate",
        "2x increase in average session duration"
      ],
      beforeAfter: {
        before: [
          "Organic Traffic: 2,500/month",
          "Keyword Rankings: 15 on page 1",
          "Conversion Rate: 1.2%",
          "Bounce Rate: 68%",
          "Avg. Session: 1:20 min"
        ],
        after: [
          "Organic Traffic: 10,000/month",
          "Keyword Rankings: 60+ on page 1",
          "Conversion Rate: 2.8%",
          "Bounce Rate: 28%",
          "Avg. Session: 2:45 min"
        ]
      },
      stats: {
        duration: "6 months",
        team: "SEO Specialist, Content Writer, Technical Expert",
        budget: "₹75,000/month",
        roi: "450%"
      },
      testimonial: {
        text: "Admark Digital Media transformed our online presence. Our organic sales have never been better!",
        author: "Priya Sharma",
        role: "Marketing Director, FashionTrendz"
      },
      images: ['📈', '🔍', '🛒', '📊']
    },
    {
      id: 2,
      title: "Social Media Marketing Campaign",
      category: 'smo',
      client: "FitLife Gym Chain",
      thumbnail: "💪",
      tags: ['Facebook Ads', 'Instagram Marketing', 'Influencer Collaboration', 'Community Building'],
      description: "360-degree social media campaign increasing membership sign-ups by 200%.",
      challenge: "Low social media engagement and declining membership conversions from digital channels.",
      solution: "Multi-platform social strategy with targeted ads, influencer partnerships, and community engagement.",
      detailedApproach: [
        "Platform-specific content strategy (Instagram, Facebook, YouTube)",
        "Influencer collaboration with fitness experts",
        "User-generated content campaigns and contests",
        "Retargeting campaigns for website visitors",
        "Community management and engagement optimization"
      ],
      toolsUsed: ['Meta Business Suite', 'Hootsuite', 'Canva', 'Influencer Platforms', 'Google Analytics'],
      results: [
        "200% increase in membership sign-ups",
        "150K+ new social media followers",
        "300% growth in engagement rate",
        "45% lower cost per acquisition",
        "50+ influencer collaborations"
      ],
      beforeAfter: {
        before: [
          "Monthly Sign-ups: 45",
          "Social Followers: 25K",
          "Engagement Rate: 1.5%",
          "Cost per Lead: ₹850",
          "Monthly Reach: 150K"
        ],
        after: [
          "Monthly Sign-ups: 135",
          "Social Followers: 175K",
          "Engagement Rate: 4.5%",
          "Cost per Lead: ₹465",
          "Monthly Reach: 650K"
        ]
      },
      stats: {
        duration: "4 months",
        team: "Social Media Manager, Content Creator, Ads Specialist",
        budget: "₹50,000/month",
        roi: "320%"
      },
      testimonial: {
        text: "The social media campaign brought us our best quarter ever. Highly recommended!",
        author: "Rahul Verma",
        role: "Owner, FitLife Gyms"
      },
      images: ['📱', '👥', '🎯', '📈']
    },
    {
      id: 3,
      title: "Google Ads PPC Campaign",
      category: 'ppc',
      client: "TechGadgets Online",
      thumbnail: "💰",
      tags: ['Google Ads', 'Shopping Ads', 'Remarketing', 'Conversion Optimization'],
      description: "Strategic PPC campaign delivering 5x ROI with optimized ad spend.",
      challenge: "High customer acquisition cost and low conversion rate from existing PPC campaigns.",
      solution: "Data-driven PPC strategy with audience targeting, ad copy optimization, and landing page improvements.",
      detailedApproach: [
        "Competitor analysis and market positioning",
        "Keyword strategy with negative keyword implementation",
        "Ad copy A/B testing and optimization",
        "Shopping feed optimization for e-commerce",
        "Remarketing campaigns for cart abandoners"
      ],
      toolsUsed: ['Google Ads', 'Google Analytics', 'Hotjar', 'Optimizely', 'Google Tag Manager'],
      results: [
        "5x return on ad spend (ROAS)",
        "60% reduction in cost per acquisition",
        "300% increase in qualified leads",
        "25% higher conversion rate",
        "15% lower bounce rate on landing pages"
      ],
      beforeAfter: {
        before: [
          "ROAS: 2.5x",
          "Cost per Acquisition: ₹2,500",
          "Monthly Leads: 120",
          "Conversion Rate: 2.1%",
          "Click-through Rate: 3.2%"
        ],
        after: [
          "ROAS: 5x",
          "Cost per Acquisition: ₹1,000",
          "Monthly Leads: 360",
          "Conversion Rate: 5.2%",
          "Click-through Rate: 7.8%"
        ]
      },
      stats: {
        duration: "3 months",
        team: "PPC Specialist, Data Analyst, UX Designer",
        budget: "₹1,00,000/month ad spend",
        roi: "500%"
      },
      testimonial: {
        text: "Admark's PPC expertise helped us achieve our highest ever ROI. Outstanding results!",
        author: "Anita Patel",
        role: "E-commerce Manager, TechGadgets"
      },
      images: ['🎯', '📊', '💸', '📈']
    },
    {
      id: 4,
      title: "Corporate Website Development",
      category: 'web-dev',
      client: "GlobalConsult Inc.",
      thumbnail: "💼",
      tags: ['React.js', 'Node.js', 'MongoDB', 'Responsive Design'],
      description: "Modern corporate website with lead generation focus and seamless user experience.",
      challenge: "Outdated website with poor performance, low conversion rates, and non-responsive design.",
      solution: "Built from scratch with modern tech stack, focusing on performance, SEO, and conversion optimization.",
      detailedApproach: [
        "Custom CMS development for easy content management",
        "Progressive Web App (PWA) implementation",
        "SEO-friendly architecture and fast loading times",
        "Integration with CRM and marketing automation",
        "Multi-language support for global audience"
      ],
      toolsUsed: ['React', 'Node.js', 'MongoDB', 'AWS', 'Git', 'Jira'],
      results: [
        "90% improvement in page load speed",
        "150% increase in lead generation",
        "Mobile conversion rate increased by 80%",
        "99.9% uptime achieved",
        "40% growth in organic traffic"
      ],
      beforeAfter: {
        before: [
          "Page Load: 4.8 seconds",
          "Monthly Leads: 80",
          "Mobile Conversion: 0.8%",
          "Uptime: 92%",
          "Organic Traffic: 3,200/month"
        ],
        after: [
          "Page Load: 0.8 seconds",
          "Monthly Leads: 200",
          "Mobile Conversion: 4.5%",
          "Uptime: 99.9%",
          "Organic Traffic: 8,500/month"
        ]
      },
      stats: {
        duration: "3 months",
        team: "Full Stack Developer, UI/UX Designer, QA Engineer",
        budget: "₹2,50,000 project",
        roi: "280%"
      },
      testimonial: {
        text: "The new website perfectly represents our brand and drives quality leads consistently.",
        author: "Michael Brown",
        role: "CEO, GlobalConsult"
      },
      images: ['💻', '🚀', '📱', '🎨']
    },
    {
      id: 5,
      title: "Content Marketing Strategy",
      category: 'content-marketing',
      client: "EduLearn Platform",
      thumbnail: "📚",
      tags: ['Blog Content', 'Video Marketing', 'Email Newsletters', 'Content Strategy'],
      description: "Comprehensive content marketing driving 500% increase in organic sign-ups.",
      challenge: "Low brand awareness and poor content engagement affecting user acquisition.",
      solution: "Multi-format content strategy with blog, video, and email marketing to build authority and trust.",
      detailedApproach: [
        "Content calendar and editorial planning",
        "Educational blog posts and industry insights",
        "Video tutorial series and webinars",
        "Email newsletter automation",
        "Content amplification through social media"
      ],
      toolsUsed: ['WordPress', 'Mailchimp', 'Canva', 'YouTube Studio', 'Google Analytics'],
      results: [
        "500% increase in organic sign-ups",
        "200+ published blog articles",
        "50K+ monthly blog readers",
        "75% growth in email subscribers",
        "40% increase in social shares"
      ],
      beforeAfter: {
        before: [
          "Monthly Sign-ups: 60",
          "Blog Articles: 25",
          "Monthly Readers: 8,000",
          "Email Subscribers: 2,500",
          "Social Shares: 400/month"
        ],
        after: [
          "Monthly Sign-ups: 360",
          "Blog Articles: 225+",
          "Monthly Readers: 58,000",
          "Email Subscribers: 8,750",
          "Social Shares: 1,600/month"
        ]
      },
      stats: {
        duration: "6 months",
        team: "Content Strategist, Writers, Video Editor",
        budget: "₹60,000/month",
        roi: "380%"
      },
      testimonial: {
        text: "The content strategy established us as industry thought leaders. Amazing work!",
        author: "Dr. Sneha Kapoor",
        role: "Founder, EduLearn"
      },
      images: ['📝', '🎥', '📧', '📊']
    },
    {
      id: 6,
      title: "Startup Website Design",
      category: 'web-design',
      client: "InnovateTech Solutions",
      thumbnail: "🚀",
      tags: ['UI/UX Design', 'Prototyping', 'User Research', 'Visual Design'],
      description: "Award-winning website design that converts visitors into customers.",
      challenge: "Poor user experience and outdated design hurting conversion rates and brand perception.",
      solution: "User-centered design approach with modern aesthetics and conversion-focused layout.",
      detailedApproach: [
        "User research and persona development",
        "Wireframing and interactive prototyping",
        "Visual design system creation",
        "Usability testing and iteration",
        "Mobile-first responsive design"
      ],
      toolsUsed: ['Figma', 'Adobe Creative Suite', 'InVision', 'Hotjar', 'Google Optimize'],
      results: [
        "70% improvement in user satisfaction",
        "45% increase in conversion rate",
        "Award-winning design recognition",
        "60% faster page interactions",
        "85% reduction in support queries"
      ],
      beforeAfter: {
        before: [
          "User Satisfaction: 3.2/5",
          "Conversion Rate: 1.8%",
          "Page Load: 3.2 seconds",
          "Support Queries: 120/month",
          "Mobile Usability: Poor"
        ],
        after: [
          "User Satisfaction: 5.4/5",
          "Conversion Rate: 6.1%",
          "Page Load: 1.3 seconds",
          "Support Queries: 18/month",
          "Mobile Usability: Excellent"
        ]
      },
      stats: {
        duration: "2 months",
        team: "UI/UX Designer, Visual Designer, Researcher",
        budget: "₹1,20,000 project",
        roi: "350%"
      },
      testimonial: {
        text: "The design exceeded our expectations. Our conversion rates have skyrocketed!",
        author: "Arjun Mehta",
        role: "Co-founder, InnovateTech"
      },
      images: ['🎨', '📐', '🖱️', '⭐']
    },
    {
      id: 7,
      title: "Complete Brand Identity",
      category: 'branding',
      client: "Nature's Bliss Organic",
      thumbnail: "🌿",
      tags: ['Logo Design', 'Brand Guidelines', 'Packaging', 'Brand Strategy'],
      description: "End-to-end brand identity creation for organic product company.",
      challenge: "Inconsistent branding across channels and lack of emotional connection with target audience.",
      solution: "Comprehensive brand identity system reflecting company values and resonating with health-conscious consumers.",
      detailedApproach: [
        "Brand strategy and positioning development",
        "Logo design and visual identity system",
        "Brand guidelines and style guide creation",
        "Packaging design and product labeling",
        "Marketing collateral and brand applications"
      ],
      toolsUsed: ['Adobe Illustrator', 'Photoshop', 'InDesign', 'Brand Strategy Tools'],
      results: [
        "400% increase in brand recognition",
        "80% improvement in brand consistency",
        "35% growth in market share",
        "Multiple design awards",
        "Strong emotional connection with target audience"
      ],
      beforeAfter: {
        before: [
          "Brand Recognition: 15%",
          "Brand Consistency: 40%",
          "Market Share: 8%",
          "Customer Loyalty: Low",
          "Design Awards: 0"
        ],
        after: [
          "Brand Recognition: 75%",
          "Brand Consistency: 95%",
          "Market Share: 28%",
          "Customer Loyalty: High",
          "Design Awards: 3+"
        ]
      },
      stats: {
        duration: "3 months",
        team: "Brand Strategist, Graphic Designer, Art Director",
        budget: "₹1,80,000 project",
        roi: "420%"
      },
      testimonial: {
        text: "Our new brand identity perfectly captures our essence. Sales have never been better!",
        author: "Neha Gupta",
        role: "Founder, Nature's Bliss"
      },
      images: ['🎨', '📦', '📄', '✨']
    },
    {
      id: 8,
      title: "Local SEO & Google My Business",
      category: 'seo',
      client: "City Dental Care",
      thumbnail: "🦷",
      tags: ['Local SEO', 'Google My Business', 'Citations', 'Review Management'],
      description: "Local SEO dominance with 95% visibility in local search results.",
      challenge: "Poor local search visibility and inconsistent NAP (Name, Address, Phone) information.",
      solution: "Comprehensive local SEO strategy including GMB optimization, citation building, and review management.",
      detailedApproach: [
        "Google My Business optimization and regular posts",
        "Local citation building and consistency cleanup",
        "Review generation and management strategy",
        "Local content creation and optimization",
        "Schema markup implementation for local business"
      ],
      toolsUsed: ['Google My Business', 'BrightLocal', 'Moz Local', 'Google Search Console'],
      results: [
        "95% visibility in local 3-pack",
        "200% increase in local phone calls",
        "4.9-star average rating with 150+ reviews",
        "Top rankings for all local dental keywords",
        "45% growth in new patient appointments"
      ],
      beforeAfter: {
        before: [
          "Local 3-Pack: Not visible",
          "Monthly Calls: 45",
          "Google Rating: 3.8 stars",
          "Reviews: 25",
          "New Patients: 18/month"
        ],
        after: [
          "Local 3-Pack: 95% visibility",
          "Monthly Calls: 135",
          "Google Rating: 4.9 stars",
          "Reviews: 175+",
          "New Patients: 52/month"
        ]
      },
      stats: {
        duration: "4 months",
        team: "Local SEO Specialist, Content Writer",
        budget: "₹40,000/month",
        roi: "550%"
      },
      testimonial: {
        text: "We're now the top-ranked dental clinic in our city. The phone hasn't stopped ringing!",
        author: "Dr. Rajesh Kumar",
        role: "Owner, City Dental Care"
      },
      images: ['📍', '📞', '⭐', '👥']
    }
  ];

  // Filter projects
  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

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
            🎨 Admark Digital Media Portfolio
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
            Digital Marketing Success Stories
          </h1>

          <p style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
            color: 'rgba(255, 255, 255, 0.8)',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.8'
          }}>
            Discover how Admark Digital Media drives growth through SEO, SMO, PPC, Web Development, 
            Content Marketing, and Branding solutions
          </p>

          {/* Agency Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '30px',
            marginTop: '60px',
            maxWidth: '1000px',
            margin: '60px auto 0'
          }}>
            {[
              { number: '150+', label: 'Projects Completed' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '5M+', label: 'Revenue Generated' },
              { number: '3x', label: 'Average ROI' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                style={{
                  textAlign: 'center',
                  padding: '20px'
                }}
              >
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: '900',
                  color: '#FFD700',
                  marginBottom: '10px'
                }}>
                  {stat.number}
                </div>
                <div style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '1rem',
                  fontWeight: '500'
                }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Category Filter */}
      <section style={{
        padding: '40px 20px',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '15px'
        }}>
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
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
            </motion.button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section style={{
        padding: '60px 20px',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <AnimatePresence mode='wait'>
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
              gap: '30px'
            }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => setSelectedProject(project)}
                style={{
                  background: hoveredProject === project.id 
                    ? 'rgba(255, 215, 0, 0.1)' 
                    : 'rgba(26, 29, 34, 0.6)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: hoveredProject === project.id 
                    ? '2px solid rgba(255, 215, 0, 0.5)' 
                    : '1px solid rgba(255, 215, 0, 0.2)',
                  cursor: 'pointer',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  transform: hoveredProject === project.id ? 'translateY(-10px)' : 'translateY(0)',
                  boxShadow: hoveredProject === project.id 
                    ? '0 20px 50px rgba(255, 215, 0, 0.3)' 
                    : '0 10px 30px rgba(0, 0, 0, 0.3)'
                }}
              >
                {/* Thumbnail */}
                <div style={{
                  height: '250px',
                  background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.1), rgba(255, 193, 7, 0.05))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '6rem',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    filter: hoveredProject === project.id 
                      ? 'drop-shadow(0 0 30px rgba(255, 215, 0, 0.8))' 
                      : 'none',
                    transition: 'all 0.4s ease',
                    transform: hoveredProject === project.id ? 'scale(1.15)' : 'scale(1)'
                  }}>
                    {project.thumbnail}
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '25px' }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '15px'
                  }}>
                    <h3 style={{
                      fontSize: '1.5rem',
                      fontWeight: '700',
                      color: hoveredProject === project.id ? '#FFD700' : 'white',
                      transition: 'color 0.3s ease',
                      flex: 1
                    }}>
                      {project.title}
                    </h3>
                    <div style={{
                      padding: '4px 12px',
                      background: 'rgba(255, 215, 0, 0.2)',
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      color: '#FFD700',
                      fontWeight: '600',
                      whiteSpace: 'nowrap'
                    }}>
                      ROI: {project.stats.roi}
                    </div>
                  </div>

                  <div style={{
                    fontSize: '0.95rem',
                    color: '#FFC107',
                    marginBottom: '15px',
                    fontWeight: '500'
                  }}>
                    {project.client}
                  </div>

                  <p style={{
                    fontSize: '1rem',
                    color: 'rgba(255, 255, 255, 0.8)',
                    lineHeight: '1.6',
                    marginBottom: '20px'
                  }}>
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                    marginBottom: '20px'
                  }}>
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        style={{
                          padding: '6px 15px',
                          background: 'rgba(255, 215, 0, 0.1)',
                          border: '1px solid rgba(255, 215, 0, 0.3)',
                          borderRadius: '20px',
                          fontSize: '0.85rem',
                          color: '#FFD700'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Quick Stats */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '10px',
                    marginBottom: '20px',
                    fontSize: '0.85rem'
                  }}>
                    <div style={{ color: 'rgba(255, 255, 255, 0.6)' }}>Duration:</div>
                    <div style={{ color: '#FFD700', fontWeight: '600' }}>{project.stats.duration}</div>
                    
                    <div style={{ color: 'rgba(255, 255, 255, 0.6)' }}>Budget:</div>
                    <div style={{ color: '#FFD700', fontWeight: '600' }}>{project.stats.budget}</div>
                  </div>

                  <button style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '10px',
                    border: 'none',
                    background: hoveredProject === project.id 
                      ? 'linear-gradient(135deg, #FFD700, #FFC107)' 
                      : 'rgba(255, 215, 0, 0.1)',
                    color: hoveredProject === project.id ? '#000' : '#FFD700',
                    fontWeight: '600',
                    fontSize: '1rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    border: hoveredProject === project.id ? 'none' : '2px solid rgba(255, 215, 0, 0.3)'
                  }}>
                    View Case Study →
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.95)',
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
                maxWidth: '1200px',
                width: '100%',
                maxHeight: '95vh',
                overflowY: 'auto',
                border: '2px solid rgba(255, 215, 0, 0.3)',
                boxShadow: '0 25px 100px rgba(0, 0, 0, 0.8)',
                position: 'relative'
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
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
                {/* Header */}
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '25px',
                  marginBottom: '30px',
                  flexWrap: 'wrap'
                }}>
                  <div style={{
                    fontSize: '5rem',
                    filter: 'drop-shadow(0 0 20px rgba(255, 215, 0, 0.5))',
                    flexShrink: 0
                  }}>
                    {selectedProject.thumbnail}
                  </div>
                  <div style={{ flex: 1, minWidth: '300px' }}>
                    <h2 style={{
                      fontSize: '2.5rem',
                      fontWeight: '900',
                      background: 'linear-gradient(135deg, #FFD700, #FFC107)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      marginBottom: '10px',
                      lineHeight: '1.2'
                    }}>
                      {selectedProject.title}
                    </h2>
                    <div style={{
                      fontSize: '1.1rem',
                      color: '#FFC107',
                      fontWeight: '600',
                      marginBottom: '15px'
                    }}>
                      {selectedProject.client}
                    </div>
                    <p style={{
                      fontSize: '1.1rem',
                      color: 'rgba(255, 255, 255, 0.8)',
                      lineHeight: '1.6'
                    }}>
                      {selectedProject.description}
                    </p>
                  </div>
                </div>

                {/* Project Stats */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '20px',
                  marginBottom: '40px',
                  padding: '25px',
                  background: 'rgba(255, 215, 0, 0.05)',
                  borderRadius: '15px',
                  border: '1px solid rgba(255, 215, 0, 0.2)'
                }}>
                  <div>
                    <div style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.9rem', marginBottom: '5px' }}>
                      Duration
                    </div>
                    <div style={{ color: '#FFD700', fontSize: '1.3rem', fontWeight: '700' }}>
                      {selectedProject.stats.duration}
                    </div>
                  </div>
                  <div>
                    <div style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.9rem', marginBottom: '5px' }}>
                      Team
                    </div>
                    <div style={{ color: '#FFD700', fontSize: '1.1rem', fontWeight: '700' }}>
                      {selectedProject.stats.team}
                    </div>
                  </div>
                  <div>
                    <div style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.9rem', marginBottom: '5px' }}>
                      Budget
                    </div>
                    <div style={{ color: '#FFD700', fontSize: '1.3rem', fontWeight: '700' }}>
                      {selectedProject.stats.budget}
                    </div>
                  </div>
                  <div>
                    <div style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.9rem', marginBottom: '5px' }}>
                      ROI
                    </div>
                    <div style={{ color: '#FFD700', fontSize: '1.3rem', fontWeight: '700' }}>
                      {selectedProject.stats.roi}
                    </div>
                  </div>
                </div>

                {/* Challenge & Solution Side by Side */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                  gap: '30px',
                  marginBottom: '40px'
                }}>
                  <div>
                    <h3 style={{
                      fontSize: '1.8rem',
                      fontWeight: '700',
                      color: '#FFD700',
                      marginBottom: '15px'
                    }}>
                      The Challenge
                    </h3>
                    <p style={{
                      fontSize: '1.1rem',
                      lineHeight: '1.8',
                      color: 'rgba(255, 255, 255, 0.9)'
                    }}>
                      {selectedProject.challenge}
                    </p>
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: '1.8rem',
                      fontWeight: '700',
                      color: '#FFD700',
                      marginBottom: '15px'
                    }}>
                      Our Solution
                    </h3>
                    <p style={{
                      fontSize: '1.1rem',
                      lineHeight: '1.8',
                      color: 'rgba(255, 255, 255, 0.9)'
                    }}>
                      {selectedProject.solution}
                    </p>
                  </div>
                </div>

                {/* Before & After Section */}
                <div style={{ marginBottom: '40px' }}>
                  <h3 style={{
                    fontSize: '1.8rem',
                    fontWeight: '700',
                    color: '#FFD700',
                    marginBottom: '25px',
                    textAlign: 'center'
                  }}>
                    Before & After Results
                  </h3>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '30px',
                    background: 'rgba(255, 215, 0, 0.05)',
                    borderRadius: '15px',
                    padding: '30px',
                    border: '1px solid rgba(255, 215, 0, 0.2)'
                  }}>
                    {/* Before Column */}
                    <div>
                      <div style={{
                        textAlign: 'center',
                        marginBottom: '20px'
                      }}>
                        <div style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '10px',
                          padding: '10px 25px',
                          background: 'rgba(255, 59, 59, 0.1)',
                          border: '1px solid rgba(255, 59, 59, 0.3)',
                          borderRadius: '25px',
                          color: '#FF3B3B',
                          fontWeight: '700',
                          fontSize: '1.1rem'
                        }}>
                          <span style={{ fontSize: '1.3rem' }}>📉</span>
                          BEFORE
                        </div>
                      </div>
                      <div style={{
                        display: 'grid',
                        gap: '12px'
                      }}>
                        {selectedProject.beforeAfter.before.map((item, index) => (
                          <div
                            key={index}
                            style={{
                              padding: '15px',
                              background: 'rgba(255, 59, 59, 0.05)',
                              borderRadius: '10px',
                              border: '1px solid rgba(255, 59, 59, 0.2)',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '12px'
                            }}
                          >
                            <span style={{
                              color: '#FF3B3B',
                              fontSize: '1.2rem',
                              fontWeight: '900'
                            }}>
                              ⚠️
                            </span>
                            <span style={{
                              color: 'rgba(255, 255, 255, 0.9)',
                              fontSize: '1rem',
                              lineHeight: '1.5'
                            }}>
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* After Column */}
                    <div>
                      <div style={{
                        textAlign: 'center',
                        marginBottom: '20px'
                      }}>
                        <div style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '10px',
                          padding: '10px 25px',
                          background: 'rgba(76, 217, 100, 0.1)',
                          border: '1px solid rgba(76, 217, 100, 0.3)',
                          borderRadius: '25px',
                          color: '#4CD964',
                          fontWeight: '700',
                          fontSize: '1.1rem'
                        }}>
                          <span style={{ fontSize: '1.3rem' }}>📈</span>
                          AFTER
                        </div>
                      </div>
                      <div style={{
                        display: 'grid',
                        gap: '12px'
                      }}>
                        {selectedProject.beforeAfter.after.map((item, index) => (
                          <div
                            key={index}
                            style={{
                              padding: '15px',
                              background: 'rgba(76, 217, 100, 0.05)',
                              borderRadius: '10px',
                              border: '1px solid rgba(76, 217, 100, 0.2)',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '12px'
                            }}
                          >
                            <span style={{
                              color: '#4CD964',
                              fontSize: '1.2rem',
                              fontWeight: '900'
                            }}>
                              ✅
                            </span>
                            <span style={{
                              color: 'rgba(255, 255, 255, 0.9)',
                              fontSize: '1rem',
                              lineHeight: '1.5'
                            }}>
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Detailed Approach */}
                <div style={{ marginBottom: '40px' }}>
                  <h3 style={{
                    fontSize: '1.8rem',
                    fontWeight: '700',
                    color: '#FFD700',
                    marginBottom: '20px'
                  }}>
                    Our Approach
                  </h3>
                  <div style={{
                    display: 'grid',
                    gap: '15px'
                  }}>
                    {selectedProject.detailedApproach.map((step, index) => (
                      <div
                        key={index}
                        style={{
                          padding: '20px',
                          background: 'rgba(255, 215, 0, 0.05)',
                          borderRadius: '12px',
                          border: '1px solid rgba(255, 215, 0, 0.2)',
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '15px'
                        }}
                      >
                        <span style={{
                          fontSize: '1.2rem',
                          color: '#FFD700',
                          fontWeight: '900',
                          background: 'rgba(255, 215, 0, 0.2)',
                          borderRadius: '50%',
                          width: '30px',
                          height: '30px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}>
                          {index + 1}
                        </span>
                        <span style={{
                          fontSize: '1.05rem',
                          color: 'rgba(255, 255, 255, 0.9)',
                          lineHeight: '1.6'
                        }}>
                          {step}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tools Used */}
                <div style={{ marginBottom: '40px' }}>
                  <h3 style={{
                    fontSize: '1.8rem',
                    fontWeight: '700',
                    color: '#FFD700',
                    marginBottom: '20px'
                  }}>
                    Tools & Technologies
                  </h3>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '12px'
                  }}>
                    {selectedProject.toolsUsed.map((tool, index) => (
                      <span
                        key={index}
                        style={{
                          padding: '10px 20px',
                          background: 'rgba(255, 215, 0, 0.1)',
                          border: '1px solid rgba(255, 215, 0, 0.3)',
                          borderRadius: '25px',
                          fontSize: '1rem',
                          color: '#FFD700',
                          fontWeight: '500'
                        }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div style={{ marginBottom: '40px' }}>
                  <h3 style={{
                    fontSize: '1.8rem',
                    fontWeight: '700',
                    color: '#FFD700',
                    marginBottom: '20px'
                  }}>
                    Results & Impact
                  </h3>
                  <div style={{
                    display: 'grid',
                    gap: '15px'
                  }}>
                    {selectedProject.results.map((result, index) => (
                      <div
                        key={index}
                        style={{
                          padding: '20px',
                          background: 'rgba(255, 215, 0, 0.05)',
                          borderRadius: '12px',
                          border: '1px solid rgba(255, 215, 0, 0.2)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '15px'
                        }}
                      >
                        <span style={{
                          fontSize: '1.5rem',
                          color: '#FFD700',
                          fontWeight: '900'
                        }}>
                          ✓
                        </span>
                        <span style={{
                          fontSize: '1.05rem',
                          color: 'rgba(255, 255, 255, 0.9)'
                        }}>
                          {result}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div style={{
                  padding: '30px',
                  background: 'rgba(255, 215, 0, 0.05)',
                  borderRadius: '15px',
                  border: '1px solid rgba(255, 215, 0, 0.3)',
                  marginBottom: '40px'
                }}>
                  <div style={{
                    fontSize: '3rem',
                    color: '#FFD700',
                    marginBottom: '15px',
                    opacity: 0.5
                  }}>
                    "
                  </div>
                  <p style={{
                    fontSize: '1.2rem',
                    fontStyle: 'italic',
                    color: 'rgba(255, 255, 255, 0.9)',
                    lineHeight: '1.8',
                    marginBottom: '20px'
                  }}>
                    {selectedProject.testimonial.text}
                  </p>
                  <div>
                    <div style={{
                      fontWeight: '700',
                      color: '#FFD700',
                      fontSize: '1.1rem'
                    }}>
                      {selectedProject.testimonial.author}
                    </div>
                    <div style={{
                      color: 'rgba(255, 255, 255, 0.6)',
                      fontSize: '0.95rem'
                    }}>
                      {selectedProject.testimonial.role}
                    </div>
                  </div>
                </div>

                {/* Technologies/Images */}
                <div>
                  <h3 style={{
                    fontSize: '1.8rem',
                    fontWeight: '700',
                    color: '#FFD700',
                    marginBottom: '20px'
                  }}>
                    Project Gallery
                  </h3>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                    gap: '20px'
                  }}>
                    {selectedProject.images.map((img, index) => (
                      <div
                        key={index}
                        style={{
                          height: '150px',
                          background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.1), rgba(255, 193, 7, 0.05))',
                          borderRadius: '15px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '4rem',
                          border: '1px solid rgba(255, 215, 0, 0.2)',
                          transition: 'all 0.3s ease',
                          cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'scale(1.05)';
                          e.currentTarget.style.borderColor = 'rgba(255, 215, 0, 0.5)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'scale(1)';
                          e.currentTarget.style.borderColor = 'rgba(255, 215, 0, 0.2)';
                        }}
                      >
                        {img}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: '900',
            marginBottom: '25px',
            color: 'white'
          }}>
            Ready to Transform Your Digital Presence?
          </h2>
          <p style={{
            fontSize: '1.3rem',
            color: 'rgba(255, 255, 255, 0.7)',
            marginBottom: '40px',
            maxWidth: '700px',
            margin: '0 auto 40px'
          }}>
            Let Admark Digital Media create your success story with proven digital marketing strategies
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
              Get Free Consultation
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
              View Our Services
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
          [style*="gridTemplateColumns: repeat(auto-fill"] {
            grid-template-columns: 1fr !important;
          }
          .modal-content {
            padding: 30px 20px !important;
          }
          [style*="gridTemplateColumns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }

        /* Custom scrollbar for modal */
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