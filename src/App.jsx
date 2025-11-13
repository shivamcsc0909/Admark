import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import CaseStudy from './components/CaseStudy';
import StatsSection from './components/StatsSection';
import TeamSection from './components/TeamSection';
import PricingSection from './components/PricingSection';
import Testimonials from './components/Testimonials';
import BlogSection from './components/BlogSection';
import FAQSection from './components/FAQSection';
import Tornado from './components/Tornado';
import MirrorRoom from './components/MirrorRoom';
import CTA from './components/CTA';
import Footer from './components/Footer';
import useMousePosition from './hooks/useMousePosition';
import FluidCursor from './components/FluidCursor';
import GetQuote from './components/GetQuote';
import Portfolio from './components/Portfolio';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

// Import pages
import ServicesDetailPage from './pages/ServicesDetailPage';
import OurTeamPage from './pages/OurTeamPage';
import FAQPage from './pages/FAQPage';
import ContactUsPage from './pages/ContactUsPage';
import PortfolioPage from './pages/PortfolioPage';
import AboutUsPage from './pages/AboutUsPage';
import PricingPage from './pages/PricingPage';

gsap.registerPlugin(ScrollTrigger);

// Landing Page Component
function LandingPage() {
  const mousePos = useMousePosition();

  useEffect(() => {
    gsap.fromTo(
      '.fade-in-up',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.fade-in-up',
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Simple Cursor */}
      <div
        className="fixed w-6 h-6 rounded-full pointer-events-none z-50"
        style={{
          left: mousePos.x - 12,
          top: mousePos.y - 12,
          background:
            'radial-gradient(circle, rgba(0,240,255,0.8) 0%, transparent 70%)',
          boxShadow: '0 0 20px rgba(0,240,255,0.6)',
        }}
      />

      <Navbar />
      <Hero />
      <Services />
      <CaseStudy />
      <Portfolio />
      <GetQuote />
      <AboutUs />
      <StatsSection />
      <Tornado />
      <MirrorRoom />
      <FluidCursor />
      <TeamSection />
      <PricingSection />
      <Testimonials />
      <FAQSection />
      <CTA />
      <ContactUs />
      <Footer />
    </div>
  );
}

// Main App Component with Router
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/services" element={<ServicesDetailPage />} />
        <Route path="/team" element={<OurTeamPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/pricing" element={<PricingPage />} />
      </Routes>
    </BrowserRouter>
  );
}