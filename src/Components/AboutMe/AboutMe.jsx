import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.3,
    },
  },
};

const paragraph = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const AboutMe = () => {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="max-w-3xl mx-auto p-6 bg-[#ede9fe] text-gray-700 
                 rounded-lg shadow-lg"
    >
      <motion.p variants={paragraph} className="mb-4 text-lg leading-relaxed text-justify">
        I’m <span className="font-semibold">Al Shahariar Arafat Shawon</span>, a
        passionate Full Stack Developer skilled in crafting modern, scalable,
        and user-focused applications.
      </motion.p>

      <motion.p variants={paragraph} className="mb-4 text-lg leading-relaxed text-justify">
        My expertise spans the{" "}
        <span className="font-medium"> Next.js,TypeScript,Node.js, and Laravel</span>,
        with a strong foundation in React, JavaScript, MongoDB, HTML, CSS, and
        Shadcn — plus versatility in C, C++, and Python.
      </motion.p>

      <motion.p variants={paragraph} className="mb-4 text-lg leading-relaxed text-justify">
        Currently, I’m pushing the boundaries of innovation by building a live
        video streaming platform powered by advanced web technology, blending my love
        for cutting-edge tech with real-world problem-solving.
      </motion.p>

      <motion.p variants={paragraph} className="text-lg leading-relaxed text-justify">
        Beyond my current projects, my ambition is to dive deep into the realms
        of Artificial Intelligence and Machine Learning, creating intelligent
        systems that not only solve problems but redefine user experiences.
      </motion.p>
    </motion.section>
  );
};

export default AboutMe;
