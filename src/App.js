import {useEffect} from 'react'
// import Footer from './Footer'
// import Header from './Header'
import About from './components/About';
import Contact from './components/Contact'
import {Routes,Route} from "react-router-dom";
import Home from './components/Home';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Navbar from './components/Navbar'
import Wedding from './components/Wedding'
import Services from './components/Services'
import Footer from './components/Footer'
import GoToTop from './components/GoToTop'
import WeddingSingle from './components/WeddingSingle';
const  App = () => {
   useEffect(() => {
    AOS.init({duration:2000});
  },[]);
  return (
    <>
     <Navbar/>
     <GoToTop/>
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/destination-wedding" element={<Wedding />} exact />
        <Route path="/destination-wedding/:slug" element={<WeddingSingle />} />
        <Route path="/services" element={ <Services />} />
        <Route path="/contact" element={ <Contact />} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
