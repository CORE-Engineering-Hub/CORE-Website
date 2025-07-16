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
    star.style.top = Math.random() * 100 + '%';
    star.style.left = '-5%';
    star.style.animationDelay = i * 4 + 's';
    star.style.animationDuration = '12s';
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