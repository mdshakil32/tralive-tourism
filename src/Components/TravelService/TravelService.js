import React from 'react';

const TravelService = () => {
    return (
        // travel-service / FAQ 
        <div className="travel-service container my-5 py-3">
            
            <div className="row">

                <div className="col-md-12 text-center">
                    <h1 className="common-h1">Full range of travel service</h1>
                    <p className="common-p">FAQ</p>
                </div>

                <div className="col-md-6">
                <div className="accordion accordion-flush p-4 mt-3" id="accordionFlushExample">

                {/* accordion 1st item  */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Starts the automated process.

                        </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">The automated process starts as soon as your clothes go into the machine. Duis cursus, mi quis viverra ornare.</div>
                        </div>
                    </div>

                    {/* accordion end item  */}

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            The automated process starts.
                        </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">The automated process starts as soon as your clothes go into the machine. Duis cursus, mi quis viverra ornare.</div>
                        </div>
                    </div>

                    {/* accordion 3rd item  */}

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Automated process starts.
                        </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">The automated process starts as soon as your clothes go into the machine. Duis cursus, mi quis viverra ornare.</div>
                        </div>
                    </div>

                    {/* accordion 4th item  */}

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                            Process the automated magic.
                        </button>
                        </h2>
                        <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">The automated process starts as soon as your clothes go into the machine. Duis cursus, mi quis viverra ornare.</div>
                        </div>
                    </div>


                    </div>
                </div>
                <div className="col-md-6">
                    <div className="travel-service-img p-3">
                        <img className="img-fluid" src="https://i.ibb.co/7RnjVVR/xabout2-png-pagespeed-ic-FKuxbsbrr-T.webp" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TravelService;