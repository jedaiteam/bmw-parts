import React, { useState ,useEffect} from 'react'
import Style from '../styles/BodyBanner.module.css'
import BmwPartsCard from './BmwPartsCard'
import BodyImage from './BodyImage'
const BodyBanner = () => {
    const [data, setdata] = useState([]);



   useEffect(async() => {
    const res = await fetch('https://bmwpartsbaku.az/public/api/products')
     const cars= await res.json();
   
    setdata(cars);
 
    
  
   },[])


    return (
<div className={Style.first}>
    
    <BodyImage/>
<div className={Style.bodyBanner}>
    
            <div>
            {data.map((e,index)=>(
                <BmwPartsCard key={index} data={e}/>
           ))}
            </div>
         
        </div>
</div>
    )
}

export default BodyBanner
