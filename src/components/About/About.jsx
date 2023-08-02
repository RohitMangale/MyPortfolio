import React from 'react'
import './About.css'
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import abPic from "../../assets/img.png";
import circle from "../../assets/crop.png";
import { Link } from 'react-scroll';

const About = () => {
  return (
<div id='about' className="aboutContainer gradient-bg-welcome">
    <div className='aboutWrapper  '>
      <div className="about">
        <div className="aboutImg">
          <img src={abPic} alt="aboutImage" />
        </div>

        <div className="aboutText">
        <div className='Title abTitle'>About <br /> me</div>
        <p>I am Rohit Mangale, a web developer with expertise in front-end and back-end development. I create visually appealing and functional websites using HTML, CSS, JavaScript, and other modern web technologies. Check out my portfolio for a glimpse of my work!</p>
        <Link  smooth  to="contact" className="button">Contact Me</Link>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About
