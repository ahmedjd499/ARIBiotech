import './App.css';
import Brand from './components/Brand/Brand';
import Partners from './components/partners/Partners';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import CoProducts from './components/coproduits/coProducts';
import {  RouterProvider, createHashRouter } from 'react-router-dom';
import Store from './components/store/Store';

const router = createHashRouter([
  {
    path: "/*",
    element: <Home />,
    
    
  },{
    path: "/Accueil",
    element: <Home />,
    
    
  },
  {
    path: "/Co-Produits",
    element: <CoProducts />,
  },
  {
    path: "/Partners",
    element: <Partners />,
  },
  {
    path: "/E-Souk-Waste",
    element: <Store />,
  }
]);

function App() {
  return (
    <div className="App">
      <Brand />
      <RouterProvider router={router} />

      
     
    
      <Footer />
      

    </div>
  );
}

export default App;
