import { GraduationCap, DollarSign, Users, Megaphone } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const ServiceCard = ({ service, index }: { service: any, index: number }) => {
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
            }, index * 100); // Reduced stagger for more natural flow
          });
        }
      },
      { threshold: 0.1, rootMargin: '50px' } // Start animation earlier
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <div 
      ref={cardRef}
      className={`relative bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] border border-white/10 group hover:-translate-y-2 hover:scale-105 ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
      }`}
      style={{
        transitionDelay: isVisible ? `${index * 100}ms` : '0ms'
      }}
    >
      <div className="flex items-center justify-center w-16 h-16 bg-red-600/20 rounded-full mb-6 mx-auto transition-all duration-500 ease-out group-hover:bg-red-600/30 group-hover:scale-110 group-hover:rotate-6">
        <service.icon className="w-8 h-8 text-red-400 transition-all duration-500 ease-out group-hover:text-red-300" />
      </div>
      <h3 className="text-2xl font-bold text-white mb-4 text-center transition-all duration-500 ease-out group-hover:text-red-100">{service.title}</h3>
      <p className="text-gray-300 text-center leading-relaxed transition-all duration-500 ease-out group-hover:text-gray-200">{service.description}</p>
      
      {/* Hover overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out rounded-xl pointer-events-none"></div>
    </div>
  );
};

const Services = () => {
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

  const services = [
    {
      icon: GraduationCap,
      title: "STEM Training",
      description: "Comprehensive workshops and hands-on training in programming, CAD design, manufacturing techniques, and cutting-edge engineering skills."
    },
    {
      icon: DollarSign,
      title: "Funding Support",
      description: "Access to grants and funding opportunities through our booster club nonprofit to help your club purchase equipment and materials."
    },
    {
      icon: Users,
      title: "Club Organization",
      description: "Expert guidance on club structure, leadership development, project management, and building sustainable STEM communities."
    },
    {
      icon: Megaphone,
      title: "Social Media Management",
      description: "Professional social media presence and marketing support to showcase your club's achievements and attract new members."
    }
  ];

  return (
    <section id="services" className="py-20 bg-transparent text-white">
      <div className="container mx-auto px-6">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How We Support Your Club
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            CORE provides comprehensive support to help STEM clubs thrive. From technical training to funding assistance, we're here to help you succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
