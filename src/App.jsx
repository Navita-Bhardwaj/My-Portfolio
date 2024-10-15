import PortfolioHeader from "./components/PortfolioHeader";
import "./App.css";
import PortfolioFooter from "./components/PortfolioFooter";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ContactUs from "./components/ContactUs";
import { useState } from "react";

function App() {
  const [selectedTab, setSelectedTab] = useState("home");

  return (
    <div className="portfolio-container">
      <div className="portfolio-content">
        <PortfolioHeader 
         selectedTab={selectedTab} 
         setSelectedTab={setSelectedTab}
         ></PortfolioHeader>
         <div id="home">{selectedTab === "home" && <Home />}</div>
        <div id="about"> {selectedTab === "about" && <About />}</div>
        <div id="projects">{selectedTab === "projects" && <Projects />}</div>
        <div id="skills">{selectedTab === "skills" && <Skills />}</div>
        <div id="contact"> {selectedTab === "contact" && <ContactUs />}</div>
        <PortfolioFooter></PortfolioFooter>
      </div>
    </div>
  );
}

export default App;
