import "./special-header.css"
import Articles from "./articles"
import Header from "./header"
import Landing from "./landing"
import Gallery from "./gallery"
import Features from "./features"
import TESTIMONIALS from "./testimiionls"
import TeamMembers from "./teamMembers"
import { Services } from "./services"
import Skills from "./skill"
import HowItWorks from "./how-work"
function App() {
  return <>
    <Header />
    <main>
      <Landing />
      <Articles />
      <Gallery />
      <Features />
      <TESTIMONIALS />
      <TeamMembers />
      <Services />
      <Skills/>
      <HowItWorks />
    </main>
  </>
}

export default App
