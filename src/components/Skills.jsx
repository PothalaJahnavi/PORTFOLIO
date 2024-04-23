import React from 'react'
import './Skills.css';
import { useEffect } from 'react';
import TagsCanvas from 'react-tags-canvas'
const Skills = () => {
  const skills=[{title:"HTML"},{title:"CSS"},{title:"JAVASCRIPT"},{title:"C LANGUAGE"},{title:"C++"},{title:"PYTHON"},{title:"REACTJS"},{title:"NODEJS"},{title:"EXPRESSJS"},{title:"MONGODB"},{title:"FLASK"},{title:"PUBLIC SPEAKING"},{title:"TEAMWORK"},{title:"LEADERSHIP"}]
   
  useEffect(() => {
  console.log('Loading TagCanvas...');
  const TagCanvas = window.TagCanvas;
  const tagCanvasOptions = {
    textColour: '#a9b1a9',
    outlineThickness: 0.5,
    outlineColour: '#d4d6cf',
    maxSpeed: 0.05,
    freezeActive: true,
    shuffleTags: true,
    shape: 'sphere',
    zoom: 0.8,
    wheelZoom: false,
    noSelect: true,
    textFont: null,
    freezeDecel: true,
    fadeIn: 3000,
    initial: [0.3, -0.1],
    depth: 0.8,
    textHeight:20
  };
  try {
    TagCanvas.Start('tagcanvas', 'taglist', tagCanvasOptions);
  } catch (e) {
    console.log('Canvas error.');
    console.log(e);
  }
}, []);


  return (
    <div>
      <h1 style={{textAlign:"center",fontSize:"35px",color:"orange",fontWeight:"800"}}>Skills</h1> 
      <div className='container skill-section'>
      <div className="skills-charts">
      <div className='container'>
        <canvas
          id='tagcanvas'
          width='500'
          height='500'
          style={{
            maxWidth: '1000px',
            width: '100%',
            zIndex: '99',
            position: 'relative',
            margin: '0 auto',
          }}
          className='to-fade-in fast-anim'
        ></canvas>
        <div id='taglist' style={{ display: 'none' }}>
          <ul>
            {skills.map((skill) => (
              <li key={skill.title}>
                <a href="#">{skill.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      </div>
      <div className="skill-info">
        <p></p>
      </div>
   </div>
    </div>
  )
}

export default Skills


