import React from "react";
import "./about.scss";
import { FaBookOpen } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { MdAutoGraph } from "react-icons/md";
const About = () => {
  return ( 
    <div className="about">
    <a id="about"></a>
      <div className="container">
        <div className="text">
          <span className="title">
            <span className="gt">&lt;</span>about 
            <span className="gt">&gt;</span>
          </span>
          <span className="desc">
            I am a learner also an Engineering student
          </span>
        </div>
        <div className="box-rf">
          <div className="box">
            <span className="line">
              <FaBookOpen size={20} />
              B.tech 2nd year student
            </span>
            <span className="line">
              <BsFillPersonFill size={20} />
              Extrovertly Introvert
            </span>
            <span className="line">
              <MdAutoGraph size={20} />
              Hard Working
            </span>
          </div>
          <div className="rf">
            <span className="tit">Random facts</span>
            <span className="fact">Drink a lot of tea</span>
            <span className="fact">Day Dreamer</span>
            <span className="fact">
              Love to eat, sometimes while cooking also
            </span>
            <span className="fact">Old school Thoughts</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
