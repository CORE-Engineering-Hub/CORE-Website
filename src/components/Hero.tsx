
import { ArrowRight, Code, Wrench, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

const AnimatedCounter = ({ end, label, icon: Icon, color }: { end: number, label: string, icon: any, color: string }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const steps = 60;
          const increment = end / steps;
          let current = 0;
          
          const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [end, hasAnimated]);

  return (
    <div ref={counterRef} className="text-center opacity-0 animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
      <div className={`flex items-center justify-center w-16 h-16 bg-${color}-600/20 backdrop-blur-sm rounded-full mx-auto mb-4`}>
        <Icon className={`w-8 h-8 text-${color}-400`} />
      </div>
      <div className="text-3xl font-bold text-white mb-2">{count}+</div>
      <div className="text-gray-400">{label}</div>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden pt-20">
      {/* Random glow effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-red-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-red-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="flex items-center justify-center mb-32 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 border-4 border-red-500 rounded-xl flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl rotate-12">
                <div className="text-4xl md:text-5xl font-bold text-white">
                  CORE
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-red-500 rounded-full"></div>
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-red-500 rounded-full"></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-red-500 rounded-full"></div>
            </div>
          </div>
          
          {/* Main heading */}
          <h1 className="text-6xl md:text-8xl font-bold mb-2 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent text-glow-red">
              CORE
            </span>
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl text-gray-300 mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            Coalition for Organized Resources in Engineering
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-gray-400 mb-12 leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            Empowering STEM clubs through training, funding, and collaboration.<br />
            Building the next generation of innovators.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg rounded-full hover-glow-red">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg rounded-full bg-transparent">
              Learn More
            </Button>
          </div>
          
          {/* Bottom sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 opacity-0 animate-fade-in" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
            <div className="text-center">
              <div className="w-full h-px bg-red-600 mb-4"></div>
              <h3 className="text-xl font-semibold text-white mb-2">Announcements</h3>
              <p className="text-gray-400 text-sm">Latest updates and news</p>
            </div>
            <div className="text-center">
              <div className="w-full h-px bg-red-600 mb-4"></div>
              <h3 className="text-xl font-semibold text-white mb-2">Resources</h3>
              <p className="text-gray-400 text-sm">Training materials and tools</p>
            </div>
            <div className="text-center">
              <div className="w-full h-px bg-red-600 mb-4"></div>
              <h3 className="text-xl font-semibold text-white mb-2">Events</h3>
              <p className="text-gray-400 text-sm">Workshops and competitions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
