import React from 'react'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import About from './About';
import Experience from './Experience';
import Profiles from './Profiles';
import Projects from './Projects';
import Certifications from './Certifications';
import Contact from './Contact';
import Skills from './Skills';
import Main from './Home/Main';
import Footer from './Footer';
import Header from './Header';
const Pages = () => {
  return (
    <div>
       <Router>
        <Header/>
        <Routes>
        <Route exact path="/" element={<Main/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/experience" element={<Experience/>}></Route>
        <Route path="/skills" element={<Skills/>}></Route>
        <Route path="/profiles" element={<Profiles/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/certifications" element={<Certifications/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default Pages
