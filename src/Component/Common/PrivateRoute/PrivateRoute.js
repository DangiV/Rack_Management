import React from 'react'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const user = JSON.parse(sessionStorage.getItem("userData"));
    const userToken = user ? user.token : null;
    return userToken ? children : <Navigate to="/" />;
}

export default PrivateRoute