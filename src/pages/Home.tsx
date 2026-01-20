import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Capabilities } from '../components/Capabilities'
import { Projects } from '../components/Projects'
import { Technology } from '../components/Technology'
import { Contact } from '../components/Contact'

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Capabilities />
      <Projects />
      <Technology />
      <Contact />
    </>
  )
}
