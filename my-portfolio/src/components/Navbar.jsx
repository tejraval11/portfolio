import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'; // Burger and close icons
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const pages = [{
        name: 'home',
        path: '/'
    },
    {
        name: 'works',
        path: '/projects'
    },
    {
        name: 'about-me',
        path: '/about'
    },
    {
        name: 'contacts',
        path: '/contact'
    },
]
  return (
    <header data-aos="zoom-in-down" className="flex bg-bgDark/30 shadow-md backdrop-blur-md justify-between items-center p-4 sticky top-0 z-50">
    <h1 className="text-white text-xl font-firacode">Tej</h1>
    <nav className="hidden md:flex gap-10 ">
        {pages.map((page) => (
            <Link key={page.name} to={page.path} className="text-white font-firacode hover:text-accent"><span className='font-firacode text-purple'>#</span>{page.name}
            </Link>
        ))}
    </nav>
    <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white text-2xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-bgDark/90 backdrop-blur-md p-4 flex flex-col gap-4 z-40">
          {pages.map((page) => (
            <Link
              key={page.name}
              to={page.path}
              className="text-white font-firacode hover:text-accent"
              onClick={() => setMenuOpen(false)} // Close menu on link click
            >
              <span className="font-firacode text-purple">#</span>
              {page.name}
            </Link>
          ))}
        </div>
      )}
  </header>
  )
}
export default Navbar