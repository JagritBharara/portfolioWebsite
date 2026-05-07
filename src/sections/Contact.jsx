import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

const contacts = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "jagritbharara12@gmail.com",
    link: "mailto:jagritbharara12@gmail.com",
  },
  {
    icon: <FaGithub />,
    title: "GitHub",
    value: "github.com",
    link: "https://github.com/JagritBharara",
  },
  {
    icon: <FaLinkedin />,
    title: "LinkedIn",
    value: "linkedin.com",
    link: "https://www.linkedin.com/in/jagrit-bharara-b8a20022a/?skipRedirect=true",
  },
  {
    icon: <SiLeetcode />,
    title: "LeetCode",
    value: "leetcode.com",
    link: "https://leetcode.com/u/Jagrit_Bharara/",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="bg-black text-white py-24 px-6">
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
            Contact
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Let’s build something impactful together.
          </h2>
        </motion.div>

        {/* Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-zinc-400 text-lg leading-relaxed mb-10">
              I’m always interested in discussing engineering, backend systems,
              scalable products, and exciting development opportunities.
            </p>

            <div className="space-y-6">

              {contacts.map((item) => (
                <a
                  key={item.title}
                  href={item.link}
                  target="_blank"
                  className="flex items-center gap-5 bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-white/20 transition duration-300"
                >

                  <div className="text-2xl text-white">
                    {item.icon}
                  </div>

                  <div>
                    <p className="text-sm text-zinc-500">
                      {item.title}
                    </p>

                    <p className="text-zinc-300">
                      {item.value}
                    </p>
                  </div>

                </a>
              ))}

            </div>
          </motion.div>

          

        </div>
      </div>
    </section>
  );
};

export default Contact;