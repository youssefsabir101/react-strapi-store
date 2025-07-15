import './App.css'
import Products from './components/products/Products';
import ProductDetails from './components/ProductDetails'
import Cart from './components/cart/Cart'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import HomePage from './components/home/HomePage'
import StoreContext from './hooks/storeContext';
import { useEffect, useState } from 'react';
import Faq from './components/staticPages/Faq';
import ContactUs from './components/staticPages/ContactUs';
import About from './components/staticPages/About';
import Account from './components/account/Account';
import Checkout from './components/cart/Checkout';
import PageNotFound from './components/staticPages/PageNotFound';
import BackToTopButton from './components/back-to-top-button'
import WhatsAppButton from "./components/whatsapp-button"

function App() {
  const [filter, setFilter] = useState("/api/products?populate=*")
  const [selectedCategories,setSelectCategories] = useState([]);
  return (
    <>
    <StoreContext.Provider value={{filter, setFilter, selectedCategories, setSelectCategories}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element ={<HomePage />}/>
          <Route path="/products" element ={<Products />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contactus' element={<ContactUs />}/>
          <Route path="/faq" element ={<Faq />}/>
          <Route path="/cart" element ={<Cart />}/>
          <Route path="/products/:id" element ={<ProductDetails />}/>
          <Route path="/account" element ={<Account />}/>
          <Route path="/checkout" element ={<Checkout />}/>
          <Route path="/PageNotFound" element ={<PageNotFound />}/>
        </Routes>
      </BrowserRouter>
      <BackToTopButton />
      <WhatsAppButton />
    </StoreContext.Provider>
    </>
  )
}

export default App
