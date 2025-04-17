import React from 'react'

const Footer = () => {
    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        };
  return (
    <footer>
        <nav>
            <div className='nav-links-container' >
                <ul className='nav-links'>
                    <li><a onClick={() => scrollToSection("about")}>About</a></li>
                    <li><a onClick={() => scrollToSection("experience")}>Experience</a></li>
                    <li><a onClick={() => scrollToSection("projects")}>Projects</a></li>
                </ul>
            </div>
        </nav>
    </footer>
  )
}

export default Footer