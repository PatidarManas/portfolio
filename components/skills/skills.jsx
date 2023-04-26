import React from "react";
import "./skills.scss"
const Skills = () => {
  return (
    <div className="skills">
    <a id="skills"></a>
      <div className="container">
        <div className="text">
          <span className="title">
            {" "}
            <span className="gt">&lt;</span>skills
            <span className="gt">&gt;</span>
          </span>
          <span className="desc">Skills are like Assets</span>
        </div>
        <div className="slide-bar">
        <div className="slide-bar-more">
            <span className="boxes">HTML</span>
            <span className="boxes">CSS</span>
            <span className="boxes">SCSS</span>
            <span className="boxes">C++ / C</span>
            <span className="boxes">JAVA SCRIPT</span>
            <span className="boxes">BOOTSTRAP</span>
            <span className="boxes">REACT JS</span>
            <span className="boxes">DATA STRUCTURES</span>
            <span className="boxes">ALGO</span>
            <span className="boxes">DESIGNING</span>
            <span className="boxes">BACK END DEVELOPMENT</span>
            </div>
        </div>
        <div className="achievements">
          <span className="achieve">&#9733; &#9733; on <a href="https://www.codechef.com/users/manaspatidar17" target="blank">Codechef</a></span>
          <span className="achieve">75+ Problems solved on<a href="https://auth.geeksforgeeks.org/user/manaspatidar170/" target="blank">GFG</a>(180+ points)</span>
          <span className="achieve">Web development course completed on<a href="https://www.udemy.com/" target="blank">Udemy</a></span>
        </div>
        <div className="pyramid">
              <span className="text t1">&#128519;</span>
              <span className="text t2">code</span>
              <span className="text t3">Intelectual</span>
              <span className="text t4">Communication</span>
              <span className="text t5">Learning power</span>
              <span className="text t6">Emotional quotient</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
