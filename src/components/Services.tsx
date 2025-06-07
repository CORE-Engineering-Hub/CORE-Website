
import { GraduationCap, DollarSign, Users, Megaphone } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const ServiceCard = ({ service, index }: { service: any, index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover-glow-red ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6 mx-auto group-hover:bg-red-600 transition-colors">
        <service.icon className="w-8 h-8 text-red-600" />
      </div>
      <h3 className="text-2xl font-bold text-black mb-4 text-center">{service.title}</h3>
      <p className="text-gray-600 text-center leading-relaxed">{service.description}</p>
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
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            How We Support Your Club
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
