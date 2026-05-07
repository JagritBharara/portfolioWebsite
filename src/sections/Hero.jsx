import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-black text-white flex items-center justify-center px-6 relative overflow-hidden pt-24">
      
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-500/20 blur-3xl rounded-full top-20 left-1/2 -translate-x-1/2"></div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center relative z-10"
      >
        {/* Small Intro */}
        <p className="uppercase tracking-[0.3em] text-zinc-400 mb-4 text-sm md:text-base">
          Software Engineer
        </p>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">
            Jagrit Bharara
          </span>
        </h1>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-zinc-400 text-lg md:text-xl leading-relaxed mb-8">
          Building scalable backend systems and modern web applications using
          React, Ruby on Rails, Docker, and cloud technologies.
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {["Ruby on Rails", "SQL", "Docker", "Node.js", "MongoDB", "React"].map(
            (tech) => (
              <span
                key={tech}
                className="px-4 py-2 border border-white/10 rounded-full text-sm text-zinc-300 bg-white/5 backdrop-blur-sm"
              >
                {tech}
              </span>
            )
          )}
        </div>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-4 flex-wrap mb-10">

            {/* Projects Button */}
            <a
                href="#projects"
                className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:scale-105 hover:bg-zinc-200 transition duration-300"
            >
                View Projects
            </a>

            {/* Contact Button */}
            <a
                href="#contact"
                className="border border-white/20 px-6 py-3 rounded-full hover:bg-white hover:text-black transition duration-300"
            >
                Contact Me
            </a>

        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 text-2xl text-zinc-400">
          <a
            href="https://github.com/JagritBharara"
            target="_blank"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/jagrit-bharara-b8a20022a/?skipRedirect=true"
            target="_blank"
            className="hover:text-white transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://leetcode.com/u/Jagrit_Bharara/"
            target="_blank"
            className="hover:text-yellow-400 transition duration-300"
        >
            <SiLeetcode />
        </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;