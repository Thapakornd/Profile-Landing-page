import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Work from "./components/Work/Work";
import Footer from "./components/Footer/Footer";
import Stickbar from "./components/Stickbar/Stickbar";

function App() {
  return (
    <>
      <div className="app">
        <Stickbar />
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
