
import { Mail, MessageSquare, Users, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Get Involved with CORE
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to take your STEM club to the next level? We'd love to hear from you and discuss how CORE can support your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* For Clubs */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg mb-4">
                <Users className="w-6 h-6 text-red-600" />
              </div>
              <CardTitle className="text-xl text-black">For STEM Clubs</CardTitle>
              <CardDescription className="text-gray-600">
                Partner with us to access training, funding, and organizational support for your club.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-red-600 hover:bg-red-700">
                Apply for Partnership
              </Button>
            </CardContent>
          </Card>

          {/* For Students */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-lg mb-4">
                <MessageSquare className="w-6 h-6 text-red-600" />
              </div>
              <CardTitle className="text-xl text-black">For Students</CardTitle>
              <CardDescription className="text-gray-600">
                Join CORE as a member and help us support the STEM community at our school.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-red-600 hover:bg-red-700">
                Join CORE
              </Button>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg mb-4">
                <Mail className="w-6 h-6 text-red-600" />
              </div>
              <CardTitle className="text-xl text-black">Contact Us</CardTitle>
              <CardDescription className="text-gray-600">
                Have questions? Reach out to our team and we'll get back to you soon.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Contact Details */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">Let's Connect</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-red-600" />
                  <span className="text-gray-700">core.club@school.edu</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-red-600" />
                  <span className="text-gray-700">Engineering Building, Room 201</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-red-600" />
                  <span className="text-gray-700">Meetings: Tuesdays & Thursdays, 3:30 PM</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">Quick Links</h3>
              <div className="grid grid-cols-2 gap-4">
                <a href="#" className="text-red-600 hover:text-red-800 transition-colors">Club Application</a>
                <a href="#" className="text-red-600 hover:text-red-800 transition-colors">Training Schedule</a>
                <a href="#" className="text-red-600 hover:text-red-800 transition-colors">Funding Guidelines</a>
                <a href="#" className="text-red-600 hover:text-red-800 transition-colors">Social Media Kit</a>
                <a href="#" className="text-red-600 hover:text-red-800 transition-colors">Success Stories</a>
                <a href="#" className="text-red-600 hover:text-red-800 transition-colors">FAQ</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
