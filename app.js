import React from "react";
import { BrowserRouter, Routes,Route} from "react-router-dom";
import "./styles/css/main.css";
import Home from "../src/components/home/home";
import Header from "./components/header/Header";
import About from "./components/about/about";
import Skills from "./components/skills/skills";
import Contact from "./components/contact/contact";
import Projects from "./components/projects/projects";
import Footer from "./components/footer/footer";
export default function App() {
    
  return <BrowserRouter>
    <Header></Header>
        <Routes>
            <Route path='/' element={<Home />}></Route>
             {/* <Route path='https://manaspatidar.netlify.app/about' element={<About />}></Route>
            <Route path='https://manaspatidar.netlify.app/skills' element={<Skills />}></Route> 
            <Route path='https://manaspatidar.netlify.app/contact' element={<Contact />}></Route> 
            <Route path='https://manaspatidar.netlify.app/projects' element={<Projects />}></Route>  */}
        </Routes>
        <Footer/>
    </BrowserRouter>
}
