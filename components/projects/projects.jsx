import React from 'react';
import "./projects.scss";
import p1 from "../../assets/p1.jpg";
import p2 from "../../assets/img.png"
const Projects = () => {
  
  return (
    <div className='projects'>
    <a id="projects"></a>
        <div className='container'>
            <div className='text'>
                <span className='title'> <span className="gt">&lt;</span>projects 
                <span className="gt">&gt;</span></span>
                <span className="desc">
                Turning Ideas into projects
          </span>
            </div>
            <div className='projects-detail'>
                
                <div className="project">
                    <div  className='number'>01</div>
                    <img id="image"src={p1} alt=""></img>
                    <a className='title' href='https://github.com/PatidarManas/Daily-journal' target="_blank">Daily journal</a>
                    <span className='description'>A web application to keep notes and things to remember
                    or can be called your personal diary<br></br>
                    A well structured project connected With Mongodb backend and use of React</span>
                </div>
                <div className='upcominng'>upcomming more...</div>
            </div>
        </div>
    </div>
  )
}

export default Projects