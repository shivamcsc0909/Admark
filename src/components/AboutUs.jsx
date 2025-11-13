import React from 'react';
import { motion } from 'framer-motion';

export default function AboutUs() {
  const timeline = [
    { year: '2018', title: 'The Beginning', description: 'Founded with a vision to revolutionize digital marketing', icon: '🚀' },
    { year: '2019', title: 'First 100 Clients', description: 'Reached milestone of serving 100+ happy clients', icon: '🎯' },
    { year: '2020', title: 'Team Expansion', description: 'Grew to 50+ talented professionals', icon: '👥' },
    { year: '2021', title: 'Award Winning', description: 'Won Best Digital Agency Award', icon: '🏆' },
    { year: '2022', title: 'Global Reach', description: 'Expanded operations to 15+ countries', icon: '🌍' },
    { year: '2023', title: 'Innovation Hub', description: 'Launched AI-powered marketing solutions', icon: '🤖' },
    { year: '2024', title: 'Industry Leader', description: '500+ clients, $50M+ revenue generated', icon: '💎' }
  ];

  const values = [
    {
      icon: '💡',
      title: 'Innovation First',
      description: 'We stay ahead of trends and pioneer new marketing strategies',
      color: '#2563eb'
    },
    {
      icon: '🎯',
      title: 'Results Driven',
      description: 'Every campaign is measured by tangible business outcomes',
      color: '#7c3aed'
    },
    {
      icon: '🤝',
      title: 'Client Partnership',
      description: 'Your success is our success - we grow together',
      color: '#dc2626'
    },
    {
      icon: '⚡',
      title: 'Agile Execution',
      description: 'Fast, flexible, and focused on what matters most',
      color: '#059669'
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Clients', icon: '😊' },
    { number: '1000+', label: 'Projects Delivered', icon: '🚀' },
    { number: '50+', label: 'Team Members', icon: '👥' },
    { number: '15+', label: 'Countries Served', icon: '🌍' }
  ];

  const whyChoose = [
    {
      title: 'Data-Driven Approach',
      description: 'Every decision backed by analytics and market research',
      icon: '📊',
      color: '#2563eb'
    },
    {
      title: 'Transparent Reporting',
      description: 'Real-time dashboards showing exactly where your money goes',
      icon: '📈',
      color: '#7c3aed'
    },
    {
      title: 'Dedicated Account Manager',
      description: 'Your personal point of contact for all communications',
      icon: '🎯',
      color: '#dc2626'
    },
    {
      title: 'Proven Track Record',
      description: 'Average ROI of 300%+ across all client campaigns',
      icon: '💰',
      color: '#059669'
    },
    {
      title: 'Cutting-Edge Tech',
      description: 'AI, automation, and the latest marketing tools',
      icon: '🤖',
      color: '#7c3aed'
    },
    {
      title: 'No Long-Term Contracts',
      description: 'Month-to-month flexibility - we earn your business daily',
      icon: '📝',
      color: '#2563eb'
    }
  ];

  return (
    <div className="w-full">
      {/* Updated Wave Section with Consistent Background */}
      <section id="about" className="about-us-section">
        {/* Wave SVG */}
        <svg className="wave-shape" viewBox="0 0 1400 300" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,120 C160,40 320,190 560,120 C800,50 980,170 1400,110 L1400,300 L0,300 Z"
                fill="#f0f9ff"/>
          <path d="M0,120 C160,40 320,190 560,120 C800,50 980,170 1400,110"
                fill="none" stroke="rgba(37, 99, 235, 0.25)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M0,120 C160,40 320,190 560,120 C800,50 980,170 1400,110"
                fill="none" stroke="rgba(37, 99, 235, 0.1)" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

        <div className="about-inner container">
          {/* left: image */}
          <div className="left-image">
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder"
                 alt="agency graphic" />
          </div>

          {/* right: text */}
          <div className="about-text">
            <div className="section-badge">ABOUT US</div>
            <h2><span className="accent">Digital Market Agency</span></h2>
            <p>
              Hum brand strategy, performance marketing aur creative design mein specialize karte hain.
              Clean, data-driven aur conversion-focused solutions provide karte hain — jo measurable results deti hain.
            </p>

            <div className="actions">
              <button className="btn-primary">Our Services</button>
              <div className="trusted-text">Trusted by startups & scaleups</div>
            </div>

            {/* animated waves ONLY behind the text */}
            <div className="text-wave-wrap" aria-hidden="true">
              <div className="text-wave">
                {/* layer 1 */}
                <svg viewBox="0 0 1200 200" preserveAspectRatio="none" className="w1">
                  <path d="M0,80 C200,20 400,140 600,90 C800,40 1000,130 1200,80 L1200,200 L0,200 Z"
                        fill="#e0f2fe"/>
                  <path className="crest-line" d="M0,80 C200,20 400,140 600,90 C800,40 1000,130 1200,80" />
                </svg>
                {/* layer 2 */}
                <svg viewBox="0 0 1200 200" preserveAspectRatio="none" className="w2">
                  <path d="M0,100 C200,60 400,10 600,95 C800,180 1000,40 1200,100 L1200,200 L0,200 Z"
                        fill="#f0f9ff"/>
                  <path className="crest-line" d="M0,100 C200,60 400,10 600,95 C800,180 1000,40 1200,100" />
                </svg>
                {/* layer 3 (front subtle) */}
                <svg viewBox="0 0 1200 200" preserveAspectRatio="none" className="w3">
                  <path d="M0,60 C200,130 400,20 600,70 C800,120 1000,40 1200,60 L1200,200 L0,200 Z"
                        fill="#f8fafc"/>
                  <path className="crest-line" d="M0,60 C200,130 400,20 600,70 C800,120 1000,40 1200,60" />
                </svg>
              </div>
            </div>

            {/* air particle textures behind text */}
            <div className="air" aria-hidden="true"></div>
          </div>
        </div>
      </section>

      {/* Main Content Section with Consistent Blue Background */}
      <section 
        className="relative py-20 md:py-32 px-4 overflow-hidden"
        style={{
          backgroundColor: '#f0f9ff',
          backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(56, 189, 248, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)'
        }}
      >
        {/* Decorative Elements */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-300 rounded-full opacity-20 blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-300 rounded-full opacity-20 blur-3xl" style={{ animation: 'float 14s ease-in-out infinite', animationDelay: '4s' }} />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-black mb-6 gradient-text-new">
              About AdMark
            </h2>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-medium text-slate-800">
              We're not just another agency - we're your growth partners. Since 2018, we've been magnetizing customers to brands through innovative, data-driven digital marketing strategies.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white border-2 border-blue-100 hover:border-blue-300 card-hover"
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-3xl font-black mb-2 text-slate-800">
                  {stat.number}
                </div>
                <div className="text-sm font-semibold text-slate-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 bg-white border-2 border-blue-200 card-hover"
            >
              <h3 className="text-3xl font-bold mb-6 flex items-center gap-3 text-blue-700">
                <span className="text-4xl">🎯</span>
                Our Mission
              </h3>
              <p className="text-lg leading-relaxed text-slate-700 font-medium">
                To magnetize growth for businesses worldwide by delivering innovative, data-driven digital marketing solutions that generate measurable results and exceed expectations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 bg-white border-2 border-indigo-200 card-hover"
            >
              <h3 className="text-3xl font-bold mb-6 flex items-center gap-3 text-indigo-700">
                <span className="text-4xl">🚀</span>
                Our Vision
              </h3>
              <p className="text-lg leading-relaxed text-slate-700 font-medium">
                To become the world's most trusted digital marketing partner, empowering businesses of all sizes to achieve exponential growth through cutting-edge technology and creative excellence.
              </p>
            </motion.div>
          </div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="text-4xl font-bold text-center mb-12 text-slate-800">
              Our Core Values
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white border-2 border-slate-200 card-hover group"
                  style={{
                    borderTop: `4px solid ${value.color}`,
                  }}
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{value.icon}</div>
                  <h4 className="text-xl font-bold mb-3 text-slate-800">
                    {value.title}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Why Choose AdMark */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold text-center mb-12 text-slate-800">
              Why Choose AdMark?
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChoose.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white border-2 border-slate-200 card-hover group"
                  style={{
                    borderLeft: `4px solid ${item.color}`,
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div 
                      className="text-2xl w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 border-2"
                      style={{
                        background: `${item.color}15`,
                        borderColor: `${item.color}40`,
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2 text-slate-800">
                        {item.title}
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <h3 className="text-3xl font-bold mb-6 text-slate-800">
              Ready to Experience the AdMark Difference?
            </h3>
            <button
              className="px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl border-2 border-blue-600"
              style={{
                background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
                color: 'white',
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'linear-gradient(135deg, #1d4ed8 0%, #6d28d9 100%)';
                e.target.style.boxShadow = '0 20px 40px rgba(37, 99, 235, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)';
                e.target.style.boxShadow = '0 10px 20px rgba(37, 99, 235, 0.2)';
              }}
            >
              Let's Talk About Your Growth 💬
            </button>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        :root{
          --bg:#f0f9ff;
          --panel:#ffffff;
          --primary:#2563eb;
          --muted:#64748b;
          --height:34vh;
          --maxw:1200px;
        }

        .about-us-section{
          width:100%;
          max-width:var(--maxw);
          height:var(--height);
          position:relative;
          overflow:visible;
          display:flex;
          align-items:center;
          justify-content:center;
          padding:0 12px;
          margin: 0 auto;
          background: var(--bg);
        }

        .wave-shape{
          position:absolute;
          inset:0;
          width:100%;
          height:100%;
          pointer-events:none;
          z-index:0;
          display:block;
        }

        .about-inner{
          position:relative;
          z-index:2;
          width:100%;
          display:grid;
          grid-template-columns: 38% 62%;
          gap:20px;
          align-items:center;
          padding:20px 28px;
        }

        .left-image{
          display:flex;
          align-items:center;
          justify-content:center;
        }
        .left-image img{
          width:92%;
          height:auto;
          border-radius:14px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          transform: translateX(-6px);
          border: 2px solid #e0f2fe;
        }

        .about-text{
          position:relative;
          padding:10px 6px;
          color:var(--muted);
          min-height: calc(var(--height) - 30px);
          display:flex;
          flex-direction:column;
          justify-content:center;
          gap:10px;
          overflow:visible;
        }

        .about-text h2{
          color:#1e293b;
          font-size:1.5rem;
          margin-bottom:6px;
          letter-spacing:0.2px;
          font-weight:700;
        }
        .about-text p{
          color:#475569;
          line-height:1.45;
          margin:0 0 8px 0;
          font-size:0.98rem;
          font-weight:500;
        }
        .accent{ color:var(--primary); font-weight:600; }
        .section-badge{ 
          color: var(--primary); 
          font-size: 0.9rem; 
          font-weight:700;
          background: rgba(37, 99, 235, 0.1);
          padding: 6px 12px;
          border-radius: 20px;
          display: inline-block;
          border: 1px solid rgba(37, 99, 235, 0.2);
          margin-bottom: 8px;
        }

        .actions{ display:flex; gap:12px; align-items:center; margin-top:6px; }
        .btn-primary{
          background:var(--primary);
          color:white;
          border:2px solid var(--primary);
          padding:10px 14px;
          border-radius:10px;
          font-weight:600;
          cursor:pointer;
          transition: all 0.3s ease;
        }
        .btn-primary:hover{
          background: #1d4ed8;
          border-color: #1d4ed8;
          box-shadow: 0 0 20px rgba(37, 99, 235, 0.4);
          transform: translateY(-2px);
        }
        .trusted-text{ color: var(--muted); font-size: 0.9rem; font-weight:600; }

        .text-wave-wrap{
          position:absolute;
          inset:auto 6% 8% 46%;
          height:60%;
          z-index:1;
          pointer-events:none;
          overflow:hidden;
          transform:translateZ(0);
        }

        .text-wave{
          position:absolute;
          left:-10%;
          width:130%;
          height:100%;
          opacity:0.95;
        }

        .text-wave svg{ width:100%; height:100%; display:block; }

        .text-wave .w1{ animation: twSlow 10s linear infinite; opacity:0.12; }
        .text-wave .w2{ animation: twMed 7.2s linear infinite; opacity:0.16; }
        .text-wave .w3{ animation: twFast 5s linear infinite; opacity:0.22; }

        @keyframes twSlow{
          0%{ transform:translateX(-18%); } 50%{ transform:translateX(8%);} 100%{ transform:translateX(-18%);}
        }
        @keyframes twMed{
          0%{ transform:translateX(-28%);} 50%{ transform:translateX(12%);} 100%{ transform:translateX(-28%);}
        }
        @keyframes twFast{
          0%{ transform:translateX(-8%);} 50%{ transform:translateX(20%);} 100%{ transform:translateX(-8%);}
        }

        .crest-line{ stroke: rgba(37, 99, 235, 0.2); stroke-width:2.6; fill:none; stroke-linecap:round; stroke-linejoin:round; }

        .air{
          position:absolute;
          inset:8% 46% auto 6%;
          z-index:1;
          pointer-events:none;
          opacity:0.05;
          background-image:
            radial-gradient(rgba(37, 99, 235, 0.02) 1px, transparent 1px),
            radial-gradient(rgba(37, 99, 235, 0.01) 1px, transparent 1px);
          background-size:140px 140px, 220px 220px;
          filter: blur(0.2px);
        }

        .gradient-text-new {
          background: linear-gradient(135deg, #2563eb 0%, #7c3aed 50%, #dc2626 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .card-hover {
          transition: all 0.3s ease;
        }
        .card-hover:hover {
          transform: translateY(-5px);
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(1deg); }
        }

        @media (max-width:980px){
          .about-inner{ grid-template-columns: 1fr; padding:14px; gap:12px; }
          .text-wave-wrap{ inset:auto 6% 8% 6%; height:50%; }
          .air{ inset:6% 6% auto 6%; }
          .left-image img{ width:86%; transform:none; }
        }
        @media (max-width:520px){
          :root{ --height:46vh; }
          .about-text h2{ font-size:1.2rem; }
        }

        @media (prefers-reduced-motion: reduce){
          .text-wave .w1,
          .text-wave .w2,
          .text-wave .w3 { animation: none !important; }
        }
      `}</style>
    </div>
  );
}