import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Keyboards from "./pages/Keyboards.js";
import Projects from "./pages/Projects.js";
import Experiences from "./pages/Experiences.js";

function App() {
  return (
    <Router>
      <Sidebar className="sidebar"/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/experiences" element={<Experiences/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/keyboards" element={<Keyboards/>}></Route>
      </Routes>

    </Router>
      
  );
}

export default App;
