
import { Code, Cpu, Hammer, Wrench, Zap, Monitor } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming",
      skills: ["Python", "Java", "C++", "JavaScript", "Arduino IDE", "ROS"],
      color: "red"
    },
    {
      icon: Monitor,
      title: "Design & CAD",
      skills: ["SolidWorks", "Fusion 360", "AutoCAD", "Blender", "KiCad", "Altium"],
      color: "gray"
    },
    {
      icon: Hammer,
      title: "Manufacturing",
      skills: ["CNC Machining", "3D Printing", "Laser Cutting", "Welding", "PCB Assembly"],
      color: "red"
    },
    {
      icon: Cpu,
      title: "Electronics",
      skills: ["Circuit Design", "Microcontrollers", "Sensors", "Motor Control", "Power Systems"],
      color: "gray"
    },
    {
      icon: Wrench,
      title: "Mechanical",
      skills: ["Mechanical Design", "Robotics", "Pneumatics", "Gear Systems", "Material Science"],
      color: "red"
    },
    {
      icon: Zap,
      title: "Project Management",
      skills: ["Agile Methodology", "Team Leadership", "Documentation", "Testing", "Deployment"],
      color: "gray"
    }
  ];

  const colorVariants = {
    red: "bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white",
    gray: "bg-gray-100 text-gray-600 group-hover:bg-gray-600 group-hover:text-white"
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            STEM Skills We Teach
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From programming to manufacturing, we provide comprehensive training across all areas of STEM to prepare you for real-world engineering challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="group p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-6">
                <div className={`flex items-center justify-center w-12 h-12 rounded-lg transition-all duration-300 ${colorVariants[category.color]}`}>
                  <category.icon className="w-6 h-6 transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-black">{category.title}</h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 cursor-pointer">
            <Zap className="w-5 h-5" />
            <span>Start Learning Today</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
