import { lazy, Suspense } from "react";
import Header from "./components/Header";
import Particles from "./components/Particles";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Hero from "./pages/Hero";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin);

const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-primary-950 text-platinum-200">
      <Header />
      <Hero />
      <Suspense
        fallback={
          <div className="fixed top-0 left-0 z-20 flex items-center justify-center w-screen h-screen bg-primary-950">
            <span className="w-20 h-20 border-4 border-t-4 rounded-full border-blue-zodiac-200 border-t-blue-zodiac-500 animate-spin"></span>
          </div>
        }
      >
        <About />
        <Projects />
        <Contact />
        <div className="absolute top-0 left-0 w-full h-full">
          <Particles
            particleColors={["#b3b3b3d3"]}
            particleCount={250}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
      </Suspense>
    </main>
  );
}

export default App;
