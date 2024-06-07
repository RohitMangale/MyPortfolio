import React from 'react'
import './Projects.css'
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import image1 from "../../assets/crowdfunding_mu.png";
import image2 from "../../assets/cinnetra.png";
import image3 from "../../assets/krypt.png";
import image4 from "../../assets/droneairgear1.png";
const Projects = () => {
  return (
    <div id='projects' className='projects gradient-bg-projects'>
      <div className='proWrapper'>
        <div className="Title proTitle" >My projects</div>

        <div className="proTab protab1" style={{ justifyContent:"start",}} >
          <img className='proImg1' src={image1} alt="" />
          <div className="tabText1">
            <a target='_blank' href='https://crowd-funding-frontend-xi.vercel.app/' className='tabTitle'>EazzyFundzz</a>
            <p>April 2024</p>
          </div>
        </div>

        <div className="proTab protab2 " >          
          <div className="proGap"/>
        
          <div className="tabText2">
            <a target='_blank' href='https://cinnetra.vercel.app/' className='tabTitle'>Cinnetra</a>
            <p>April 2023</p>
          </div>
          <img className='proImg2' src={image2} alt="" />
        </div>

        <div className="proTab protab3"   >
          <img className='proImg3' src={image3} alt="" />
          <div className="tabText3">
            <a target='_blank' href='https://kryptonite-five.vercel.app/' className='tabTitle'> Krypt </a>
            <p>May 2023</p>
          </div>
        </div>

        <div className="proTab" style={{alignItems:'end', justifyContent:"end"}}>          
          <div className="tabText4">
            <a target='_blank' href='https://droneairgear.com/'  className='tabTitle'>Droneairgear</a>
            <p>June 2023</p>
          </div>
          <img className='proImg4' src={image4} alt="" />
        </div>

      </div>
    </div>
  )
}

export default Projects
