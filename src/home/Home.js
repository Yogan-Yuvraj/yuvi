import React from 'react'
import Header from '../header/Header'
import Footer from '../Footer/Footer'
import ponting from "../Dhiya/girl12.jpg"
import mehana from "../Dhiya/girl9.jpg"
import bavana from "../Dhiya/girl7.jpg"
import tamanna from "../Dhiya/girl3.jpg"
import kajal from "../Dhiya/girl4.jpg"
import goyyala from "../Dhiya/setmake4.png"
import aishwarya from "../Dhiya/girl5.jpg"
import sherin from "../Dhiya/girl7.jpg"
import './home.css'
import {Zoom} from 'react-reveal'



const Home = () => {
  return (
    <section id="home">
     
     
     <div className="yuvraj">
     <Zoom><img src={goyyala} /></Zoom>
     {/* <h2>Home</h2> */}
     </div>
     <br></br>
  
     
    <div className='govaalu' class="container">
    <div class="row">
    <div className='nesamani' class="col-sm-6">
      <h1 style={{fontFamily:"Comic Sans MS"}}>Welcome To</h1>
      <h1 style={{fontFamily:"Comic Sans MS"}}>Stylish Park</h1><p style={{fontFamily:"Comic Sans MS"}}>BRIDAL STUDIO</p>
      <p style={{fontFamily:"Bradley Hand"}}>The salon promises to offer a contemporary atmosphere for all its clients. From bridal makeup, hair styling and cutting to blow dry and hair coloring, you can choose from these services offered by Stylish Park Bridal Studio.</p>
      <p style={{fontFamily:"Bradley Hand"}}>"You are entering into a stress free zone.
Welcome to our beauty salon we make you beautiful."</p>
    </div>
    
    {/* <div className='murugesan'> */}
    <img src={mehana} className='bat' class="col-sm-3"/>
    <img src={bavana} className='bat' class="col-sm-3"/>
    {/* </div> */}
  
    </div>
    
    </div>
    

    <br></br><br></br>

    <div className='power'>
       <div className='meaning'>
       <img src={tamanna}/>
       <img src={kajal}/>
       <img src={aishwarya} />
       <img src={sherin}/>
    </div> 

    <div className="sunny" class="col-sm-4">
         <h3 style={{fontFamily:"Comic Sans MS"}}>Beauty awankens the soul to act</h3>
         <p style={{fontFamily:"Bradley Hand"}}>We are going to enter our fifth anniversary to our salon. It's ours salon wow .. Proud to say 250+ customers in 6 months got bridal makeover. It's too hard but happy to see our salon. On this occasion I welcome you all to come and get offer prices for facial, pedicure and menicure, Hair spa , threadning.</p>
         </div>
      </div>
<br></br>
      <div>

        <div className='decor'>
         <h3>Our Services</h3>
         <br></br>
         
         <div class="row">
         <div class="col-sm-4">
         <h3>Facial</h3>
         <p>Facial involves deep cleansing of the pores, exfoliation and removal of dead skin and treating basic skin with the help of massage.</p>
         <br></br>
       
         <h3>Haircut</h3>
         <p>Cut your dead ends for growth and we are not talking about hair.</p>
         </div>

         <div class="col-sm-4">
         <h3>Bridal Make Up</h3>
         <p>Makeup can make a woman look more beautiful at every age.</p>
         <br></br>
         <h3>Spa</h3>
         <p>The greatest gift to yourself is a little bit of attention.</p>
         </div>

        <div class="col-sm-4">
        <h3>Pedicure & Medicure</h3>
        <p>Your Hands and feet never take a day off so make sure you treat them at the Stylish Park Bridal Studio.</p>
        <br></br>
        <h3>Massage</h3>
        <p>Taking care of your body starts with taking time to give our muscles the attention they deserve.</p>
        </div>
        </div>

        <div className="btn-group btn-group-lg">
         <button class="btn btn-primary">See More Services</button>
         </div>

        </div>
                    </div> 


                    <div className="sun">
         <p>"We want you to look fabulous"</p>

         <div className="btn-group btn-group-lg">
         <button class="btn btn-primary">Visit Our Saloon Now</button>
         <button class="btn btn-primary">Book An Appointment</button>
         </div>
      </div>
    

    </section>
  )
}

export default Home