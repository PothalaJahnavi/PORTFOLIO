import React from 'react'
import './About.css'
import photo from '../assets/photo.jpg'
const About = () => {
  return (
    <>
      <section className='about'>
        <div className="container flex">
          <>
            <div className="left" data-aos='fade-down-right'>
              <img src={photo} alt="" style={{ width: "200px", height: "250px" }} />
            </div>
            <div className="right" data-aos='fade-down-left'>
              <h2 style={{ color: "orange", fontSize: "30px", fontWeight: "700" }}>About Me</h2>
              <p style={{ fontSize: "20px" }}>
                As an aspiring software developer,I bring a strong grasp of data structures and algorithms to software development, With a focus on clean code and a commitment to continuous learning.
                I am poised to contribute effectively to dynamic projects and innovative teams.</p>
            </div>
          </>
        </div>
      </section>
    </>
  )
}

export default About

