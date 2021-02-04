import * as React from "react";
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home'
// import ScrollToTop from './components/ScrollToTop';
// import Tittle from './components/Tittle';
import About from './components/About';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ExtraCurricular from './components/ExtraCurricular'
// import Contact from './components/Contact';
// import CopyRight from './components/CopyRight';

function App() {

  return (
    <div id = "App">
      <Navbar pageWrapId={"page-wrap"} outerContainerId={"App"}/>
      <div id="page-wrap">
        <Home />
        <About />
        <Skills />
        <Resume />
        <Projects />
        <ExtraCurricular />
      </div>
      </div>
  );
}

export default App;
