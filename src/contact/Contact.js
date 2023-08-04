import React from 'react'
import "./contact.css";
import Header from '../header/Header'
import ponting from "../Dhiya/girl12.jpg"
import kohli from "../Dhiya/setmake7.png"
import Footer from '../Footer/Footer';
import RubberBand from 'react-reveal/RubberBand';


const Contact = () => {
  return (
    <div>
       

       <div className="yuvraj">
       <RubberBand><img src={kohli} /></RubberBand>
      {/* <h2>Course</h2> */}
      </div>
    <br></br>
    <p style={{fontSize :"40px", color:"Red"}}>COURSE PLAN</p>

    
        
    
    
    <div className='plan'>
    
    <div className='basic' >   
         
        <ul style={{padding:"10px"}}>
            <li><p>Basic Course</p></li>
             <li>Threading</li>
             <li>Facial</li>
             <li>Pedicure</li>
             <li>Menicure</li>
             <li>Waxing</li>
             <li>Straight cut</li>
             </ul>
    </div>
    
    
        
    <div className='advance' >
    
    
        <ul style={{padding:"10px"}}>
             <li><p>Advance Course</p></li>
             <li>Feather cut</li>
             <li>Layer cut</li>
             <li>Step cut</li>
             <li>Aroma facial</li>
             <li>Treatment facials</li>
             <li>Pedi spa</li>
             </ul>
    
    </div>

    <div className='updation'>
    
    
        <ul style={{padding:"10px"}}>
             <li><p>Updation Course</p></li>
             <li>Facial using Machines</li>
             <li>Hair colouring definition</li>
             <li>Waterproof Makeup</li>
             <li>Airbrush Makeup</li>
             <li>Nail Art</li>
             <li>International Hair do</li>
              </ul>
        </div>
    
    

    

    </div>
<br></br>



    



    </div>
  )
}

export default Contact