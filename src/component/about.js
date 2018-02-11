import React, { Component } from 'react';


class About extends Component {
	render() {
		return(
			<section className="about sections">
				<div className="container text-center">
					<div className="row">
						<div className="col-md-2"></div>
						<div className="col-md-8">
							<h2 className="main-heading">LiL, About Me</h2>
							<img src="https://res.cloudinary.com/of10/image/upload/v1510295638/Ankit%20Sawardekar.jpg" alt="ankit sawardekar" className="img-circle" width="100px" height="100px"/>
							<p className="some-text">
								Hello, Thank you for making time to visit. 
								I am <em>Software Developer</em> based in <strong>INDIA</strong>, 
								with the focus on <strong>web technologies</strong>. 
								Fill your senses with my work on couple of projets, and find why should <u>HIRE ME</u>.
							</p>
						</div>
						<div className="col-md-2"></div>
					</div>
				</div>
			</section>
		);
	}
}

export default About;