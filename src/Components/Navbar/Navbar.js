import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <>
           <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand ms-5" href="#home">Sarman</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <a className="nav-link active me-5" aria-current="page" href="#home">Home</a>
                            <a className="nav-link me-5" href="#about">About</a>
                            <a className="nav-link me-5" href="#project">Projects</a>
                            <a className="nav-link me-5" href="#contact">Contact</a>
                        </div>
                    </div>
                </div>
            </nav> 
        </>
    );
};

export default Navbar;