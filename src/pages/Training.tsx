import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Code, Cpu, Hammer, Monitor, Users, Clock, CheckCircle } from "lucide-react";

const Training = () => {
  const courses = [
    {
      icon: Code,
      title: "Programming Fundamentals",
      level: "Beginner",
      duration: "6 weeks",
      description: "Learn Python, Java, and C++ programming with hands-on robotics applications.",
      prerequisites: "None",
      topics: ["Python Basics", "Object-Oriented Programming", "Arduino IDE", "Robot Control Systems"]
    },
    {
      icon: Monitor,
      title: "CAD & Design",
      level: "Beginner-Intermediate",
      duration: "8 weeks",
      description: "Master SolidWorks and Fusion 360 for mechanical design and prototyping.",
      prerequisites: "Basic computer skills",
      topics: ["SolidWorks Fundamentals", "3D Modeling", "Assembly Design", "Technical Drawings"]
    },
    {
      icon: Cpu,
      title: "Electronics & Circuits",
      level: "Intermediate",
      duration: "10 weeks",
      description: "Understand circuit design, microcontrollers, and sensor integration.",
      prerequisites: "Basic programming knowledge",
      topics: ["Circuit Analysis", "Microcontroller Programming", "Sensor Integration", "PCB Design"]
    },
    {
      icon: Hammer,
      title: "Manufacturing Processes",
      level: "Intermediate-Advanced",
      duration: "12 weeks",
      description: "Learn CNC machining, 3D printing, and advanced manufacturing techniques.",
      prerequisites: "CAD experience recommended",
      topics: ["CNC Programming", "3D Printing", "Material Selection", "Quality Control"]
    }
  ];

  const certificationPaths = [
    {
      title: "CSWA Certification Prep",
      description: "Prepare for the Certified SOLIDWORKS Associate exam with comprehensive training.",
      duration: "4 weeks intensive"
    },
    {
      title: "Arduino Certified",
      description: "Become certified in Arduino programming and electronics integration.",
      duration: "6 weeks"
    },
    {
      title: "Project Management",
      description: "Learn agile methodology and team leadership for engineering projects.",
      duration: "5 weeks"
    }
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certificationPaths.map((cert, index) => (
              <div key={index} className="text-center p-8 bg-gradient-to-b from-red-600/10 to-red-700/5 backdrop-blur-sm rounded-xl border border-red-500/30">
                <h3 className="text-2xl font-bold text-white mb-4">{cert.title}</h3>
                <p className="text-gray-300 mb-6">{cert.description}</p>
                <div className="flex items-center justify-center gap-2 text-red-400 mb-6">
                  <Clock className="w-5 h-5" />
                  <span className="font-semibold">{cert.duration}</span>
                </div>
                <a
                  href="/certifications"
                  className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Enrollment Information */}
        <div className="container mx-auto px-6 text-center">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Learning?</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Our training programs are designed for students, educators, and club leaders who want to build 
              practical STEM skills. Classes are limited in size to ensure personalized attention.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <h4 className="text-xl font-bold text-red-400 mb-2">Small Class Sizes</h4>
                <p className="text-gray-300">Maximum 12 students per class</p>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-bold text-red-400 mb-2">Hands-On Learning</h4>
                <p className="text-gray-300">Real projects and equipment</p>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-bold text-red-400 mb-2">Expert Instructors</h4>
                <p className="text-gray-300">Industry professionals and educators</p>
              </div>
            </div>
            <div className="flex justify-center">
                <div className="text-center">
                  <h4 className="text-xl font-bold text-red-400 mb-2">Resignation</h4>
                  <p className="text-gray-300">Open for resignation until September 3rd, 2025</p>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <a
                href="/contact"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
              >
                Register Now
              </a>
              <a
                href="/events"
                className="border border-red-500 text-red-400 hover:bg-red-500 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
              >
                View Schedule
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Training;
