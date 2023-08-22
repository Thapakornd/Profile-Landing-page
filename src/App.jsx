import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Work from "./components/Work/Work";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <Hero />
        <About />
        <Work />
        <Footer />
      </div>
    </>
  );
}

export default App;
