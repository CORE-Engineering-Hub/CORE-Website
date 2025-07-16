import { GraduationCap, DollarSign, Users, Megaphone } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const ServiceCard = ({ service, index }: { service: any, index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, index * 200 + 100); // Added base delay + stagger
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <div 
      ref={cardRef}
      className={`bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-2 hover-glow-red transform transition-all duration-[800ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] border border-white/10 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{
        transitionDelay: isVisible ? '0ms' : `${index * 100}ms`
      }}
    >
      <div className="flex items-center justify-center w-16 h-16 bg-red-600/20 rounded-full mb-6 mx-auto group-hover:bg-red-600 transition-colors">
        <service.icon className="w-8 h-8 text-red-400" />
      </div>
      <h3 className="text-2xl font-bold text-white mb-4 text-center">{service.title}</h3>
      <p className="text-gray-300 text-center leading-relaxed">{service.description}</p>
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
    <section id="services" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black text-white">
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
