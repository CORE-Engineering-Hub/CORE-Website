
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
    <section id="about" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
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
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-red-500">2019</div>
                <div className="text-gray-400">Founded</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-white">15+</div>
                <div className="text-gray-400">Partner Clubs</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-gray-300">200+</div>
                <div className="text-gray-400">Students Impacted</div>
              </div>
            </div>
          </div>

          {/* Right side - Values */}
          <div className="space-y-6">
            {values.map((value, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-red-600/20 backdrop-blur-sm rounded-lg">
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
