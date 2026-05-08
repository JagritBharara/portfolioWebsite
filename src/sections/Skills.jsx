import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
} from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import {
  SiRubyonrails,
  SiMongodb,
  SiJavascript,
  SiPostman,
  SiMysql,
} from "react-icons/si";

const skills = [
  {
    name: "C++",
    icon: <SiCplusplus />,
  },
  {
    name: "React",
    icon: <FaReact />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
  },
  {
    name: "Ruby on Rails",
    icon: <SiRubyonrails />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
  },
  {
    name: "Docker",
    icon: <FaDocker />,
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
  },
  {
    name: "Postman",
    icon: <SiPostman />,
  },
  {
    name: "SQL",
    icon: <SiMysql />,
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-black text-white py-24 px-6">
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
            Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Technologies I work with.
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
              }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:border-white/20 hover:-translate-y-2 transition duration-300 backdrop-blur-sm"
            >

              {/* Icon */}
              <div className="text-5xl mb-4 text-white">
                {skill.icon}
              </div>

              {/* Skill Name */}
              <p className="text-lg font-medium text-zinc-300">
                {skill.name}
              </p>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Skills;