import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Navigation />

      <main className="container mx-auto px-6 pt-28 pb-16">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Get in touch with CORE for questions about training, membership, or partnerships.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-6">Get In Touch</h2>
            
            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10">
              <Mail className="w-6 h-6 text-red-400" />
              <div>
                <h3 className="text-white font-semibold">Email</h3>
                <p className="text-gray-300">info@core-engineering.org</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10">
              <Phone className="w-6 h-6 text-red-400" />
              <div>
                <h3 className="text-white font-semibold">Phone</h3>
                <p className="text-gray-300">(555) 123-CORE</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10">
              <MapPin className="w-6 h-6 text-red-400" />
              <div>
                <h3 className="text-white font-semibold">Location</h3>
                <p className="text-gray-300">Engineering Building, Room 205</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6">Send Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-white font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:outline-none"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:outline-none"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:outline-none resize-none"
                  placeholder="Tell us more..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
