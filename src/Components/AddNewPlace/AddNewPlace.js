import React, { useRef } from 'react';

const AddNewPlace = () => {
    const titleRef = useRef();
    const descRef = useRef();
    const priceRef = useRef();
    const daysRef = useRef();
    const imgRef = useRef();

    // onclick event to post data 
    const handleAddNew = (e)=>{
        const title = titleRef.current.value;
        const desc = descRef.current.value;
        const price = priceRef.current.value;
        const days = daysRef.current.value;
        const image = imgRef.current.value;
        const newPlace = {title,desc,image,price,days}

        fetch('https://evening-depths-82308.herokuapp.com/places',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(newPlace)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert('New item added successfully');
                e.target.reset();
            }
        })
        e.preventDefault();
    }
    return (
        // add item form 
        <div className="container my-5">
            <h1 className="text-center text-muted mb-5 ">Add New Place</h1>

            <div className="row">
                <div className="col-md-6 mx-auto">
                <form onSubmit={handleAddNew} >

                    <div className="mb-3">
                        <input ref={titleRef} type="text" className="form-control" placeholder="Title" /> 
                    </div>

                    <div className="mb-3">
                        <input ref={priceRef} type="text" className="form-control" placeholder="Price" /> 
                    </div>
                    
                    <div className="mb-3">
                        <input ref={daysRef} type="text" className="form-control" placeholder="Days" /> 
                    </div>

                    <div className="mb-3">
                        <textarea ref={descRef} type="text" className="form-control" placeholder="Description" /> 
                    </div>

                    <div className="mb-3">
                        <input ref={imgRef} type="text" className="form-control" placeholder="Image URL" /> 
                    </div>

                    <div className="mb-3">
                        <input className="btn btn-danger" type="submit" value="Add Item"  />
                    </div>
                        

                </form>
                </div>
            </div>

        </div>
    );
};

export default AddNewPlace;