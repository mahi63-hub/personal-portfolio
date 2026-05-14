function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/70 backdrop-blur-xl border-b border-zinc-800 z-50">

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        <h1 className="text-2xl font-bold tracking-wide">
          Mahi
        </h1>

        <ul className="flex gap-8 text-sm font-medium text-zinc-300">

          <li>
            <a href="#about" className="hover:text-white transition">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-white transition">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </li>

        </ul>

      </div>

    </nav>
  )
}

export default Navbar