import { motion } from "framer-motion";

const achievements = [
  {
    value: "1000+",
    title: "DSA Problems Solved",
    description:
      "Solved across LeetCode and coding platforms with consistent practice.",
  },
  {
    value: "1790",
    title: "Peak LeetCode Rating",
    description:
      "Achieved Top 10% ranking demonstrating strong algorithmic problem solving.",
  },
  {
    value: "350+",
    title: "Day Coding Streak",
    description:
      "Maintained long-term coding consistency and daily practice discipline.",
  },
  {
    value: "96.78%",
    title: "JEE Mains Percentile",
    description:
      "Strong analytical and mathematical problem-solving foundation.",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="text-zinc-500 uppercase tracking-[0.3em] mb-4">
            Achievements
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Numbers that reflect consistency & growth.
          </h2>
        </motion.div>

        {/* Achievement Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-white/20 hover:-translate-y-2 transition duration-300 backdrop-blur-sm"
            >

              {/* Big Number */}
              <h3 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">
                {item.value}
              </h3>

              {/* Title */}
              <h4 className="text-xl font-semibold mb-4">
                {item.title}
              </h4>

              {/* Description */}
              <p className="text-zinc-400 leading-relaxed">
                {item.description}
              </p>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Achievements;