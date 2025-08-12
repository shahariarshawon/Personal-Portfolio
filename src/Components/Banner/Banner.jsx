import { Typewriter } from "react-simple-typewriter";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="mt-10 lg:pb-10 md:mt-20 px-4 md:px-10 flex flex-col lg:flex-row items-center justify-center lg:gap-30 gap-10 text-center md:text-left">
      {/* Left: Image + Social Links */}
      <div className="flex-shrink-0 flex flex-col items-center gap-4">
        <img
          src="https://i.postimg.cc/bN1VRJLq/my-AIImage111.jpg"
          alt="Shahariar Arafat"
          className="w-48 h-48 md:h-64 md:w-64 lg:h-100 lg:w-100 object-cover rounded-2xl border-4 border-gradient-to-r from-indigo-500 to-teal-400 shadow-lg"
        />

        {/* Social Links */}
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/shahariar-shawon"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gradient-to-r from-indigo-500 to-teal-400 text-white shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/shahariarshawon"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gradient-to-r from-indigo-500 to-teal-400 text-white shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://x.com/Shahariarshaw11"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gradient-to-r from-indigo-500 to-teal-400 text-white shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300"
          >
            <FaTwitter size={20} />
          </a>
        </div>
      </div>

      {/* Right: Text */}
      <div className="space-y-6 max-w-2xl">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary leading-tight">
          Al Shahariar Arafat Shawon
        </h2>

        <div className="bg-gradient-to-r from-indigo-500 to-teal-400 px-6 py-3 inline-block rounded-lg text-white text-lg md:text-2xl font-semibold shadow-md">
          <Typewriter
            words={[
              "Full Stack Developer",
              "Frontend Engineer",
              "PHP Developer",
              "UI/UX Designer",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>

        <p className="text-gray-400 text-base md:text-lg mt-4">
          Passionate about building intuitive and scalable web applications. I
          blend creativity with technical expertise to deliver robust solutions
          that make a lasting impact.
        </p>
        <a
          href="/resume.pdf"
          download
          className="inline-block px-8 py-3 rounded-full font-semibold text-white 
                     bg-gradient-to-r from-indigo-500 to-teal-400 
                     hover:scale-105 hover:shadow-xl transition-transform duration-300 
                     shadow-md border border-white/20"
        >
          📄 Download Resume
        </a>
      </div>
    </div>
  );
};

export default Banner;
