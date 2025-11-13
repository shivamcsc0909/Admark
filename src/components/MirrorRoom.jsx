import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

export default function MirrorRoom() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 700, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, 700);
    camera.position.z = 14;

    // Main Golden Cube with particles effect
    const geometry = new THREE.BoxGeometry(6, 6, 6);
    const material = new THREE.MeshPhongMaterial({
      color: 0xff6b35,
      emissive: 0xff8c42,
      shininess: 150,
      transparent: true,
      opacity: 0.3,
      wireframe: true,
      wireframeLinewidth: 2
    });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Inner rotating cube
    const innerGeometry = new THREE.BoxGeometry(5, 5, 5);
    const innerMaterial = new THREE.MeshPhongMaterial({
      color: 0xff8c42,
      emissive: 0xff9d6a,
      shininess: 120,
      transparent: true,
      opacity: 0.15,
      side: THREE.DoubleSide
    });
    const innerCube = new THREE.Mesh(innerGeometry, innerMaterial);
    scene.add(innerCube);

    // Smallest core cube
    const coreGeometry = new THREE.BoxGeometry(3, 3, 3);
    const coreMaterial = new THREE.MeshPhongMaterial({
      color: 0xff9d6a,
      emissive: 0xff6b35,
      shininess: 100,
      transparent: true,
      opacity: 0.2,
    });
    const coreCube = new THREE.Mesh(coreGeometry, coreMaterial);
    scene.add(coreCube);

    // Particle system around cube
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 150;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 20;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      color: 0xff6b35,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Multiple golden lights
    const pointLight1 = new THREE.PointLight(0xff6b35, 2.5, 100);
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xff8c42, 2.5, 100);
    pointLight2.position.set(-10, -10, 10);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0xff8c42, 2, 100);
    pointLight3.position.set(0, 10, -10);
    scene.add(pointLight3);

    const pointLight4 = new THREE.PointLight(0xff9d6a, 2, 100);
    pointLight4.position.set(10, -10, -10);
    scene.add(pointLight4);

    scene.add(new THREE.AmbientLight(0xff9d6a, 0.5));

    // Enhanced edges
    const edges = new THREE.EdgesGeometry(geometry);
    const lineMaterial = new THREE.LineBasicMaterial({ 
      color: 0xff6b35, 
      transparent: true, 
      opacity: 0.5 
    });
    const wireframe = new THREE.LineSegments(edges, lineMaterial);
    scene.add(wireframe);

    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.01;
      
      // Multi-directional rotation
      cube.rotation.x += 0.004;
      cube.rotation.y += 0.006;
      cube.rotation.z += 0.002;
      
      innerCube.rotation.x -= 0.005;
      innerCube.rotation.y -= 0.007;
      innerCube.rotation.z += 0.003;
      
      coreCube.rotation.x += 0.008;
      coreCube.rotation.y -= 0.006;
      
      wireframe.rotation.x += 0.004;
      wireframe.rotation.y += 0.006;
      wireframe.rotation.z += 0.002;
      
      // Animate particles
      particlesMesh.rotation.y += 0.001;
      const positions = particlesGeometry.attributes.position.array;
      for (let i = 1; i < positions.length; i += 3) {
        positions[i] = positions[i] + Math.sin(time + i) * 0.01;
      }
      particlesGeometry.attributes.position.needsUpdate = true;
      
      // Animate lights in circular pattern
      pointLight1.position.x = Math.sin(time * 0.5) * 10;
      pointLight1.position.z = Math.cos(time * 0.5) * 10;
      
      pointLight2.position.x = Math.cos(time * 0.7) * 10;
      pointLight2.position.z = Math.sin(time * 0.7) * 10;
      
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / 700;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, 700);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #FFF8F0 0%, #FFFAF5 25%, #FFF5EB 50%, #FFF0E0 75%, #FFECE0 100%)',
        backgroundSize: '400% 400%',
        animation: 'gradientShift 15s ease infinite',
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating geometric shapes */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute w-64 h-64 rounded-full opacity-10 blur-xl"
          style={{
            background: 'radial-gradient(circle, #FF6B35 0%, #FF8C42 50%, transparent 70%)',
            top: '15%',
            left: '10%',
          }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.08, scale: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute w-48 h-48 opacity-10 blur-xl"
          style={{
            background: 'linear-gradient(45deg, #FF8C42, #FF9D6A)',
            top: '60%',
            right: '15%',
            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
          }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.06, scale: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
          className="absolute w-32 h-32 opacity-10 blur-lg"
          style={{
            background: 'linear-gradient(135deg, #FF9D6A, #FF6B35)',
            bottom: '20%',
            left: '20%',
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          }}
        />
      </div>

      {/* 3D Mirror Cube Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center">
          {/* Enhanced AdMark Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="flex items-center justify-center mb-16"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 8 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative px-16 py-10 rounded-3xl group cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, rgba(255,107,53,0.15) 0%, rgba(255,140,66,0.1) 50%, rgba(255,157,106,0.15) 100%)',
                border: '2.5px solid rgba(255,107,53,0.3)',
                boxShadow: `
                  0 15px 35px rgba(255,107,53,0.25),
                  0 0 60px rgba(255,107,53,0.1) inset,
                  0 5px 15px rgba(0,0,0,0.05)
                `,
                backdropFilter: 'blur(15px)',
              }}
            >
              {/* Animated corner accents */}
              <div className="absolute top-0 left-0 w-10 h-10 border-t-3 border-l-3 border-orange-600 rounded-tl-3xl opacity-70" />
              <div className="absolute top-0 right-0 w-10 h-10 border-t-3 border-r-3 border-orange-600 rounded-tr-3xl opacity-70" />
              <div className="absolute bottom-0 left-0 w-10 h-10 border-b-3 border-l-3 border-orange-600 rounded-bl-3xl opacity-70" />
              <div className="absolute bottom-0 right-0 w-10 h-10 border-b-3 border-r-3 border-orange-600 rounded-br-3xl opacity-70" />
              
              {/* Interactive glow effect */}
              <motion.div 
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                initial={false}
                whileHover={{ opacity: 1 }}
                style={{
                  background: 'radial-gradient(circle at center, rgba(255,107,53,0.2) 0%, transparent 70%)',
                }}
              />

              <motion.h3 
                className="text-6xl md:text-7xl font-black relative z-10 font-playfair"
                whileHover={{ scale: 1.02 }}
                style={{
                  background: 'linear-gradient(135deg, #D84315 0%, #FF6B35 25%, #FF8C42 50%, #FF6B35 75%, #D84315 100%)',
                  backgroundSize: '200% 200%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  animation: 'gradient-flow 4s ease infinite',
                  textShadow: '0 4px 20px rgba(255,107,53,0.3)',
                  letterSpacing: '0.03em',
                  fontFamily: 'Playfair Display, serif',
                }}
              >
                AdMark
              </motion.h3>
              
              {/* Enhanced bottom accent */}
              <motion.div 
                className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-2 rounded-full"
                initial={{ width: '60%' }}
                whileHover={{ width: '80%' }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{ 
                  background: 'linear-gradient(90deg, transparent, #FF6B35, #FF8C42, #FF6B35, transparent)',
                  boxShadow: '0 0 25px rgba(255,107,53,0.6)',
                }} 
              />
            </motion.div>
          </motion.div>

          {/* Enhanced Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 80 }}
            viewport={{ once: true }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-10 leading-tight px-4 font-playfair"
          >
            <motion.span
              className="block"
              whileHover={{ scale: 1.02 }}
              style={{
                background: 'linear-gradient(135deg, #2D3748 0%, #4A5568 25%, #718096 50%, #4A5568 75%, #2D3748 100%)',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'gradient-flow 6s ease infinite',
                textShadow: '0 4px 15px rgba(0,0,0,0.1)',
                fontFamily: 'Playfair Display, serif',
                fontWeight: 900,
              }}
            >
              Reflecting the
            </motion.span>
            <motion.span
              className="block mt-4"
              whileHover={{ scale: 1.02 }}
              style={{
                background: 'linear-gradient(135deg, #D84315 0%, #FF6B35 25%, #FF8C42 50%, #FF6B35 75%, #D84315 100%)',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'gradient-flow 6s ease infinite reverse',
                textShadow: '0 4px 20px rgba(255,107,53,0.2)',
                fontFamily: 'Playfair Display, serif',
                fontWeight: 900,
              }}
            >
              Future of Marketing
            </motion.span>
          </motion.h2>

          {/* Enhanced Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl lg:text-3xl max-w-5xl mx-auto leading-relaxed mb-16 px-4 font-lora"
            style={{ 
              color: '#4A5568',
              textShadow: '0 2px 4px rgba(0,0,0,0.05)',
              fontFamily: 'Lora, serif',
              fontWeight: 500,
            }}
          >
            We don't just follow trends—we create them. Our innovative approach mirrors your brand's potential and amplifies it across every digital touchpoint, ensuring your message resonates in a crowded marketplace.
          </motion.p>

          {/* Enhanced Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto"
          >
            {[
              { 
                icon: '🎯', 
                title: 'Strategic Vision', 
                desc: 'Data-driven insights that deliver exceptional results and measurable impact',
                color: '#FF6B35'
              },
              { 
                icon: '⚡', 
                title: 'Rapid Execution', 
                desc: 'Lightning-fast implementation without compromising on quality or precision',
                color: '#FF8C42'
              },
              { 
                icon: '💎', 
                title: 'Premium Quality', 
                desc: 'Uncompromising excellence and attention to detail in every project',
                color: '#FF9D6A'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -12, scale: 1.05 }}
                className="group p-8 rounded-3xl transition-all duration-500 relative overflow-hidden cursor-pointer"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,250,245,0.8) 100%)',
                  border: `2px solid ${item.color}30`,
                  boxShadow: `
                    0 10px 40px rgba(0,0,0,0.08),
                    0 0 20px ${item.color}15 inset,
                    0 2px 4px rgba(0,0,0,0.04)
                  `,
                  backdropFilter: 'blur(12px)',
                }}
              >
                {/* Hover background effect */}
                <motion.div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                  style={{
                    background: `linear-gradient(135deg, ${item.color}15 0%, transparent 70%)`,
                  }}
                />
                
                {/* Animated icon */}
                <motion.div 
                  className="text-6xl mb-6 relative z-10"
                  whileHover={{ scale: 1.3, rotate: 15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item.icon}
                </motion.div>
                
                {/* Title */}
                <motion.h4 
                  className="text-2xl font-bold mb-4 relative z-10 font-montserrat"
                  whileHover={{ color: item.color }}
                  style={{ 
                    color: '#2D3748',
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 700,
                  }}
                >
                  {item.title}
                </motion.h4>
                
                {/* Description */}
                <motion.p 
                  className="text-lg relative z-10 font-lora"
                  style={{ 
                    color: '#4A5568',
                    fontFamily: 'Lora, serif',
                    fontWeight: 400,
                  }}
                >
                  {item.desc}
                </motion.p>
                
                {/* Enhanced bottom accent line */}
                <motion.div 
                  className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-700"
                  style={{ 
                    background: `linear-gradient(90deg, ${item.color}, ${item.color}AA)`,
                    boxShadow: `0 0 15px ${item.color}`,
                  }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
          >
            <motion.button
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-16 py-6 rounded-2xl font-bold text-xl transition-all duration-500 relative overflow-hidden group font-montserrat"
              style={{
                background: 'linear-gradient(135deg, #FF6B35 0%, #FF8C42 50%, #FF6B35 100%)',
                backgroundSize: '200% 200%',
                boxShadow: `
                  0 12px 35px rgba(255,107,53,0.4),
                  0 4px 15px rgba(255,107,53,0.3),
                  0 0 0 1px rgba(255,107,53,0.1) inset
                `,
                color: '#FFFFFF',
                textShadow: '0 1px 2px rgba(0,0,0,0.2)',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 700,
                letterSpacing: '0.02em',
              }}
              onMouseEnter={(e) => {
                e.target.style.animation = 'gradient-flow 2s ease infinite';
                e.target.style.boxShadow = '0 16px 45px rgba(255,107,53,0.6), 0 0 0 1px rgba(255,107,53,0.2) inset';
              }}
              onMouseLeave={(e) => {
                e.target.style.animation = 'none';
                e.target.style.boxShadow = '0 12px 35px rgba(255,107,53,0.4), 0 4px 15px rgba(255,107,53,0.3), 0 0 0 1px rgba(255,107,53,0.1) inset';
              }}
            >
              <span className="relative z-10 flex items-center justify-center">
                Explore Our Work 
                <motion.span
                  className="ml-3"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                >
                  ↗
                </motion.span>
              </span>
              
              {/* Enhanced shine effect */}
              <motion.span 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                initial={false}
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                }}
                animate={{
                  x: ['-100%', '200%'],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              />
            </motion.button>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;800;900&family=Lora:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600;700;800;900&display=swap');
        
        @keyframes gradient-flow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.15; transform: scale(1.05); }
        }
      `}</style>
    </section>
  );
}