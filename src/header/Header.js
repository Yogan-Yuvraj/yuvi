import React from 'react'
import "./header.css"
import { NavLink } from 'react-router-dom'
import ponting from "../Dhiya/girl12.jpg"
import {Flip} from 'react-reveal'
import {Bounce} from 'react-reveal'


const Header = () => {
  return (
//     
<Bounce right>
     <div className='shelly'>
         
 
	<nav className="navbar navbar-expand-sm navbar-light">
	  <div className="container-fluid ">
	  <Flip><a className="navbar-brand " href="#" style={{color:"white"}}>Navbar</a></Flip>
		<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		  <span className="navbar-toggler-icon"></span>
		</button>
		<div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
		  <ul className="navbar-nav">
			<li className="nav-item">
			  <NavLink to="/" className="nav-link" >Home</NavLink>
			</li>
			<li className="nav-item">
			  <NavLink to="/inner" className="nav-link">About</NavLink>
			</li>		
      <li className="nav-item">
			  <NavLink to="/service" className="nav-link">Services</NavLink >
			</li>	
      <li className="nav-item">
			  <NavLink to="/bridal" className="nav-link">Bridal Makeup</NavLink>
			</li>	
      <li className="nav-item">
			  <NavLink to="/gallery" className="nav-link">Gallery</NavLink>
			</li>	
      <li className="nav-item">
			  <NavLink to="/contact" className="nav-link">Contact</NavLink>
			</li >	
			
			<li className="nav-item">
           <NavLink to="/course" className="nav-link">Course</NavLink>
		   </li>

		  </ul>		  
		</div>
	  </div>
	</nav>

     </div>  
	 </Bounce>    
         


     


      




    
  )
}

export default Header