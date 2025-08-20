import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Code, Atom, Hammer, Monitor, Users, Clock, CheckCircle } from "lucide-react";

const Training = () => {
  const courses = [
    {
      icon: Code,
      title: "Programming Fundamentals",
      level: "Beginner",
      duration: "6 weeks",
      description: "Learn Python, Java, and C++ programming with hands-on robotics applications.",
      prerequisites: "None",
      topics: ["Python", "Java", "Javascript", "C++", "HTML", "CSS"]
    },
    {
      icon: Monitor,
      title: "CAD & Design",
      level: "Beginner-Intermediate",
      duration: "8 weeks",
      description: "Master SolidWorks and Fusion 360 for mechanical design and prototyping.",
      prerequisites: "Basic computer skills",
      topics: ["SolidWorks", "Fusion 360"]
    },
    {
      icon: Atom,
      title: "Physics Olympiad",
      level: "Intermediate",
      duration: "10 weeks",
      description: "Prepare for national and international physics competitions with focused problem-solving sessions and exam strategies.",
      prerequisites: "Basic physics knowledge",
      topics: ["F=MA", "Sir Isaac Newton Exam Training", "Physics Bowl"]
    },
    {
      icon: Hammer,
      title: "Manufacturing Processes",
      level: "Intermediate-Advanced",
      duration: "12 weeks",
      description: "Learn CNC machining, 3D printing, and advanced manufacturing techniques.",
      prerequisites: "CAD experience recommended",
      topics: ["CNC Machine", "3D Printing", "Laser Cutter", "Bandsaw", "Drill Press", "Lathe Machine"]
    }
  ];

  const certificationPaths = [
    {
      title: "CSWA Certification Prep",
      description: "Prepare for the Certified SOLIDWORKS Associate exam with comprehensive training.",
      duration: "4 weeks intensive"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Navigation />
      
      <div className="pt-24 pb-12">
        {/* Hero Section */}
        <div className="container mx-auto px-6 text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Training & <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Education</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Comprehensive STEM training programs designed to build practical skills and prepare students 
            for real-world engineering challenges.
          </p>
        </div>

        {/* Course Offerings */}
        <div className="container mx-auto px-6 mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Course Catalog</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="p-8 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/30 hover:border-red-500/50 transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-red-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <course.icon className="w-8 h-8 text-red-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-3 mb-4">
                      <h3 className="text-2xl font-bold text-white">{course.title}</h3>
                      <span className="px-3 py-1 bg-red-600/20 text-red-400 rounded-full text-sm font-medium">
                        {course.level}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 mb-4 text-gray-300">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-red-400" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-red-400" />
                        <span>Prerequisites: {course.prerequisites}</span>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">{course.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-white">Key Topics:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {course.topics.map((topic, topicIndex) => (
                          <div key={topicIndex} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span className="text-gray-300 text-sm">{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certification Paths */}
        <div className="container mx-auto px-6 mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Certification Opportunities</h2>
            <div className="flex justify-center">
              {certificationPaths.map((cert, index) => (
                <div key={index} className="w-full md:w-2/3 text-center p-8 bg-gradient-to-b from-red-600/10 to-red-700/5 backdrop-blur-sm rounded-xl border border-red-500/30">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">{cert.title}</h3>
                  <p className="text-gray-300 text-lg">{cert.description}</p>
                </div>
              ))}
            </div>
        </div>
      </div> {/* 👈 closes the main pt-24 pb-12 wrapper */}

      <Footer />
    </div>
  );
};

export default Training;
