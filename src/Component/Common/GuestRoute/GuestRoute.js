import React from 'react'
import { Navigate } from 'react-router-dom';

const GuestRoute = ({ children }) => {
    const user = JSON.parse(sessionStorage.getItem("userData"));
    return user ? <Navigate to="/dashboard" /> : children;
}

export default GuestRoute