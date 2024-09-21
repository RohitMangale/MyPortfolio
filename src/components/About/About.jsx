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
        <p>I'm a passionate about creating visually appealing, high-performance web applications. With a strong foundation in software development and growing interest in data and machine learning, I'm eager to collaborate on innovative projects and deliver exceptional digital experiences.</p>
        <Link  smooth  to="contact" className="button">Contact Me</Link>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About
