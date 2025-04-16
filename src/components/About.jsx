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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quae exercitationem ipsum tempore voluptatum? Reiciendis quos tenetur in dolorum nesciunt, ipsum a modi asperiores ducimus incidunt harum inventore assumenda accusamus!
                    </p>
                </div>
            </div>
        </div>
        <img src={arrow} alt= "down arrow" className='icon arrow' onClick={() => scrollToSection("experience")}/>
        
    </section>
  )
}

export default About