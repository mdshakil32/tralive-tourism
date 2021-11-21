import React from 'react';

const TravelService = () => {
    return (
        // travel-service / FAQ 
        <div className="travel-service container my-5 py-3 ">
            
            <div className="row">

                <div className="col-md-12 text-center">
                    <h1 className="common-h1">Full range of travel service</h1>
                    <p className="common-p">FAQ</p>
                </div>

                <div className="col-md-6 mt-5">
                <div className="accordion  p-4 mt-3 shadow-lg" id="accordionFlushExample">

                {/* accordion 1st item  */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Starts the automated process.

                        </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">The automated process starts as soon as your clothes go into the machine. Duis cursus, mi quis viverra ornare.</div>
                        </div>
                    </div>

                    {/* accordion end item  */}

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            The automated process starts.
                        </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">The automated process starts as soon as your clothes go into the machine. Duis cursus, mi quis viverra ornare.</div>
                        </div>
                    </div>

                    {/* accordion 3rd item  */}

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Automated process starts.
                        </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">The automated process starts as soon as your clothes go into the machine. Duis cursus, mi quis viverra ornare.</div>
                        </div>
                    </div>

                    {/* accordion 4th item  */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            Process the automated magic.
                        </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                        <div className="accordion-body">The automated process starts as soon as your clothes go into the machine. Duis cursus, mi quis viverra ornare.</div>
                        </div>
                    </div>

                    

                    


                    </div>
                </div>
                <div className="col-md-6">
                    <div className="travel-service-img p-5">
                        <img className="img-fluid" src="https://i.ibb.co/7RnjVVR/xabout2-png-pagespeed-ic-FKuxbsbrr-T.webp" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TravelService;