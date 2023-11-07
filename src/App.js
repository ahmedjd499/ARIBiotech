import './App.css';
import Brand from './components/Brand/Brand';
import Navbar from './components/Navbar/Navbar' ;
import Partners from './components/partners/Partners';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import CoProducts from './components/coproduits/coProducts';

function App() {
  return (
    <div className="App">
      <Brand />
      <Navbar />
      <Home />
      <CoProducts />
      <Partners />
      <Footer />
      

    </div>
  );
}

export default App;
