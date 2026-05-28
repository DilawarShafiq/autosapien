import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Products } from '../components/Products'
import { Services } from '../components/Services'
import { Capabilities } from '../components/Capabilities'
import { Projects } from '../components/Projects'
import { Technology } from '../components/Technology'
import { Testimonials } from '../components/Testimonials'
import { Contact } from '../components/Contact'

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <Services />
      <Capabilities />
      <Projects />
      <Technology />
      <Testimonials />
      <Contact />
    </>
  )
}
