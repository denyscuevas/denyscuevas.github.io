import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// import components
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import BlankSpace from './Components/BlankSpace';
document.title = "Denys Cuevas";
function App() {
  return (
    <div className="App">
        <Navbar />
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
        <BlankSpace/>

    </div>
  );
}

export default App;
