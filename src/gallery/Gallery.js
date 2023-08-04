import React from 'react'
import Header from '../header/Header'
import ponting from "../Dhiya/girl12.jpg"
import hayden from "../Dhiya/girl9.jpg"
import symonds from "../Dhiya/girl7.jpg"
import gilchrist from "../Dhiya/girl6.jpg"
import lee from "../Dhiya/girl5.jpg"
import watson from "../Dhiya/girl4.jpg"
import warner from "../Dhiya/girl3.jpg"
import bracken from "../Dhiya/girl2.jpg"
import ambani from "../Dhiya/setmake9.png"
import './gallery.css';
import Footer from '../Footer/Footer'
import Wobble from 'react-reveal/Wobble';


const Gallery = () => {
  return (
    <div>
        
     

     <div className="yuvraj">
     <img className='jing' src={ambani} /> 
      {/* <h2 className="mention" style={{background:"none",color:"white"}}>Gallery</h2> */}
      </div>
      <br></br>

      <div className="welcome">
        <h1>BRIDAL MAKE UP</h1>
        </div>
         
       <div class="container-sm">
        <div class="row " > 
  <div class="column ">
    <img src={hayden} style={{width:"100%"}} />
    <img src={gilchrist} style={{width:"100%"}}/>
    <img src={lee} style={{width:"100%"}}/>
    <img src={watson}style={{width:"100%"}} />
    <img src={warner} style={{width:"100%"}} />
    <img src={symonds} style={{width:"100%"}}/>
    <img src={bracken} style={{width:"100%"}}/>
  </div>
  <div class="column">
    <img src={bracken} style={{width:"100%"}} />
    <img src={bracken} style={{width:"100%"}} />
    <img src={hayden} style={{width:"100%"}} />
    <img src={symonds} style={{width:"100%"}} />
    <img src={warner} style={{width:"100%"}} />
    <img src={lee} style={{width:"100%"}} />
  </div>  
  <div class="column">
    <img src={lee} style={{width:"100%"}} />
    <img src={watson}  style={{width:"100%"}}/>
    <img src={warner}  style={{width:"100%"}}/>
    <img src={symonds}  style={{width:"100%"}}/>
    <img src={bracken} style={{width:"100%"}} />
    <img src={gilchrist} style={{width:"100%"}} />
    <img src={hayden} style={{width:"100%"}} />
  </div>
  <div class="column">
    <img src={symonds} style={{width:"100%"}} />
    <img src={lee}  style={{width:"100%"}}/>
    <img src={watson} style={{width:"100%"}} />
    <img src={bracken} style={{width:"100%"}} />
    <img src={hayden}  style={{width:"100%"}}/>
    <img src={gilchrist} style={{width:"100%"}} />
  </div>
</div>
</div>


<div className="sun">
         <p>"Be as radiant as the sun"</p>

         <div className="btn-group btn-group-lg">
         <button class="btn btn-primary">Visit Our Saloon Now</button>
         <button class="btn btn-primary">Book An Appointment</button>
         </div>
      </div>

     

    </div>
  )
}

export default Gallery;