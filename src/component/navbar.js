import React, { Component } from 'react';
import {
   Link
} from 'react-router-dom';

class Header extends Component {
	render() {
		return(
			<nav className="navbar navbar-default navbar-fixed-top web-nav" id="web-nav">
            <div className="container">
               <div className="navbar-header">
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                     <span className="icon-bar"></span>
                     <span className="icon-bar"></span>
                     <span className="icon-bar"></span> 
                  </button>
                  <Link to="/" className="navbar-brand brand-name"><span>Ankit Sawardekar</span></Link>
               </div>
               <div className="collapse navbar-collapse" id="myNavbar"> 
                  <ul className="nav navbar-nav navbar-right web-links">
                     <li className="hvr-underline-from-center"><Link to="/"><span>Home</span></Link></li>
                     <li className="hvr-underline-from-center"><Link to="/about"><span>About</span></Link></li>
                     <li className="hvr-underline-from-center"><Link to="/"><span>Services</span></Link></li>
                     <li className="hvr-underline-from-center"><Link to="/"><span>Portfolio</span></Link></li>
                     <li className="hvr-underline-from-center"><Link to="/"><span>Contact</span></Link></li>
                  </ul>
               </div>
            </div>
         </nav>
		);
	}
}

export default Header;