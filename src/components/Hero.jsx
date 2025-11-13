import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Hero() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isInHero, setIsInHero] = useState(false);
  const [activeImages, setActiveImages] = useState([]);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [cursorSpeed, setCursorSpeed] = useState(0);
  const [movementDirection, setMovementDirection] = useState({ x: 0, y: 0 });
  
  const videoRef = useRef(null);
  const heroRef = useRef(null);
  const lastPositionRef = useRef({ x: 0, y: 0 });
  const lastTimeRef = useRef(Date.now());
  const imageIdRef = useRef(0);
  const animationFrameRef = useRef(null);
  const movementHistoryRef = useRef([]);

  // Sample images array - replace with your actual image paths
  const cursorImages = [
    '/src/assets/images/img1.jpg',
    '/src/assets/images/img2.jpg',
    '/src/assets/images/img3.jpg',
    '/src/assets/images/img4.jpg',
    '/src/assets/images/img5.jpg',
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      const currentTime = Date.now();
      const timeDiff = currentTime - lastTimeRef.current;
      
      if (timeDiff > 0) {
        const currentX = e.clientX;
        const currentY = e.clientY;
        const deltaX = currentX - lastPositionRef.current.x;
        const deltaY = currentY - lastPositionRef.current.y;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const speed = distance / timeDiff;
        
        setCursorSpeed(speed);
        
        // Calculate movement direction
        if (distance > 0) {
          const dirX = deltaX / distance;
          const dirY = deltaY / distance;
          setMovementDirection({ x: dirX, y: dirY });
          
          // Store movement history for smooth animation path
          movementHistoryRef.current.push({
            x: currentX,
            y: currentY,
            timestamp: currentTime
          });
          
          // Keep only recent history (last 10 points)
          if (movementHistoryRef.current.length > 10) {
            movementHistoryRef.current.shift();
          }
        }
        
        // Trigger image sequence based on speed and movement
        if (speed > 0.1 && isInHero && movementHistoryRef.current.length > 3) {
          triggerImageSequence(currentX, currentY, speed);
        }
        
        lastPositionRef.current = { x: currentX, y: currentY };
        lastTimeRef.current = currentTime;
      }
      
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isInHero]);

  useEffect(() => {
    // Handle video loading and play
    const video = videoRef.current;
    if (video) {
      const handleCanPlay = () => {
        setVideoLoaded(true);
        video.play().catch(err => {
          console.log('Video play failed:', err);
        });
      };

      video.addEventListener('canplay', handleCanPlay);
      
      return () => {
        video.removeEventListener('canplay', handleCanPlay);
      };
    }
  }, []);

  const triggerImageSequence = (currentX, currentY, speed) => {
    // Only trigger new images if we have movement history
    if (movementHistoryRef.current.length < 4) return;

    const baseSize = 200; // Original size
    const imageWidth = baseSize * 0.5; // 50% width as requested
    const imageHeight = imageWidth * 0.625; // Maintain aspect ratio

    // Calculate positions along the movement path
    const history = movementHistoryRef.current;
    const recentPoints = history.slice(-4); // Get last 4 points for sequence

    // Create sequential images along the movement path
    recentPoints.forEach((point, index) => {
      const delay = index * 100; // Stagger the appearance

      setTimeout(() => {
        const newImageId = imageIdRef.current++;
        const imageIndex = (newImageId % cursorImages.length);

        const newImage = {
          id: newImageId,
          x: point.x,
          y: point.y,
          src: cursorImages[imageIndex],
          createdAt: Date.now(),
          width: imageWidth,
          height: imageHeight,
          progress: 0, // Animation progress (0 to 1)
          direction: movementDirection
        };

        setActiveImages(prev => {
          const updated = [...prev, newImage];
          // Keep only last 3 images for clean sequence
          return updated.slice(-3);
        });

        // Remove the oldest image when adding new one (maintain sequence)
        if (activeImages.length >= 3) {
          setTimeout(() => {
            setActiveImages(prev => prev.filter(img => img.id !== prev[0]?.id));
          }, 500);
        }

        // Auto remove after sequence completion
        setTimeout(() => {
          setActiveImages(prev => prev.filter(img => img.id !== newImageId));
        }, 2000);

      }, delay);
    });
  };

  const handleMouseEnter = () => setIsInHero(true);
  const handleMouseLeave = () => {
    setIsInHero(false);
    // Clear all images when leaving hero section
    setActiveImages([]);
    movementHistoryRef.current = [];
  };

  const handleVideoError = () => {
    console.error('Video failed to load');
    setVideoLoaded(false);
  };

  // Calculate animation progress based on cursor movement
  const getImageAnimation = (image, index) => {
    const baseDelay = index * 0.1;
    
    return {
      initial: { 
        opacity: 0, 
        scale: 0.3,
        x: -movementDirection.x * 50,
        y: -movementDirection.y * 50
      },
      animate: { 
        opacity: cursorSpeed > 0.1 ? 1 : 0.3,
        scale: cursorSpeed > 0.1 ? 1 : 0.7,
        x: 0,
        y: 0,
        transition: {
          duration: 0.3,
          delay: baseDelay,
          ease: "easeOut"
        }
      },
      exit: { 
        opacity: 0, 
        scale: 0.5,
        x: movementDirection.x * 30,
        y: movementDirection.y * 30,
        transition: {
          duration: 0.2,
          ease: "easeIn"
        }
      }
    };
  };

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden cursor-none"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Full Screen Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onError={handleVideoError}
          className="w-full h-full object-cover"
        >
          <source src="/src/assets/home.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Video loading fallback */}
        {!videoLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
            <div className="text-white text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500 mx-auto mb-4"></div>
              <p>Loading video...</p>
            </div>
          </div>
        )}
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Main Content - Centered */}
      <div className="relative z-10 text-center text-white px-4 w-full max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 leading-tight"
          style={{
            color: 'white',
            fontFamily: "'Dancing Script', cursive, 'Comic Sans MS', 'Brush Script MT', sans-serif",
            width: '100%',
            textShadow: '3px 3px 12px rgba(0,0,0,0.8)',
            fontWeight: 'bold',
            letterSpacing: '2px',
          }}
        >
          Admark Digital Media
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-2xl md:text-3xl lg:text-4xl font-light mb-8 leading-relaxed text-white"
          style={{
            fontFamily: "'Dancing Script', cursive, 'Comic Sans MS', sans-serif",
            textShadow: '2px 2px 8px rgba(0,0,0,0.7)',
          }}
        >
          Elevate your brand with expert digital marketing
        </motion.p>
      </div>

      {/* Sequential Popup Images */}
      <AnimatePresence>
        {activeImages.map((image, index) => {
          const animation = getImageAnimation(image, index);
          
          return (
            <motion.div
              key={image.id}
              className="fixed pointer-events-none z-50"
              style={{
                left: image.x,
                top: image.y,
                transform: 'translate(-50%, -50%)',
                zIndex: 50 + index,
              }}
              initial={animation.initial}
              animate={animation.animate}
              exit={animation.exit}
            >
              <motion.img
                src={image.src}
                alt="Popup image"
                className="popup-image"
                style={{
                  width: `${image.width}px`,
                  height: `${image.height}px`,
                  borderRadius: '8px',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.4)',
                  border: '2px solid rgba(255, 255, 255, 0.9)',
                  objectFit: 'cover'
                }}
                onError={(e) => {
                  e.target.src = `https://picsum.photos/${Math.floor(image.width)}/${Math.floor(image.height)}?random=${image.id}`;
                }}
              />
            </motion.div>
          );
        })}
      </AnimatePresence>

      {/* Direction-aware Custom Cursor */}
      <motion.div
        className="fixed pointer-events-none z-50 w-6 h-6 bg-yellow-500 rounded-full mix-blend-difference"
        style={{
          left: cursorPosition.x,
          top: cursorPosition.y,
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          scale: cursorSpeed > 0.5 ? 1.8 : 1.2,
          x: movementDirection.x * 5,
          y: movementDirection.y * 5,
        }}
        transition={{ 
          type: "spring",
          damping: 15,
          stiffness: 300,
          mass: 0.5
        }}
      />

      {/* Movement Direction Indicator */}
      {cursorSpeed > 0.5 && (
        <motion.div
          className="fixed pointer-events-none z-40 w-3 h-3 bg-blue-500 rounded-full"
          style={{
            left: cursorPosition.x,
            top: cursorPosition.y,
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            x: movementDirection.x * 30,
            y: movementDirection.y * 30,
          }}
          transition={{ 
            type: "spring",
            damping: 10,
            stiffness: 200
          }}
        />
      )}

      <style jsx>{`
        .popup-image {
          object-fit: cover;
          transition: all 0.2s ease;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
      `}</style>

      <style jsx global>{`
        /* Hide default cursor when in hero section */
        #home, #home * {
          cursor: none !important;
        }

        /* Import Google Font for cursive style */
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap');
      `}</style>
    </section>
  );
}