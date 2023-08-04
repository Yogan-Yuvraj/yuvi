import React from "react";
import Header from "../header/Header";
import brett from "../Dhiya/girl6.jpg";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import "./course.css"
import {HiLocationMarker} from 'react-icons/hi'
import {HiMail} from 'react-icons/hi'
import {FaPhoneAlt} from 'react-icons/fa'
import Footer from "../Footer/Footer";

const Course = () => {
  return (  
    <div>
      

      <div className="yuvraja">

        <img className="title" src={brett} />

        <div className="info">
           <p style={{fontSize: "50px",textDecoration:"underline"}}>Contact Info</p><br></br>

           <h5 style={{fontSize: "30px"}}> <HiLocationMarker/> Address</h5>
           <p style={{fontSize: "20px"}}>16/F,1st Floor, Hope Vila, Aarthi Theatre Rd, near Y.M. Patty, Karunanidhi Nagar, Dindigul, Tamil Nadu 624001</p><br></br>

           <h5 style={{fontSize: "30px"}}><HiMail/>Email</h5>
           <p style={{fontSize: "20px"}}>stylishparkbridalstudio@gmail.com</p>
           <p style={{fontSize: "20px"}}>info@stylishpark.com</p><br></br>

           <h5 style={{fontSize: "30px"}}><FaPhoneAlt/>Phone</h5>
           <p style={{fontSize: "20px"}}>+91 7904733762</p>
           <p style={{fontSize: "20px"}}>+91 7604827071</p>
           


        </div>
        
      </div>

      <div className="info-cont">
           <p style={{fontSize: "50px"}}>Contact Info</p><br></br>

           <h5 style={{fontSize: "30px"}}> <HiLocationMarker/> Address</h5>
           <p style={{fontSize: "20px"}}>16/F,1st Floor, Hope Vila, Aarthi Theatre Rd, near Y.M. Patty, Karunanidhi Nagar, Dindigul, Tamil Nadu 624001</p><br></br>

           <h5 style={{fontSize: "30px"}}><HiMail/>Email</h5>
           <p style={{fontSize: "20px"}}>stylishparkbridalstudio@gmail.com</p>
           <p style={{fontSize: "20px"}}>info@stylishpark.com</p><br></br>

           <h5 style={{fontSize: "30px"}}><FaPhoneAlt/>Phone</h5>
           <p style={{fontSize: "20px"}}>+91 7904733762</p>
           <p style={{fontSize: "20px"}}>+91 7604827071</p>
           


        </div>
        
        <br></br>
      <div>
        <div class="container" className="label">
          <p style={{fontSize: "40px"}}>Get in Touch</p>

          <form>
            <div>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="email" placeholder="Name" />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="email" placeholder="Subject" />
              </Form.Group>

              <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                />
              </FloatingLabel>
              <br></br>
              <button class="btn btn-primary">Send Message</button><br></br>
            </div>
          </form><br></br>
          
          
        </div>
        <br></br>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.672179161037!2d77.97271067506827!3d10.368074966593031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00ab4ba0a67f8f%3A0xe8c929fa6a6e6e95!2sVirtual%20Technologies!5e0!3m2!1sen!2sin!4v1689329523431!5m2!1sen!2sin" height="450" style={{border:"0",width:"100%",margin:"auto"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      
      
    </div>
  );
};

export default Course;
