import React from 'react'
import './Footer.css'
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import dots from "../../assets/dotsl.png";

import { BiLogoGmail } from 'react-icons/bi';
import { FaLinkedinIn } from 'react-icons/fa';
import { TbBrandGithubFilled } from 'react-icons/tb';
import { AiFillInstagram } from 'react-icons/ai';
import { BsDiscord } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <div id='contact' className='footer gradient-bg-footer'>
      <div className="footerWrapper">

        <div className="follow">
          <div className="folText">
            <div className="Title fTitle" style={{ margin: '0', lineHeight: '1' }}>Contact me</div>
            <img src={dots} alt="" />
          </div>
          <div className="folIcons">

            <div>
              <a target='_blank' href='mailto:rohitmangale010@gmail.com'>
                <BiLogoGmail />
              </a>
              <a target='_blank' href="https://github.com/RohitMangale">
                <TbBrandGithubFilled />
              </a>

              <a className='hide' href="">
                <IoLogoWhatsapp />
              </a>
            </div>

            <div>
              <a target='_blank' href="https://www.linkedin.com/in/rohit-mangale-77214624a">
                <FaLinkedinIn />
              </a>
              <a href="">
                <BsDiscord />
              </a>
              <a className='hide' href="">
                <AiFillInstagram />
              </a>
            </div>


          </div>

        </div>

        <div className="footerLine" />

        <div className="footNav">
          <div className='footname'>Rohit Mangale</div>
          <div className="footLinks">

              <Link className="link" smooth  to="home">Home</Link>

              <Link className="link" smooth  to="about">About</Link>
              <Link className="link" smooth  to="skills">Skills</Link>

              <Link className="link" smooth  to="projects">Projects</Link>

              <Link className="link" smooth  to="contact" >Contact</Link>

          </div>
        </div>

        <div className="policies">
          <p>2024 © Rohit Mangale All rights reserved</p>


        </div>
      </div>
    </div>
  )
}

export default Footer
