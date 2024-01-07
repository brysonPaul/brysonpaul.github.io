import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import Home from "./pages/home/Home.js";
import About from "./pages/about-me/About.js";
// import Keyboard from "./pages/keyboards/Keyboard.js";
// import Projects from "./pages/past-projects/Projects.js";
// import Experiences from "./pages/experience/Experiences.js";

function App() {
  return (
    <Router>
      <Sidebar className="sidebar"/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>

    </Router>
      
  );
}

export default App;
