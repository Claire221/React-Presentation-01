
import './App.css';

import Navbar from './components/NavBar';
import Header from './pages/Header';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import {Route, Routes} from "react-router-dom"

function App() {

  return (
    <>
      <Header/>
      <About/>
      <Skills/>
      <Projects/>
      <div className="container">
          {/* <Routes>
            <Route path="/about" element ={<About />}/>
            <Route path="/projects" element ={<Projects />}/>
            <Route path="/info" element ={<Info />}/>
          </Routes> */}
      </div>

    </>
  );
}

export default App;
