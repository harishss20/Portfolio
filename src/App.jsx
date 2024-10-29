import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import "./App.css";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <About />
      <Projects />
      <Experience />
      <Footer />
    </>
  );
}

export default App;
