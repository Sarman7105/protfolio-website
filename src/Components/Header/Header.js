import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css';
import profile from '../../Image/Profile.JPG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
	return (
		<header>
			 <Navbar />
			<main id="home"className="header-container">
				<div className="inner-header d-flex justify-content-center">
					<div style={{marginTop:"90px"}}>
						<img src={profile} alt="Profile" className=" profile-img" />
						<h3 className="mt-2">Hello! I'm Sarman Khurshid Alam</h3>
						<h4 className="mt-3">Programmer | Web Developer</h4>
						<div className="mt-4">
							<a
								href="https://github.com/Sarman7105"
								target="_blank"
								rel="noopener noreferrer">
								<FontAwesomeIcon style={{ fontSize: '40px', marginRight: '20px' }} icon={faGithub} />
							</a>
							<a
								href="https://www.linkedin.com/in/sarman-khurshid-a620b0207/"
								target="_blank"
								rel="noopener noreferrer">
								
								<FontAwesomeIcon style={{ fontSize: '40px', marginRight: '20px' }} icon={faLinkedin} />
							</a>
							<a
								href="https://www.facebook.com/sarmankhurshidalam.sochib" target="_blank"
								rel="noopener noreferrer">
								<FontAwesomeIcon style={{ fontSize: '40px', marginRight: '20px' }} icon={faFacebook} />
							</a>
							
                        </div>
						<div className="mt-4">
							<a
								href="https://drive.google.com/file/d/11JwPEVmUgna_PFI6KzoZg7gDX4UdgPDC/view?usp=sharing" target="_blank"
								rel="noopener noreferrer">
								<button style={{fontSize:'18px',color:"white"}} className="btn btn-info">Download Resume</button>
							</a>
                            
                        </div>
					</div>
				</div>
			</main>
		</header>
	);
};

export default Header;
