import React from 'react'
import Header from '../header/Header'
import ponting from "../Dhiya/girl12.jpg"
import modi from "../Dhiya/girl14.jpg"
import stalin from "../Dhiya/girl14.jpg"

import annamalai from "../Dhiya/girl14.jpg"
import "./service.css";
import Footer from '../Footer/Footer'

const Service = () => {
  return (
    <div id="karuva">
      
       <div className="yuvraj">
      <img src={ponting} />
      <h2>Services</h2>
      </div>
      
      <br></br>
    <h1 style={{textDecoration:"underline"}}>OUR SERVICES</h1>

    <div class="container">
      <div class="container-section">

        <div clsss="card">
          <img src={modi} />
          <p>Facial</p>
          </div>

          <div clsss="card">
          <img src={stalin} />
          <p>Threading</p>
          </div>

          <div clsss="card">
          <img src={stalin} />
          <p className='card-text'>Threading</p>
          </div>

          <div clsss="card">
          <img src={annamalai} />
          <p className='card-text'>Mehandhi</p>
          </div>

          </div>
          </div>

          <div class="container">
      <div class="container-section">

        <div clsss="card">
          <img src={modi} />
          <p>Facial</p>
          </div>

          <div clsss="card">
          <img src={stalin} />
          <p>Threading</p>
          </div>

          <div clsss="card">
          <img src={stalin} />
          <p>Threading</p>
          </div>

          <div clsss="card">
          <img src={annamalai} />
          <p>Mehandhi</p>
          </div>

          </div>
          </div>

          <div class="container">
      <div class="container-section">

        <div clsss="card">
          <img src={modi} />
          <p>Facial</p>
          </div>

          <div clsss="card">
          <img src={stalin} />
          <p>Threading</p>
          </div>

          <div clsss="card">
          <img src={stalin} />
          <p>Threading</p>
          </div>

          <div clsss="card">
          <img src={annamalai} />
          <p>Mehandhi</p>
          </div>

          </div>
          </div>

          <div className="sun">
         <p>"Leave a little sparkle every where you go"</p>

         <div className="btn-group btn-group-lg">
         <button class="btn btn-primary">Visit Our Saloon Now</button>
         <button class="btn btn-primary">Book An Appointment</button>
         </div>
      </div>


    



        
      
    










    </div>
  )
}

export default Service