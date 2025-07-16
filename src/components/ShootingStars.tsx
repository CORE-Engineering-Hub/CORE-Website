import { useEffect } from 'react';

// Add multiple shooting stars to the document
const addShootingStars = (numStars: number) => {
  // Remove existing shooting stars
  const existingStars = document.querySelectorAll('.shooting-star');
  existingStars.forEach(star => star.remove());
  
  // Create new shooting stars
  for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.className = 'shooting-star';
    star.textContent = '✦';
    
    // Random starting position
    const startTop = Math.random() * 100;
    const startLeft = Math.random() * 20 - 10; // -10% to 10%
    
    // Truly random direction - up, down, diagonal
    const direction = Math.random();
    let endX, endY;
    
    if (direction < 0.25) {
      // Go up and right - milder angle
      endX = Math.random() * 80 + 100; // 100vw to 180vw
      endY = -(Math.random() * 30 + 20); // -20px to -50px (reduced from -40 to -100)
    } else if (direction < 0.5) {
      // Go down and right - milder angle
      endX = Math.random() * 80 + 100; // 100vw to 180vw
      endY = Math.random() * 30 + 20; // 20px to 50px (reduced from 40 to 100)
    } else if (direction < 0.75) {
      // Go way up and right - milder angle
      endX = Math.random() * 60 + 120; // 120vw to 180vw
      endY = -(Math.random() * 50 + 40); // -40px to -90px (reduced from -80 to -180)
    } else {
      // Go way down and right - milder angle
      endX = Math.random() * 60 + 120; // 120vw to 180vw
      endY = Math.random() * 50 + 40; // 40px to 90px (reduced from 80 to 180)
    }
    
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
          transform: translateX(${endX}vw) translateY(${endY}px);
          opacity: 1;
        }
        20% {
          opacity: 0;
        }
        100% {
          transform: translateX(${endX + 50}vw) translateY(${endY * 1.2}px);
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
  addShootingStars(2);
  
  // Recreate stars periodically for randomness
  setInterval(() => {
    addShootingStars(3);
  }, 36000); // Every 36 seconds (3 * 12s animation cycle)
}

export default function ShootingStars() {
  useEffect(() => {
    addShootingStars(3);
    
    const interval = setInterval(() => {
      addShootingStars(3);
    }, 36000);

    const interval2 = setInterval(() => {
      addShootingStars(1);
    }, 2500);

    return () => {
      clearInterval(interval);
      clearInterval(interval2);
    };
  }, []);

  return null;
}