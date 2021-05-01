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
			<main className="header-container">
				<div className="inner-header d-flex justify-content-center">
					<div className="bg-dange">
						<img src={profile} alt="Profile" className=" profile-img" />
						<h3 className="mt-2">Hello! I'm Sarman Khurshid Alam</h3>
						<h4 className="mt-3">Programmer | Web Developer</h4>
						<div className="mt-4">
							<FontAwesomeIcon style={{ fontSize: '40px', marginRight: '20px' }} icon={faGithub} />
							<FontAwesomeIcon style={{ fontSize: '40px', marginRight: '20px' }} icon={faLinkedin} />
							<FontAwesomeIcon style={{ fontSize: '40px', marginRight: '20px' }} icon={faFacebook} />
                        </div>
                        <div className="mt-4">
                            <button style={{fontSize:'18px',color:"white"}} className="btn btn-info">Download Resume</button>
                        </div>
					</div>
				</div>
			</main>
		</header>
	);
};

export default Header;
