import "./special-header.css";
import Articles from "./articles";
import Header from "./header";
import Landing from "./landing";
import Gallery from "./gallery";
import Features from "./features";
import TESTIMONIALS from "./testimiionls";
import TeamMembers from "./teamMembers";
import { Services } from "./services";
import Skills from "./skill";
import HowItWorks from "./how-work";
import Events from "./events";
import Pricing from "./pricing";
import { TopVideos } from "./top-videos";
import Stats from "./stats";
import Discount from "./Discount";
import Footer from "./footer";
function App() {
    return (
        <>
            <Header />
            <main>
                <Landing />
                <Articles />
                <Gallery />
                <Features />
                <TESTIMONIALS />
                <TeamMembers />
                <Services />
                <Skills />
                <HowItWorks />
                <Events />
                <Pricing />
                <TopVideos url="PL1Wxz8hJM8HlUKSD2A1PngkTqI_Ai0B3y" />
                <Stats />
                <Discount />
            </main>
            <Footer />
        </>
    );
}

export default App;
