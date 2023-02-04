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
       <img src={photo} alt="" style={{width:"200px",height:"250px"}} />
         </div>
         <div className="right" data-aos='fade-down-left'>
         <h2 style={{color:"orange",fontSize:"30px",fontWeight:"700"}}>About Me</h2>
         <p>Iam an Undergraduate of Vignan's Institute Of Information Technology in the field of computer science.My interests include problem solving,designing websites.</p>
         </div>
         </>
        </div>
      </section>
    </>
  )
}

export default About

