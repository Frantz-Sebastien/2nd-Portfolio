import React, { useState } from 'react'



const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    const handleLinkClick = () => {
        setMenuOpen(false)
    }


    return (
        <div>
            <nav id="desktop-nav">
                <div className='logo'>Frantz-Sebastien Mathias</div>
                <div>
                    <ul className='nav-links'>
                        <li><a href='#about'>About</a></li>
                        <li><a href='#experience'>Experience</a></li>
                        <li><a href='#projects'>Projects</a></li>
                        <li><a href='#contact'>Contact</a></li>
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
                            <li><a href='#about' onClick={handleLinkClick}>About</a></li>
                            <li><a href='#experience' onClick={handleLinkClick}>Experience</a></li>
                            <li><a href='#projects' onClick={handleLinkClick}>Projects</a></li>
                            <li><a href='#contact' onClick={handleLinkClick}>Contact</a></li>
                        </ul>

                    </div>
                </div>
            </nav>


        </div>
    )
}

export default Navbar