import logo from './logo.svg';
import './App.css';
import Header from './views/Header';
import Home from './Components/Home';
import Footer from './views/Footer';
import Hero from './Components/Hero';
import Contact from './Components/Contact';
import Gallery from './Components/Gallery';
import BlockA from './Components/BlockA';
import Chef from './Components/Chef';
import Event from './Components/Event';
import Testimonial from './Components/Testimonial';
import About from './Components/About';
import StateCounter from './Components/StateCounter';
import StaterMenu from './Components/StaterMenu';
import WhyUs from './Components/WhyUs';
import Item from './ECommerce/Item';

function App() {
  return (
    <>
    <Header/>
    <Item/>
    <Footer/>
      {/* <Header/>
      <Hero/>
      <About/>
      <WhyUs/>
      <StateCounter/>
      <StaterMenu/>

      <Testimonial/>
      <Event/>
      <Chef/>
      <BlockA/>
      <Gallery/>
      <Contact/>
      <Footer/> */}

      {/* start new page  */}
      {/* <Home/> */}
    </>
  );
}

export default App;
