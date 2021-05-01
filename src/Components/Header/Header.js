import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css';
import profile from '../../Image/Profile.JPG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faGithub,faLinkedin,faFacebook } from '@fortawesome/free-brands-svg-icons'

const Header = () => {
    return (
        <header >
            <Navbar></Navbar>
            <main className="header-container">
                <div className="inner-header d-flex justify-content-center">
                    <div className="bg-dange">
                        <img src={profile} alt="Profile" className=" profile-img"/>
                    <h3 className="mt-2">I'm Sarman</h3>    
                    <h4 className="mt-2">Programmer | Web Developer</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Dolorem modi perferendis itaque saepe officiis, magnam commodi laboriosam voluptatum vel minima ut.<br /> Deserunt, quos quasi? Nisi debitis deleniti consequuntur corrupti.<br /> Esse nostrum omnis deleniti expedita placeat, modi quod voluptatibus!<br /> Commodi sapiente odio corporis voluptate quod? Odit minus ratione consectetur rem at.<br />sapiente odio corporis voluptate quod? Odit minus ratione</p>    
                    <FontAwesomeIcon style={{fontSize:"40px",marginRight:"20px"}} icon={faGithub} />      
                    <FontAwesomeIcon style={{fontSize:"40px",marginRight:"20px"}} icon={faLinkedin} />      
                    <FontAwesomeIcon style={{fontSize:"40px",marginRight:"20px"}} icon={faFacebook} />      
                    
                </div>
                
            </div>
            </main>
            
            
        </header>
    );
};

export default Header;