import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Calendar, Clock, MapPin, Users, Zap, Trophy, BookOpen } from "lucide-react";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Robotics Competition Workshop",
      date: "March 15, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Engineering Building, Lab 205",
      type: "Workshop",
      description: "Intensive training session for upcoming FRC season, covering robot design and programming strategies.",
      capacity: "24 students",
      instructor: "Michael Chen",
      status: "Open"
    },
    {
      title: "CSWA Certification Exam",
      date: "March 22, 2024",
      time: "9:00 AM - 12:00 PM",
      location: "Computer Lab 101",
      type: "Certification",
      description: "Official SOLIDWORKS Associate certification exam. Prerequisites must be completed.",
      capacity: "12 students",
      instructor: "Dr. Sarah Johnson",
      status: "Registration Required"
    },
    {
      title: "3D Printing & Manufacturing Demo",
      date: "April 5, 2024",
      time: "3:30 PM - 6:00 PM",
      location: "Maker Space",
      type: "Demo",
      description: "Hands-on demonstration of advanced 3D printing techniques and post-processing.",
      capacity: "16 students",
      instructor: "Emma Rodriguez",
      status: "Open"
    },
    {
      title: "General Club Meeting",
      date: "April 12, 2024",
      time: "3:30 PM - 4:30 PM",
      location: "Conference Room A",
      type: "Meeting",
      description: "Monthly general meeting covering announcements, project updates, and planning sessions.",
      capacity: "Unlimited",
      instructor: "Leadership Team",
      status: "Open"
    }
  ];

  const recurringEvents = [
    {
      title: "Training Sessions",
      schedule: "Tuesdays & Thursdays, 3:30-5:30 PM",
      description: "Regular skill-building sessions covering programming, CAD, and electronics"
    },
    {
      title: "Project Work Hours",
      schedule: "Saturdays, 10:00 AM - 4:00 PM",
      description: "Open lab time for individual and team projects with mentor support"
    },
    {
      title: "Officer Meetings",
      schedule: "First Monday of each month, 7:00 PM",
      description: "Leadership team planning and coordination meetings"
    }
  ];

  const eventTypes = [
    {
      icon: BookOpen,
      title: "Training Sessions",
      description: "Structured learning experiences covering technical skills and concepts"
    },
    {
      icon: Trophy,
      title: "Competitions",
      description: "Robotics competitions, hackathons, and engineering challenges"
    },
    {
      icon: Zap,
      title: "Workshops",
      description: "Intensive hands-on sessions focused on specific tools or techniques"
    },
    {
      icon: Users,
      title: "General Meetings",
      description: "Club-wide meetings for announcements, planning, and community building"
    }
  ];

  const getEventIcon = (type: string) => {
    switch(type.toLowerCase()) {
      case 'workshop': return Zap;
      case 'certification': return Trophy;
      case 'demo': return BookOpen;
      case 'meeting': return Users;
      default: return Calendar;
    }
  };

  const getStatusColor = (status: string) => {
    switch(status.toLowerCase()) {
      case 'open': return 'text-green-400';
      case 'registration required': return 'text-yellow-400';
      case 'full': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Navigation />
      
      <div className="pt-24 pb-12">
        {/* Hero Section */}
        <div className="container mx-auto px-6 text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Events & <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Meetings</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Stay connected with CORE's calendar of training sessions, competitions, workshops, and community events.
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="container mx-auto px-6 mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Upcoming Events</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => {
              const EventIcon = getEventIcon(event.type);
              return (
                <div key={index} className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/30 p-6 hover:border-red-500/50 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <EventIcon className="w-6 h-6 text-red-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-white">{event.title}</h3>
                        <span className="px-2 py-1 bg-red-600/20 text-red-400 rounded text-xs font-medium">
                          {event.type}
                        </span>
                      </div>
                      <div className="space-y-2 text-gray-300 text-sm mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-red-400" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-red-400" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-red-400" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-red-400" />
                          <span>Capacity: {event.capacity}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{event.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-400">
                      <span>Instructor: {event.instructor}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`text-sm font-semibold ${getStatusColor(event.status)}`}>
                        {event.status}
                      </span>
                      <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300">
                        Register
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recurring Events */}
        <div className="container mx-auto px-6 mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Regular Schedule</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recurringEvents.map((event, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-b from-red-600/10 to-red-700/5 backdrop-blur-sm rounded-xl border border-red-500/30">
                <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>
                <div className="text-red-400 font-semibold mb-4">{event.schedule}</div>
                <p className="text-gray-300 text-sm">{event.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Event Types */}
        <div className="container mx-auto px-6 mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Types of Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventTypes.map((type, index) => (
              <div key={index} className="text-center p-6 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/30">
                <div className="w-16 h-16 mx-auto mb-4 bg-red-600/20 rounded-full flex items-center justify-center">
                  <type.icon className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{type.title}</h3>
                <p className="text-gray-300 text-sm">{type.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Attendance Policy */}
        <div className="container mx-auto px-6 mb-20">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-6">Attendance & Participation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-red-400 mb-4">Attendance Rules</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Registration required for workshops and certification exams</li>
                  <li>• General meetings are open to all members</li>
                  <li>• Please notify instructors if unable to attend registered events</li>
                  <li>• Make-up sessions available for missed training</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-red-400 mb-4">Excused Absences</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Submit absence forms 24 hours in advance when possible</li>
                  <li>• Academic conflicts and emergencies are always excused</li>
                  <li>• Contact leadership team for special circumstances</li>
                  <li>• Alternative arrangements can be made for important sessions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="container mx-auto px-6 text-center">
          <div className="bg-gradient-to-r from-red-600/20 to-red-700/20 backdrop-blur-sm border border-red-500/30 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-6">Stay in the Loop</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Don't miss out on exciting events and learning opportunities. Join our community to receive 
              updates and exclusive access to special workshops.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
              >
                Join CORE
              </a>
              <a
                href="#"
                className="border border-red-500 text-red-400 hover:bg-red-500 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
              >
                Calendar Sync
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Events;
