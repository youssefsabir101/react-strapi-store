import './App.css'
import ProductList from './components/ProductList'
import ProductDetails from './components/ProductDetails'
import Cart from './components/Cart'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage'
import Wishlist from './components/Wishlist';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element ={<HomePage />}/>
        <Route path="/products" element ={<ProductList />}/>
        <Route path="/cart" element ={<Cart />}/>
        <Route path="/products/:id" element ={<ProductDetails />}/>
        <Route path="/Wishlist" element ={<Wishlist />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
