import React from 'react'
import aboutMePic from "../assets/about-me-pic.png"
import experience from "../assets/experience.png"
import education from "../assets/education.png"

const About = () => {
  return (
    <section id="about">
        <p className='section__text__p1'>Get to Know More</p>
        <h1 className='title'>About Me</h1>
        <div className='section-container'>
            <div className='section__pic-container'>
                <img src={aboutMePic} alt="About Me Pic" className='about-pic'/>
            </div>
            <div className='about-details-container'>
                <div className='about-containers'>
                    <div className='details-container'>
                        <img src={experience} alt="experience icon" className='icon'/>
                        <h3>Experience</h3>
                        <p>2+ years <br/> Fullstack Development</p>
                    </div>
                    <div className='details-container'>
                        <img src={education} alt="education icon" className='icon'/>


                    </div>
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default About