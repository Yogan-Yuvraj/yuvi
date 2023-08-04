import './App.css';
import Footer from './Footer/Footer';

import Bridal from './bridal/bridal';
import Gallery from './gallery/Gallery';
import Header from './header/Header';
import Icons from './Icons';
import Course from './course/Course';
import Contact from './contact/Contact';

import Service from './service/Service';
import Inner from './Inner/Inner';
import Home from './home/Home';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Scroll from './Scroll';





function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Header/>
    <Icons />
    <Scroll/>
    <Routes>
    
 
      
      <Route path='/inner' element={<Inner/>}/>
      <Route path='/' element={<Home/>}/>       
      <Route path='/service' element={<Service/>}/>       
      
      <Route path='/course' element={<Contact/>}/>
      <Route path='/contact' element={<Course/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/bridal' element={<Bridal/>}/>   
    
    
    </Routes>
    <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
