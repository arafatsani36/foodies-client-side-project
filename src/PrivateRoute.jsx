import React, { useContext } from 'react';
import { AuthContext } from './Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

const PrivateRoute = ({children}) => {
    const {user, loding} = useContext(AuthContext);
    const location = useLocation();
   
    if(loding){
        return <Spinner animation="border" variant="dark" />
    }
    if(user){
        return children;
    }
    return <Navigate state={{from: location}} to='/login' replace></Navigate>
};

export default PrivateRoute;