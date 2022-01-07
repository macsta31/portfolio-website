import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Intro from './components/Intro'
import Projects from './components/Projects';



function App() {
  const onHover = () => {
  console.log('hover')
  }
  const unHover = () => {
    console.log('off')
  }


  return (
    <div className="App" style={{ backgroundColor: 'lightgrey'}}>
      <Header onMouseEnter={onHover} onMouseExit={unHover} />
      <Intro />
      <Projects />
      <Sidebar />
      
    </div>
  );
}

export default App;
