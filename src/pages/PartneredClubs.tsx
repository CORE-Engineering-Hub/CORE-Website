import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const clubs = [
  {
    name: "Physics Club",
    desc: "The International Physics Olympiad (IPhO) is the most prestigious international physics competition for secondary school students. The main aim of IPhO is to test the highest level of knowledge, critical thinking, problem solving, proper practices of presentation and analysis, and hands-on skills in theoretical and experimental physics. The IPhO is organized annually in different countries as a 9-10 day competition where national teams comprising a maximum of five of their best physics students and two team leaders participate.",
    image: "/img/physics.png",
  },
  {
    name: "Model Aeronautics Association (MAA)",
    desc: "The National Free Flight Society (NFFS) is committed to the preservation and promotion of free flight model aviation in all of its aspects and manifestations. The National Free Flight Society is the only organization in the United States that serves the interests of all free flight categories. The Society was formed in 1964 to promote free flight activities and continues as a vital, growing organization dedicated to the advancement of the free flight hobby and sport.",
    image: "/img/MAA.png",
  },
  {
    name: "Rocketry Club",
    desc: "The challenge provides a yearlong opportunity to gain hands-on engineering experience by designing, building, testing, and launching model rockets to meet rigorous requirements. The program fosters leadership, teamwork, and problem-solving skills as students deepen their interest and passion for aerospace and STEM.",
    image: "/img/Rocketry.png",
  },
  {
    name: "STEM Racing",
    desc: "The STEM Racing challenge in North America is an annual STEM competition that challenges students from across the US and Canada at the regional and national level. Designed for teachers, informed by engineers, and endorsed by Formula 1, this program sets students on the fast track to STEM success; and provides a lot of fun on the way there.",
    image: "/img/stemracing.png",
  },
  {
    name: "Astronomy Club",
    desc: "In astronomy club we serve to explore the universe in its entirety. From burning stars, to quasars to explanets and black holes we provide lectures, games, field trips, and telescope usage. Our purpose is to expand the innate passion to learn about the cosmos in an environment of equally curious members.",
    image: "/img/Astronomy.png",
  },
];

const PartneredClubs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex flex-col">
      <Navigation />

      <main className="flex-grow container mx-auto px-6 pt-28 pb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-4">
          <span className="text-red-600">Partnered</span>{" "}
          <span className="text-white">Clubs</span>
        </h1>

        {/* Description under title */}
        <p className="text-center text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-12">
          Our partnered clubs provide students with unique opportunities to explore STEM, aviation, astronomy, and engineering through hands-on projects, competitions, and collaborative experiences.
        </p>

        {/* First row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {clubs.slice(0, 3).map((club, i) => (
            <div
              key={i}
              className="bg-gray-800/40 border border-red-500/30 rounded-2xl p-6 text-center flex flex-col items-center shadow-lg hover:shadow-red-600/40 transition-shadow duration-300"
            >
              <img
                src={club.image}
                alt={club.name}
                className="w-28 h-28 object-cover rounded-full mb-4 border-2 border-red-500"
              />
              <h2 className="text-2xl font-bold text-white mb-3">{club.name}</h2>
              <p className="text-gray-300">{club.desc}</p>
            </div>
          ))}
        </div>

        {/* Second row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 md:px-20">
          {clubs.slice(3).map((club, i) => (
            <div
              key={i}
              className="bg-gray-800/40 border border-red-500/30 rounded-2xl p-6 text-center flex flex-col items-center shadow-lg hover:shadow-red-600/40 transition-shadow duration-300"
            >
              <img
                src={club.image}
                alt={club.name}
                className="w-28 h-28 object-cover rounded-full mb-4 border-2 border-red-500"
              />
              <h2 className="text-2xl font-bold text-white mb-3">{club.name}</h2>
              <p className="text-gray-300">{club.desc}</p>
            </div>
          ))}
        </div>

        {/* Join Us button */}
        <div className="flex justify-center mt-16">
          <a
            href="https://discord.gg/5AvVPaDPYq"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold text-xl transition-all"
          >
            Join us to learn more!
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PartneredClubs;
