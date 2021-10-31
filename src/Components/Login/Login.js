import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hook/useAuth';

import "./login.css"

const Login = () => {
    const {loginWithGoogle,user,setUser,setIsLoading,error,Logout} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirectUri = location.state?.from || "/home"

    const handleGoogleLogin =()=>{
        loginWithGoogle()
        .then((result) => {
            setUser(result.user)
            setIsLoading(false)
            history.push(redirectUri) 
        
        }).catch((error) => {
            setIsLoading(false)
            console.log(error.message);
        });
    }
    return (
        // login box 
        <div className="container ">
            <div className="row px-2">
                <div className="col-md-5 mx-auto text-center login ">

                    {/* login form logo  */}
                    <div>
                        <img className="nav-logo" src="https://i.ibb.co/7JYjkcB/download.webp" alt="" />
                    </div>

                    <h2 className="my-4">Login with</h2>

                    {/* google login  */}
                    <div>
                        <button  onClick={handleGoogleLogin} className="">
                            <img src="https://i.ibb.co/yBWTQyX/download-2.png" alt="" />
                            Continue with google</button>
                        </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Login;