import { Code, Cpu, Hammer, Wrench, Zap, Monitor } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const SkillCard = ({ category, index }: { category: any, index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Use requestAnimationFrame for smoother animation trigger
          requestAnimationFrame(() => {
            setTimeout(() => {
              setIsVisible(true);
            }, index * 90); // Faster staggered animation
          });
        }
      },
      { threshold: 0.1, rootMargin: '30px' } // Start animation earlier
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <div 
      ref={cardRef}
      className={`group relative p-6 bg-gray-800/30 backdrop-blur-sm rounded-xl hover:shadow-2xl transform transition-all duration-[900ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] border border-gray-700/30 overflow-hidden hover:-translate-y-2 hover:scale-105 ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-95'
      }`}
      style={{
        transitionDelay: isVisible ? `${index * 90}ms` : '0ms'
      }}
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center justify-center w-12 h-12 bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white rounded-lg transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-3">
          <category.icon className="w-6 h-6 transition-all duration-500 ease-out" />
        </div>
        <h3 className="text-xl font-bold text-white group-hover:text-red-100 transition-colors duration-500 ease-out">{category.title}</h3>
      </div>
      
      {/* Organized skills in a more compact grid layout */}
      <div className="grid grid-cols-2 gap-x-6 gap-y-3">
        {category.skills.map((skill: string, skillIndex: number) => (
          <div key={skillIndex} className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0 group-hover:bg-red-400 transition-colors duration-500"></div>
            <span className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-500">{skill}</span>
          </div>
        ))}
      </div>
      
      {/* Hover overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out rounded-xl pointer-events-none"></div>
    </div>
  );
};

const Skills = () => {
  const [titleVisible, setTitleVisible] = useState(false);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      icon: Code,
      title: "Programming",
      skills: ["Python", "Java", "C++", "JavaScript", "Arduino IDE", "ROS"]
    },
    {
      icon: Monitor,
      title: "Design & CAD",
      skills: ["SolidWorks", "Fusion 360", "AutoCAD", "Blender", "KiCad", "Altium"]
    },
    {
      icon: Hammer,
      title: "Manufacturing",
      skills: ["CNC Machining", "3D Printing", "Laser Cutting", "Welding", "PCB Assembly", "Sheet Metal"]
    },
    {
      icon: Cpu,
      title: "Electronics",
      skills: ["Circuit Design", "Microcontrollers", "Sensors", "Motor Control", "Power Systems", "Signal Processing"]
    },
    {
      icon: Wrench,
      title: "Mechanical",
      skills: ["Mechanical Design", "Robotics", "Pneumatics", "Gear Systems", "Material Science", "Stress Analysis"]
    },
    {
      icon: Zap,
      title: "Project Management",
      skills: ["Agile Methodology", "Team Leadership", "Documentation", "Testing", "Deployment", "Quality Control"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-transparent">
      <div className="container mx-auto px-6">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            STEM Skills We Teach
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From programming to manufacturing, we provide comprehensive training across all areas of STEM to prepare you for real-world engineering challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1">
            <Zap className="w-5 h-5" />
            <span>Start Learning Today</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;