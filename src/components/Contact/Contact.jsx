import React from 'react'
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import './Contact.css'
const Contact = () => {
  return (
    <div className='contact'>
    <ContentWrapper>
    <div className="Title" style={{textAlign:"center"}}>Contact me</div>
    <div className="form">
    <input type="text" placeholder='' />
    </div>
    
    </ContentWrapper>
    
    </div>
  )
}

export default Contact
