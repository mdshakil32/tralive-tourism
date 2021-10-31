import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import useFirebase from '../../hook/useFirebase';
import "./ManageAllOrder.css"

// load items 
const ManageAllOrder = () => {
    const [orders,setOrders] = useState([]);
    const {user} = useFirebase();
    const history = useHistory();

    useEffect(()=>{
        fetch("https://evening-depths-82308.herokuapp.com/orders")
        .then(res => res.json())
        .then(data => setOrders(data))
    },[]);

    // delete item 
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
        // manage all order, showing on table 
        <div >
        <div className="container my-5">

            <h1 className="text-muted text-center mb-5  ">Manage All Order</h1>

            <table className="table table-modified">
                <thead>
                    <tr className="p-2">
                    
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Tour Package</th>
                    <th scope="col">Status</th>
                    <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order =>
                            <tr key={order._id} className="p-2">                 
                                <td data-label="Name" className="text-capitalize">{order.name}</td>
                                <td data-label="Email">{order.email}</td>
                                <td data-label="Tour Package">{order.title}</td>
                                <td data-label="Status">{order.status} </td>
                                <td data-label="Actions">
                                    <button onClick={()=>handleDelete(order._id) } className="btn btn-danger" >Delete</button>
                                </td>
                            </tr>
                            )
                    }
                    
                </tbody>
            </table>
                              
        </div>
        </div>
    );
};

export default ManageAllOrder;