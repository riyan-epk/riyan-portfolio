import './App.css'
import Intro from './components/Intro.jsx'
import AboutMe from './components/AboutMe.jsx'
import Objectives from './components/Objectives.jsx'
import Skills from './components/Skills.jsx'
import Education from './components/Education.jsx'
import Experience from './components/Experience.jsx'
import Portfolio from './components/Portfolio.jsx'
import Technical from './components/Technical.jsx'

function App() {
  return (
    <div className="cv-container">
      <Intro />
      <AboutMe />
      <Objectives />
      <Skills />
      <Technical />
      <Education />
      <Experience />
      <Portfolio />
    </div>
  )
}

export default App
