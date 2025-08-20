import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import {
  Plane,
  Cpu,
  Rocket,
  Car,
  Telescope,
  Atom
} from "lucide-react"; // choose appropriate icons

const handbooks = [
  { name: "MAA Bylaws", icon: Plane, file: "/files/maa-bylaws.pdf" },
  { name: "CORE Bylaws", icon: Cpu, file: "/files/core-bylaws.pdf" },
  { name: "Rocketry Bylaws", icon: Rocket, file: "/files/rocketry-bylaws.pdf" },
  { name: "Stem Racing Bylaws", icon: Car, file: "/files/stemracing-bylaws.pdf" },
  { name: "Astronomy Bylaws", icon: Telescope, file: "/files/astronomy-bylaws.pdf" },
  { name: "Physics Bylaws", icon: Atom, file: "/files/physics-bylaws.pdf" },
];

const Handbook = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex flex-col">
      <Navigation />

      <div className="flex-grow container mx-auto px-6 pt-28 pb-16 text-center">
        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-extrabold mb-12">
          <span className="text-red-600">Club</span>{" "}
          <span className="text-white">Handbook</span>
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12">
          Access the official club bylaws for each CORE-supported club below.
        </p>

        {/* Handbook Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {handbooks.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-gray-800/40 border border-red-500/30 rounded-2xl p-6 flex flex-col items-center shadow-lg hover:shadow-red-600/40 transition-shadow duration-300"
              >
                {/* Lucide Icon */}
                <div className="w-24 h-24 mb-4 rounded-full flex items-center justify-center bg-red-600/20 border-2 border-red-500">
                  <Icon className="w-12 h-12 text-red-400" />
                </div>

                {/* Name */}
                <h2 className="text-xl font-bold text-white mb-4">{item.name}</h2>

                {/* Download Button */}
                <a
                  href={item.file}
                  download
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-red-600/40"
                >
                  📕 Download PDF
                </a>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Handbook;
