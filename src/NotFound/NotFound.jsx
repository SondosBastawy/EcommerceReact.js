import React from 'react'
import errorImg from '../Assets/Images/error.svg'

export default function NotFound() {
  return (
  <div className='d-flex flex-column align-content-center mt-5 pt-5'>
        <img src={errorImg} alt="Error404" className='mt-5 pt-5 w-100' />
        <h2>Page Not Found</h2>
    </div>
    
  )
}
