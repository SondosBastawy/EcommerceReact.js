import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import Loading from '../Loading/Loading';
import { Link } from 'react-router-dom';
import SubCategories from '../SubCategories/SubCategories';



export default function Categories({item}) {
const [categories, setCategories] =useState([]);
let [loading, setLoading] = useState(true)

  async function getCategories(){
    let {data} = await axios.get('https://ecommerce.routemisr.com/api/v1/categories')
    setCategories(data.data)
    setLoading(false)

  }
  useEffect(()=>{
    getCategories()
  },[])
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:1500
  }
  return (
  <>
  


    {loading? <div> <Loading/></div>
    : <div className='my-5 container pt-5'>
    <h3 className='pt-3'><b>Shop Popular Categories</b></h3>
  <Slider {...settings}>
  {
    categories.map((item)=> ( 
      <Link to={'/Category/'+item._id}>
      <div className="px-1 cursor-pointer " key={item._id}>
        <img src={item.image}  height={180} className='w-100' alt=""/>
        <h5>{item.name}</h5>
        </div>
      </Link>
  ))
  }</Slider>
  </div>
}
<SubCategories/>
  
  </>
) }
