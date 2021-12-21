import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import useFirebase from '../../hook/useFirebase';
import "./ManageAllOrder.css"

// load items 
const ManageAllOrder = () => {
    const [orders,setOrders] = useState([]);
    const [updatedOrder,setUpdatedOrder] = useState({});
    const {user} = useFirebase();
    const history = useHistory();

    useEffect(()=>{
        fetch("https://evening-depths-82308.herokuapp.com/orders")
        .then(res => res.json())
        .then(data => setOrders(data))
    },[]);

    // delete item 
    // const handleDelete =(id)=>{
    //     const url = `https://evening-depths-82308.herokuapp.com//orders/${id}`;
    //     fetch(url,{
    //         method:"DELETE",
    //     })
    //     .then(res => res.json())
    //     .then(data =>{
    //         console.log(data);
    //         if(data.deletedCount === 1){
    //             alert("Confirm delete");
    //             const remainigOrder = orders.filter(order => order._id !== id);
    //             setOrders(remainigOrder);
    //         }
    //     })

    // }

    // delete order 
    const handleDelete =(id)=>{
        fetch(`https://evening-depths-82308.herokuapp.com/orders/${id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data);
             if(data.deletedCount === 1){
                 alert("Confirm delete");
                 const remaining = orders.filter(order=> order._id !== id);
                 setOrders(remaining);
             }
        })
    }

    // click update 
    const clickUpdate=(data)=>{
        console.log(data);
        // const newData = {id:data._id,status:data.status,model:data.model};
        setUpdatedOrder(data);
    }

    // handle onchange 
    const handleOnChange=(e)=>{
        updatedOrder.status = e.target.value;
         console.log('updatedOrder',updatedOrder);
    }

     // save update 
    const saveUpdate=(e)=>{
        // console.log(updatedOrder)
        fetch(`https://evening-depths-82308.herokuapp.com/orders`,{
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(updatedOrder)
        })
        .then(res => res.json() )
        .then(data => {
            if(data.modifiedCount !==0){              
                fetch('https://evening-depths-82308.herokuapp.com/orders')
                .then(res => res.json())
                .then(data => {
                    if(data.length !== 0){
                        setOrders(data);
                        e.target.reset();
                        alert('Status Updated Successfully')
                    }
                    else{
                        alert('Sorry,Status Can not Update')
                    }
                })  
            }
        })
        
        e.preventDefault();
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
                                    <button onClick={()=> clickUpdate(order) } className="btn btn-info me-1 mb-1" data-bs-toggle="modal" data-bs-target="#exampleModal">Update</button>
                                    <button onClick={()=>handleDelete(order._id) } className="btn btn-danger" >Delete</button>
                                </td>
                            </tr>
                            )
                    }
                    
                </tbody>
            </table>


            {/* modal */}
             <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                        Package:  {updatedOrder.title} </h5>
                        {/*  */}
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <p className=''>Customer: {updatedOrder.name} </p>
                    <p className="fw-bold">Select Status</p>
                        <form  onSubmit={saveUpdate} >
                        <select onChange={handleOnChange}  className="form-select" aria-label="Default select example">
                            <option defaultValue>Select</option>
                            <option  value="pending">pending</option>
                            <option value="shipped">shipped</option>
                        </select>
                        <input  type="submit" className="btn btn-success mt-4" data-bs-dismiss="modal" />
                        </form>
                    
                </div>
                
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default ManageAllOrder;