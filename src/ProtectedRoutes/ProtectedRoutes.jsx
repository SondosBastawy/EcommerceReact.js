import React from 'react'
import { jwtDecode } from "jwt-decode";


export default function ProtectedRoutes({children}) {
    let token = localStorage.getItem('token')

    try{
        const decoded = jwtDecode(token);
        console.log(decoded);

    }
    catch(err){
        localStorage.clear()
        return <div className='mt-5 pt-5 text-center'>
            <h2>Please signin to access this page </h2></div>
    }

    if(token)return children


}
