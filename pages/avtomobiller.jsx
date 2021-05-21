import React from 'react'
import BodyImage from '../components/BodyImage'
import Car from '../components/Car'
import Layout from '../components/Layout'
import Style from '../styles/Car.module.css'

const Cars = (cars) => {
    const data=[...cars.cars];
   
    return (
    <Layout>
   <BodyImage/>
<div className="custom_wrapper">
<div className={Style.parentelement}>

    {data.map((item,index)=>(<Car key={item.id} kuza={item}/>))}
</div>
</div>
    </Layout>
    )
}

export const getServerSideProps = async () => {
    const res = await fetch('https://bmwpartsbaku.az/public/api/car')
    const cars  = await res.json()
  
    return {
      props: {
        cars,
      },
    }
  }
export default Cars
