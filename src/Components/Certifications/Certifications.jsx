import React from "react";
import { motion } from "framer-motion";

const certificationData = [
  {
    id: 1,
    title: "Web Development",
    institution: "Programming Hero",
    year: "2023",
    result: "Comprehensive MERN Stack Training",
  },
  {
    id: 2,
    title: "Master in PHP",
    institution: "ICT Division, Bangladesh Government",
    year: "2022",
    result: "Backend Development & Web Engineering",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0 },
};

const Certifications = () => {
  return (
    <section className="max-w-3xl mx-auto p-6">
      <h1 className="pt-[130px] -mt-[80px] text-3xl md:text-4xl lg:text-5xl text-primary font-extrabold text-center mb-12">
        Certifications
      </h1>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative border-l-4 border-purple-500 ml-6"
      >
        {certificationData.map((cert) => (
          <motion.div
            key={cert.id}
            variants={item}
            className="mb-12 ml-6 relative group"
          >
            {/* Timeline Dot */}
            <span className="absolute -left-9 top-3 w-6 h-6 bg-purple-600 rounded-full border-4 border-white shadow-md group-hover:scale-125 transition-transform duration-300"></span>

            {/* Card */}
            <div className="bg-[#ede9fe] p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-purple-700">
                {cert.title}
              </h3>

              <p className="text-gray-700 font-medium">
                {cert.institution} &nbsp;|&nbsp;
                <span className="italic">{cert.year}</span>
              </p>

              <p className="mt-2 text-gray-600 font-semibold">{cert.result}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Certifications;
