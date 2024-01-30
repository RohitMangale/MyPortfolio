import React from 'react'
import './Intro.css'
import './Ripple.scss'
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import dwn from "../../assets/dwn.png";
import pngaaa from "../../assets/mypic9.png";
import cv from "../../assets/Rohit_CV.pdf";
import Navbar from '../Navbar/Navbar';

const Intro = () => {
  return (
    <div id='home' className='intro'>

    <Navbar/>


      <ContentWrapper>

        <div className="header" >
          <div className="headerText">
            <h1>FULL-STACK WEB DEVELOPER </h1>
            <div className="Title myTitle">Rohit Mangle</div>
            <div className="headerPara">
              I'm a full-stack web developer and I work remotely from Mumbai.
            </div>
          </div>

          <div className="headerImg">

            <img className='me' src={pngaaa} alt="" />

            <a  href={cv} download="Rohit Mangale CV" className='cvBtn' >
              <img src={dwn} alt="" />
              CV
            </a>
          </div>
        </div>

      </ContentWrapper>


    </div>
  )
}

export default Intro
