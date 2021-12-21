import React from 'react';
import "./Banner.css"

const Banner = () => {
    return (
        <div className="mt-5" >
            <div className="container text-center banner-title">
                {/* banner title  */}
                <h1 data-aos="fade-up" className="common-h1">Lifelong Memmories just a <dd>few seconds away</dd> </h1>
                <p data-aos="fade-up" className="common-p">Let’s start your journey with us, your dream will come true</p>
                <button data-aos="fade-down">Explore Destinations</button>
            </div>

            {/* banner img  */}
            <div className="banner-img">
                <img data-aos="fade-up-right" className="img-fluid" src="https://i.ibb.co/C2t7dv4/xcar-png-pagespeed-ic-RMwq-CTkt-Un.webp" alt="" />
            </div>
        </div>
    );
};

export default Banner;