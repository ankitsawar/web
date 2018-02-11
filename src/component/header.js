import React, { Component } from 'react';
import {
   Link
} from 'react-router-dom';

class Header extends Component {
	render() {
		return(
			<div className="header h100">
				<div className="header-wrp">
					<div className="header-wrp-wrp">
						<h2 className="intro-head">Welcome To My Website!</h2>
						<p className="intro-text">Its Nice To See you!</p>
						<span className="hvr-sweep-to-right"> 
							<Link to="/" className="btn btn-lg btn-web">Tell Me More</Link>
						</span>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;