import { Bot, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6">
        {/* Top section */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
          {/* Logo and Description */}
          <div className="md:flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <img 
                src="/img/core-logo.png" 
                alt="CORE Logo" 
                className="w-10 h-10 object-contain"
              />
              <span className="text-2xl font-bold">CORE</span>
            </div>
            <p className="text-gray-400 max-w-md mx-auto md:mx-0">
              Coalition of Organized Robotics and Engineering - empowering STEM clubs through training, funding, and collaboration.
            </p>
            <div className="flex justify-center md:justify-start gap-4 mt-4">
              <a href="https://discord.gg/5AvVPaDPYq" className="p-2 bg-gray-800 rounded-lg hover:bg-red-600 transition-colors">
                <Bot className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/fchs.core/" className="p-2 bg-gray-800 rounded-lg hover:bg-red-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links in center-right */}
          <div className="flex flex-col text-left" style={{ marginRight: '300px', maxWidth: '400px' }}>
            <h3 className="text-xl md:text-2xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-lg md:text-xl">
              <li><a href="/about" className="hover:text-red-400 transition-colors">About Us</a></li>
              <li><a href="/training" className="hover:text-red-400 transition-colors">Training</a></li>
              <li><a href="/contact" className="hover:text-red-400 transition-colors">Contact</a></li>
              <li><a href="/handbook" className="hover:text-red-400 transition-colors">Club Handbook</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom line */}
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-gray-400 mb-2 md:mb-0">
            © 2024 Coalition of Organized Robotics and Engineering (CORE). All rights reserved.
          </p>
          <p className="text-gray-400">
            This club is sponsored by <span className="text-red-500 font-semibold">Hack Club</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
