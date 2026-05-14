function Projects() {
  const projects = [
  {
    title: "Portfolio Website",

    description:
      "A modern responsive personal portfolio website with animations and smooth UI.",

    tech: "React • Tailwind • Framer Motion",

    github: "https://mahi63-hub.github.io/Portfolio/",

    live: "https://vercel.com/",
  },

  {
    title: "Job Portal UI",

    description:
      "A frontend job portal interface with responsive layouts and filtering features.",

    tech: "React • JavaScript • CSS",

    github: "https://github.com/",

    live: "https://vercel.com/",
  },

  {
    title: "Weather App",

    description:
      "A weather forecasting application using APIs and responsive modern UI design.",

    tech: "React • API • Tailwind",

    github: "https://github.com/",

    live: "https://vercel.com/",
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
          <div
            key={index}
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:bg-zinc-800 transition"
          >
            <h3 className="text-2xl font-bold mb-4">
              {project.title}
            </h3>

            <p className="text-zinc-400 leading-7 mb-6">
              {project.description}
            </p>

            <p className="text-sm text-zinc-500">
              {project.tech}
            </p>
          </div>
        ))}

      </div>
    </section>
  )
}

export default Projects