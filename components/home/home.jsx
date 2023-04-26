import React from "react";
import image from "../../assets/fimg.png";
import image2 from "../../assets/fimg2.png";
import "./home.scss";
import back from "../../assets/bg.png";
import About from "../about/about";
import Projects from "../projects/projects";
import Skills from "../skills/skills";
import Contact from "../contact/contact";
import Footer from "../footer/footer";
const Home = () => {
  const width = window.innerWidth;
  function scrollHandler() {
    var element = document.getElementById('hidden');
  
    var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
    var elementHeight = element.offsetHeight;
    var scrollTop = document.documentElement.scrollTop;
    
    var opacity = 1;
    
    if (scrollTop > distanceToTop) {
      opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
    }
    
    if (opacity >= 0) {
      element.style.opacity = opacity;
    }}
  
  window.addEventListener('scroll', scrollHandler);
  return (
    <>
    <a id="home"></a>
    <div className="Home">
    <div className="Title-and-desc ">
      <div className="sub-title">Hi,I am an</div>
      <div className="Title">Web <br></br>Developer.</div>
      <div className="desc">An enthusiast Engineering student exploring new experiences...</div>
      {(width<=768) && <div className="email"><a href="mailto:manaspatidar170@gmail.com">manaspatidar170@gmail.com</a></div>}
    </div>

      <div className="Image">
       
        <img src={image2} alt="" className="img " id="hidden"></img>
       
      </div>
    </div>
    <About id='about'/>
    <Projects id='projects'/>
    <Skills id='skills'/>
    <Contact id='contact'/>
      </>
  );
};

export default Home;
