import { Typewriter } from "react-simple-typewriter";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Banner = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="mt-12 md:mt-24 px-4 md:px-10 flex flex-col lg:flex-row items-center justify-center gap-12 text-center md:text-left"
    >
      {/* Image Section */}
      <motion.div
        variants={item}
        className="flex-shrink-0 flex flex-col items-center gap-6"
      >
        <motion.img
          src="https://i.postimg.cc/bN1VRJLq/my-AIImage111.jpg"
          alt="Shahariar Arafat"
          className="w-52 h-52 md:w-100 md:h-100 object-cover rounded-full 
                     border-4 border-indigo-500/60 shadow-xl"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Text Section */}
      <div className="space-y-6 max-w-xl">
        <motion.h1
          variants={item}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold 
                     bg-gradient-to-r from-indigo-500 to-teal-400 
                     bg-clip-text text-transparent"
        >
          Al Shahariar Arafat Shawon
        </motion.h1>

        <motion.div
          variants={item}
          className="inline-block px-6 py-3 rounded-lg 
                     bg-gradient-to-r from-indigo-500 to-teal-400 
                     text-white text-lg md:text-2xl font-semibold shadow-lg"
        >
          <Typewriter
            words={[
              "MERN Stack Developer",
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
        </motion.div>

        <motion.p
          variants={item}
          className="text-gray-400 text-base md:text-lg leading-relaxed"
        >
          Passionate about building intuitive and scalable web applications. I
          combine clean architecture with thoughtful UI to deliver products that
          actually scale.
        </motion.p>

        {/* CTA */}
        <motion.a
          variants={item}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          href="/Resume-of-AL-Shahariar-Arafat-Shawon-MERN-Stack-Developer.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
          className="inline-block px-8 py-3 rounded-full font-semibold text-white 
                     bg-gradient-to-r from-indigo-500 to-teal-400 
                     shadow-lg"
        >
          Download Resume
        </motion.a>

        {/* Social Icons */}
        <motion.div
          variants={item}
          className="flex gap-5 justify-center md:justify-start pt-4"
        >
          {[FaLinkedin, FaGithub, FaTwitter].map((Icon, i) => (
            <motion.a
              key={i}
              whileHover={{ scale: 1.25, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href={
                i === 0
                  ? "https://www.linkedin.com/in/shahariar-shawon"
                  : i === 1
                    ? "https://github.com/shahariarshawon"
                    : "https://x.com/Shahariarshaw11"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gradient-to-r from-indigo-500 to-teal-400 
                         text-white shadow-md"
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
