import React from 'react';
import './Footer.css';

const Footer = () => {
	return (
		<footer id="contact" className="bg-dark p-5">
			<h3 className="text-center">
				{' '}
				<span className="text-info">CONTACT</span> ME
			</h3>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-md-6">
						<div className="mb-3">
							<label for="exampleFormControlInput1" className="form-label">
								Name
							</label>
							<input
								type="text"
								className="form-control"
								id="exampleFormControlInput1"
								placeholder="Your Name"
							/>
						</div>
						<div className="mb-3">
							<label for="exampleFormControlInput1" className="form-label">
								Email address
							</label>
							<input
								type="email"
								className="form-control"
								id="exampleFormControlInput1"
								placeholder="name@example.com"
							/>
						</div>
						<div className="mb-3">
							<label for="exampleFormControlTextarea1" className="form-label">
								Message
							</label>
							<textarea className="form-control" id="exampleFormControlTextarea1" rows="3" />
                        </div>
                        <div className="mb-3">
                            <button className="btn btn-info">SEND MESSAGE</button>
                        </div>
                        
                    </div>
                    <p className="text-center"> &#169; All rights reserved to Sarman Khurshid Alam</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
