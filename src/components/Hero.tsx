
import { ArrowRight, Code, Wrench, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo/Badge */}
          <div className="inline-flex items-center gap-3 bg-red-600/20 backdrop-blur-sm border border-red-400/30 rounded-full px-6 py-3 mb-8">
            <img 
              src="/lovable-uploads/229a5a1e-1727-44fa-a62c-137f2956f7da.png" 
              alt="CORE Logo" 
              className="w-6 h-6 object-contain"
            />
            <span className="text-red-300 font-medium">CORE Club</span>
          </div>
          
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
              Coalition of Organized
            </span>
            <br />
            <span className="text-red-500">Robotics & Engineering</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Empowering STEM clubs through training, funding, and collaboration.<br />
            Building the next generation of innovators.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg rounded-full">
              Join CORE
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg rounded-full">
              Learn More
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-red-600/20 backdrop-blur-sm rounded-full mx-auto mb-4">
                <Users className="w-8 h-8 text-red-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">15+</div>
              <div className="text-gray-400">Clubs Supported</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-gray-600/20 backdrop-blur-sm rounded-full mx-auto mb-4">
                <Code className="w-8 h-8 text-gray-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-400">Skills Workshops</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-red-600/20 backdrop-blur-sm rounded-full mx-auto mb-4">
                <Wrench className="w-8 h-8 text-red-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">$10K+</div>
              <div className="text-gray-400">Funding Provided</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
