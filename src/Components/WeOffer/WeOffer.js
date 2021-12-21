import React from 'react';
import "./WeOffer.css"

const WeOffer = () => {
    return (
        <div className="container my-5">
            <h1 data-aos="fade-up" className="common-h1 my-5 text-center">What We offer</h1>
            <div className="row">
                <div className="col-md-6">
                    <div data-aos="fade-left" className="row text-center">
                        <div className="col-md-6 ">
                        <div className="we-offer-card mx-1 my-3 shadow-lg">
                            <p className="fs-1 text-warning"><i className="fas fa-dollar-sign"></i></p>
                            <h4>Best Price Guarantee</h4>
                            </div>
                        </div>
                        <div className="col-md-6 ">
                        <div className="we-offer-card mx-1 my-3 shadow-lg">
                            <p className="fs-1 text-warning"><i className="fas fa-user-shield"></i></p>
                            <h4>Safe and Secure</h4>
                            </div>
                        </div>
                        <div className="col-md-6 ">
                            <div className="we-offer-card mx-1 my-3 shadow-lg">
                                <p className="fs-1 text-warning"><i className="fas fa-plane"></i></p>
                                <h4>Best Travel Agents</h4>
                            </div>
                        </div>
                        <div className="col-md-6 ">
                        <div className="we-offer-card mx-1 my-3 shadow-lg">
                            <p className="fs-1 text-warning"><i className="fas fa-directions"></i></p>
                            <h4>Travel Guidelines</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-right" className="col-md-6 p-2">
                    <h3 className="mb-4 mt-2">Get Adventure Experience</h3>
                    <p className="lh-lg">Adventure service average visitors eu volutpat. Sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. What is the pull of the ball tomorrow? No one needs to be pregnant with their partners. The ugly mass but the element of time but poverty.</p>
                    <div className="row">
                        <div className="col-md-6">
                            <ul className="fs-5 list-unstyled lh-lg">
                                <li><i class="fas fa-check-circle fs-4 text-primary"></i> Adventure Park</li>
                                <li><i class="fas fa-check-circle fs-4 text-primary"></i> Beauty Landscape</li>
                                <li><i class="fas fa-check-circle fs-4 text-primary"></i> Convinient Place</li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <ul className="fs-5 list-unstyled lh-lg">
                                <li><i class="fas fa-check-circle fs-4 text-primary"></i> Spot Nature Vibes</li>
                                <li><i class="fas fa-check-circle fs-4 text-primary"></i> Hiking Spot Adventure</li>
                                <li><i class="fas fa-check-circle fs-4 text-primary"></i> Canoeing Adventure</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default WeOffer;