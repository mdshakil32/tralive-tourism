import React, { useEffect, useState } from 'react';

import { useHistory } from 'react-router-dom';

import Banner from '../Banner/Banner';
import ResortFacilities from '../ResortFacilities/ResortFacilities';

import TravelService from '../TravelService/TravelService';
import WeOffer from '../WeOffer/WeOffer';
import "./Home.css"



const Home = () => { 
    const [places,setPlaces] = useState([]);
    const history = useHistory();

    useEffect(()=>{
        fetch('https://evening-depths-82308.herokuapp.com/places')
        .then(res => res.json())
        .then(data => {
            setPlaces(data)
        })
    },[])

    const handleEvent =(id)=>{
        history.push(`/booking/${id}`)
    }
    
    return (

        <div>
            {/* banner  */}
            <Banner></Banner>

            {/* ongoing events  */}
            <div className="container" id="events">

            <p data-aos="fade-down" className=" text-center MY-4 text-primary fw-bold">Check Our Best Promotional Tour</p>
            <h1 data-aos="fade-up" className=" text-center my-4">Ongoing Events</h1>
  
            <div id="events" className="row">

                {
                    places.map(place => <div
                        
                        key={place._id} 
                        className="col-md-4 "
                        >
                        <div data-aos="fade-up-right" className=" single-card">
                            <img  className=" img-fluid rounded" src={place.image} alt="" />
                            <h3 className="mt-3">{place.title.slice(0,13)}</h3>
                            <p className="fw-bold ">${place.price} || <span className="text-danger">{place.days} Days</span></p>
                            
                            <p className="">{place.desc.slice(0,120)}...</p>
                            
                            <button onClick={()=> handleEvent(place._id) } className="btn btn-info my-4 text-white">Book Package</button>
                        </div>
                        </div> )
                }
            </div>
            </div>

            {/* travel service  */}
            <TravelService></TravelService>

            {/* we offer  */}
            <WeOffer></WeOffer>
            <ResortFacilities></ResortFacilities>
            
        </div>
    );
};

export default Home;