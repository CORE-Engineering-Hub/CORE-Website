import srin from "../images/srin.jpg";
import rishithpic from "../images/rishith.jpg";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Users, Target, Lightbulb, Award } from "lucide-react";

const AboutUs = () => {
  const leadership = [
    {
      name: "Adam Brown",
      title: "President",
      description: "The President is responsible for overseeing CORE’s overall operations, maintaining alignment between departments, and acting as the primary liaison to the faculty advisor and external partners."
    },
    {
      name: "Srinikesh Atluri",
      title: "Vice President",
      description: "The Vice President supervises all training programs and department directors, ensuring curriculum quality, instructor accountability, and consistent educational standards."
    },
    {
      name: "Anubhav Nagammanavar",
      title: "Director of Finance",
      description: "The Finance Director oversees financial planning, including dues collection, budget management, and financial reporting. They work with the Treasurer to ensure transparency and compliance."
    },
    {
      name: "Nishanth Manivannan",
      title: "Director of Communications",
      description: "This officer manages CORE’s digital communication platforms (e.g., Discord, Slack), enforces online conduct policies, and ensures appropriate use of all messaging and collaboration tools."
    },
    {
      name: "Bhavesh Naru",
      title: "Director of Outreach",
      description: "Coordinates planning and promotion of CORE events, ensures documentation of student involvement, and enhances public visibility."
    },
    {
      name: "Rishith Sajishkumar",
      title: "Director of CAD Training",
      description: "Oversees SolidWorks instruction and CSWA preparation."
    },
    {
      name: "Isaac ",
      title: "Director of Manufacturing Training",
      description: "Leads safety training, equipment usage, and physical prototyping."
    },
    {
      name: "Shubham Prasad",
      title: "Director of Programming Training",
      description: "Instructs students in Arduino, Java, circuits, and digital logic."
    },
    {
      name: "Abhiveer Sarpabhushan",
      title: "Sponsorship and Grant Lead",
      description: "Secures funding through sponsors and grant programs, and manages ongoing partnerships."
    },
    {
      name: "Aasrith Ravulapati",
      title: "Treasurer",
      description: "Supports the Finance Director by collecting dues, recording daily transactions, and managing class and event expenses."
    },
    {
      name: "Rushil Patel",
      title: "Technology Systems Lead",
      description: "Maintains CORE’s online infrastructure, including registration portals and internal databases."
    },
    {
      name: "Ryan Wolf",
      title: "Digital Content Manager",
      description: "Creates and archives instructional materials, media content, and promotional visuals."
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
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-red-400 font-semibold mb-3">{member.title}</p>
                <p className="text-gray-300">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
