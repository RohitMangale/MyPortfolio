import React from 'react'
import { Link } from 'react-scroll';
import './Navbar.css'


const Navbar = () => {
  return (
    <div className="navbar">

    <div className='myName' >Rohit Mangale</div>

    <div className="navlinks">
      <p>
        <Link activeClass="active" smooth  to="home">Home</Link>
      </p>
      <p>
        <Link activeClass="active" smooth  to="about">About</Link>
      </p>
      <p>
        <Link activeClass="active" smooth  to="skills">Skills</Link>
      </p>
      <p>
        <Link activeClass="active" smooth to="projects">Projects</Link>
      </p>
      <p>
        <Link activeClass="active" smooth  to="contact" >Contact</Link>
      </p>
    </div>

  </div>
  )
}

export default Navbar
