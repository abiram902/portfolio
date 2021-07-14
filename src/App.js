import Header from './Components/Header';
import './App.css';
import Welcome from './Components/Welcome';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <div id='welcome'>
      <Welcome />
      </div>
      <div id='projects'>

      <Projects />
      </div>
      <div id='contact'>

      <Contact />
      </div>
      {/* header component */}
    </div>
  );
}

export default App;
