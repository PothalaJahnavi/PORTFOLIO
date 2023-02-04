import React from 'react'
import { LinkedIn, Facebook, Twitter, Instagram,GitHub } from "@mui/icons-material"
import './Footer.css';
const Footer = () => {
  const social = [
    {
      icon: <GitHub/>,
      link:"https://github.com/PothalaJahnavi"
    },
    {
      icon: <LinkedIn/>,
      link:"https://www.linkedin.com/in/pothala-jahnavi-8b2a4622a/"
    },
    {
      icon: <Facebook />,
      link:"https://www.facebook.com/profile.php?id=100084768461962"
    },
    {
      icon: <Twitter />,
      link:"https://twitter.com/PothalaJahnavi"
    },
    {
      icon: <Instagram />,
      link:"https://www.instagram.com/pothala_jahnavi/?next=%2F"
    },
  ]
  return (
    <>
    <footer>
      {social.map((item) => (
        <>
        <a href={item.link}><i data-aos='zoom-in'>{item.icon}</i> </a>
        </>
      ))}
      <p data-aos='zoom-in'>@Copywrites Jahnavi ❤️ 2023</p>
    </footer>
  </>
  )
}

export default Footer
