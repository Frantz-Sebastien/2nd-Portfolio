import React from 'react'
import email from "../assets/email.png"
import linkedIn_Icon from "../assets/linkedin.png" 

const Contact = () => {
  return (
    <section id="contact">
        <p style={{marginBottom: "0.2rem"}} className='section__text__p1'>Here's how to</p>
        <h1 style={{marginTop: "0.01rem"}} className='title'>Contact Me</h1>
        <div className='contact-info-upper-container'>
            <div className='contact-info-container'>
                <img src={email} alt="email icon" className='icon contact-icon email-icon' />
                <p><a>fsmathias08@gmail.com</a></p>
            </div>
            <div className='contact-info-container'>
                <img src={linkedIn_Icon} alt="LinkedIn icon" className='icon contact-icon' />
                <p><a href='https://www.linkedin.com/in/fsmathias/'>LinkedIn/fsmathias</a></p>
            </div>
        </div>
        
    </section>
  )
}

export default Contact