import React from 'react'
import './Projects.css'
import ContentWrapper from "../ContentWrapper/ContentWrapper";
const Projects = () => {
  return (
    <div id='projects' className='projects gradient-bg-projects'>
      <div className='proWrapper'>
        <div className="Title proTitle" >My projects</div>

        <div className="proTab protab1" style={{ justifyContent:"start",}} >
          <img className='proImg1' src="https://img.freepik.com/premium-vector/modern-purple-fluid-liquid-landing-page-template_544963-808.jpg" alt="" />
          <div className="tabText1">
            <div className='tabTitle'>Project Name</div>
            <p>Aug 2022</p>
          </div>
        </div>

        <div className="proTab protab2 " >          
          <div className="proGap"/>
        
          <div className="tabText2">
            <div className='tabTitle'>Project Name</div>
            <p>Aug 2022</p>
          </div>
          <img className='proImg2' src="https://static.vecteezy.com/system/resources/previews/002/012/940/non_2x/corporate-business-services-flyer-template-free-vector.jpg" alt="" />
        </div>

        <div className="proTab protab3"   >
          <img className='proImg3' src="https://img.freepik.com/premium-vector/modern-business-flyer-design-template_583496-199.jpg" alt="" />
          <div className="tabText3">
            <div className='tabTitle'>Project Name</div>
            <p>Aug 2022</p>
          </div>
        </div>

        <div className="proTab" style={{alignItems:'end', justifyContent:"end"}}>          
          <div className="tabText4">
            <div className='tabTitle'>Project Name</div>
            <p>Aug 2022</p>
          </div>
          <img className='proImg4' src="https://themeforest.img.customer.envatousercontent.com/files/456669783/preview/04_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=def14bb0857632b500a4370009b71857" alt="" />
        </div>

      </div>
    </div>
  )
}

export default Projects
