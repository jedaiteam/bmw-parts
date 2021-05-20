import React from 'react'
import Style from '../styles/BmwPartsCard.module.css'
import Link from 'next/link'
const BmwPartsCard = () => {
    return (
        <Link href="/product-detail/5">
        <a> 
        <div className={Style.partCards}>
   
                     <div>
                <p>Təkər 3333</p>
                <p>234</p>
                    </div>   
        </div>
        </a>
                </Link>
    )
}

export default BmwPartsCard
