// src/components/LoadingScreen.jsx
import { useEffect, useRef, useState } from "react";
import "./LoadingScreen.css";

// Import your logo image - CHANGE THIS PATH TO YOUR LOGO
import logo from "@/assets/logo.png";

const LoadingScreen = ({ onLoadingComplete }) => {
  // ===== REFS =====
  const canvasRef = useRef(null);
  const loadingScreenRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });
  const animationRef = useRef(null);
  const [logoLoaded, setLogoLoaded] = useState(false);

  // ===== PARTICLE CLASS =====
  class Particle {
    constructor(width, height) {
      this.reset(width, height);
    }

    reset(width, height) {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.size = Math.random() * 5 + 2;
      this.baseSize = this.size;
      this.speedX = (Math.random() - 0.5) * 0.8;
      this.speedY = (Math.random() - 0.5) * 0.8;
      this.opacity = Math.random() * 0.6 + 0.2;
      this.color = `hsla(${40 + Math.random() * 20}, 90%, 70%, `;
      this.width = width;
      this.height = height;
    }

    update(mouseX, mouseY, mouseActive) {
      const dx = mouseX - this.x;
      const dy = mouseY - this.y;
      const dist = Math.hypot(dx, dy);
      const maxDist = 150;

      if (dist < maxDist && mouseActive) {
        const force = (maxDist - dist) / maxDist * 0.8;
        this.x += dx * 0.03 * force;
        this.y += dy * 0.03 * force;
        this.size = this.baseSize + 4 * force;
      } else {
        this.size += (this.baseSize - this.size) * 0.02;
        this.x += this.speedX;
        this.y += this.speedY;
      }

      // Edge wrap
      if (this.x < 0) this.x = this.width;
      if (this.x > this.width) this.x = 0;
      if (this.y < 0) this.y = this.height;
      if (this.y > this.height) this.y = 0;

      // Random drift
      this.speedX += (Math.random() - 0.5) * 0.02;
      this.speedY += (Math.random() - 0.5) * 0.02;
      this.speedX = Math.min(1.2, Math.max(-1.2, this.speedX));
      this.speedY = Math.min(1.2, Math.max(-1.2, this.speedY));
    }

    draw(ctx) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      const glow = mouseRef.current.active ? 0.8 : 0.4;
      ctx.shadowColor = `rgba(212, 175, 55, ${0.5 * glow})`;
      ctx.shadowBlur = 25 * (this.size / 5);
      ctx.fillStyle = this.color + (this.opacity * (0.6 + 0.4 * (this.size / 7))) + ')';
      ctx.fill();
    }
  }

  // ===== CANVAS SETUP =====
  const setupCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width || window.innerWidth;
    canvas.height = rect.height || window.innerHeight;

    const ctx = canvas.getContext('2d');
    const particleCount = 55;
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle(canvas.width, canvas.height));
    }

    particlesRef.current = particles;
    return ctx;
  };

  // ===== ANIMATION LOOP =====
  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const { x: mouseX, y: mouseY, active: mouseActive } = mouseRef.current;

    for (let p of particlesRef.current) {
      p.update(mouseX, mouseY, mouseActive);
      p.draw(ctx);
    }

    animationRef.current = requestAnimationFrame(animate);
  };

  // ===== MOUSE / TOUCH HANDLERS =====
  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    const handleTouchMove = (e) => {
      const touch = e.touches[0];
      if (touch) {
        mouseRef.current.x = touch.clientX;
        mouseRef.current.y = touch.clientY;
        mouseRef.current.active = true;
      }
    };

    const handleTouchEnd = () => {
      mouseRef.current.active = false;
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('touchmove', handleTouchMove, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  // ===== INITIALIZE CANVAS =====
  useEffect(() => {
    setupCanvas();
    animate();

    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // ===== LOADING COMPLETE TRANSITION =====
  useEffect(() => {
    const timer = setTimeout(() => {
      if (loadingScreenRef.current) {
        loadingScreenRef.current.classList.add('fade-out');
        setTimeout(() => {
          if (onLoadingComplete) onLoadingComplete();
        }, 1400);
      }
    }, 4000); 

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  // ===== RENDER =====
  return (
    <div className="loading-screen" ref={loadingScreenRef}>
      {/* Particle Canvas */}
      <canvas ref={canvasRef} id="particleCanvas" />
      
      {/* Logo Section */}
      <div className="logo-wrapper">
        {/* Animated Background Elements */}
        <div className="gold-smoke"></div>
        {/* Ring removed */}
        <div className="metallic-sweep"></div>

        {/* Logo Content */}
        <div className="logo-content">
          <div className="logo-image-container">
            {!logoLoaded && (
              <div className="logo-placeholder">
                <div className="loading-spinner"></div>
              </div>
            )}
            <img 
              src={logo} 
              alt="Karthik | Restarent GM" 
              className={`logo-image ${logoLoaded ? 'loaded' : 'loading'}`}
              onLoad={() => setLogoLoaded(true)}
            />
          </div>
          <span className="subtitle">Restarent GM</span>
        </div>
      </div>

      {/* Loading Bar */}
      <div className="loading-bar-container">
        <span className="loading-text">✦ loading ✦</span>
        <div className="loading-track">
          <div className="loading-fill"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;