import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "HTML", "CSS", "JavaScript", "React.js", "Bootstrap", "Tailwind CSS", "Flutter"
  ];

  const backendSkills = [
    "Java", "C#", "JavaScript", "PHP", "SQL", "MongoDB", "Node.js", "Express.js"
  ];

  const toolSkills = [
    "GitHub", "Visual Studio Code", "Visual Studio", "phpMyAdmin", "Figma"
  ];

  const softSkills = [
    "Teamwork", "Public Relations", "Communication", "Leadership", "Problem Solving", 
    "Adaptability", "Time Management", "Work Ethic"
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web applications and creating innovative solutions.
            </p>

            {/* Frontend Skills Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                  hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend Skills Section */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                  hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Tool Skills Section */}
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all mt-8">
              <h3 className="text-xl font-bold mb-4">🛠️ Tool Skills</h3>
              <div className="flex flex-wrap gap-2">
                {toolSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Soft Skills Section */}
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all mt-8">
              <h3 className="text-xl font-bold mb-4">💡 Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Work Experience Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">Freelancer (2020 - Present)</h4>
                  <p>
                    Developed custom software solutions, focusing on full-stack web development, mobile apps, and IoT systems, ensuring timely delivery and client satisfaction.
                  </p>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><strong>BSc (Hons) in Software Engineering</strong> - Plymouth University, United Kingdom (Third Year Undergraduate)</li>
                <li><strong>Foundation Programme for Bachelor’s Degree in Computer Software Engineering</strong> - NSBM Green University (2022 – 2023)</li>
                <li><strong>St. Joseph's College</strong>, Colombo 10 (2010 – 2021)</li>
              </ul>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
