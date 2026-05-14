function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white flex items-center justify-center px-6"
    >
      <div className="max-w-3xl text-center">

        <h2 className="text-5xl md:text-6xl font-bold mb-8">
          Contact Me
        </h2>

        <p className="text-zinc-400 text-lg leading-8 mb-10">
          Feel free to reach out for collaborations,
          projects, or frontend development opportunities.
        </p>

        <div className="flex flex-col gap-6 text-lg">

          <a
            href="mailto:ralimahi13@gmail.com"
            className="hover:text-zinc-300 transition"
          >
            ralimahi13@gmail.com
          </a>

          <a
            href="https://github.com/mahi63-hub"
            target="_blank"
            className="hover:text-zinc-300 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/mahi-rali-b5a852334/"
            target="_blank"
            className="hover:text-zinc-300 transition"
          >
            LinkedIn
          </a>

        </div>

      </div>
    </section>
  )
}

export default Contact