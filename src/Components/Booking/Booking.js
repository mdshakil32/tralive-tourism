import React, { useRef, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import useFirebase from '../../hook/useFirebase';

const Booking = () => {

    const {id}=useParams();
    const [place,setPlace] = useState({});
    const {user} = useFirebase();
    const history = useHistory();
    const addressRef = useRef();


    // load data by id 
    useEffect(()=>{
        fetch(`https://evening-depths-82308.herokuapp.com/places/${id}`)
        .then(res => res.json())
        .then(data => setPlace(data))
    },[]);


    // onclick booking event 
    const handleBooking=(e)=>{
        const address = addressRef.current.value;
        const title = place.title;
        const price = place.price;
        const image = place.image;
        const name = user.displayName;
        const email = user.email;
        const status = "pending";
        const newOrder = {name,email,title,price,address,image,status};
        console.log('newOrder',newOrder);

        fetch('https://evening-depths-82308.herokuapp.com/orders',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(newOrder)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert('Your order succesfully added');
                e.target.reset();
                history.push('/myOrders');    
            }
        })
        e.preventDefault();
    }
 
    return (
        
            <div className="container">
            <h1 className="text-center text-muted my-5">Book Your Package</h1>
            

            <div className="row">
                <div className="col-md-4">
                    <img src={place.image} alt="" className="img-fluid rounded" />
                </div>
                <div className="col-md-6 ">

                <form onSubmit={handleBooking} >

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Package</span>
                        <input defaultValue={place.title}  type="text" className="form-control" placeholder="Package Name"  /> 
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text">Price</span>
                        <input defaultValue={place.price}  type="text" className="form-control" /> 
                    </div>
                    
                    <div className="input-group mb-3">
                        <span className="input-group-text">User</span>
                        <input defaultValue={user?.displayName} type="text" className="form-control"  /> 
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text">Email</span>
                        <input defaultValue={user?.email} type="text" className="form-control"  /> 
                    </div>

                    <div className="input-group mb-3">
                    <span className="input-group-text">Address</span>
                        <textarea  ref={addressRef} type="text" className="form-control"  /> 
                    </div>

                    <div className="mb-3">
                        <input className="btn btn-danger" type="submit" value="Place Order"  />
                    </div>
                        

                </form>
                </div>
            </div>

        </div>

    );
};

export default Booking;