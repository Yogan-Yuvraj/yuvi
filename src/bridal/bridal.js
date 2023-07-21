import React from "react";
import "./bridal.css";
import yogan from "../Dhiya/girl10.jpg";
import govalu from "../Dhiya/girl1.jpg";
import nesamani from "../Dhiya/girl2.jpg";
import Footer from "../Footer/Footer";
import Header from "../header/Header";


const Bridal = () => {
  return (
    <div>
      

    <div>

     <div className="yuvraj">
      <img src={yogan} />
      <h2>Bridal Gallery</h2>
      </div>

     </div>

      <div className="welcome">
        <h1>BRIDAL MAKE UP</h1>
        <h3>Category</h3>
        <br></br>

        <div className="btn-group btn-group-lg">
          <button class="btn btn-primary">Normal</button>
          <button class="btn btn-primary">HD</button>
          <button class="btn btn-primary">Water Proof</button>
          <button class="btn btn-primary">Glassy Makeup</button>
          <button class="btn btn-primary">Air Brush Makeup</button>
        </div>
      </div>

      <div className="foto">

      <img src={govalu} className="govalu" />
      <img src={nesamani} className="govalu" />
      <img src={yogan} className="govalu" />
      
      </div>  


      <div className="sun">
         <p>"Be as radiant as the sun"</p>

         <div className="btn-group btn-group-lg">
         <button class="btn btn-primary">Visit Our Saloon Now</button>
         <button class="btn btn-primary">Book An Appointment</button>
         </div>

      </div>

        


      </div>
  );
};

export default Bridal;
