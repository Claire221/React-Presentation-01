
import './App.css';
import Navbar from './components/NavBar';
import About from './pages/About';
import Projects from './pages/Projects';
import Info from './pages/Info';
import {Route, Routes} from "react-router-dom"

function App() {

  return (
    <>
      <Navbar/>

      <div className="container">
          <Routes>
            <Route path="/about" element ={<About />}/>
            <Route path="/projects" element ={<Projects />}/>
            <Route path="/info" element ={<Info />}/>
          </Routes>
      </div>
    </>
  );
}

export default App;
