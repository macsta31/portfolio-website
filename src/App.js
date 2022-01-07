import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Intro from './components/Intro'
import Projects from './components/Projects';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'



function App() {
  


  return (
    <div className='appContainer'>
      <Router>
        
      <Header />
      <Intro />
      <Routes> 
        <Route path="/" element={<About />} />
        <Route path="/projects"  element={<Projects />} />
      </Routes> 
      <Sidebar /> 
      </Router>
    </div>
  );
}

export default App;
