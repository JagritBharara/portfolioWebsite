import { motion } from "framer-motion";

const experiences = [
  {
    role: "Associate Software Developer",
    company: "RedDoorz",
    duration: "Dec 2025 — Present",
    points: [
      "Optimized listing API response time by reducing Redis calls using thread-level caching.",
      "Enhanced Elasticsearch-based search relevance with improved indexed fields and query optimization.",
      "Integrated AWS S3 workflows for asynchronous media processing.",
      "Containerized services using Docker and Docker Compose.",
    ],
  },
  {
    role: "Associate Software Developer Intern",
    company: "RedDoorz",
    duration: "Aug 2025 — Nov 2025",
    points: [
      "Built backend modules for Budget Management System using Ruby on Rails.",
      "Implemented role-based approval workflows for financial operations.",
      "Received PPO based on engineering contribution and performance.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="bg-black text-white py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="text-zinc-500 uppercase tracking-[0.3em] mb-4">
            Experience
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Professional engineering journey.
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l border-white/10 pl-8 space-y-16">

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >

              {/* Timeline Dot */}
              <div className="absolute -left-[41px] top-2 w-4 h-4 rounded-full bg-white"></div>

              {/* Content */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:border-white/20 transition duration-300">

                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold">
                      {exp.role}
                    </h3>

                    <p className="text-zinc-400">
                      {exp.company}
                    </p>
                  </div>

                  <p className="text-zinc-500 mt-2 md:mt-0">
                    {exp.duration}
                  </p>
                </div>

                <ul className="space-y-3 text-zinc-400">
                  {exp.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex gap-3"
                    >
                      <span className="text-white">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Experience;