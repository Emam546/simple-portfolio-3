import "./special-header.css"
import Articles from "./articles"
import Header from "./header"
import Landing from "./landing"
import Gallery from "./gallery"
function App() {
  return <>
    <Header />
    <main>
      <Landing />
      <Articles />
      <Gallery />
    </main>
  </>
}

export default App
