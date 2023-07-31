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
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatum vitae nostrum, illo officia nemo eius minima provident harum rerum modi, hic eaque ea quidem optio. Sit eius necessitatibus ex neque, ad, dolore beatae dolorem vel expedita ipsam enim natus?</p>
        <Link to="contact" className="button">Contact Me</Link>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About
