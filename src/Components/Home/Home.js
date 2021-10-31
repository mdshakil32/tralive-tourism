import React, { useEffect, useState } from 'react';

import { useHistory } from 'react-router-dom';

import Banner from '../Banner/Banner';

import TravelService from '../TravelService/TravelService';
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

            <p className=" text-center MY-4 text-primary fw-bold">Check Our Best Promotional Tour</p>
            <h1 className=" text-center my-4">Ongoing Events</h1>
  
            <div className="row">

                {
                    places.map(place => <div
                        
                        key={place._id} 
                        className="col-md-4 "
                        >
                        <div className=" single-card">
                            <img  className="img-fluid rounded" src={place.image} alt="" />
                            <h3 className="mt-3">{place.title}</h3>
                            <p className="fw-bold ">${place.price} || <span className="text-danger">{place.days} Days</span></p>
                            
                            <p className="">{place.desc.slice(0,130)}...</p>
                            
                            <button onClick={()=> handleEvent(place._id) } className="btn btn-outline-dark my-4">Book Package</button>
                        </div>
                        </div> )
                }
            </div>
            </div>

            {/* travel service  */}
            <TravelService></TravelService>
            
        </div>
    );
};

export default Home;