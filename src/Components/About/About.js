import React from 'react';
import './About.css'
import codingImage from '../../Image/programming.jpg'

const About = () => {
    return (
        <section id="about" className="about-container p-5">
            <h3 className="text-center mt-4"><span className="text-info"> ABOUT </span> ME</h3>
            <div className="inner-about container mt-5">
                <div className="row  align-items-center justify-content-center">
                    <div className="col-md-5 col-12">
                        <div className="p-1">
                            <img src={codingImage} alt="" className="img-fluid about-image" />
                        </div>
                    </div>
                    <div className="col-md-7 col-12">
                        <h5 className="mb-2">FRONT-END DEVELOPER</h5>

                        <p>
                            Building state-of-the-art, easy-to-use, user-friendly websites and applications are truly a passion of mine. I love to take new challenges and I believe that honesty, hard work and passion will help me to grow myself.
                         </p>

                        <div className="row g-3 mt-4 information">
                            <div className=" col-md-6 col-12">
                                <p> <span className="text-info">Name:</span> Saraman Khurshid Alam</p>
                                <p> <span className="text-info">Education:</span> Graduated from the University of Rajshahi in Information and Communicaton Engineering</p>
                                <p> <span className="text-info">Email:</span> sarman7105@gmail.com</p>
                                
                            </div>
                            <div className="col-md-6 col-12" >
                                <p> <span className="text-info">Phone:</span> +880176-3930179</p>
                                <p> <span className="text-info">Address:</span>Rajshahi,Bangladesh</p>
                                <p> <span className="text-info">Hobby:</span> Coding | Movie</p>
                            </div>
                        </div>
                        <h3 className="text-secondary mt-2">Skills</h3>
                        <hr/>
                        <div className="row g-3 mt-4 skill">
                            
                            <div className="col-md-6 col-12">
                                <p> <span className="text-info">Language:</span> C/C++, C#, HTML5, CSS3, JavaScript, ES6, NodeJs</p>
                                <p> <span className="text-info">Frameworks/Library:</span> React.Js, Bootstrap5, Express.Js, Next.Js Asp.Net MVC</p>
                                <p> <span className="text-info"> Database:</span> MongoDB, MS SQL</p>
                                
                            </div>
                            <div className="col-md-6 col-12" >
                                <p> <span className="text-info">IDES:</span> VS Code, Visual Studio, Code Blocks, Android Studio</p>
                                <p> <span className="text-info">Hosting:</span> Github, Netlify, Firebase</p>
                                <p> <span className="text-info">Others:</span> Git, Redux, REST API, Firebase</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;