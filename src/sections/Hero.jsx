import { motion, useScroll, useTransform } from "framer-motion"

function Hero() {
    const { scrollY } = useScroll()
    const y = useTransform(scrollY, [0, 500], [0, 150])

  return (
    <section className="relative overflow-hidden min-h-screen bg-black text-white flex items-center justify-center px-6">        <motion.div
            style={{ y }}
            className="absolute w-72 h-72 bg-purple-500/40 blur-3xl rounded-full top-20 left-10"
            />

            <motion.div
            style={{ y: useTransform(scrollY, [0, 500], [0, -100]) }}
            className="absolute w-96 h-96 bg-pink-500/40 blur-3xl rounded-full bottom-10 right-10"
            />
        <motion.div
        className="max-w-5xl mx-auto text-center"

        initial={{ opacity: 0, y: 80 }}

        animate={{ opacity: 1, y: 0 }}

        transition={{ duration: 1 }}
        >
        <p className="text-zinc-400 text-lg mb-4">
          Hello, I'm
        </p>

        <h1 className="text-5xl md:text-6xl md:text-7xl font-bold mb-6 leading-tight">
          Mahi Rali
        </h1>

        <h2 className="text-2xl md:text-4xl text-zinc-300 font-semibold mb-6">
          Frontend Developer
        </h2>

        <p className="max-w-2xl mx-auto text-zinc-400 text-lg leading-8 mb-10">
          I build responsive, modern, and user-friendly web applications
          using React, Tailwind CSS, and modern frontend technologies.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">

          <a
            href="#projects"
            className="px-8 py-4  border border-zinc-700 text-black rounded-2xl font-semibold hover:bg-zinc-500 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-8 py-4 border border-zinc-700 rounded-2xl font-semibold hover:bg-zinc-900 transition"
          >
            Contact Me
          </a>

        </div>

      </motion.div>

    </section>
  )
}

export default Hero