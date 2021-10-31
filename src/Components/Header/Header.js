import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import "./Header.css"

const Header = () => {
    const {loginWithGoogle,user,error,Logout} = useAuth();
    return (
        <header className="shadow-lg  bg-white ">
        <div className="container">

            {/* navbar  */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                <img className="nav-logo" src="https://i.ibb.co/7JYjkcB/download.webp" alt="" /> </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                </li>

                <li className="nav-item dropdown">
                    {
                        user.email && <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dashboard
                    </Link>
                    }
                    
                    <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown">
                    
                        <li><Link className="dropdown-item" to="/manageAllOrder">Mange all order</Link></li>
                        
                        <li><Link className="dropdown-item" to="/addNewPlace">Add New Item</Link></li>
                    </ul>
                </li>
                
                <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
                </li>             

                <li className="nav-item">                    
                    <Link className="nav-link" to="/myOrders">My Orders</Link>
                </li>
                

                <li className="nav-item">
                {
                    !user.displayName?<button onClick={loginWithGoogle} className="nav-link btn btn-info text-white px-3">Login</button> :
                    <button onClick={Logout} className="nav-link btn btn-danger text-white px-3" >Logout</button>            
                }
                </li>

                {/* user name  */}
                {user.email && <li className="nav-item">
                    <p  className="nav-link text-warning fw-bold text-capitalize" >
                    {user.displayName } </p>
                </li> }
                
                
            </ul>          
            </div>
            </div>
        </nav>
    </div>
</header>
    );
};

export default Header;