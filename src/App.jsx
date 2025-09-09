import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import Navbar from './Components/Navbar.jsx';
import Hero from './Pages/Hero.jsx';
import FacialTissue from './Pages/ProductsVarients/FaceTissue.jsx';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/facial-tissues' element={<FacialTissue />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}