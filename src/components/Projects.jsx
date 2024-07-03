import React from 'react'
import './Projects.css';
const Projects = () => {
  const projects = [
    {
      title: "Real-Time-Messenger",
      // cover: cred,
      Technologies: "Reactjs,Css,Javascript",
      desc: "Developed a responsive real-time messenger app using MERN stack and Socket.IO for instant communication, ensuring seamless and interactive messaging experiences,including user authentication for secure login using JWT web token as a bearer token.",
      view: "https://github.com/PothalaJahnavi/Messager",
    },

    {
      title: "Product Zone",
      // cover: product,
      desc: "Users can login,view products,add to cart,View cart items.Also implemented payment gateway using stripe.Only the admin will have the access to add new products along with their images which will be stored in the database as BASE64 string.",
      view: "https://github.com/PothalaJahnavi/ProductZone"
    },
    {
      title: "Sorting Visualizer",
      // cover: sorting,
      desc: "This is a user friendly website which helps to visualize sorting algorithms like bubble sort,selection sort,insertion sort,quick sort,merge sort and heap sort.It includes the features to set the speed of the sorting,select the type of sorting which we wish to visualize and a button to generate new array when required.",
      view: "https://visuals-123.netlify.app"
    },
    {
      title: "Admin Dashboard",
      // cover: dashboard,
      desc: "This is an admin dashboard with a sidebar to filter the data.I have used react echarts for displayong the charts. The dashboard can be viewed in both light mode and dark mode",
      view: "https://64871bc5259410323fb1498d--extraordinary-pastelito-c666dd.netlify.app/"
    },
    {
      title: "Editor",
      // cover: editor,
      desc: "This app works like a codeply. It helps us to write html , css and javascript code and see the output live.This app is built using reactjs and codemirror library",
      view: "https://web-dev-editor.netlify.app/"
    },

    {
      title: "CRED Clone",
      // cover: cred,
      Technologies: "Reactjs,Css,Javascript",
      desc: "Cloned Cred which has the most facinating Ui using Reactjs.Have used multiple libraries for some of the animations",
      view: "https://github.com/PothalaJahnavi/CRED-CLONE",
    },
    {
      title: "Library Management System",
      // cover: library,
      Technologies: "Mongodb,Ejs,Express",
      desc: "It is a full stack application which helps students to search their books online.It also has an admin Login pannel where he can add update and delete the book list",
      view: "https://github.com/PothalaJahnavi/library",
    },

    // {
    //   title:"Restaurant",
    //   cover:restaurant,
    //   Technologies:"Mongodb,Reactjs,Express,Nodejs,Css,api",
    //   desc:"It is a full stack application which has a landing page along with login and register. When the user logs in he can search the food items with the ingredient name and view them",
    //   view:"https://github.com/PothalaJahnavi/Restaurant",
    // },
    // {
    //   title:"Advice",
    //   cover:advice,
    //   Technologies:"React,apis",
    //   desc:"This application generates random advices.It is built using reactjs and apis",
    //   view:"https://take-random-advice.netlify.app/",
    // },
    // {
    //   title:"Digital Clock",
    //   cover:digital,
    //   Technologies:"Html,Css,Javascript",
    //   desc:"This shows us the current time,date and day.It is built using Java Script",
    //   view:"https://pothalajahnavi.github.io/clock.github.io/"
    // },
    // {
    //   title:"QR Code Generator",
    //   cover:qr,
    //   Technologies:"Nodejs,Ejs",
    //   desc:"It is an application helps us to share data from one device to another using a qr code.",
    //   view:"https://github.com/PothalaJahnavi/qr-code"
    // },
    // {
    //   title:"Target List",
    //   cover:target,
    //   Technologies:"Mongodb,Ejs,Css,Express",
    //   desc:"It is a crud application built using MERN.We can set and delete our targets when completed",
    //   view:"https://github.com/PothalaJahnavi/Target",
    // },
    //   {
    //     title:"Image Gallery",
    //     cover:gallery,
    //     Technologies:"Reactjs,api,Css",
    //     desc:"It contains search functionality to search for images we wanted and we can also download them..",
    //     view:"https://lucent-crostata-2fd533.netlify.app/",
    //   },

    // {
    //   title:"Weather App",
    //   cover:weather,
    //   desc:"This helps us to Know the weather of any place.It is built using Reactjs.",
    //   view:"https://any-place-weather-app.netlify.app/"
    // },


  ]
  return (
    <>
      <div className='projects'>
        <div className='container'>
          <h1 style={{ textAlign: "center", fontSize: "35px", color: "orange", fontWeight: "800" }}>Projects</h1>
          <div className='content grid3'>
            {projects.map((item, index) => {
              return (
                <div className="box" data-aos='flip-left' key={index}>
                  <h3 data-aos='fade-right' style={{ marginBottom: '20px' }}>{item.title}</h3>
                  <div className='content'>
                    <p data-aos='fade-up-right' style={{ fontWeight: '400', fontSize: '18px' }}>{item.desc}</p>
                  </div>
                  <button className='profile-button'>
                    <a href={item.view} target="_blank" rel="noopener noreferrer">View</a>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects
