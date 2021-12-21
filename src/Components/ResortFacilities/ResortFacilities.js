import React from 'react';
import "./ResortFacilities.css";


const ResortFacilities = () => {

    const facilities = [
        {
            id:"1",
            name:"SPA center",
            title:"Unparalleled devotion to luxury",
            image:"https://i.ibb.co/nkdkwBH/services-1.jpg",
            size:" short"
        },
        {
            id:"2",
            name:"GYM center",
            title:"Care about results",
            image:"https://i.ibb.co/ZTsMNpR/services-2.jpg",
            size:"long"
        },
        {
            id:"3",
            name:"FITNESS center",
            title:"Your daily activities",
            image:"https://i.ibb.co/LYgHVm0/services-3.jpg",
            size:"short"
        },
        {
            id:"4",
            name:"BEAUTY salon",
            title:"Hair salons and spas",
            image:"https://i.ibb.co/dMjJ2bz/services-4.jpg",
            size:"long"
        },
        {
            id:"5",
            name:"RESTURANT",
            title:"We love different cultures",
            image:"https://i.ibb.co/rbJMmpY/services-5.jpg",
            size:"short"
        },
        {
            id:"6",
            name:"WEDDING hall",
            title:"Important unmemorable events",
            image:"https://i.ibb.co/3TgKdBT/services-6.jpg",
            size:"long"
        },
    ];

    console.log(facilities);
    return (
        <div className='container'>
            <h1 className='text-center'>Resort Facilities</h1>
            <p className='text-center'> With the best luxury spa, salon and fitness experiences</p>
            <div className="row">

            <div className="col-md-4 fisrt-column">
                <div className=' fisrt-column-div1'>
                    <h3> SPA center</h3>
                    <p>Unparalleled devotion to luxury</p>
                </div>

                <div className=' fisrt-column-div2'>
                    <h3>GYM center</h3>
                    <p>Care about results</p>
                </div>

            </div>
            <div className="col-md-4">

            </div>
            
            </div>
        </div>
    );
};

export default ResortFacilities;