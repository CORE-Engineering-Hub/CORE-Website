
import { Target, Users, Lightbulb, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To empower high school STEM clubs with the resources, training, and support they need to innovate and excel in robotics and engineering."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of teamwork and bringing together diverse minds to solve complex engineering challenges."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Fostering creativity and out-of-the-box thinking to develop cutting-edge solutions and breakthrough technologies."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to the highest standards in everything we do, from training programs to project outcomes."
    }
  ];

  return (
    <section id="about" className="py-20 bg-transparent text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-red-500">CORE</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              The Coalition of Organized Robotics and Engineering (CORE) is more than just a club – 
              we're a catalyst for innovation and excellence in STEM education.
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Founded by passionate students and educators, CORE bridges the gap between academic 
              learning and real-world application. We provide comprehensive support to STEM clubs 
              across our school, offering everything from technical training and funding to 
              organizational guidance and social media management.
            </p>
            
            {/* Additional content section */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">What Makes Us Different</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Unlike traditional clubs, CORE operates as a comprehensive support network that 
                amplifies the impact of individual STEM clubs through shared resources, expertise, 
                and collaborative opportunities.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our proven track record of successful partnerships and measurable outcomes 
                demonstrates our commitment to fostering the next generation of innovators and 
                problem-solvers in the STEM field.
              </p>
            </div>
          </div>

          {/* Right side - Values */}
          <div className="space-y-6">
            {values.map((value, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/10 transition-all duration-300 border border-white/10">
                <div className="flex items-center justify-center w-16 h-10 bg-red-600/20 backdrop-blur-sm rounded-xl">
                  <value.icon className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
