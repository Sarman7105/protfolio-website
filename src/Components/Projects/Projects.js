import React from 'react';
import './Projects.css'

const Projects = () => {
    return (
        <div className="project-container p-5">
            <h3 className="text-center">MY <span className="text-info"> PROJECTS </span></h3>
            <div className="container mt-5">
                <div className="row g-5">
                    <div className="col-md-4">
                        <div className="p-3 project-card">
                            <div>
                                <img src="https://i.ibb.co/k1VxG0n/Event-Maker.png" alt="Event-Maker" className="img-fluid"></img>
                            </div>
                            <div className="mt-3">
                                <h3>Event Maker</h3>
                                <hr />
                                <p style={{color:'gray'}}> <strong>Technology Used:</strong> React,React Router,Firebase Authentication and Hosting, Stripe Payment Gateway, Express.Js, MongoDB, Heroku </p>
                            </div>
                            
                            <div className="d-flex justify-content-between mt-5">
                                <button className="btn btn-info me-2">Github</button>
                                <button className="btn btn-info">Live Site</button>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div className="p-3 project-card">
                            <div>
                                <img src="https://i.ibb.co/2Pn4pWv/Ema-Jhon-2.png" alt="Event-Maker" className="img-fluid"></img>
                            </div>

                            <div className="mt-3">
                                <h3>Ema-Jhon</h3>
                                <hr />
                                <p style={{color:'gray'}}> <strong>Technology Used:</strong> React,React Router,Firebase Authentication and Hosting, Stripe Payment Gateway, Express.Js, MongoDB, Heroku </p>
                            </div>
                            
                            <div className="d-flex justify-content-between mt-5">
                                <button className="btn btn-info me-2">Github</button>
                                <button className="btn btn-info">Live Site</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="p-3 project-card">
                            <div>
                                <img src="https://i.ibb.co/MNyHdGv/Book-valley.png" alt="Event-Maker" className="img-fluid"></img>
                            </div>

                            <div className="mt-3">
                                <h3>Book-Valley</h3>
                                <hr />
                                <p style={{color:'gray'}}> <strong>Technology Used:</strong> React,React Router,Firebase Authentication and Hosting, Stripe Payment Gateway, Express.Js, MongoDB, Heroku </p>
                            </div>
                            
                            <div className="d-flex justify-content-between mt-5">
                                <button className="btn btn-info me-2">Github</button>
                                <button className="btn btn-info">Live Site</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;