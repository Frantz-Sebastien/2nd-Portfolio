import React from 'react'
import aboutMePic from "../assets/about-me-pic.png"
import experience from "../assets/experience.png"
import education from "../assets/education.png"
import arrow from "../assets/arrow.png"

const About = () => {

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        };


  return (
    <section id="about">
        <p style={{marginBottom: "0.2rem"}} className='section__text__p1'>Get to Know More</p>
        <h1 style={{marginTop: "0.01rem"}} className='title'>About Me</h1>
        <div className='section-container'>
            <div className='section__pic-container'>
                <img src={aboutMePic} alt="About Me Pic" className='about-pic'/>
            </div>
            <div className='about-details-container'>
                <div className='about-containers'>
                    <div className='details-container'>
                        <img style={{marginTop: "0.2rem", cursor: "default"}} src={experience} alt="experience icon" className='icon'/>
                        <h3 style={{ margin: ".1rem" }}>Experience</h3>
                        <p style={{ margin: "0.1rem" }}>2+ years <br/> Full Stack Development</p>
                    </div>
                    <div className='details-container'>
                        <img style={{marginTop: "0.2rem", cursor: "default"}} src={education} alt="education icon" className='icon'/>
                        <h3 style={{ margin: ".1rem" }}>Education</h3>
                        <p style={{ margin: "0.1rem" }}>Lehman College <br />Pursuit Fellowship</p>
                    </div>
                </div>
                <div className='text-container'>
                    <p>
                        I'm a Web Developer with a background in customer service and a passion for clean energy, AI, and tech-driven solutions. After 7+ years delivering technical support, I transitioned in web development through Pursuit's intensive fellowship. I specialize primarily in JavaScript, React, and SQL and I have built full-stack apps like a travel recommendation engine and an AI-powered resume generator. My mission is to empower people and make tech more accessible and impactful to the environment.
                    </p>
                </div>
            </div>
        </div>
        <img src={arrow} alt= "down arrow" className='icon arrow' onClick={() => scrollToSection("experience")}/>
        
    </section>
  )
}

export default About