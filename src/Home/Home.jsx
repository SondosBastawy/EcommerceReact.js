import React from 'react'
import Mainslider from '../mainslider/Mainslider'
import Categories from '../Categories/Categories'
import { Helmet } from 'react-helmet'

export default function Home() {
  return <>
  <Helmet>
    <title> FreshCart home</title>
  </Helmet>
        <Mainslider />
        <Categories/>
    </>
  
}
