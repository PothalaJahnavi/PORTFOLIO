import React from 'react'
import Home from './Home'
import About from '../About'
import Profiles from '../Profiles'
import Certifications from '../Certifications'
import Experience from '../Experience'
import Projects from '../Projects'
import Contact from '../Contact'
import Skills from '../Skills'
const Main = () => {
  return (
    <>
      <Home/>
      <About/>
      <Skills/>
      <Profiles/>
      <Certifications/>
      <Experience/>
      <Projects/>
      <Contact/>
      {/* <Footer/> */}
    </>
  )
}

export default Main
