
import { Github, Instagram, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/img/core-logo.png" 
                alt="CORE Logo" 
                className="w-10 h-10 object-contain"
              />
              <span className="text-2xl font-bold">CORE</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Coalition of Organized Robotics and Engineering - empowering STEM clubs through training, funding, and collaboration.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-red-600 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-red-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-red-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-red-600 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-red-400 transition-colors">Services</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-red-400 transition-colors">Skills</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-red-400 transition-colors">About</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-red-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Training Materials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Funding Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Club Handbook</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Success Stories</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Coalition of Organized Robotics and Engineering (CORE). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
