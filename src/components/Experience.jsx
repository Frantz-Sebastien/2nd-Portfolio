import React from 'react'
import checkmark from "../assets/checkmark.png"
import arrow from "../assets/arrow.png"

const Experience = () => {
    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        };
        
  return (
    <section id="experience">
        <p style={{marginBottom: "0.2rem"}} className='section__text__p1'>Check My</p>
        <h1 style={{marginTop: "0.01rem"}} className='title'>Experience</h1>
        <div className='experience-details-container'>
            <div className='about-containers'>
                <div className='details-container'>
                    <h2 className='experience-sub-title'>Frontend Development</h2>
                    <div className='article-container'>
                        <article>
                            <img src={checkmark} className='icon'/>
                            <div>
                                <h3>JavaScript</h3>
                                <p>Experienced</p>
                            </div>
                        </article>
                        <article>
                            <img src={checkmark} className='icon'/>
                            <div>
                                <h3>HTML</h3>
                                <p>Intermediate</p>
                            </div>
                        </article>
                        <article>
                            <img src={checkmark} className='icon'/>
                            <div>
                                <h3>CSS</h3>
                                <p>Intermediate</p>
                            </div>
                        </article>
                        <article>
                            <img src={checkmark} className='icon'/>
                            <div>
                                <h3>React</h3>
                                <p>Intermediate</p>
                            </div>
                        </article>
                        <article>
                            <img src={checkmark} className='icon'/>
                            <div>
                                <h3>Tailwind CSS</h3>
                                <p>Basic</p>
                            </div>
                        </article>
                        <article>
                            <img src={checkmark} className='icon'/>
                            <div>
                                <h3>Bootstrap</h3>
                                <p>Intermediate</p>
                            </div>
                        </article>

                    </div>

                </div>
                <div className='details-container'>
                    <h2 className='experience-sub-title'>Backend Development</h2>
                    <div className='article-container'>
                        <article>
                            <img src={checkmark} className='icon'/>
                            <div>
                                <h3>Express</h3>
                                <p>Experienced</p>
                            </div>
                        </article>
                        <article>
                            <img src={checkmark} className='icon'/>
                            <div>
                                <h3>SQL</h3>
                                <p>Basic</p>
                            </div>
                        </article>
                        <article>
                            <img src={checkmark} className='icon'/>
                            <div>
                                <h3>Python</h3>
                                <p>Basic</p>
                            </div>
                        </article>
                        <article>
                            <img src={checkmark} className='icon'/>
                            <div>
                                <h3>PostgreSQL</h3>
                                <p>Basic</p>
                            </div>
                        </article>
                        <article>
                            <img src={checkmark} className='icon'/>
                            <div>
                                <h3>Node JS</h3>
                                <p>Intermediate</p>
                            </div>
                        </article>
                        <article>
                            <img src={checkmark} className='icon'/>
                            <div>
                                <h3>Java</h3>
                                <p>Basic</p>
                            </div>
                        </article>

                    </div>

                </div>
            </div>
        </div>
        <img src={arrow} alt="arrow icon" className='icon arrow' onClick={() => scrollToSection("projects")}/>
    </section>
  )
}

export default Experience