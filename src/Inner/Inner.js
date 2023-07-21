import React from 'react'
import Header from '../header/Header'
import ponting from "../Dhiya/girl12.jpg"
import tamanna from "../Dhiya/girl3.jpg"
import kajal from "../Dhiya/girl4.jpg"
import aishwarya from "../Dhiya/girl5.jpg"
import sherin from "../Dhiya/girl7.jpg"
import './Inner.css'
import Footer from '../Footer/Footer'



const Inner = () => {
  return (
    <div>
        

        <div className="yuvraj">
      <img src={ponting} />
      <h2>About</h2>
      </div>

       <br></br>
       <br></br>

      <div class="container">
          <h1 style={{textDecoration:"underline"}}>ABOUT US</h1>
          <p>Stylish Park Bridal Studio's focused on giving a natural and elegant transformation by enhancing the features and not going overboard with the makeup of her clients, giving them an experience worthy of a lifetime.With an expertise and more than 8 years of experience in this field.We provide good service and customer satisfaction is our topmost priority.

Inner Beauty is your job. We do the rest."</p>
     </div>
     <br></br><br></br>

    <div className='power'>
       <div className='meaning'>
       <img src={tamanna} />
       <img src={kajal} />
       <img src={aishwarya} />
       <img src={sherin} />
    </div> 
    

    <div className="sunny">
         <h5>"Be bold.Be Beautiful"</h5>
         <h3>BOOK AN APPOINTMENT</h3>
         <p>Call us : +91 7904733762 or fill out our online booking</p>

         <div className="btn-group btn-group-lg">
         <button class="btn btn-primary">Visit Our Saloon Now</button>
         <button class="btn btn-primary">Book An Appointment</button>
         </div>
      </div>
      </div>  
      <br></br><br></br>

      
    

    </div>
  )
}

export default Inner