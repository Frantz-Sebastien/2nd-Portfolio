import React, { useState } from 'react'



const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };
    
    const handleLinkClick = (id) => {
        setMenuOpen(false)
        scrollToSection(id);
    }

    return (
        <div>
            <nav id="desktop-nav">
                <div className='logo'>Frantz-Sebastien Mathias</div>
                <div>
                    <ul className='nav-links'>
                        <li><a onClick={() => scrollToSection("about")}>About</a></li>
                        <li><a onClick={() => scrollToSection("experience")}>Experience</a></li>
                        <li><a onClick={() => scrollToSection("projects")}>Projects</a></li>
                        <li><a onClick={() => scrollToSection("contact")}>Contact</a></li>
                    </ul>
                </div>
            </nav>

            {/* Mobile Navbar (Hamburger Menu) */}
            <nav id="hamburger-nav">
                <div className='logo'>Frantz-Sebastien Mathias</div>
                <div className='hamburger-menu'>
                    <div className={`hamburger-icon ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
                    {/* <div className="hamburger-icon"> */}
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={`menu-links ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
                    {/* <div className="menu-links"> */}
                        <ul>
                            <li><a onClick={() => handleLinkClick("about")}>About</a></li>
                            <li><a onClick={() => handleLinkClick("experience")}>Experience</a></li>
                            <li><a onClick={() => handleLinkClick("projects")}>Projects</a></li>
                            <li><a onClick={() => handleLinkClick("contact")}>Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>


        </div>
    )
}

export default Navbar