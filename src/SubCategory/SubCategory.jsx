import React, { useContext } from 'react'
import { cartContext } from '../Context/CartContext'


export default function SubCategory({item}) {
  return (
    <>
    <div className="col-md-2 mx-3">
          <div className="subCategory p-2 cursor-pointer rounded-4 bg-light m-3 shadow-sm" height={300}>
           <h4>{item.name}</h4>
            <h5>{item.title}</h5>
            </div>
          </div>

    </>
  )
}
