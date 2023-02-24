import React from 'react'
import TypeWriter from 'typewriter-effect';
import './Home.css'
const Home = () => {
  return (
    <>
      <section className="main">
        <div className="main-container">
        <h3 data-aos='fade-right'>HELLO I'M</h3>
        <h1>
            <TypeWriter options={{strings:['Jahnavi','Programmer','Web Developer','Front End Addicted','Full Stack Capable'],autoStart:true,loop:true}}/>
        </h1>
        <p  data-aos='fade-left' style={{color:"black",fontWeight:"700",fontSize:"20px"}}>A hard working Computer Science student passionate about programming and designing.</p>
        <button className='primaryBtn'   data-aos='fade-up-right'><a href='https://drive.google.com/file/d/1h3nw4C8g7OnyIiIiqdkKNzN_UTlv7n8u/view?usp=sharing' style={{textDecoration:"none",color:"white"}}>
        Download Resume</a></button>
        </div>
      </section>
    </>
  )
}

export default Home
