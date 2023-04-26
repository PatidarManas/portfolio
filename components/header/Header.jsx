import React , {useState} from 'react';
import "../header/header.scss";
import image from "../../assets/img.png";
import {BiMenuAltRight} from "react-icons/bi";
import {AiOutlineClose} from "react-icons/ai"
import {BsInstagram} from "react-icons/bs";
import {FiLinkedin} from "react-icons/fi";
const Header = () => {
    const [menu,setMenu] = useState(false);
    const width = window.innerWidth;

    function clicked(){
        setMenu(!menu);
        
    }
    
  return (
    <>
    {(width>768) && <div className='side-bar'>
        <div className="icons">
            <a href='https://www.instagram.com/_manas_patidar/' target="_blank"><BsInstagram className='icon' size={20} /></a>
            <a href='https://www.linkedin.com/in/manas-patidar-597b38228' target="_blank"><FiLinkedin className='icon' size={20}/></a>
            <span className='line'></span>
        </div>
        
    </div>}
    {(width>768) && <div className='side-bar-right'>
        <div className="right-bar">
            <div className='email'><a href="mailto:manaspatidar170@gmail.com">manaspatidar170@gmail.com</a></div>
            <span className='line'></span>
        </div>

    </div>}
    <header className='header'>
        <div className="left">
            <span className='left-img'>
                <img src={image}></img>
            </span>
            <a className='left-name' href='#home'>Manas Patidar</a>
        </div>
        
        {(width>768) && <div className='right'>
            <a className='right-btns' href='#about'><span className='lt'>&lt;</span> About <span className='lt'>&gt;</span></a>
            <a className='right-btns' href='#skills'><span className='lt'>&lt;</span> Skills <span className='lt'>&gt;</span></a>
            <a className='right-btns' href='#projects'><span className='lt'>&lt;</span> Projects <span className='lt'>&gt;</span></a>
            <a className='right-btns' href='#contact'><span className='lt'>&lt;</span> Contact <span className='lt'>&gt;</span></a>
            
        </div>}
        {!menu && (width<=768) && <button className='right-menu-icon' onClick={clicked}><BiMenuAltRight size={25}/></button>}
    </header>
        { menu && <div className='menu'>
            <button className='close'  onClick={clicked}><AiOutlineClose/>Close</button>
            <div className='btns'><a className='right-btns-menu' href='/#about' onClick={clicked}>About </a>
            <a className='right-btns-menu' href='/#skills' onClick={clicked}>Skills</a>
            <a className='right-btns-menu' href='/#projects' onClick={clicked}>Projects</a>
            <a className='right-btns-menu' href='/#contact' onClick={clicked}>contact</a>
            
            </div>
        </div>}
        </>
  )
}

export default Header