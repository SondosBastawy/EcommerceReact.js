import React from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../Loading/Loading'
import { useQuery } from 'react-query'
import  axios  from 'axios'

export default function Category() {

    let x = useParams()
    console.log(x)

    function getCategory(){
        return axios.get(`https://ecommerce.routemisr.com/api/v1/categories/${x.Id}`)
    }
    let {data, isLoading} =useQuery('getCategory', getCategory)
    console.log(data?.data.data)
  
    return (
      <> 
      {isLoading?<div><Loading/></div>:<div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-md-3 mt-5">
            <img src={data?.data.data.image} className='w-100' alt=""/>
          </div>
          <div className="col-md-9 mt-5 pt-3">
            <h4>{data?.data.data.name}</h4>
          </div>
          
        </div>
      </div>}
      
  
  
      </>
    )
}
