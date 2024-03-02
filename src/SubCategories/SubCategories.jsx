import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from '../Loading/Loading'
import SubCategory from '../SubCategory/SubCategory'



export default function SubCategories() {

  const[subCategory, setSubCategory] = useState([])
  let [loading, setLoading] = useState(true)

  async function getSubCategories(){
  let {data} = await axios.get('https://route-ecommerce.onrender.com/api/v1/subcategories')
  console.log(data.data)
  setSubCategory(data.data)

    setLoading(false)
  }

  useEffect(()=>{
    getSubCategories()
  },[])

  return (
    <>
    {loading?<div> <Loading/></div>:
    <div className='my-5 container pt-5'>
        <h2>SubCategories:</h2>
      <div className="row">
        {subCategory.map(item=>{
          return <SubCategory item={item} key={item._id}/>
        })}
        </div>
      </div>}  
    
    
    </>
  )
}
