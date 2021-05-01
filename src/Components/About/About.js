import React from 'react';
import './About.css'
import codingImage from '../../Image/programming.jpg'

const About = () => {
    return (
        <section className="about-container p-5">
            <div className="inner-about container">
                <div className="row  align-items-center justify-content-center">
                    <div className="col-md-5 col-sm-12">
                        <div className="p-1">
                            <img src={codingImage} alt="" className="img-fluid about-image" />
                        </div>
                    </div>
                    <div className="col-md-7">
                        <h3>FRONT-END DEVELOPER</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nesciunt sapiente expedita ratione molestiae eaque repudiandae voluptatibus, optio in nihil.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nesciunt sapiente expedita ratione molestiae eaque repudiandae voluptatibus, optio in nihil.</p>

                        <div className="d-flex">
                            <div className="me-3">
                                <p>Name: Saraman Khurshid Alam</p>
                                <p>Age: 25 Years</p>
                                <p>Email: sarman7105@gmail.com</p>
                                <button className="btn btn-info"> Download CV</button>
                            </div>
                            <div className="ms-3" >
                                <p>Phone: +880176-3930179</p>
                                <address> 76/2,Rajpara,Rajshahi,Bangladesh</address>
                                <p>Hobby: Coding | Movie</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;