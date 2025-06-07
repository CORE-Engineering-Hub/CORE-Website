
import { Wrench, Github, Instagram, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-lg">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">CORE</span>
            </div>
            <p className="text-slate-400 mb-6 max-w-md">
              Coalition of Organized Robotics and Engineering - empowering STEM clubs through training, funding, and collaboration.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-slate-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#skills" className="text-slate-400 hover:text-white transition-colors">Skills</a></li>
              <li><a href="#about" className="text-slate-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Training Materials</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Funding Guide</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Club Handbook</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Success Stories</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400">
            © 2024 Coalition of Organized Robotics and Engineering (CORE). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
