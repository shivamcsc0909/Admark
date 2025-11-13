import { useEffect } from 'react';

export const usePerformance = () => {
  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let fps = 0;

    const checkPerformance = () => {
      frameCount++;
      const currentTime = performance.now();
      if (currentTime - lastTime >= 1000) {
        fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        console.log(`FPS: ${fps}`);
        frameCount = 0;
        lastTime = currentTime;
      }
      requestAnimationFrame(checkPerformance);
    };

    checkPerformance();
  }, []);
};