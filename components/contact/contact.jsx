import React from 'react';
import "./contact.scss";
import {BsInstagram} from "react-icons/bs";
import {FiLinkedin} from "react-icons/fi";
const Contact = () => {
  
  return (
    <div className='contact '>
    <a id="contact"></a>
    <div className='container'>
        <div className='text'>
            <span className='title '> <span className="gt">&lt;</span>contact 
            <span className="gt">&gt;</span></span>
            <span className="desc">
            Let's start by a <a href='mailto:manaspatidar170@gmail.com'>Hii</a>
      </span>
        </div>
        <div className='form'>
            <h1>Contact Form</h1>
            <form action='https://formspree.io/f/mwkjlyaa' method='post'>
                <input type={'text'} name="Name" placeholder='Full Name' required></input>
                <input type={'email'} name="Email" placeholder='Email' required></input>
                <input type={'number'} name="No" placeholder='Contact Number(not mandatory)' ></input>
                <textarea name='Message' placeholder='Message' required></textarea>
                <button type='submit'>Send</button>
            </form>
        </div>
        <div className='social'>
        
            <span className='line'></span>
            <a href='https://www.instagram.com/_manas_patidar/' target="_blank"><BsInstagram className='icon' size={30}/></a>
            <a href='https://www.linkedin.com/in/manas-patidar-597b38228' target="_blank"><FiLinkedin className='icon' size={30}/></a>
        
        </div>
        </div>
        </div>
  )
}

export default Contact