import './App.css';
import Brand from './components/Brand/Brand';
import Navbar from './components/Navbar/Navbar' ;
import Partners from './components/partners/Partners';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import Events from './components/event/Events';
import Home from './components/home/Home';

function App() {
  return (
    <div className="App">
      <Brand />
      <Navbar />
      <Home />
      <About />
      <Events />
      <Partners />
      <Footer />
    </div>
  );
}

export default App;
