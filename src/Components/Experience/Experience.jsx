import React from "react";
import { motion } from "framer-motion";

const experienceData = [
  {
    id: 1,
    position: "Customer Representative",
    company: "Genex Infosys Ltd",
    duration: "June 2023 – March 2024",
    description:
      "Handled a high volume of customer interactions, delivered timely issue resolution, and consistently met service KPIs. This role significantly strengthened my communication, problem-solving, and stakeholder management skills.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Experience = () => {
  return (
    <section className="max-w-3xl mx-auto p-6">
      <h1 className="pt-[130px] -mt-[80px] text-3xl md:text-4xl lg:text-5xl text-primary font-extrabold text-center mb-12">
        Work Experience
      </h1>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative border-l-4 border-purple-500 ml-6"
      >
        {experienceData.map((job) => (
          <motion.div
            key={job.id}
            variants={cardVariants}
            className="mb-12 ml-6 relative group"
          >
            {/* Timeline Dot */}
            <span className="absolute -left-9 top-4 w-6 h-6 bg-purple-600 rounded-full border-4 border-white shadow-md transition-transform duration-300 group-hover:scale-125"></span>

            {/* Card */}
            <div className="bg-[#ede9fe] p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-purple-700">
                {job.position}
              </h3>

              <p className="text-gray-700 font-medium mt-1">
                {job.company} &nbsp;|&nbsp;
                <span className="italic">{job.duration}</span>
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                {job.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;
