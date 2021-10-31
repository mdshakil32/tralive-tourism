import React from 'react';
import {Route,Redirect } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';

// private route 
const PrivateRoute = ({ children, ...rest }) => {
    const {user,isLoading} = useAuth();

    if(isLoading){
      // spinner for loading 
        return (<div className="d-flex justify-content-center py-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>)
    }

    return (
        <Route
        {...rest}
        render={({ location }) =>user.email?children : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }

        ></Route>
    );
};

export default PrivateRoute;