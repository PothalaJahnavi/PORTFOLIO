import React from 'react'
import './About.css'
const About = () => {
  return (
    <>
      <section className='about'>
        <div className="container flex">
          <>
            <div className="right" data-aos='fade-down-left'>
              <h2 style={{ color: "orange", fontSize: "30px", fontWeight: "700" }}>About Me</h2>
              <p style={{ fontSize: "20px", lineHeight: '30px', fontWeight: "200px", wordSpacing: '10px' }}>
                As an aspiring software developer, I bring a robust understanding of data structures and algorithms
                to the field of software development. My focus on writing clean, efficient code and my commitment to
                continuous learning ensure that I stay abreast of the latest technological advancements.
                I am eager to contribute effectively to dynamic projects and innovative teams.
                My experience includes collaboration on diverse projects where I have showcased my proficiency
                in modern frameworks such as MongoDB, Express.js, Angular, Node.js, and React Native.
                Through these projects, I have applied my problem-solving skills to deliver efficient, user-friendly
                solutions. This experience has solidified my foundation for a dynamic career in full-stack development,
                positioning
                me to excel in creating impactful, high-quality software.</p>
            </div>
          </>
        </div>
      </section>
    </>
  )
}

export default About

