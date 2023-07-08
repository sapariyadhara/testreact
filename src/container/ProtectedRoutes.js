import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoutes(props) {
    let localData = localStorage.getItem('status')
    console.log(localData);
 
   
    return (
        
           localData ? <Outlet /> : <Navigate to={'/Login'} replace/>
        
    );
}

export default ProtectedRoutes;