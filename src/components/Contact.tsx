import { Mail, MessageSquare, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get Involved with CORE
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to take your STEM club to the next level? We'd love to hear from you and discuss how CORE can support your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* For Students */}
          <Card className="hover:shadow-lg transition-all duration-300 bg-gray-800/50 backdrop-blur-sm border-gray-700/50">
            <CardHeader>
              <div className="flex items-center justify-center w-12 h-12 bg-red-600/20 rounded-lg mb-4">
                <MessageSquare className="w-6 h-6 text-red-400" />
              </div>
              <CardTitle className="text-xl text-white">For Students</CardTitle>
              <CardDescription className="text-gray-300">
                Join CORE as a member and help us support the STEM community at our school.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full bg-red-600 hover:bg-red-700">
                <a href="https://discord.gg/5AvVPaDPYq">Join CORE</a>
              </Button>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <Card className="hover:shadow-lg transition-all duration-300 bg-gray-800/50 backdrop-blur-sm border-gray-700/50">
            <CardHeader>
              <div className="flex items-center justify-center w-12 h-12 bg-red-600/20 rounded-lg mb-4">
                <Mail className="w-6 h-6 text-red-400" />
              </div>
              <CardTitle className="text-xl text-white">Contact Us</CardTitle>
              <CardDescription className="text-gray-300">
                Have questions? Reach out to our team and we'll get back to you soon.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                asChild
                className="w-full bg-red-600 hover:bg-red-700 hover:text-white"
              >
                <a href="/contact">Send Message</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
