import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from '../Loading/Loading'
import Product from '../Product/Product'



export default function Products() {

  const[products, setProducts] = useState([])
  let [loading, setLoading] = useState(true)

  async function getProducts(){
  let {data} = await axios.get('https://ecommerce.routemisr.com/api/v1/products')
    setProducts(data.data)
    setLoading(false)
  }

  useEffect(()=>{
    getProducts()
  },[])

  return (
    <>
    {loading?<div> <Loading/></div>:<div className='my-5 container pt-5'>
      <div className="row">
        {products.map(item=>{
          return <Product item={item} key={item._id}/>
        })}
        </div>
      </div>}  
    
    
    </>
  )
}
