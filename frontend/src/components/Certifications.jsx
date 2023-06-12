import React from 'react'
import { useState } from 'react';
import './Certifications.css'
import html from "../assets/codeStdio.png";
import psb from "../assets/hk1.png";
import dsa from "../assets/dsa.jpg";
import pyml from "../assets/gl.png";
import css from "../assets/hk2.png";
import py from "../assets/ln1.png";
import jq from "../assets/ln2.png";
import pyb from "../assets/sl.png";
import icpc from '../assets/icpc.png'
import udemy from '../assets/udemy.png';
const Certifications = () => {
  const portfolio=[
    {
      id: 1,
      cover: psb,
      category: "Achievement",
      title: "Problem Solving Basic",
    },
    {
      id: 2,
      cover: html,
      category: "Course",
      title: "HTML",
    },
    {
      id: 3,
      cover: dsa,
      category: "Achievement",
      title: "Data Structures And algorithms",
    },
    {
      id: 3,
      cover: icpc,
      category: "Achievement",
      title: "The 2022 ICPC Asia Amritapuri First Round Online Programming",
    },
    {
      id: 4,
      cover: pyml,
      category: "Course",
      title:"Python For ML",
    },
    {
      id: 5,
      cover: css,
      category: "Achievement",
      title: "Css",
    },
    {
      id: 6,
      cover: py,
      category: "Course",
      title: "Python",
    },
    {
      id: 7,
      cover: jq,
      category: "Course",
      title: "JQuery",
    },
    {
      id: 8,
      cover: pyb,
      category: "Course",
      title: "Python For Beginers",
    },
    {id: 8,
    cover: udemy,
    category: "Course",
    title: "Full Stack Web Development",}
  

  ]
  const allCategory = ["all", "Course","Achievement"]
  const [list, setLists] = useState(portfolio)
  const [category, setCategory] = useState(allCategory)
  console.log(setCategory)

  const filterItems = (category) => {
    const newItems = portfolio.filter((item) => item.category === category)
    setLists(newItems)
    if (category === "all") {
      setLists(portfolio)
    }
  }
  
  return (
    <>
  <article>
<div className='container'>
<h1 style={{textAlign:"center",fontSize:"35px",color:"orange",fontWeight:"800"}}>Certifications</h1>  
<div className='catButton' style={{marginBottom:"30px"}}>
  {category.map((category) => (
              <button className='primaryBtn' onClick={() => filterItems(category)} >
                {category}
              </button>
            ))}
  </div>

  <div className='content grid3'>
  {list.map((item) => (
              <div className='box1' data-aos='fade-up'>
                <div className='img'>
                  <img src={item.cover} alt='' />
                </div>
                <div className='overlay'>
                  <h3 style={{color:"white",fontWeight:"700"}}>{item.title}</h3>
                  {/* <VisibilityOutlinedIcon /> */}
                </div>
              </div>
            ))}
  </div>
</div>
</article>
     
    </>
  )
}

export default Certifications
       

