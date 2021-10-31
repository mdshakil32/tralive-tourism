import React from 'react';
import "./Contact.css"

const Contact = () => {
    return (
        <div className="container my-5">
            <h2 className="color-blue my-4">Get in Touch</h2>
            <div className="row">

            {/* contact form  */}
                <div className="col-md-6">
                    <form className="contact-form" >
                        <div className="my-2">
                            <textarea className=" form-control" rows="5" type="text" placeholder="Enter Message" />
                        </div>
                        <div className="my-2">
                            <input className=" p-3 form-control" type="text" placeholder="Enter Your Name" />
                            
                        </div>
                        <div className="my-2">
                            
                            <input className=" p-3 form-control" type="email" placeholder="Enter Email" />
                        </div>

                        <div className="my-2">
                            <input className=" p-3 form-control" type="text" placeholder="Enter Subject" />
                        </div>

                        <div className="my-2">
                            <input className="py-3 px-5 form-control btn btn-warning" type="submit" value="SEND" />
                        </div>
                    </form>
                </div>

                {/* contact address  */}
                <div className="offset-md-2 col-md-4">

                    <div className="d-flex my-3">
                        <div>
                            <p className="fs-2 text-muted me-4"><i className="fas fa-home "></i></p>
                        </div>
                        <div>
                            <h6>Buttonwood, California. </h6>
                            <h6 className="text-muted">Rosemead, CA 91770 </h6>
                        </div>
                    </div>

                    <div className="d-flex my-3">
                        <div>
                            <p className="fs-2 text-muted me-4"><i class="fas fa-tablet-alt"></i></p>
                        </div>
                        <div>
                            <h6>+1 253 565 2365</h6>
                            <h6 className="text-muted">Mon to Fri 9am to 6pm</h6>
                        </div>
                    </div>

                    <div className="d-flex my-3">
                        <div>
                            <p className="fs-2 text-muted me-4"><i class="far fa-envelope"></i></p>
                        </div>
                        <div>
                            <h6>support@colorlib.com</h6>
                            <h6 className="text-muted">Send us your query anytime!</h6>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Contact;