import { RevealOnScroll } from "../RevealOnScroll";
import { FaLinkedin, FaGithub } from "react-icons/fa"; // Importing LinkedIn and GitHub icons

export const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Hi, I'm Rashmika Fernando
          </h1>

          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            I'm a full-stack developer passionate about creating clean and scalable web applications.
            My goal is to deliver solutions that provide excellent performance and an enjoyable user experience.
          </p>

          <div className="flex justify-center space-x-4 mb-8">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>

          {/* LinkedIn and GitHub Icons */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com/in/rashfernando/"  // Replace with your LinkedIn URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400"
            >
              <FaLinkedin size={40} />
            </a>

            <a
              href="https://github.com/RashmikaFernando-dev"  // Replace with your GitHub URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300"
            >
              <FaGithub size={40} />
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
