import React from 'react'
import BodyImage from '../components/BodyImage'
import Car from '../components/Car'
import Layout from '../components/Layout'
import Style from '../styles/Car.module.css'
const data=[1,2,3,4,5,6,7,8,9,10,11,12]
const Cars = () => {
    return (
    <Layout>
   <BodyImage/>
<div className="custom_wrapper">
<div className={Style.parentelement}>
    {data.map((item,index)=>(<Car/>))}
</div>
</div>
    </Layout>
    )
}

export default Cars
