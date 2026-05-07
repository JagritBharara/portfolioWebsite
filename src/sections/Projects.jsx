import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Social Media Web App",
    description:
      "Built a full-featured social platform using Ruby on Rails with authentication, posting, commenting, following users, and image uploads.",
    tech: [
      "Ruby on Rails",
      "PostgreSQL",
      "Devise",
    ],
    github: "https://github.com/JagritBharara/Social_Media_App_ROR",
  },
  {
    title: "Property Management System",
    description:
      "Developed a MERN-based property platform with JWT authentication, scalable REST APIs, and real-time property management features.",
    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
    ],
    github: "https://github.com/JagritBharara/propertyMarket",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="text-zinc-500 uppercase tracking-[0.3em] mb-4">
            Projects
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Selected work & engineering projects.
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-white/20 hover:-translate-y-2 transition duration-300 backdrop-blur-sm"
            >

              {/* Project Header */}
              <div className="flex items-start justify-between mb-6">

                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    {project.title}
                  </h3>

                  <p className="text-zinc-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  className="text-2xl text-zinc-400 hover:text-white transition"
                >
                  <FaGithub />
                </a>

              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3 mt-8">

                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;