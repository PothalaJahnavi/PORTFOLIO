import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Menu } from '@mui/icons-material'
import './Header.css'
const Header = () => {
  const [response, setResponse] = useState(false)
  return (
    <>
      <header>
        <div className="container flex">
          <div className={response ? "hideMenu" : "nav"}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/experience">Experience</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/profiles">Profiles</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/certifications">Certifications</Link>
          </div>
          <button className='toggle' onClick={() => setResponse(!response)}>
            <Menu className="icon" />
          </button>
        </div>
      </header>

    </>
  )
}

export default Header