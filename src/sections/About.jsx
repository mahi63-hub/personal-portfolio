import { motion } from "framer-motion"

function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-zinc-950 text-white flex items-center px-6 py-20"
    >
    <motion.div
    className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center"

    initial={{ opacity: 0, y: 80 }}

    whileInView={{ opacity: 1, y: 0 }}

    transition={{ duration: 0.8 }}

    viewport={{ once: true }}
    >
        <div className="flex justify-center">
          <div className="w-72 h-72 rounded-3xl bg-zinc-800"></div>
        </div>

        <div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            About Me
          </h2>

          <p className="text-zinc-400 text-lg leading-8 mb-6">
            I am a passionate frontend developer focused on creating
            responsive, modern, and visually engaging web experiences.
          </p>

          <p className="text-zinc-400 text-lg leading-8">
            I enjoy building projects using React, Tailwind CSS,
            and modern frontend technologies while continuously
            improving my UI/UX and development skills.
          </p>
        </div>

      </motion.div>
    </section>
  )
}

export default About