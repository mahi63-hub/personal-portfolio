import {motion} from "framer-motion"

function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Python",
    "Java",
    "Git",
    "GitHub",
  ]

  return (
    <section
      id="skills"
      className="min-h-screen bg-black text-white px-6 py-20"
    >
      <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">
        Skills
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {skills.map((skill, index) => (
            <motion.div
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl py-8 text-center hover:bg-zinc-800 transition"

                whileHover={{
                    scale: 1.05
                }}
            >
            <h3 className="text-xl font-semibold">
              {skill}
            </h3>
          </motion.div>
        ))}

      </div>
    </section>
  )
}

export default Skills