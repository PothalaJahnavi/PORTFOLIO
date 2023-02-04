import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <>
    <section className='contact'>
        <div className='container'>
         <h1 style={{textAlign:"center",fontSize:"35px",color:" #3CCF4E",fontWeight:"800"}}>Keep In Touch</h1> 
          <div className='content'>
              <form action='https://formspree.io/f/mnqynpke' method="POST">
                  <input type='text' name="name" placeholder='Name'  data-aos='flip-left'/>
                  <input type='email' name="email" placeholder='Email'  data-aos='flip-right'/>
                <input type="text" name="subject" placeholder='Subject'  data-aos='flip-up' />
                <textarea  id='' cols='20' rows='10' name="message"  data-aos='flip-down' ></textarea>
                <button className='contact-button' type='submit' data-aos='zoom-in-up' >Submit</button>
              </form>
            </div>
          </div>
        </section>
    </>  
    
  )
}

export default Contact
