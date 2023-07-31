import React from 'react'
import { Link } from 'react-scroll';


const Navbar = () => {
  return (
    <div className="navbar">

    <div className='myName' >Rohit Mangale</div>

    <div className="navlinks">
      <p>
        <Link activeClass="active" smooth spy to="home">Home</Link>
      </p>
      <p>
        <Link activeClass="active" smooth spy to="about">About</Link>
      </p>
      <p>
        <Link activeClass="active" smooth spy to="skills">Skills</Link>
      </p>
      <p>
        <Link activeClass="active" smooth spy to="projects">Projects</Link>
      </p>
      <p>
        <Link activeClass="active" smooth spy to="contact" >Contact</Link>
      </p>
    </div>

  </div>
  )
}

export default Navbar
