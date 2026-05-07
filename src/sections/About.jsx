import { motion } from "framer-motion";

const About = () => {
  const stats = [
    { number: "1000+", label: "DSA Problems" },
    { number: "1790", label: "LeetCode Rating" },
    { number: "Top 10%", label: "LeetCode Rank" },
    { number: "1+", label: "Years Experience" },
  ];

  return (
    <section id="about" className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-zinc-500 uppercase tracking-[0.3em] mb-4">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Building scalable products with clean engineering.
          </h2>
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              I'm Jagrit Bharara, a Software Engineer focused on backend systems,
              scalable APIs, and modern web development.
            </p>

            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              I currently work at RedDoorz where I optimize production systems,
              improve API performance, and build internal tools used by teams
              across the organization.
            </p>

            <p className="text-zinc-400 text-lg leading-relaxed">
              I enjoy solving complex engineering problems and building products
              that are performant, maintainable, and user-focused.
            </p>
          </motion.div>

          {/* Right Side Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:border-white/20 transition duration-300"
              >
                <h3 className="text-3xl md:text-4xl font-bold mb-2">
                  {stat.number}
                </h3>

                <p className="text-zinc-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;