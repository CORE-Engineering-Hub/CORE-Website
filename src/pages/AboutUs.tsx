import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Users, Target, Lightbulb, Award } from "lucide-react";

const AboutUs = () => {
  const leadership = [
    {
      name: "Dr. Sarah Johnson",
      title: "Executive Director",
      description: "Leading STEM education initiatives for over 15 years"
    },
    {
      name: "Michael Chen",
      title: "Technical Director",
      description: "Robotics engineer with expertise in competition coaching"
    },
    {
      name: "Emma Rodriguez",
      title: "Training Coordinator",
      description: "Specializes in curriculum development and student mentorship"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "To empower high school STEM clubs with resources, training, and support they need to innovate and excel."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Building strong partnerships between clubs, mentors, and industry professionals."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Fostering creativity and cutting-edge thinking in STEM education."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to the highest standards in training and program delivery."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Navigation />
      
      <div className="pt-24 pb-12">
        {/* Hero Section */}
        <div className="container mx-auto px-6 text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">CORE</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            The Coalition of Organized Robotics and Engineering is dedicated to transforming STEM education 
            through comprehensive training programs, strategic funding support, and collaborative partnerships.
          </p>
        </div>

        {/* Mission & Values */}
        <div className="container mx-auto px-6 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/30">
                <div className="w-16 h-16 mx-auto mb-4 bg-red-600/20 rounded-full flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Team */}
        <div className="container mx-auto px-6 mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((member, index) => (
              <div key={index} className="text-center p-8 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/30">
                <div className="w-24 h-24 mx-auto mb-4 bg-gray-700 rounded-full flex items-center justify-center">
                  <Users className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-red-400 font-semibold mb-3">{member.title}</p>
                <p className="text-gray-300">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="container mx-auto px-6 text-center">
          <div className="bg-gradient-to-r from-red-600/20 to-red-700/20 backdrop-blur-sm border border-red-500/30 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the growing network of STEM clubs that are making a difference through CORE's comprehensive programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/training"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
              >
                Explore Training
              </a>
              <a
                href="/contact"
                className="border border-red-500 text-red-400 hover:bg-red-500 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
