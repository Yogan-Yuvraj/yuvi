import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';
import {HiLocationMarker} from "react-icons/hi"
import {BsFillTelephoneFill} from "react-icons/bs"
import {AiOutlineMail} from "react-icons/ai"

const styl = {listStyleType: "none"}

const Footer = () => {
  return (
    <div className='colour'>

<div className="footer" class="container-fluid mt-3" >

    
       <div class="row" >
        <div className='footer-Col1' class="col-sm-3 p-3">
            <p style={{fontSize:25}}>About Us</p>
            <p>Stylish Park Bridal Studio's focused on giving a natural and elegant transformation by enhancing the features and not going overboard with the makeup of her clients, giving them an experience worthy of a lifetime.</p>
            
        
        </div>

       
       <div className='footer-Col2' class="col-sm-3 p-3"> 
       
        <p style={{fontSize:25}}>Quick Links</p>
       <ul>
         <li style={styl}><Link  className='aaduven' to="/">HOME</Link></li>
         <li><Link className='aaduven' to="/inner">ABOUT</Link></li>

         <li><Link className='aaduven' to="/service">SERVICES</Link></li>

         <li><Link className='aaduven' to="/bridal">BRIDAL MAKE UP</Link></li>

         <li><Link className='aaduven' to="/gallery">GALLERY</Link></li>

         <li><Link className='aaduven' to="/contact">CONTACT</Link></li>

         <li><Link className='aaduven' href="#">COURSE</Link></li>
         </ul>
        
       </div>   

       
       <div className='footer-Col3' class="col-sm-3 p-3">
       
       <p style={{fontSize:25}}>Contact Info</p>
       <ul>
        <li><p><HiLocationMarker/>16/F,1st Floor, Hope Vila, Aarthi Theatre Rd, near Y.M. Patty, Karunanidhi Nagar, Dindigul</p></li>
        <li><BsFillTelephoneFill/>+91 7904733762</li>
        <li>+91 7604827071</li>
        <li>+91 9677449742</li><br></br>

        <li><AiOutlineMail/>stylishpark@gmail.com</li>
        <li>info@stylishpark.com</li>
       </ul>

        
        
        </div>

        <div  className='footer-Col4' class="col-sm-3 p-3">
            
        <p style={{fontSize:25}}>Business Hour</p>
        <p>Mon-Sun      9AM-9PM</p>
        <hr class="style6"></hr>
        </div>

       </div>



 </div>

    <hr class="style6"></hr>
 
   <div class="row">
    <div class="col-sm-6 p-3">
        <p>@<i class="fa fa-copyright" aria-hidden="true"></i>copyright <i class="fa fa-copyright" aria-hidden="true"></i>StylishParkBridalStudio</p>
    </div>
    
    <div class="col-sm-6 p-3">
      <p>designed & developed by Yuvaraja</p>
    </div>

   </div>



    </div>
  )
}

export default Footer