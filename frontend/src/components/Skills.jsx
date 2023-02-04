import React from 'react'
import mongo from '../assets/mongo.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import jquery from '../assets/jquery.png';
import javascript from '../assets/javascript.png';
import node from '../assets/node.png';
import c from '../assets/c.png';
import cp from '../assets/cp.png';
import react from '../assets/react.png';
import './Skills.css';
const Skills = () => {
  const skill=[
    {
      url:c
    },
    {
      url:cp
    },
    {
      url:html
    },
    {
      url:css
    },
    {
      url:javascript
    },
    {
      url:node
    },
    {
      url:jquery
    },
    {
      url:react
    },
    {
      url:mongo
    }
  ]
  return (
    <div>
      <div className='container'>
<h1 style={{textAlign:"center",fontSize:"35px",color:" #3CCF4E",fontWeight:"800"}}>Skills</h1>  
<div className="all-skills">
  {skill.map((item,index)=>{
    return(
      <div className="one">
        <img src={item.url} alt="" data-aos='fade-up' />
      </div>
    )
  })}
</div>
</div>
    </div>
  )
}

export default Skills
