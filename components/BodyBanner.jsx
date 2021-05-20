import React from 'react'
import Style from '../styles/BodyBanner.module.css'
import BmwPartsCard from './BmwPartsCard'
import BodyImage from './BodyImage'
const BodyBanner = () => {
   const data=[1,2,3,4,5,6,7,8,9,10,11,12]
    return (
<div className={Style.first}>
    
    <BodyImage/>
<div className={Style.bodyBanner}>
    
            <div>
            {data.map((e,index)=>(
                <BmwPartsCard key={index}/>
           ))}
            </div>
         
        </div>
</div>
    )
}

export default BodyBanner
