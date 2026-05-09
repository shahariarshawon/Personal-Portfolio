import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const paragraph = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
  },
};

const AboutMe = () => {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="max-w-6xl mx-auto p-6 bg-[#ede9fe] text-gray-700 
                 rounded-lg shadow-lg"
    >
      <motion.p
        variants={paragraph}
        className="mb-5 text-base md:text-lg leading-relaxed"
      >
        I'm{" "}
        <span className="font-semibold text-indigo-700">
          Al Shahariar Arafat Shawon
        </span>
        , a passionate Full Stack Developer skilled in crafting modern,
        scalable, and user-focused applications.
      </motion.p>

      <motion.p
        variants={paragraph}
        className="mb-5 text-base md:text-lg leading-relaxed"
      >
        My expertise spans{" "}
        <span className="font-medium text-indigo-600">
          Next.js, TypeScript,PostgreSQL, Prisma, Docker, Node.js, and Laravel
        </span>
        , with a strong foundation in React, JavaScript, MongoDB, HTML, CSS, and
        Shadcn — plus versatility in C, C++, and Python.
      </motion.p>

      <motion.p
        variants={paragraph}
        className="mb-5 text-base md:text-lg leading-relaxed"
      >
        Currently, I'm pushing the boundaries of innovation by building a live
        video streaming platform powered by advanced web technology, blending my
        love for cutting-edge tech with real-world problem-solving.
      </motion.p>

      <motion.p
        variants={paragraph}
        className="text-base md:text-lg leading-relaxed"
      >
        Beyond my current projects, my ambition is to dive deep into the realms
        of{" "}
        <span className="font-medium text-purple-600">
          Artificial Intelligence and Machine Learning
        </span>
        , creating intelligent systems that not only solve problems but redefine
        user experiences.
      </motion.p>
    </motion.section>
  );
};

export default AboutMe;
