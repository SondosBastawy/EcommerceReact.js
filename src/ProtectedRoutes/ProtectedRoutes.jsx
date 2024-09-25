import React from 'react'
import { jwtDecode } from "jwt-decode";
import imgLogo from "../Assets/Images/freshcart-logo.svg"


export default function ProtectedRoutes({children}) {
    let token = localStorage.getItem('token')

    try{
        const decoded = jwtDecode(token);
    }
    catch(err){
        localStorage.clear()
        return <div className='mt-5 pt-5 text-center'>
            <div className='mt-3 '><img src={imgLogo} alt="Logo" className='w-75'/></div>
            <h2>Please signin to access this page</h2></div>
    }

    if(token)return children


}
