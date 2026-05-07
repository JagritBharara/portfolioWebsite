import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Hero from './sections/Hero'
import Navbar from './components/Navbar'
import About from './sections/About'
import Experience from './sections/Experience'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Achievements from './sections/Achievements'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
