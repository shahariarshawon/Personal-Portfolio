import { Typewriter } from "react-simple-typewriter";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

const Banner = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="mt-8 md:mt-16 lg:mt-20 px-4 md:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 max-w-6xl mx-auto"
    >
      {/* Image Section */}
      <motion.div variants={item} className="flex-shrink-0 order-1 lg:order-2">
        <motion.div
          className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80"
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "reverse",
          }}
        >
          <img
            src="https://i.postimg.cc/HWcQCk5T/professional-photo-shawon-(1).jpg"
            alt="Shahariar Arafat"
            className="w-full h-full object-cover rounded-full border-4 border-indigo-400/40 shadow-2xl"
          />
          {/* Decorative ring */}
          <div className="absolute inset-0 rounded-full border-2 border-teal-400/30 scale-110"></div>
        </motion.div>
      </motion.div>

      {/* Text Section */}
      <div className="space-y-5 md:space-y-6 max-w-2xl text-center lg:text-left order-2 lg:order-1">
        <motion.h1
          variants={item}
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
        >
          <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 bg-clip-text text-transparent">
            Al Shahariar Arafat Shawon
          </span>
        </motion.h1>

        <motion.div variants={item} className="inline-block w-full">
          <div className="inline-flex items-center justify-center lg:justify-start px-5 py-3 md:px-7 md:py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-teal-500 text-white text-base md:text-xl lg:text-2xl font-semibold shadow-lg min-h-[3.5rem]">
            <Typewriter
              words={[
                "Backend Developer",
                "Software Engineer",
                "MERN Stack Developer",
                "Full Stack Developer",
                
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div variants={item} className="pt-2">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            href="/public/Resume-of-AL-Shahariar-Arafat-Shawon-MERN-Stack-Developer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-3.5 rounded-full font-semibold text-white text-sm md:text-base bg-gradient-to-r from-indigo-600 to-teal-500 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download Resume
          </motion.a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          variants={item}
          className="flex gap-4 justify-center lg:justify-start pt-2"
        >
          {[
            {
              Icon: FaLinkedin,
              url: "https://www.linkedin.com/in/shahariar-dev",
              color: "from-blue-600 to-blue-700",
            },
            {
              Icon: FaGithub,
              url: "https://github.com/shahariarshawon",
              color: "from-gray-700 to-gray-900",
            },
            {
              Icon: FaTwitter,
              url: "https://x.com/Shahariarshaw11",
              color: "from-sky-500 to-blue-600",
            },
          ].map(({ Icon, url, color }, i) => (
            <motion.a
              key={i}
              whileHover={{ scale: 1.15, rotate: 3 }}
              whileTap={{ scale: 0.95 }}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full bg-gradient-to-r ${color} text-white shadow-md hover:shadow-lg transition-all duration-300`}
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Banner;
