import { useEffect } from 'react';

// Add multiple shooting stars to the document
const addShootingStars = () => {
  // Remove existing shooting stars
  const existingStars = document.querySelectorAll('.shooting-star');
  existingStars.forEach(star => star.remove());
  
  // Create new shooting stars
  for (let i = 0; i < 3; i++) {
    const star = document.createElement('div');
    star.className = 'shooting-star';
    star.textContent = '✦';
    
    // Random starting position
    const startTop = Math.random() * 100;
    const startLeft = Math.random() * 20 - 10; // -10% to 10%
    
    // Random angle: some up, some down, various degrees
    const angleVariation = (Math.random() - 0.5) * 200; // -100px to +100px vertical variation
    const horizontalDistance = Math.random() * 50 + 100; // 100vw to 150vw horizontal distance
    
    star.style.top = startTop + '%';
    star.style.left = startLeft + '%';
    star.style.animationDelay = i * 4 + Math.random() * 2 + 's';
    star.style.animationDuration = (10 + Math.random() * 6) + 's'; // 10-16s duration
    
    // Create unique keyframe animation for each star
    const keyframeName = `shooting-star-${i}-${Date.now()}`;
    const keyframes = `
      @keyframes ${keyframeName} {
        0% {
          transform: translateX(0) translateY(0);
          opacity: 0;
        }
        5% {
          opacity: 1;
        }
        15% {
          transform: translateX(${horizontalDistance}vw) translateY(${angleVariation}px);
          opacity: 1;
        }
        20% {
          opacity: 0;
        }
        100% {
          transform: translateX(${horizontalDistance + 50}vw) translateY(${angleVariation * 1.2}px);
          opacity: 0;
        }
      }
    `;
    
    // Add keyframes to document
    const style = document.createElement('style');
    style.textContent = keyframes;
    document.head.appendChild(style);
    
    star.style.animation = `${keyframeName} ${star.style.animationDuration} linear infinite`;
    star.style.animationDelay = star.style.animationDelay;
    
    document.body.appendChild(star);
  }
};

// Initialize shooting stars when the module loads
if (typeof window !== 'undefined') {
  addShootingStars();
  
  // Recreate stars periodically for randomness
  setInterval(() => {
    addShootingStars();
  }, 36000); // Every 36 seconds (3 * 12s animation cycle)
}

export default function ShootingStars() {
  useEffect(() => {
    addShootingStars();
    
    const interval = setInterval(() => {
      addShootingStars();
    }, 36000);
    
    return () => clearInterval(interval);
  }, []);

  return null;
}