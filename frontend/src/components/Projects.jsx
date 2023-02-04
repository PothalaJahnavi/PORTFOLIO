import React from 'react'
import cred from "../assets/cred.png";
import gallery from "../assets/gallery.png";
import restaurant from '../assets/restaurant.png';
import digital from '../assets/digital.png';
import advice from '../assets/advice.png';
import target from '../assets/target.jpg';
import qr from '../assets/qr.jpg';
import library from '../assets/library.png';
import weather from '../assets/weather.png';
import './Projects.css';
const Projects = () => {
  const projects=[
    {
      title:"CRED Clone",
      cover:cred,
      desc:"Cloned Cred which has the most facinating Ui using Reactjs.",
      view:"https://github.com/PothalaJahnavi/CRED-CLONE",
    },
    {
      title:"Restaurant",
      cover:restaurant,
      desc:"It is a full stack application.It also contains api integration.Built using MERN stack.",
      view:"https://github.com/PothalaJahnavi/Restaurant",
    },
    {
      title:"Advice",
      cover:advice,
      desc:"This application generates random advices.It also includes api integration.",
      view:"https://github.com/PothalaJahnavi/Advice/tree/master",
    },
    {
      title:"Digital Clock",
      cover:digital,
      desc:"This shows us the current time,date and day.It is built using Java Script",
      view:"https://pothalajahnavi.github.io/clock.github.io/"
    },
    {
      title:"QR Code Generator",
      cover:qr,
      desc:"It is an application built using Nodejs.It helps us to share data from one device to another using a qr code.",
      view:"https://github.com/PothalaJahnavi/qr-code"
    },
    {
      title:"Target List",
      cover:target,
      desc:"It is a crud application built using MERN.We can set and delete our targets when completed",
      view:"https://github.com/PothalaJahnavi/Target",
    },
    {
      title:"Image Gallery",
      cover:gallery,
      desc:"It contains search functionality to search for images we wanted and we can also download them..",
      view:"https://lucent-crostata-2fd533.netlify.app/",
    },
    
    {
      title:"Library Management System",
      cover:library,
      desc:"It is a full stack application which helps students to search their books online.It also has an admin Login pannel where he can add update and delete the book list",
      view:"https://github.com/PothalaJahnavi/library",
  },
  {
    title:"Weather App",
    cover:weather,
    desc:"This helps us to Know the weather of any place.It is built using Reactjs.",
    view:"https://github.com/PothalaJahnavi/weather/tree/master"
  }
  
  ]
  return (
   <>
      <div className='projects'>
        <div className='container'>
          <h1 style={{textAlign:"center",fontSize:"35px",color:" #3CCF4E",fontWeight:"800"}}>Projects</h1>
          <div className='content grid3'>
            {projects.map((item,index) => (
              <div className='box2' data-aos='flip-left'>
                <div className='img' data-aos='fade-up'>
                  <img src={item.cover} alt='' data-aos='fade-down'/>
                </div>
                <div className='text'>
                  <h3 data-aos='fade-right'>{item.title}</h3>
                  <p data-aos='fade-up-right'>{item.desc}</p>
                </div>
                <button className='project-btn'><a href={item.view}>View</a></button>
              </div>
            ))}
          </div>
        </div>
      </div>
   </>
  )
}

export default Projects
