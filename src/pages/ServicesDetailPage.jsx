// src/pages/ServicesDetailPage.jsx:
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ServicesDetailPage() {
  const [activeService, setActiveService] = useState(null);
  const [activeMainService, setActiveMainService] = useState('digital-marketing');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openMainService, setOpenMainService] = useState(null); // Changed to null

  // Default overview content when no service is selected
  const defaultOverview = {
    title: "Admark Digital Services Overview",
    description: "Comprehensive digital solutions designed to grow your business, enhance your online presence, and drive measurable results. Explore our services to discover how we can help you achieve your digital goals.",
    whatWeDo: [
      "Strategic digital marketing campaigns that increase visibility and conversions",
      "Data-driven advertising strategies across multiple platforms",
      "Custom web development solutions tailored to your business needs",
      "Professional web design that creates exceptional user experiences",
      "Ongoing optimization and performance monitoring across all channels"
    ],
    businessImpact: [
      "Increased online visibility and brand recognition across digital channels",
      "Higher quality leads and improved conversion rates",
      "Enhanced user engagement and customer satisfaction",
      "Competitive advantage in your industry or market",
      "Measurable ROI and continuous business growth"
    ],
    whyAdmark: [
      "Proven track record of delivering results for businesses of all sizes",
      "Customized strategies based on deep industry knowledge and data analysis",
      "Transparent processes with clear communication and regular reporting",
      "Expert team with diverse skills across digital marketing and technology",
      "Commitment to long-term partnerships and continuous improvement"
    ],
    mainService: "overview"
  };

  // Complete Services Data - All 28 services
  const services = {
    // Digital Marketing Services
    'seo': {
      title: "Search Engine Optimization (SEO)",
      description: "Improve your website's visibility in search engine results to attract more organic traffic and potential customers. Our comprehensive SEO strategies are tailored to help you dominate search rankings.",
      whatWeDo: [
        "Comprehensive technical SEO audit and website analysis",
        "Strategic keyword research and competitive analysis",
        "On-page optimization including meta tags and content structure",
        "Technical SEO improvements for better crawling and indexing",
        "Quality link building and off-page optimization strategies",
        "Continuous monitoring and performance reporting with 90-day roadmap"
      ],
      businessImpact: [
        "Achieve higher search engine rankings for targeted keywords",
        "Increase organic traffic from qualified visitors actively searching for your services",
        "Build brand credibility and trust through search engine authority",
        "Generate sustainable long-term growth without ongoing ad spend",
        "Outrank competitors and capture market share in your industry"
      ],
      whyAdmark: [
        "Proven track record of achieving first-page rankings across competitive industries",
        "Customized strategies based on comprehensive data analysis and market research",
        "Transparent reporting with clear metrics showing progress and ROI",
        "Expert team with certifications in latest SEO methodologies and tools",
        "Ethical white-hat techniques that ensure long-term sustainable results"
      ],
      faqs: [
        { 
          question: "How long does it take to see SEO results?", 
          answer: "Initial improvements can be seen within 4-8 weeks, but substantial results typically take 3-6 months of consistent optimization. The timeline varies based on competition, website age, and current SEO health." 
        },
        { 
          question: "What makes Admark different from other SEO agencies?", 
          answer: "We combine data-driven strategies with creative problem-solving. Our transparent approach includes regular reporting, clear communication, and customized solutions tailored to your specific business goals." 
        }
      ],
      mainService: "digital-marketing"
    },
    'local-seo': {
      title: "Local SEO Services",
      description: "Dominate local search results and attract customers in your geographic area with targeted local SEO strategies. Perfect for businesses with physical locations or serving specific regions.",
      whatWeDo: [
        "Complete Google Business Profile optimization and management",
        "Local citation building across authoritative directories and platforms",
        "Location-specific keyword research and geographic targeting",
        "Review management and reputation monitoring systems",
        "Local content creation targeting geographic areas and communities",
        "Map pack optimization and local ranking factors enhancement"
      ],
      businessImpact: [
        "Higher visibility in local 'near me' searches and map results",
        "Increased foot traffic to physical locations and local inquiries",
        "Enhanced local brand recognition and community presence",
        "Better engagement with local customer base and neighborhoods",
        "Competitive advantage in your local market area"
      ],
      whyAdmark: [
        "Specialized expertise in local search algorithms and ranking factors",
        "Comprehensive local presence management across all platforms",
        "Proven success in helping local businesses dominate their markets",
        "Customized local strategies based on geographic and demographic factors",
        "Ongoing monitoring and adaptation to local search trends"
      ],
      faqs: [
        { 
          question: "How important is local SEO for my business?", 
          answer: "Extremely important if you serve customers in specific geographic areas. 46% of all Google searches have local intent, and businesses appearing in local results have significantly higher conversion rates." 
        }
      ],
      mainService: "digital-marketing"
    },
    'orm': {
      title: "Online Reputation Management",
      description: "Protect and enhance your brand's online reputation through proactive monitoring, strategic response, and positive content promotion.",
      whatWeDo: [
        "Sentiment monitoring across social media, review sites, and forums",
        "Review response templates and crisis communication playbook",
        "Negative content suppression through positive content creation",
        "Brand reputation analysis and monthly health reports",
        "Proactive review generation and customer feedback systems",
        "Crisis management and rapid response protocols"
      ],
      businessImpact: [
        "Maintain positive brand perception and customer trust",
        "Reduce impact of negative reviews and feedback",
        "Increase customer confidence and conversion rates",
        "Protect brand value during crises or negative events",
        "Build stronger customer relationships through active engagement"
      ],
      whyAdmark: [
        "Expert crisis management team with proven response strategies",
        "Comprehensive monitoring across all digital touchpoints",
        "Proactive approach to reputation building and protection",
        "Customized response protocols for different types of feedback",
        "Transparent reporting on sentiment and reputation metrics"
      ],
      mainService: "digital-marketing"
    },
    'youtube-optimization': {
      title: "YouTube Optimization",
      description: "Maximize your YouTube channel's potential with strategic optimization, content planning, and growth strategies that drive views and engagement.",
      whatWeDo: [
        "Video SEO optimization for titles, descriptions, and tags",
        "Thumbnail design and testing for maximum click-through rates",
        "Channel growth playbook and content calendar development",
        "YouTube ad integration and monetization strategies",
        "Audience engagement and community building techniques",
        "Performance analytics and optimization recommendations"
      ],
      businessImpact: [
        "Increased video views and channel subscribers",
        "Higher engagement rates and longer watch times",
        "Enhanced brand visibility through video content",
        "Additional revenue streams through monetization",
        "Stronger connection with target audience through video"
      ],
      whyAdmark: [
        "Proven success in growing YouTube channels across industries",
        "Expert understanding of YouTube algorithm and best practices",
        "Creative team for thumbnail design and video strategy",
        "Data-driven approach to content optimization",
        "Comprehensive analytics and performance tracking"
      ],
      mainService: "digital-marketing"
    },
    'white-label-seo': {
      title: "White Label SEO",
      description: "Comprehensive white label SEO solutions for agencies looking to expand their service offerings without increasing overhead.",
      whatWeDo: [
        "Complete white label SEO service delivery and management",
        "Customizable reporting with agency branding",
        "SLA compliance and quality assurance processes",
        "Reseller pricing and partnership programs",
        "Dedicated account management and support",
        "Sample PDF report templates and client materials"
      ],
      businessImpact: [
        "Expand service offerings without additional hiring",
        "Maintain client relationships with enhanced services",
        "Increase agency revenue through SEO partnerships",
        "Deliver professional results with agency branding",
        "Scale operations quickly with reliable backend support"
      ],
      whyAdmark: [
        "Extensive experience in white label partnerships",
        "Flexible branding and customization options",
        "Reliable service delivery and consistent results",
        "Competitive pricing with attractive margins",
        "Comprehensive support and account management"
      ],
      mainService: "digital-marketing"
    },
    'ecommerce-seo': {
      title: "E-Commerce SEO",
      description: "Specialized SEO strategies for e-commerce websites focusing on product visibility, category optimization, and conversion rate enhancement.",
      whatWeDo: [
        "Product schema markup and rich snippet implementation",
        "Category page optimization for better search visibility",
        "Site speed optimization for large product catalogs",
        "CRO integration and user experience enhancements",
        "Internal linking structure and navigation optimization",
        "Product page content optimization and image SEO"
      ],
      businessImpact: [
        "Higher visibility for product and category pages",
        "Increased organic traffic from product searches",
        "Improved conversion rates and average order value",
        "Better user experience leading to repeat purchases",
        "Competitive advantage in e-commerce search results"
      ],
      whyAdmark: [
        "Specialized expertise in e-commerce platforms and SEO",
        "Proven track record with online stores across industries",
        "Understanding of e-commerce user behavior and intent",
        "Technical expertise for large-scale e-commerce sites",
        "Conversion-focused optimization strategies"
      ],
      mainService: "digital-marketing"
    },
    'cbd-services': {
      title: "CBD Services",
      description: "Specialized digital marketing solutions for CBD and cannabis businesses, navigating compliance challenges while driving growth.",
      whatWeDo: [
        "Compliance-focused content strategy and advertising",
        "Alternative traffic sources beyond restricted platforms",
        "SEO optimization for CBD-related search terms",
        "Influencer partnership and affiliate marketing programs",
        "Educational content creation and community building",
        "Compliance monitoring and risk management"
      ],
      businessImpact: [
        "Navigate advertising restrictions effectively",
        "Build trust and credibility in regulated industry",
        "Reach target audience through compliant channels",
        "Establish authority through educational content",
        "Grow business within legal framework"
      ],
      whyAdmark: [
        "Deep understanding of CBD industry regulations",
        "Proven strategies for restricted industries",
        "Creative approaches to compliant marketing",
        "Experience with CBD and cannabis businesses",
        "Risk-aware marketing strategies"
      ],
      mainService: "digital-marketing"
    },
    'gmb-optimization': {
      title: "GMB Optimization",
      description: "Complete Google My Business optimization to maximize local visibility, customer engagement, and conversion opportunities.",
      whatWeDo: [
        "Complete GMB profile setup and verification",
        "Regular posts and updates for engagement",
        "Q&A strategy and customer interaction management",
        "Proper category selection and business information",
        "Review solicitation and management processes",
        "Photo optimization and virtual tour setup"
      ],
      businessImpact: [
        "Higher visibility in local search and map results",
        "Increased customer trust through complete profiles",
        "More customer interactions and inquiries",
        "Better conversion rates from local searches",
        "Enhanced local brand presence"
      ],
      whyAdmark: [
        "Expert knowledge of GMB features and algorithms",
        "Proven success in local business optimization",
        "Comprehensive approach beyond basic setup",
        "Ongoing management and optimization",
        "Results-driven GMB strategy"
      ],
      mainService: "digital-marketing"
    },

    // Digital Advertising Services
    'ppc': {
      title: "Pay Per Click Advertising (PPC)",
      description: "Drive immediate, targeted traffic to your website with strategically managed pay-per-click campaigns across multiple platforms.",
      whatWeDo: [
        "Comprehensive campaign strategy and account structure planning",
        "In-depth keyword research and competitive analysis",
        "Compelling ad copy creation and continuous A/B testing",
        "Landing page optimization for maximum conversion rates",
        "Advanced audience targeting and remarketing strategies",
        "Performance monitoring and budget optimization with UTM tracking"
      ],
      businessImpact: [
        "Immediate visibility in search results and social media platforms",
        "Highly targeted traffic from users actively searching for your services",
        "Complete control over advertising budget and campaign spending",
        "Measurable ROI with detailed analytics and conversion tracking",
        "Rapid testing of new markets and service offerings"
      ],
      whyAdmark: [
        "Certified experts in Google Ads, Microsoft Advertising, and social media platforms",
        "Data-driven approach focusing on maximizing return on ad spend (ROAS)",
        "Advanced tracking setup to measure true business impact and conversions",
        "Continuous optimization based on performance data and market trends",
        "Transparent reporting showing exactly where your budget is going"
      ],
      mainService: "digital-advertising"
    },
    'facebook-marketing': {
      title: "Facebook Marketing",
      description: "Strategic Facebook advertising and organic growth strategies to reach your target audience and drive meaningful engagement.",
      whatWeDo: [
        "Advanced targeting strategies including lookalike audiences",
        "Creative format testing and optimization",
        "Facebook pixel setup and event tracking implementation",
        "Campaign structure optimization for different objectives",
        "Troubleshooting and technical support",
        "Performance analysis and optimization"
      ],
      businessImpact: [
        "Precise targeting of ideal customer demographics",
        "High-quality lead generation and conversions",
        "Increased brand awareness and recognition",
        "Retargeting opportunities from website visitors",
        "Measurable results with clear ROI"
      ],
      whyAdmark: [
        "Facebook Blueprint certified experts",
        "Proven success across multiple industries",
        "Creative team for ad design and copy",
        "Technical expertise for pixel implementation",
        "Continuous optimization based on performance"
      ],
      mainService: "digital-advertising"
    },
    'instagram-marketing': {
      title: "Instagram Marketing",
      description: "Leverage Instagram's visual platform to build brand awareness, engage with your audience, and drive conversions.",
      whatWeDo: [
        "Reels strategy and viral content planning",
        "Influencer micro-campaigns and partnerships",
        "Shoppable posts and product tagging implementation",
        "Community growth tactics and engagement strategies",
        "Story content planning and interactive features",
        "Hashtag strategy and content optimization"
      ],
      businessImpact: [
        "Increased brand visibility among younger demographics",
        "Higher engagement rates through visual content",
        "Direct sales through shoppable features",
        "Stronger brand community and loyalty",
        "Influencer-driven credibility and reach"
      ],
      whyAdmark: [
        "Creative team with Instagram expertise",
        "Proven influencer partnership strategies",
        "Understanding of Instagram algorithm",
        "Commerce integration experience",
        "Engagement-focused content approach"
      ],
      mainService: "digital-advertising"
    },
    'linkedin-marketing': {
      title: "LinkedIn Marketing",
      description: "Professional B2B marketing strategies on LinkedIn to generate quality leads and build industry authority.",
      whatWeDo: [
        "B2B lead generation campaign strategies",
        "Content calendar for thought leadership positioning",
        "Sponsored InMail campaigns and messaging",
        "Account-Based Marketing (ABM) integrations",
        "Company page optimization and employee advocacy",
        "LinkedIn advertising and targeting optimization"
      ],
      businessImpact: [
        "High-quality B2B leads and partnership opportunities",
        "Enhanced professional reputation and industry authority",
        "Targeted reach to decision-makers and professionals",
        "Increased brand awareness in professional circles",
        "Better conversion rates for B2B services"
      ],
      whyAdmark: [
        "B2B marketing specialization",
        "LinkedIn advertising expertise",
        "Thought leadership content development",
        "ABM strategy implementation",
        "Professional network building"
      ],
      mainService: "digital-advertising"
    },
    'twitter-marketing': {
      title: "Twitter Marketing",
      description: "Real-time engagement and conversation-driven marketing on Twitter to build community and drive brand awareness.",
      whatWeDo: [
        "Real-time engagement strategy and monitoring",
        "Content cadence and posting schedule optimization",
        "Trend-jacking playbook and opportunity identification",
        "Conversation monitoring and community management",
        "Twitter advertising and promoted tweet strategies",
        "Hashtag campaign development and management"
      ],
      businessImpact: [
        "Real-time brand presence and conversation participation",
        "Increased brand mentions and social shares",
        "Community building and customer loyalty",
        "Crisis management and rapid response capability",
        "Brand personality and voice development"
      ],
      whyAdmark: [
        "Real-time marketing expertise",
        "Community management experience",
        "Trend identification and activation",
        "Twitter advertising optimization",
        "Engagement-focused content strategy"
      ],
      mainService: "digital-advertising"
    },
    'content-marketing': {
      title: "Content Marketing",
      description: "Strategic content creation and distribution that attracts, engages, and converts your target audience.",
      whatWeDo: [
        "Editorial calendar development and management",
        "Pillar cluster content model implementation",
        "Content repurposing across formats (blogs→videos→social)",
        "Measurement and analytics (engagement & MQLs)",
        "Content distribution and amplification strategies",
        "SEO integration and keyword-focused content"
      ],
      businessImpact: [
        "Increased organic traffic through valuable content",
        "Higher engagement and time on site",
        "Improved lead quality and conversion rates",
        "Enhanced brand authority and thought leadership",
        "Sustainable long-term traffic growth"
      ],
      whyAdmark: [
        "Content strategy expertise across industries",
        "SEO-integrated content approach",
        "Multi-format content creation capabilities",
        "Performance measurement and optimization",
        "Audience-focused content development"
      ],
      mainService: "digital-advertising"
    },
    'pinterest-marketing': {
      title: "Pinterest Marketing",
      description: "Visual discovery and shopping strategies on Pinterest to reach audiences with high purchase intent.",
      whatWeDo: [
        "Visual SEO optimization for pins and boards",
        "Pin design templates and brand consistency",
        "Buyer intent keyword research and targeting",
        "Seasonal campaign playbook and planning",
        "Rich pin implementation and product tagging",
        "Analytics and performance optimization"
      ],
      businessImpact: [
        "Reach users with high commercial intent",
        "Drive traffic from visual discovery to purchase",
        "Longer content lifespan compared to other platforms",
        "Higher conversion rates from qualified traffic",
        "Brand visibility in inspiration and planning phases"
      ],
      whyAdmark: [
        "Pinterest marketing specialization",
        "Visual content expertise",
        "Shopping and e-commerce integration",
        "Seasonal campaign experience",
        "Performance tracking and optimization"
      ],
      mainService: "digital-advertising"
    },
    'social-media-marketing': {
      title: "Social Media Marketing",
      description: "Comprehensive social media management across multiple platforms to build brand presence and drive engagement.",
      whatWeDo: [
        "Omnichannel social media planning and strategy",
        "Optimal posting cadence and timing optimization",
        "User-generated content programs and campaigns",
        "Reporting dashboards and performance analytics",
        "Community management and customer service integration",
        "Social listening and trend monitoring"
      ],
      businessImpact: [
        "Consistent brand presence across social platforms",
        "Increased engagement and follower growth",
        "Improved customer satisfaction and loyalty",
        "Valuable customer insights and feedback",
        "Enhanced brand personality and human connection"
      ],
      whyAdmark: [
        "Multi-platform social media expertise",
        "Data-driven content strategy",
        "Community management experience",
        "Performance analytics and reporting",
        "Brand voice and personality development"
      ],
      mainService: "digital-advertising"
    },

    // Web Development Services
    'wordpress-development': {
      title: "WordPress Development",
      description: "Custom WordPress websites designed for performance, security, and exceptional user experience that converts visitors into customers.",
      whatWeDo: [
        "Custom WordPress theme development from scratch",
        "Plugin selection, customization, and development",
        "Website performance optimization and speed enhancement",
        "Security hardening and ongoing protection measures",
        "E-commerce integration with WooCommerce",
        "Ongoing maintenance, updates, and support with staging deployment"
      ],
      businessImpact: [
        "Professional online presence that builds trust and credibility",
        "Faster loading times improving user experience and SEO rankings",
        "Mobile-responsive design that works seamlessly across all devices",
        "Easy content management system for your team to update",
        "Scalable platform that grows with your business needs"
      ],
      whyAdmark: [
        "Expert developers with extensive WordPress experience",
        "Clean, optimized code following best practices and standards",
        "Focus on user experience and conversion optimization",
        "Comprehensive security measures to protect your website",
        "Ongoing support and maintenance to keep your site running smoothly"
      ],
      mainService: "web-development"
    },
    'shopify-development': {
      title: "Shopify Web Development",
      description: "Professional Shopify store development with custom design, seamless functionality, and optimized conversion features.",
      whatWeDo: [
        "Shopify theme customization and development",
        "App integrations and functionality enhancements",
        "Headless Shopify possibilities and advanced implementations",
        "Checkout optimization and conversion rate improvements",
        "Payment gateway integration and security",
        "Mobile optimization and performance tuning"
      ],
      businessImpact: [
        "Professional e-commerce presence that drives sales",
        "Seamless shopping experience across all devices",
        "Higher conversion rates through optimized checkout",
        "Scalable platform for business growth",
        "Reduced cart abandonment and increased average order value"
      ],
      whyAdmark: [
        "Shopify development expertise",
        "E-commerce optimization experience",
        "Conversion rate optimization focus",
        "Technical implementation skills",
        "Ongoing support and maintenance"
      ],
      mainService: "web-development"
    },
    'ecommerce-development': {
      title: "Ecommerce Development",
      description: "Complete e-commerce solutions with multi-platform strategy, advanced features, and optimized user experience.",
      whatWeDo: [
        "Multi-platform e-commerce strategy development",
        "Payment gateway integration and optimization",
        "Inventory management and workflow automation",
        "Scaling advice and performance optimization",
        "Advanced features and custom functionality",
        "Security implementation and PCI compliance"
      ],
      businessImpact: [
        "Complete e-commerce solution tailored to your business",
        "Streamlined operations and inventory management",
        "Enhanced customer experience and satisfaction",
        "Scalable architecture for business growth",
        "Increased sales through optimized user experience"
      ],
      whyAdmark: [
        "Comprehensive e-commerce expertise",
        "Multi-platform implementation experience",
        "Business process optimization",
        "Scalable architecture design",
        "Performance and security focus"
      ],
      mainService: "web-development"
    },
    'magento-development': {
      title: "Magento Development",
      description: "Enterprise-level Magento solutions for large catalogs, complex operations, and high-performance e-commerce.",
      whatWeDo: [
        "Large-catalog setups and optimization",
        "Performance caching and speed optimization",
        "Multi-store architecture and management",
        "Upgrade and migration services",
        "Custom module development",
        "Security and maintenance services"
      ],
      businessImpact: [
        "Enterprise-level e-commerce capabilities",
        "High performance for large product catalogs",
        "Flexible multi-store management",
        "Scalable architecture for growth",
        "Advanced features and customization"
      ],
      whyAdmark: [
        "Magento certification and expertise",
        "Enterprise e-commerce experience",
        "Performance optimization skills",
        "Security and maintenance focus",
        "Custom development capabilities"
      ],
      mainService: "web-development"
    },
    'joomla-development': {
      title: "Joomla Development",
      description: "Professional Joomla development with custom components, migration services, and long-term maintenance.",
      whatWeDo: [
        "Custom component and module development",
        "Joomla migration and upgrade services",
        "Long-term maintenance and support",
        "Training for content teams and administrators",
        "Performance optimization and security",
        "Template customization and development"
      ],
      businessImpact: [
        "Professional website with advanced functionality",
        "Easy content management for your team",
        "Secure and stable platform operation",
        "Custom features tailored to your needs",
        "Ongoing support and maintenance"
      ],
      whyAdmark: [
        "Joomla development expertise",
        "Custom component development",
        "Migration and upgrade experience",
        "Training and support services",
        "Security and performance focus"
      ],
      mainService: "web-development"
    },
    'mobile-app-development': {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile app development with MVP strategy, backend integration, and launch support.",
      whatWeDo: [
        "Native vs cross-platform strategy consultation",
        "MVP roadmap and development planning",
        "Backend API development and integration",
        "Analytics events and push notification strategies",
        "App store optimization and launch support",
        "Ongoing maintenance and updates"
      ],
      businessImpact: [
        "Mobile presence reaching wider audience",
        "Enhanced customer engagement through app",
        "Additional revenue streams through mobile",
        "Competitive advantage with mobile solution",
        "Better customer experience and loyalty"
      ],
      whyAdmark: [
        "Mobile development expertise",
        "Strategy and planning focus",
        "Backend integration experience",
        "Launch and optimization support",
        "Ongoing maintenance services"
      ],
      mainService: "web-development"
    },
    'payment-gateway': {
      title: "Payment Gateway Integration",
      description: "Secure payment gateway integration with PCI compliance, multiple currency support, and reliable transaction processing.",
      whatWeDo: [
        "PCI compliance implementation and monitoring",
        "Multiple payment gateway integration options",
        "Multi-currency and international payment support",
        "Sandbox testing and quality assurance",
        "Webhook reliability and error handling",
        "Security monitoring and fraud prevention"
      ],
      businessImpact: [
        "Secure and reliable payment processing",
        "Multiple payment options for customers",
        "International sales capability",
        "Reduced cart abandonment",
        "Compliance with security standards"
      ],
      whyAdmark: [
        "Payment integration expertise",
        "Security and compliance focus",
        "Multiple gateway experience",
        "Testing and quality assurance",
        "Ongoing monitoring and support"
      ],
      mainService: "web-development"
    },
    'woocommerce-development': {
      title: "WooCommerce Development",
      description: "Custom WooCommerce solutions with advanced product types, shipping options, and performance optimization.",
      whatWeDo: [
        "Advanced product types and variations",
        "Custom shipping and tax calculation",
        "Performance optimization for large catalogs",
        "Plugin hygiene and security best practices",
        "Payment gateway integration",
        "Custom functionality development"
      ],
      businessImpact: [
        "Flexible e-commerce on WordPress",
        "Customized shopping experience",
        "Optimized performance for growth",
        "Secure and stable operation",
        "Scalable solution for business needs"
      ],
      whyAdmark: [
        "WooCommerce specialization",
        "Performance optimization expertise",
        "Custom development capabilities",
        "Security and maintenance focus",
        "Integration experience"
      ],
      mainService: "web-development"
    },

    // Web Design Services
    'custom-website-design': {
      title: "Custom Website Design",
      description: "Unique, visually stunning website designs tailored to your brand and business objectives that create memorable user experiences.",
      whatWeDo: [
        "Comprehensive brand analysis and design strategy development",
        "Wireframing and prototyping for optimal user flow",
        "UI/UX design focused on conversions and user engagement",
        "Responsive design implementation for all devices",
        "Design system and comprehensive style guide creation",
        "Collaborative design process with multiple revision rounds"
      ],
      businessImpact: [
        "Memorable brand experience that differentiates you from competitors",
        "Higher conversion rates through strategic design and user psychology",
        "Consistent brand identity across all digital touchpoints",
        "Improved user engagement and reduced bounce rates",
        "Competitive advantage with unique, professional design"
      ],
      whyAdmark: [
        "Award-winning design team with expertise in multiple industries",
        "User-centered design approach focused on your target audience",
        "Strategic design that aligns with business objectives",
        "Modern, responsive designs that work across all devices",
        "Collaborative process ensuring your vision is brought to life"
      ],
      mainService: "web-design"
    },
    'wordpress-website-design': {
      title: "WordPress Website Design",
      description: "Professional WordPress website design with starter kits, block patterns, and SEO-optimized foundations.",
      whatWeDo: [
        "Starter kit implementation and customization",
        "Gutenberg block patterns and custom blocks",
        "Accessibility compliance and best practices",
        "SEO baseline optimization and structure",
        "Mobile-first responsive design",
        "Content strategy and layout optimization"
      ],
      businessImpact: [
        "Professional WordPress site with modern design",
        "Easy content management and updates",
        "SEO-friendly structure and performance",
        "Accessible design for all users",
        "Mobile-optimized experience"
      ],
      whyAdmark: [
        "WordPress design specialization",
        "Gutenberg block expertise",
        "Accessibility and SEO focus",
        "Modern design trends",
        "User-friendly approach"
      ],
      mainService: "web-design"
    },
    'shopify-website-design': {
      title: "Shopify Website Design",
      description: "Conversion-focused Shopify store design with optimized product pages, navigation, and shopping experience.",
      whatWeDo: [
        "Design-to-conversion optimization rules",
        "Product detail page (PDP) optimization",
        "Header and cart UX best practices",
        "Collection page design and organization",
        "Mobile shopping experience optimization",
        "Brand consistency across all pages"
      ],
      businessImpact: [
        "Higher conversion rates through optimized design",
        "Improved shopping experience leading to more sales",
        "Reduced cart abandonment through better UX",
        "Stronger brand presence and recognition",
        "Mobile-optimized shopping experience"
      ],
      whyAdmark: [
        "Shopify design expertise",
        "Conversion optimization focus",
        "E-commerce UX best practices",
        "Mobile-first design approach",
        "Brand consistency implementation"
      ],
      mainService: "web-design"
    },
    'magento-website-design': {
      title: "Magento Website Design",
      description: "Enterprise Magento store design with advanced features, custom layouts, and optimized user experience.",
      whatWeDo: [
        "Custom Magento theme development",
        "Advanced layout and template customization",
        "User experience optimization for complex catalogs",
        "Checkout process design and optimization",
        "Admin interface customization",
        "Performance-optimized design implementation"
      ],
      businessImpact: [
        "Enterprise-level e-commerce design",
        "Optimized user experience for large catalogs",
        "Higher conversion rates through better design",
        "Professional appearance matching brand standards",
        "Scalable design for business growth"
      ],
      whyAdmark: [
        "Magento design expertise",
        "Enterprise e-commerce experience",
        "User experience optimization",
        "Custom development capabilities",
        "Performance-focused design"
      ],
      mainService: "web-design"
    },
    'joomla-website-design': {
      title: "Joomla Website Design",
      description: "Professional Joomla website design with custom templates, component integration, and responsive layouts.",
      whatWeDo: [
        "Custom Joomla template development",
        "Component and module integration design",
        "Responsive layout implementation",
        "Content structure and navigation design",
        "User interface customization",
        "Brand consistency implementation"
      ],
      businessImpact: [
        "Professional Joomla website design",
        "Easy content management for teams",
        "Responsive design across devices",
        "Custom functionality integration",
        "Brand-consistent visual identity"
      ],
      whyAdmark: [
        "Joomla design expertise",
        "Template development experience",
        "Responsive design implementation",
        "User interface customization",
        "Brand consistency focus"
      ],
      mainService: "web-design"
    },
    'website-redesigning': {
      title: "Website Re-Designing",
      description: "Complete website redesign services to modernize your online presence, improve user experience, and boost conversions.",
      whatWeDo: [
        "Comprehensive website audit and analysis",
        "User experience research and improvement planning",
        "Modern design implementation with current trends",
        "Content reorganization and optimization",
        "Performance improvement and speed optimization",
        "SEO preservation and enhancement during redesign"
      ],
      businessImpact: [
        "Modern, up-to-date website appearance",
        "Improved user experience and engagement",
        "Higher conversion rates through better design",
        "Better performance and loading speeds",
        "Enhanced SEO and search visibility"
      ],
      whyAdmark: [
        "Redesign expertise across platforms",
        "User experience research capabilities",
        "SEO preservation during redesign",
        "Modern design trend knowledge",
        "Performance optimization focus"
      ],
      mainService: "web-design"
    }
  };

  const mainServices = [
    {
      key: 'digital-marketing',
      name: 'Digital Marketing',
      icon: '📊',
      subServices: ['seo', 'local-seo', 'orm', 'youtube-optimization', 'white-label-seo', 'ecommerce-seo', 'cbd-services', 'gmb-optimization']
    },
    {
      key: 'digital-advertising',
      name: 'Digital Advertising',
      icon: '🎯',
      subServices: ['ppc', 'facebook-marketing', 'instagram-marketing', 'linkedin-marketing', 'twitter-marketing', 'content-marketing', 'pinterest-marketing', 'social-media-marketing']
    },
    {
      key: 'web-development',
      name: 'Web Development',
      icon: '💻',
      subServices: ['wordpress-development', 'shopify-development', 'ecommerce-development', 'magento-development', 'joomla-development', 'mobile-app-development', 'payment-gateway', 'woocommerce-development']
    },
    {
      key: 'web-design',
      name: 'Web Design',
      icon: '🎨',
      subServices: ['custom-website-design', 'wordpress-website-design', 'shopify-website-design', 'magento-website-design', 'joomla-website-design', 'website-redesigning']
    }
  ];

  useEffect(() => {
    // Check if there's a hash in the URL (e.g., /services#seo)
    const hash = window.location.hash.slice(1); // Remove the # symbol
    
    if (hash && services[hash]) {
      // Set the active service based on the URL hash
      setActiveService(hash);
      
      // Find and open the main service category
      const mainServiceKey = services[hash].mainService;
      if (mainServiceKey) {
        setActiveMainService(mainServiceKey);
        setOpenMainService(mainServiceKey);
      }
      
      // Smooth scroll to top after a small delay to ensure content is rendered
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    } else {
      // Initialize with default overview (no service selected) if no hash
      setActiveService(null);
      setActiveMainService('digital-marketing');
      setOpenMainService(null); // No service expanded by default
    }
  }, []);

  const handleMainServiceClick = (serviceKey) => {
    setOpenMainService(openMainService === serviceKey ? null : serviceKey);
  };

  const handleSubServiceClick = (subServiceKey, mainServiceKey) => {
    setActiveService(subServiceKey);
    setActiveMainService(mainServiceKey);
    setIsSidebarOpen(false); // Close mobile sidebar
  };

  const currentService = activeService ? services[activeService] : defaultOverview;

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #313030ff 0%, #1A1D22 50%, #0A0A0A 100%)',
      color: 'white',
      fontFamily: "'Inter', sans-serif"
    }}>
      {/* Navbar Component */}
      <Navbar />
      
      {/* Main Content Area */}
      <div style={{ paddingTop: '80px' }}>
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          style={{
            position: 'fixed',
            top: '90px',
            left: '20px',
            zIndex: 60,
            padding: '12px',
            background: 'linear-gradient(135deg, #FFD700, #D4AF37)',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            display: 'none',
            color: '#000',
            fontSize: '1.2rem',
            boxShadow: '0 5px 15px rgba(255, 215, 0, 0.4)',
            fontWeight: 'bold'
          }}
          className="mobile-menu-btn"
        >
          ☰
        </button>

        {/* Overlay for mobile */}
        {isSidebarOpen && (
          <div
            onClick={() => setIsSidebarOpen(false)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.8)',
              zIndex: 40,
              backdropFilter: 'blur(5px)'
            }}
          />
        )}

        <div style={{
          display: 'flex',
          maxWidth: '1600px',
          margin: '0 auto'
        }}>
          {/* Sidebar */}
          <aside
            style={{
              width: '320px',
              background: 'rgba(10, 10, 15, 0.95)',
              height: 'calc(100vh - 80px)',
              position: 'sticky',
              top: '80px',
              overflowY: 'auto',
              padding: '30px 20px',
              borderRight: '1px solid rgba(255, 215, 0, 0.2)',
              transition: 'all 0.3s ease',
              zIndex: 50,
              backdropFilter: 'blur(10px)'
            }}
            className={`sidebar ${isSidebarOpen ? 'active' : ''}`}
          >
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: '800',
              marginBottom: '30px',
              background: 'linear-gradient(135deg, #FFD700, #D4AF37)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Our Services
            </h2>

            {mainServices.map((mainService) => (
              <div key={mainService.key} style={{ marginBottom: '20px' }}>
                {/* Main Service Header */}
                <div
                  onClick={() => handleMainServiceClick(mainService.key)}
                  style={{
                    padding: '15px',
                    background: activeMainService === mainService.key 
                      ? 'rgba(255, 215, 0, 0.15)' 
                      : 'rgba(26, 29, 34, 0.6)',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    marginBottom: '10px',
                    border: activeMainService === mainService.key 
                      ? '1px solid rgba(255, 215, 0, 0.4)' 
                      : '1px solid rgba(255, 255, 255, 0.05)',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontSize: '1.5rem' }}>{mainService.icon}</span>
                    <span style={{
                      fontWeight: '600',
                      color: activeMainService === mainService.key ? '#FFD700' : 'white'
                    }}>
                      {mainService.name}
                    </span>
                  </div>
                  <i style={{
                    transform: openMainService === mainService.key ? 'rotate(180deg)' : 'rotate(0)',
                    transition: 'transform 0.3s ease',
                    color: '#FFD700'
                  }}>
                    ▼
                  </i>
                </div>

                {/* Sub Services */}
                <AnimatePresence>
                  {openMainService === mainService.key && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{ paddingLeft: '15px', paddingTop: '10px' }}>
                        {mainService.subServices.map((subKey) => (
                          <div
                            key={subKey}
                            onClick={() => handleSubServiceClick(subKey, mainService.key)}
                            style={{
                              padding: '12px 15px',
                              marginBottom: '8px',
                              background: activeService === subKey 
                                ? 'rgba(255, 215, 0, 0.2)' 
                                : 'transparent',
                              borderRadius: '8px',
                              cursor: 'pointer',
                              transition: 'all 0.3s ease',
                              borderLeft: activeService === subKey 
                                ? '3px solid #FFD700' 
                                : '3px solid transparent',
                              color: activeService === subKey ? '#FFD700' : 'rgba(255, 255, 255, 0.7)',
                              fontSize: '0.95rem',
                              fontWeight: activeService === subKey ? '600' : '400',
                              position: 'relative'
                            }}
                          >
                            {activeService === subKey && (
                              <span style={{
                                position: 'absolute',
                                left: '-15px',
                                color: '#FFD700',
                                fontSize: '0.8rem'
                              }}>
                                ▶
                              </span>
                            )}
                            {services[subKey]?.title}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </aside>

          {/* Main Content */}
          <motion.main
            key={activeService || 'overview'}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              flex: 1,
              padding: '40px',
              maxWidth: '1200px'
            }}
          >
            {/* Service Header with Buy Now Button */}
            <div style={{ marginBottom: '50px', position: 'relative' }}>
              {/* Buy Now Button - Top Right Corner (only show when activeService is not null) */}
              {activeService && (
                <motion.a
                  href={`/pricing#${
                    activeService === 'seo' || activeService === 'local-seo' || activeService === 'orm' || 
                    activeService === 'youtube-optimization' || activeService === 'white-label-seo' || 
                    activeService === 'ecommerce-seo' || activeService === 'cbd-services' || 
                    activeService === 'gmb-optimization' ? 'seo' :
                    activeService === 'ppc' ? 'ppc' :
                    activeService === 'social-media-marketing' || activeService === 'facebook-marketing' || 
                    activeService === 'instagram-marketing' || activeService === 'linkedin-marketing' || 
                    activeService === 'twitter-marketing' || activeService === 'pinterest-marketing' ? 'smo' :
                    activeService === 'content-marketing' ? 'content' :
                    activeService === 'wordpress-development' || activeService === 'shopify-development' || 
                    activeService === 'ecommerce-development' || activeService === 'magento-development' || 
                    activeService === 'joomla-development' || activeService === 'mobile-app-development' || 
                    activeService === 'payment-gateway' || activeService === 'woocommerce-development' ? 'web' :
                    activeService === 'custom-website-design' || activeService === 'wordpress-website-design' || 
                    activeService === 'shopify-website-design' || activeService === 'magento-website-design' || 
                    activeService === 'joomla-website-design' || activeService === 'website-redesigning' ? 'branding' :
                    'seo'
                  }`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    position: 'absolute',
                    top: '-15px',
                    right: '0',
                    padding: '10px 24px',
                    background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                    color: '#000',
                    fontWeight: '700',
                    fontSize: '0.9rem',
                    borderRadius: '50px',
                    border: '2px solid rgba(255, 215, 0, 0.8)',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    boxShadow: '0 6px 20px rgba(255, 215, 0, 0.4)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    zIndex: 10
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(255, 215, 0, 0.6)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 215, 0, 0.4)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <span>Buy Now</span>
                  <span style={{ fontSize: '1.1rem' }}>🛒</span>
                </motion.a>
              )}
              
              <h1 style={{
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: '900',
                marginBottom: '20px',
                background: 'linear-gradient(135deg, #FFD700, #D4AF37)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                paddingRight: activeService ? '180px' : '0' // Add padding when button is visible
              }}>
                {currentService.title}
              </h1>
              <p style={{
                fontSize: '1.2rem',
                color: 'rgba(255, 255, 255, 0.8)',
                lineHeight: '1.8',
                maxWidth: '900px'
              }}>
                {currentService.description}
              </p>
            </div>

            {/* What We Do */}
            <section style={{ marginBottom: '60px' }}>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: '700',
                marginBottom: '25px',
                color: '#FFFFFF',
                borderBottom: '2px solid #FFD700',
                paddingBottom: '10px',
                display: 'inline-block'
              }}>
                What We Do
              </h2>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '20px'
              }}>
                {currentService.whatWeDo.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    style={{
                      padding: '20px',
                      background: 'rgba(26, 29, 34, 0.6)',
                      borderRadius: '12px',
                      border: '1px solid rgba(255, 215, 0, 0.3)',
                      backdropFilter: 'blur(10px)',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '15px'
                    }}
                  >
                    <span style={{
                      fontSize: '1.5rem',
                      flexShrink: 0,
                      color: '#FFD700'
                    }}>
                      ✓
                    </span>
                    <span style={{
                      color: 'rgba(255, 255, 255, 0.9)',
                      lineHeight: '1.6'
                    }}>
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </section>

            {/* Business Impact */}
            <section style={{ marginBottom: '60px' }}>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: '700',
                marginBottom: '25px',
                color: '#FFFFFF',
                borderBottom: '2px solid #FFD700',
                paddingBottom: '10px',
                display: 'inline-block'
              }}>
                Business Impact
              </h2>
              <div style={{
                padding: '30px',
                background: 'rgba(255, 215, 0, 0.05)',
                borderRadius: '15px',
                border: '1px solid rgba(255, 215, 0, 0.3)',
                backdropFilter: 'blur(10px)'
              }}>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  display: 'grid',
                  gap: '15px'
                }}>
                  {currentService.businessImpact.map((impact, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '15px',
                        fontSize: '1.05rem',
                        color: 'rgba(255, 255, 255, 0.9)'
                      }}
                    >
                      <span style={{
                        color: '#FFD700',
                        fontSize: '1.3rem',
                        fontWeight: '900'
                      }}>
                        →
                      </span>
                      {impact}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Why Admark Section */}
            <section style={{ marginBottom: '60px' }}>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: '700',
                marginBottom: '25px',
                color: '#FFFFFF',
                borderBottom: '2px solid #FFD700',
                paddingBottom: '10px',
                display: 'inline-block'
              }}>
                Why Choose Admark?
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '20px'
              }}>
                {currentService.whyAdmark && currentService.whyAdmark.map((reason, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    style={{
                      padding: '25px',
                      background: 'rgba(255, 215, 0, 0.1)',
                      borderRadius: '15px',
                      border: '1px solid rgba(255, 215, 0, 0.3)',
                      backdropFilter: 'blur(10px)',
                      textAlign: 'center'
                    }}
                  >
                    <div style={{
                      width: '60px',
                      height: '60px',
                      background: 'rgba(255, 215, 0, 0.2)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 15px',
                      fontSize: '1.5rem',
                      color: '#FFD700',
                      fontWeight: 'bold'
                    }}>
                      {index + 1}
                    </div>
                    <p style={{
                      color: 'rgba(255, 255, 255, 0.9)',
                      lineHeight: '1.6',
                      fontSize: '1.05rem'
                    }}>
                      {reason}
                    </p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* FAQs - Only show for specific services, not for overview */}
            {currentService.faqs && (
              <section style={{ marginBottom: '60px' }}>
                <h2 style={{
                  fontSize: '2rem',
                  fontWeight: '700',
                  marginBottom: '25px',
                  color: '#FFFFFF',
                  borderBottom: '2px solid #FFD700',
                  paddingBottom: '10px',
                  display: 'inline-block'
                }}>
                  Frequently Asked Questions
                </h2>
                <div style={{ maxWidth: '900px' }}>
                  {currentService.faqs.map((faq, index) => (
                    <FAQItem key={index} faq={faq} index={index} />
                  ))}
                </div>
              </section>
            )}

            {/* CTA */}
            <section style={{
              marginTop: '80px',
              padding: '60px 40px',
              background: 'rgba(255, 215, 0, 0.05)',
              borderRadius: '20px',
              border: '1px solid rgba(255, 215, 0, 0.3)',
              textAlign: 'center',
              backdropFilter: 'blur(10px)'
            }}>
              <h2 style={{
                fontSize: '2.5rem',
                fontWeight: '900',
                marginBottom: '20px',
                color: 'white'
              }}>
                Ready to Transform Your Digital Presence?
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: 'rgba(255, 255, 255, 0.8)',
                marginBottom: '35px',
                maxWidth: '600px',
                margin: '0 auto 35px'
              }}>
                Let's discuss how our expertise can drive real results for your business
              </p>
              <button style={{
                padding: '18px 45px',
                fontSize: '1.1rem',
                fontWeight: '700',
                borderRadius: '50px',
                border: 'none',
                background: 'linear-gradient(135deg, #FFD700, #D4AF37)',
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
            </section>
          </motion.main>
        </div>
      </div>

      {/* Footer Component */}
      <Footer />

      <style>{`
        .sidebar::-webkit-scrollbar {
          width: 6px;
        }
        .sidebar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }
        .sidebar::-webkit-scrollbar-thumb {
          background: #FFD700;
          border-radius: 3px;
        }

        @media (max-width: 1024px) {
          .sidebar {
            position: fixed;
            top: 0;
            left: ${isSidebarOpen ? '0' : '-320px'};
            height: 100vh;
            padding-top: 100px;
          }
          .mobile-menu-btn {
            display: block !important;
          }
          main {
            padding: 20px !important;
          }
        }
      `}</style>
    </div>
  );
}

// FAQ Item Component
function FAQItem({ faq, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      style={{
        marginBottom: '15px',
        background: 'rgba(26, 29, 34, 0.6)',
        borderRadius: '12px',
        overflow: 'hidden',
        border: '1px solid rgba(255, 215, 0, 0.2)',
        backdropFilter: 'blur(10px)'
      }}
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          padding: '20px 25px',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          transition: 'all 0.3s ease'
        }}
      >
        <span style={{
          fontWeight: '600',
          fontSize: '1.05rem',
          color: 'white',
          flex: 1
        }}>
          {faq.question}
        </span>
        <span style={{
          color: '#FFD700',
          fontSize: '1.5rem',
          transition: 'transform 0.3s ease',
          transform: isOpen ? 'rotate(45deg)' : 'rotate(0)',
          fontWeight: '300'
        }}>
          +
        </span>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{
              padding: '0 25px 20px',
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: '1.7'
            }}>
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}