import React, { useEffect, useState } from 'react'
import Intro from './components/Intro/Intro'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer'
import Skills from './components/Skills/Skills'
import Loader from './components/Loader/Loader'


function App() {


  const [isLoading, setIsLoading] = useState(true); // Initial loading state

  useEffect(() => {
    // Simulate loading time with a timeout
    const timeoutId = setTimeout(() => {
      setIsLoading(false); // Set loading to false after 1.5 seconds
    }, 2500);

    // Cleanup function to clear the timeout on component unmount
    return () => clearTimeout(timeoutId);
  }, []);

  return (
     <div className="App">
    { isLoading ? <Loader/> : <> 
     <Intro />
      <About />
      <Skills />
      <Projects />
      <Footer />
      </>} 
    </div>
  )
}

export default App
