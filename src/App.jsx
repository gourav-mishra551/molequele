import './App.css'
import Contact from './pages/Contact/Contact';
import Industry from './pages/Industries/Industries';
import Home from './pages/Home/Home'
import Products from "./pages/Products/Products"
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/industry" element={<Industry />} />
        <Route exact path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
