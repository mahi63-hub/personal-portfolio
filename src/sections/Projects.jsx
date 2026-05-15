
import { motion } from "framer-motion"

function Projects() {

  const projects = [
    {
      title: "Portfolio Website",

      description:
        "A modern responsive personal portfolio website with animations and smooth UI.",

      tech: "React • Tailwind • Framer Motion",

      github: "https://github.com/mahi63-hub/Portfolio",

      live: "https://mahi63-hub.github.io/Portfolio/",
    },

    {
      title: "Indivista",

      description:
        "A modern travel discovery web application that helps users explore the best tourist destinations, attractions, and experiences across India with an interactive and user-friendly interface.",

      tech: "React • JavaScript • CSS",

      github: "https://github.com/lohithaalekhyakollu/Indivista",

      live: "https://lohithaalekhyakollu.github.io/Indivista/",
    },

    {
      title: "Budget Buddy",

      description:
        "A personal finance tracking web application that helps users manage monthly and weekly expenses, monitor spending habits, and organize budgets efficiently.",

      tech: "React • API • Tailwind",

      github: "https://github.com/spjak231/iShip-1",

      live: "https://spjak231.github.io/iShip-1/",
    },
  ]

  return (
    <section
      id="projects"
      className="min-h-screen bg-zinc-950 text-white px-6 py-20"
    >

      <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">
        Projects
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {projects.map((project, index) => (

          <motion.div
            key={index}

            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:bg-zinc-800 transition"

            whileHover={{
              y: -10
            }}
          >

            <h3 className="text-2xl font-bold mb-4">
              {project.title}
            </h3>

            <p className="text-zinc-400 leading-7 mb-6">
              {project.description}
            </p>

            <p className="text-sm text-zinc-500 mb-6">
              {project.tech}
            </p>

            <div className="flex gap-4 flex-wrap">

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"

                className="px-5 py-2 bg-white text-black rounded-xl text-sm font-medium hover:bg-zinc-300 transition"
              >
                GitHub
              </a>

              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"

                className="px-5 py-2 border border-zinc-700 rounded-xl text-sm font-medium hover:bg-zinc-800 transition"
              >
                Live Demo
              </a>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  )
}

export default Projects

