import React, { useState } from 'react';
import { useEffect } from 'react';
import useFirebase from '../../hook/useFirebase';

const MyOrders = () => {
    const [orders,setOrders] = useState([]);
    const {user} = useFirebase();
    const email = user.email;

    // get my items 
    useEffect(()=>{
        fetch(`https://evening-depths-82308.herokuapp.com/orders/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            
            if(data.length !== 0 ){
                setOrders(data)
            }          
        })
    },[user.email]);

    // delete an item 
    const handleDelete =(id)=>{
        const url = `https://evening-depths-82308.herokuapp.com/orders/${id}`;
        fetch(url,{
            method:"DELETE",
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.deletedCount === 1){
                alert("Confirm delete");
                const remainigOrder = orders.filter(order => order._id !== id);
                setOrders(remainigOrder);
            }
        })  
    }

    return (

        // my orderd items 
        <div className="container my-5">
            <h1 className="text-muted text-center mb-5  ">My Orders</h1>
            <div className="row">
                    {
                        orders.map(order =>
                            <div key={order._id} className="col-md-6 my-3">  
                                <div className="d-flex">
                                    <div className="w-50 p-1">
                                        <img className="img-fluid rounded" src={order.image} alt="" />
                                    </div>                                   
                                
                                    <div className=" w-50 p-1">
                                        <h4>Package: {order.title}</h4>
                                        <p className="fw-bold">User: {user.displayName}</p>
                                        <p>Email: {order.email}</p>
                                        <p>Status: {order.status} </p>
                                        
                                        <button onClick={()=>handleDelete(order._id) } className="btn btn-danger" >Delete Order</button>
                                        
                                    </div>
                                </div>
                            </div>)
                    }
            
            </div>
            
        </div>
    );
};

export default MyOrders;