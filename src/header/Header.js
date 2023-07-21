import React from 'react'
import "./header.css"
import { NavLink } from 'react-router-dom'
import ponting from "../Dhiya/girl12.jpg"


const Header = () => {
  return (
//     
      
     <div>
         
 
	<nav class="navbar navbar-expand-sm navbar-light bg-success">
	  <div class="container-fluid ">
		<a class="navbar-brand " href="#">Navbar</a>
		<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		  <span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
		  <ul class="navbar-nav ">
			<li class="nav-item">
			  <NavLink to="/" class="nav-link active" >Home</NavLink>
			</li>
			<li class="nav-item">
			  <NavLink to="/inner" class="nav-link" >About</NavLink>
			</li>		
      <li class="nav-item">
			  <NavLink to="/service" class="nav-link" >Services</NavLink >
			</li>	
      <li class="nav-item">
			  <NavLink to="/bridal" class="nav-link">Bridal Makeup</NavLink>
			</li>	
      <li class="nav-item">
			  <NavLink to="/gallery" class="nav-link">Gallery</NavLink>
			</li>	
      <li class="nav-item">
			  <NavLink to="/contact" class="nav-link">Contact</NavLink>
			</li>	
      <NavLink to="/course">Course</NavLink>

		  </ul>		  
		</div>
	  </div>
	</nav>

     </div>      
         


     


      




    
  )
}

export default Header