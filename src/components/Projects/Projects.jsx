import React from 'react'
import './Projects.css'
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import droneairgear from "../../assets/droneairgear1.png";
import gpminvcell from "../../assets/gpminvcell1.png";
import cinnetra from "../../assets/cinnetra.png";
import krypt from "../../assets/krypt.png";
const Projects = () => {
  return (
    <div id='projects' className='projects gradient-bg-projects'>
      <div className='proWrapper'>
        <div className="Title proTitle" >My projects</div>

        <div className="proTab protab1" style={{ justifyContent:"start",}} >
          <img className='proImg1' src={gpminvcell} alt="" />
          <div className="tabText1">
            <a target='_blank' href='https://gpminnovationcell.com/' className='tabTitle'>gpminnovationcell</a>
            <p>March 2023</p>
          </div>
        </div>

        <div className="proTab protab2 " >          
          <div className="proGap"/>
        
          <div className="tabText2">
            <a target='_blank' href='https://cinnetra.vercel.app/' className='tabTitle'>Cinnetra</a>
            <p>April 2023</p>
          </div>
          <img className='proImg2' src={cinnetra} alt="" />
        </div>

        <div className="proTab protab3"   >
          <img className='proImg3' src={krypt} alt="" />
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
          <img className='proImg4' src={droneairgear} alt="" />
        </div>

      </div>
    </div>
  )
}

export default Projects
