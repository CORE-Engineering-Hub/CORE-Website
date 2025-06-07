
import { DollarSign, Monitor, Users, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: "STEM Skills Training",
      description: "Comprehensive workshops covering programming, CAD design, CNC machining, and advanced manufacturing techniques.",
      features: ["Programming Languages", "3D Design & CAD", "CNC Machining", "Electronics & Circuits"]
    },
    {
      icon: DollarSign,
      title: "Funding Support",
      description: "Access to grants and funding through our booster club nonprofit to help bring your projects to life.",
      features: ["Project Grants", "Equipment Funding", "Competition Support", "Nonprofit Partnership"]
    },
    {
      icon: Monitor,
      title: "Social Media Management",
      description: "Professional social media presence and marketing support to showcase your club's achievements.",
      features: ["Content Creation", "Brand Management", "Event Promotion", "Growth Strategy"]
    },
    {
      icon: Users,
      title: "Club Organization",
      description: "Coordination and administrative support to help your club run smoothly and efficiently.",
      features: ["Event Planning", "Member Management", "Resource Coordination", "Leadership Training"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            How We Support Your Club
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            CORE provides comprehensive support to help STEM clubs thrive through training, funding, and organizational excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-red-300">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gray-100 group-hover:bg-red-600 rounded-lg transition-colors duration-300">
                    <service.icon className="w-6 h-6 text-red-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-2xl text-black">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-gray-600 text-lg leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-2 gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-gray-700">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
