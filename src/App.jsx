import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import "./App.css"
import Navbar from './Components/Navbar.jsx';
import Hero from './Pages/Hero.jsx';

export default function App() {
  return(
    <>
      <Navbar/>
      <Hero/>
    </>
  );
}