import './App.css'
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home'
import Products from "./pages/Products/Products"
import { HashRouter } from "react-router-dom";
import {  Route, Routes } from "react-router-dom";
import Main from './pages/Industries/Main';
import Pharma from './pages/Pharma/Pharma';
import About from './pages/AboutUs/About';
function App() {
  return (
    <>
    
      <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path='/industry' element={<Main/>}/>
        <Route exact path='/pharma' element={<Pharma/>}/>
        <Route exact path='/about' element={<About/>}/>

      </Routes>
    </HashRouter>
     
      
    </>
  )
}

export default App
