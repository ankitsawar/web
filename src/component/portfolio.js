import React, { Component } from 'react';


class Portfolio extends Component {
	render() {
		return(
			<section className="about sections">
				<div className="container text-center">
					<div className="row">
						<h2 className="main-heading">Portfolio</h2>
						
						<div className="col-sm-4 web">
							<div className="portfolio-sec">
								<div className="portfolio">
									<div className="portfolio-wrp">
										<img src="/../../of10_members.png" className="img-responsive" alt="portfolio_of10_members"/>
									</div>
								</div>
								<div className="dis-info ">
									<div className="portfolio-wrp">
										<h2>Members Platform</h2>
										<p>Web App Development</p>
									</div>
								</div>
							</div>
						</div>

						<div className="col-sm-4 web">
							<div className="portfolio-sec">
								<div className="portfolio">
									<div className="portfolio-wrp">
										<img src="/../../e_report.png" className="img-responsive" alt="portfolio_e_report"/>
									</div>
								</div>
								<div className="dis-info ">
									<div className="portfolio-wrp">
										<h2>E-Report</h2>
										<p>Fron-End Development</p>
									</div>
								</div>
							</div>
						</div>

						<div className="col-sm-4 web">
							<div className="portfolio-sec">
								<div className="portfolio">
									<div className="portfolio-wrp">
										<img src="/../../of10_receptionist.png" className="img-responsive" alt="portfolio_receptionist"/>
									</div>
								</div>
								<div className="dis-info ">
									<div className="portfolio-wrp">
										<h2>Receptionist App</h2>
										<p>Web App Development</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Portfolio;