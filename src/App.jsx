import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Experience from "./components/Experience/Experience";
import Skillset from "./components/Skillset/Skillset";

function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <Hero />
        <Experience />
        <Skillset />
        <Content />
        <Footer />
      </div>
    </>
  );
}

export default App;
