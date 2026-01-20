import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { ParticleField } from './components/ParticleField'
import { Cursor } from './components/Cursor'
import { Home } from './pages/Home'
import { Humanoid } from './pages/Humanoid'
import { HomeRobotics } from './pages/HomeRobotics'
import { IndustrialRobotics } from './pages/IndustrialRobotics'
import { HealthcareIT } from './pages/HealthcareIT'
import { FilmStudio } from './pages/FilmStudio'
import { FoundationModels } from './pages/FoundationModels'
import { RCMAutomation } from './pages/RCMAutomation'
import { MedicalCoding } from './pages/MedicalCoding'
import { SmartScheduling } from './pages/SmartScheduling'
import { AgenticAI } from './pages/AgenticAI'
import { Robotics } from './pages/Robotics'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen">
        {/* Noise overlay for texture */}
        <div className="noise-overlay" />

        {/* Custom cursor */}
        <Cursor />

        {/* Background particle field */}
        <ParticleField />

        {/* Main content */}
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Main Product Pages */}
            <Route path="/projects/humanoid" element={<Humanoid />} />
            <Route path="/projects/home-robotics" element={<HomeRobotics />} />
            <Route path="/projects/industrial-robotics" element={<IndustrialRobotics />} />
            <Route path="/projects/healthcare-it" element={<HealthcareIT />} />
            <Route path="/projects/film-studio" element={<FilmStudio />} />
            <Route path="/projects/foundation-models" element={<FoundationModels />} />
            {/* Legacy/Additional Healthcare Pages */}
            <Route path="/projects/rcm-automation" element={<RCMAutomation />} />
            <Route path="/projects/medical-coding" element={<MedicalCoding />} />
            <Route path="/projects/smart-scheduling" element={<SmartScheduling />} />
            <Route path="/projects/agentic-ai" element={<AgenticAI />} />
            <Route path="/projects/robotics" element={<Robotics />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
