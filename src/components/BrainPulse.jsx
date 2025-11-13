import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function BrainPulse() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, canvasRef.current.clientWidth / canvasRef.current.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true, antialias: true });
    renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);
    camera.position.z = 12;

    // Brain nodes
    const brainNodes = [];
    for (let i = 0; i < 40; i++) {
      const geometry = new THREE.SphereGeometry(0.15, 16, 16);
      const material = new THREE.MeshPhongMaterial({
        color: 0x7e22ce,
        emissive: 0x7e22ce,
        emissiveIntensity: 0.6,
        transparent: true,
        opacity: 0.9
      });
      const node = new THREE.Mesh(geometry, material);
      node.position.set(
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 3
      );
      brainNodes.push(node);
      scene.add(node);
    }

    // Connections
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x0ea5e9, transparent: true, opacity: 0.5 });
    brainNodes.forEach((node, i) => {
      if (i < brainNodes.length - 2) {
        const points = [node.position, brainNodes[i + 1].position];
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const line = new THREE.Line(geometry, lineMaterial);
        scene.add(line);
      }
    });

    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(0, 0, 10);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0xffffff, 0.4));

    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.015;

      brainNodes.forEach((node, i) => {
        const pulse = Math.sin(time * 2 + i * 0.5) * 0.5 + 0.5;
        node.material.emissiveIntensity = pulse * 0.8;
        node.scale.set(1 + pulse * 0.4, 1 + pulse * 0.4, 1 + pulse * 0.4);
      });

      renderer.render(scene, camera);
    };
    animate();

    return () => renderer.dispose();
  }, []);

  const items = [
    { 
      title: 'SEO Optimization', 
      desc: 'Rank higher with cutting-edge SEO techniques and strategic keyword optimization that drives organic growth'
    },
    { 
      title: 'Strategic Planning', 
      desc: 'Develop comprehensive marketing roadmaps aligned with your business goals and market opportunities'
    },
    { 
      title: 'Campaign Management', 
      desc: 'Execute multi-channel campaigns with precision, agility, and data-backed decision making'
    },
    { 
      title: 'Data Analytics', 
      desc: 'Transform raw data into actionable insights for continuous improvement and measurable ROI'
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center py-24 bg-gradient-to-br from-rose-50 to-amber-50">
      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        <h2 className="text-5xl md:text-7xl font-bold text-center mb-6 fade-in-up bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-blue-600 font-serif tracking-tight">
          Digital Brain Pulse
        </h2>
        <p className="text-xl text-center text-gray-800 mb-16 max-w-3xl mx-auto fade-in-up font-medium leading-relaxed">
          Our intelligent approach combines creativity with data science to power your brand's exponential growth
        </p>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="h-[500px] fade-in-up rounded-3xl overflow-hidden shadow-2xl border border-white/50">
            <canvas ref={canvasRef} className="w-full h-full" />
          </div>
          <div className="space-y-6">
            {items.map((item, i) => (
              <div 
                key={i}
                className="fade-in-up group p-6 bg-white/80 backdrop-blur-lg rounded-2xl border border-gray-200/60 hover:border-purple-400 hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer hover:bg-white/90"
                style={{
                  transform: 'translateY(0)',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                }}
              >
                <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-purple-700 transition-colors duration-300 font-sans">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed font-medium group-hover:text-gray-900 transition-colors duration-300">
                  {item.desc}
                </p>
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-purple-600 to-blue-500 group-hover:w-full transition-all duration-500 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Additional decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-300/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-amber-300/40 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-300/30 rounded-full blur-lg"></div>
      </div>
    </section>
  );
}