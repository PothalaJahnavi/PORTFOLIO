import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import srchout from '../assets/srchout.png'
import learnedze from '../assets/learnedze.jpg'
import rajan from '../assets/rajan.png'
import inncircles from '../assets/inncircles.jpeg'
import './Experience.css'
const Experience = () => {
  const works = [
    {
      post: "Full Stack Developer ",
      image: inncircles,
      name: "Inncircles",
      text: "Collaborated on diverse projects, showcasing proficiency in MongoDB, Express.js, Angular, Node.js, and React Native frameworks. Applied problem-solving skills to deliver efficient and user-friendly solutions, solidifying a foundation for a dynamic career in full-stack development.eveloped performant and complex ui components.Fixed production website bugs, improving stability and gaining Software Lifecycle insights."
    },
    {
      post: "Web Developer Intern",
      image: rajan,
      name: "Rajan Business Ideas",
      text: "Built a single page web application for Rajan Business Ideas(Company main website) which is currently functional.Worked with the designer throughout the project.Worked on building webpages which includes a sidebar layout with various search filters,showing pdfs based on their filters.Worked with a team of 2 members."
    },
    {
      post: "React Developer Intern",
      image: srchout,
      name: "Srchout",
      text: "Developed frontend applications using react.Worked with api and  integrating them to the webapps.Worked with ionic to build android apps.Also played a major role in solving bugs related to the apps"
    },
    {
      post: "Web Developer Intern",
      image: learnedze,
      name: "Learnedze",
      text: "Developed client side applications.Worked on hosting the websites in linux server using nginx."
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
      <h1 style={{ textAlign: "center", fontSize: "35px", color: "orange", fontWeight: "800" }}>My Works</h1>
      <div className='testimonials hero'>
        <div className='container'>
          <Slider {...settings}>
            {works.map((val) => (
              <div className='box'>
                <p data-aos='zoom-out-down'>{val.text}</p>
                <div className='img' data-aos='zoom-out-right'>
                  <img src={val.image} alt='' />
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
