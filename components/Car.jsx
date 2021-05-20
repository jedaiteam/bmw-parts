import React from 'react'
import Style from '../styles/Car.module.css'
import Image from 'next/image'
const Car = () => {
    return (
  <>
            <div>
            <div className={Style.imageCars}>
            <Image
                    src="/uploads/car.png"
                    alt="Picture of the author"
                    width={401}
                    height={201}
                />
            </div>


            <div className={Style.content}>
                <h3>BMW 258</h3>
                <p>Kuza nömrəsi:  F10</p>
                <p>İli: 2009</p>
                <p>Alınma tarixi:  9 Aprel 2021</p>
                <p>Hansı ölkədən gətirilib: Yaponiya</p>



            </div>

           </div>

   
           
     </> 
    )
}

export default Car
