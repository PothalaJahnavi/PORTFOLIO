import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import srchout from '../assets/srchout.png'
import learnedze from '../assets/learnedze.jpg'
import './Experience.css'
const Experience = () => {
  const works=[
    {
      post:"React Developer Intern",
      image:srchout,
      name:"Srchout",
      text:"Developed frontend applications using react.Worked with api and  integrating them to the webapps.Worked with ionic to build android apps.Also played a major role in solving bugs related to the apps"
    },
    {
      post:"Web Developer Intern",
      image:learnedze,
      name:"Learnedze",
      text:"Developed client side applications.Worked on hosting the websites in linux server using nginx."
    }
  ]
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
<h1 style={{textAlign:"center",fontSize:"35px",color:"orange",fontWeight:"800"}}>My Works</h1>
      <div className='testimonials hero'>
    <div className='container'>
      <Slider {...settings}>
        {works.map((val) => (
          <div className='box'>

            <p data-aos='zoom-out-down'>{val.text}</p>
            <div className='img' data-aos='zoom-out-right'>
              <img src={val.image} alt=''/>
            </div>
            <h3 data-aos='zoom-out-left'>{val.name}</h3>
            <label data-aos='zoom-out'>{val.post}</label>
          </div>
        ))}
      </Slider>
    </div>
  </div>
  </>
  )
}

export default Experience
