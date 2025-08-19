import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Home, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-red-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10">
        <Navigation />
        
        <div className="min-h-screen flex items-center justify-center px-6">
          <div className="text-center max-w-2xl mx-auto">
            {/* 404 Number */}
            <div className="mb-8">
              <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-gradient-to-r from-red-500 to-red-600 bg-clip-text mb-4">
                404
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full"></div>
            </div>

            {/* Error Message */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Page Not Found
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Looks like you've ventured into uncharted territory. The page you're looking for doesn't exist or may have been moved.
              </p>
              <p className="text-sm text-gray-400">
                Attempted to access: <code className="bg-gray-800 px-2 py-1 rounded text-red-400">{location.pathname}</code>
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/"
                className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg"
              >
                <Home className="w-5 h-5" />
                Back to Home
              </a>
              <a
                href="/about"
                className="flex items-center gap-2 border border-red-500 text-red-400 hover:bg-red-500 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
              >
                <Search className="w-5 h-5" />
                Explore CORE
              </a>
            </div>

            {/* Helpful Links */}
            <div className="mt-16 p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-4">Looking for something specific?</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <a href="/about" className="text-gray-300 hover:text-red-400 transition-colors">About Us</a>
                <a href="/training" className="text-gray-300 hover:text-red-400 transition-colors">Training</a>
                <a href="/contact" className="text-gray-300 hover:text-red-400 transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default NotFound;
