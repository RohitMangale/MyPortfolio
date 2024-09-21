import React from 'react'
import { Link } from 'react-scroll';
import './Navbar.css'


const Navbar = () => {
  return (
    <div className="navbar">

    <div className='myName' >Rohit Mangale</div>

    <div className="navlinks">
      
      <Link className="link" activeClass="active" smooth  to="home">Home</Link>
      <Link  className="link"  smooth  to="about">About</Link>
        <Link className="link" smooth  to="skills">Skills</Link>
        <Link className="link" smooth to="projects">Projects</Link>
        <Link className="link" smooth  to="contact" >Contact</Link>
    </div>

  </div>
  )
}

export default Navbar
