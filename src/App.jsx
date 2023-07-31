import React from 'react'
import Intro from './components/Intro/Intro'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Skills from './components/Skills/Skills'
import Navbar from './components/Navbar/Navbar'


function App() {

  return (
    <div className="App">
    <Intro/>
    <About/>
    <Skills/>
    <Projects/>
    {/*

      <Contact/> 
    */}
      <Footer/>

     </div>
  )
}

export default App
