import './App.css';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div>
      <Header></Header>
      <About></About>
      <Projects />
      <Footer></Footer>
    </div>
  );
}

export default App;
