import Navbar from "./pages/Navbar";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="min-h-screen bg-[#0a0e1a] relative">
      <div className="fixed inset-0 mesh-gradient pointer-events-none" />
      <div className="relative z-10">
        <Navbar />
        <LandingPage />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
