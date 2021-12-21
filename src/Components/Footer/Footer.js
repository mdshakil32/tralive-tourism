import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css"

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">

                    {/* footer left content  */}
                    <div data-aos="fade-up" className="col-md-4 px-3">
                        <div >
                        <img className="nav-logo" src="https://i.ibb.co/T0sS9Rx/xlogo2-footer-png-pagespeed-ic-VOg-RFL1-W6n.webp" alt="" />
                        </div>
                        <p className="my-4">Land behold it created good saw after she'd Our set living. Signs midst dominion creepeth morning laboris nisi ufsit aliquip.</p>
                        <div className="d-flex social-media">
                            <Link to="/">
                                <img src="https://i.ibb.co/N2002HX/facebook-f-logo-2019.png" alt="" />
                            </Link>
                            <Link to="/">
                                <img src="https://i.ibb.co/YBJbcvt/sticker-png-social-media-computer-icons-button-application-blue-logo-thumbnail-removebg-preview.png" alt="" />
                            </Link>
                            <Link to="/">
                                <img src="https://i.ibb.co/VQdxX36/Instagram-logo-free-download-PNG-removebg-preview.png" alt="" />
                            </Link>
                            <Link to="/">
                                <img src="https://i.ibb.co/pwVZRH1/linkedin-logo-removebg-preview.png" alt="" />
                            </Link>
                        </div>
                    </div>

                    {/* footer middle content  */}
                    <div data-aos="fade-up" className="col-md-4">
                        <h4 className="text-white">Navigation</h4>
                        <ul className="list-unstyled">
                            <li >
                                <Link to="/" className="text-decoration-none">Home</Link>
                            </li>
                            <li>
                                <Link to="/" className="text-decoration-none">About</Link>
                            </li>
                            <li>
                                <Link to="/" className="text-decoration-none">Services</Link>
                            </li>
                            <li>
                                <Link to="/" className="text-decoration-none">My Orders</Link>
                            </li>
                            <li>
                                <Link to="/" className="text-decoration-none">Manage All Orders</Link>
                            </li>
                        </ul>
                    </div>

                    {/* footer right content  */}
                    <div data-aos="fade-up" className="col-md-4">
                        <h4 className="text-white">Contact Us</h4>
                        <p>76/A, Green Lane, Dhanmondi, NYC</p>
                        <p>demomail89@gmail.com</p>
                        <h4 className="text-warning">+10 (78) 738-9083</h4>
                    </div>
                </div>
            
            </div>
        </footer>
    );
};

export default Footer;