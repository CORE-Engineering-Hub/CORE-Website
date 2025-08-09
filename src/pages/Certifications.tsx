import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Award, CheckCircle, Clock, Users, FileText, Target } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "CSWA (Certified SOLIDWORKS Associate)",
      provider: "SOLIDWORKS",
      description: "Industry-recognized certification demonstrating proficiency in SOLIDWORKS 3D CAD software.",
      duration: "4-6 weeks prep",
      examDetails: "3-hour exam, 8 questions, passing score 70%",
      benefits: [
        "Industry recognition",
        "Enhanced resume credibility",
        "Portfolio differentiation",
        "Pathway to advanced certifications"
      ],
      prerequisites: [
        "Basic SOLIDWORKS knowledge",
        "Completion of CAD & Design course",
        "40+ hours of practice"
      ]
    },
    {
      title: "Arduino Certified Developer",
      provider: "CORE Engineering Hub",
      description: "Comprehensive certification in Arduino programming and electronics integration.",
      duration: "6 weeks training",
      examDetails: "Practical project + written assessment",
      benefits: [
        "Hands-on electronics expertise",
        "Microcontroller programming skills",
        "IoT development foundation",
        "Real-world project experience"
      ],
      prerequisites: [
        "Basic programming knowledge",
        "Electronics fundamentals",
        "Completion of related coursework"
      ]
    },
    {
      title: "Project Management Professional (STEM)",
      provider: "CORE Engineering Hub",
      description: "Leadership and project management skills specifically for STEM environments.",
      duration: "5 weeks intensive",
      examDetails: "Case study presentation + written exam",
      benefits: [
        "Leadership development",
        "Team management skills",
        "Agile methodology expertise",
        "Cross-functional collaboration"
      ],
      prerequisites: [
        "Previous project experience",
        "Team leadership background",
        "Communication skills"
      ]
    }
  ];

  const certificationProcess = [
    {
      step: 1,
      title: "Enroll in Training",
      description: "Complete the prerequisite courses and training programs."
    },
    {
      step: 2,
      title: "Practice & Prepare",
      description: "Use provided materials and practice exams to build confidence."
    },
    {
      step: 3,
      title: "Schedule Exam",
      description: "Book your certification exam when you feel prepared."
    },
    {
      step: 4,
      title: "Take Assessment",
      description: "Complete the certification exam or practical assessment."
    },
    {
      step: 5,
      title: "Receive Certificate",
      description: "Get your official certification and digital badge."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Navigation />
      
      <div className="pt-24 pb-12">
        {/* Hero Section */}
        <div className="container mx-auto px-6 text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Certifications</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Earn industry-recognized certifications that validate your STEM skills and enhance your academic 
            and professional opportunities.
          </p>
        </div>

        {/* Available Certifications */}
        <div className="container mx-auto px-6 mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Available Certifications</h2>
          <div className="space-y-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/30 p-8 hover:border-red-500/50 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Main Info */}
                  <div className="lg:col-span-2">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-16 h-16 bg-red-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Award className="w-8 h-8 text-red-400" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{cert.title}</h3>
                        <p className="text-red-400 font-semibold">{cert.provider}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-6 text-lg">{cert.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-2 text-gray-300">
                        <Clock className="w-5 h-5 text-red-400" />
                        <span><strong>Duration:</strong> {cert.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <FileText className="w-5 h-5 text-red-400" />
                        <span><strong>Exam:</strong> {cert.examDetails}</span>
                      </div>
                    </div>
                  </div>

                  {/* Benefits & Prerequisites */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                        <Target className="w-5 h-5 text-red-400" />
                        Benefits
                      </h4>
                      <ul className="space-y-2">
                        {cert.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center gap-2 text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                        <Users className="w-5 h-5 text-red-400" />
                        Prerequisites
                      </h4>
                      <ul className="space-y-2">
                        {cert.prerequisites.map((prereq, prereqIndex) => (
                          <li key={prereqIndex} className="flex items-center gap-2 text-gray-300">
                            <div className="w-2 h-2 bg-red-400 rounded-full flex-shrink-0" />
                            <span className="text-sm">{prereq}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certification Process */}
        <div className="container mx-auto px-6 mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Certification Process</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {certificationProcess.map((process, index) => (
                <div key={index} className="text-center relative">
                  <div className="w-16 h-16 mx-auto mb-4 bg-red-600/20 rounded-full flex items-center justify-center border-2 border-red-500">
                    <span className="text-2xl font-bold text-red-400">{process.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{process.title}</h3>
                  <p className="text-gray-300 text-sm">{process.description}</p>
                  {index < certificationProcess.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-600 transform -translate-x-1/2" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="container mx-auto px-6 text-center">
          <div className="bg-gradient-to-r from-red-600/20 to-red-700/20 backdrop-blur-sm border border-red-500/30 rounded-2xl p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">Start Your Certification Journey</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Advance your STEM career with industry-recognized certifications. Our comprehensive training 
              programs prepare you for success.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <h4 className="text-xl font-bold text-red-400 mb-2">Expert Preparation</h4>
                <p className="text-gray-300">Comprehensive study materials and practice exams</p>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-bold text-red-400 mb-2">Flexible Scheduling</h4>
                <p className="text-gray-300">Evening and weekend exam slots available</p>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-bold text-red-400 mb-2">Ongoing Support</h4>
                <p className="text-gray-300">Mentorship throughout the certification process</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/training"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
              >
                View Training Courses
              </a>
              <a
                href="/contact"
                className="border border-red-500 text-red-400 hover:bg-red-500 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
              >
                Ask Questions
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Certifications;
