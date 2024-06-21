import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Products from './Components/Products';
import Home from './modules/Home';
import {Routes , Route } from 'react-router-dom';
import Product from './modules/Product';

function App() {
  return (
    <div>
  <Header/>
  {/* <BrowserRouter> */}
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/products/:id' element={<Product/>}/>
  </Routes>
  {/* </BrowserRouter> */}
  <Footer/>
    </div>
  );
}

export default App;
