import React from 'react'
import profilePic from "../assets/fsm-profile-pic.png"
import pdfResume from "../assets/fsm-resume.pdf"
import linkedInIcon from "../assets/linkedIn.png"

const Profile = () => {
  return (
    <section id="profile">
        <div className='section__pic-container'>
            <img src={profilePic} alt="My Profile Picture" />
        </div>
        <div className='section__text'>
            <p className='section__text__p1'>Hello, I'm</p>
            <h1 className='title'>Frantz-Sebastien Mathias</h1>
            <p className='section__text__p2'>Fullstack Developer</p>
            <div className='btn-container'>
                <button
                    className='btn btn-color-2'
                    onClick={() => window.open(pdfResume)}
                >
                    Download Resume
                </button>
                <button
                    className='btn btn-color-1'
                    onClick={() => window.location.href ="#contact"}
                >
                    Contact Info
                </button>
            </div>
            <div id="socials-container">
                <img src={linkedInIcon} alt="LinkedIn Profile" className='icon' onClick={() => window.location.href ="https://www.linkedin.com/in/fsmathias"} />

            </div>
        </div>
    </section>
  )
}

export default Profile