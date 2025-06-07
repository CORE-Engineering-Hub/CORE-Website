
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
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
              Coalition of Organized
            </span>
            <br />
            <span className="text-red-500 text-glow-red">
              Robotics & Engineering
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            Empowering STEM clubs through training, funding, and collaboration.<br />
            Building the next generation of innovators.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg rounded-full hover-glow-red">
              Join CORE
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg rounded-full bg-transparent">
              Learn More
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <AnimatedCounter end={15} label="Clubs Supported" icon={Users} color="red" />
            <AnimatedCounter end={50} label="Skills Workshops" icon={Code} color="gray" />
            <AnimatedCounter end={10} label="K+ Funding Provided" icon={Wrench} color="red" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
