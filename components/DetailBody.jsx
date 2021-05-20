import React from 'react'
import Style from '../styles/DetailBody.module.css'
import Image from 'next/image'
const DetailBody = () => {
    return (
        <div className='custom_wrapper'>
          <div className={Style.parentElement}>
            <div className={Style.slider}>
                <div>
                <Image
                    src="/uploads/rec.png"
                    alt="Picture of the author"
                    width={520}
                    height={500}
                />
     
                </div>

                <ul>
                    <li>
                    <Image
                    src="/uploads/rec.png"
                    alt="Picture of the author"
                    width={163}
                    height={157}
                /> 
                    </li>
                    <li>
                    <Image
                    src="/uploads/rec.png"
                    alt="Picture of the author"
                    width={163}
                    height={157}
                />
                    </li>
                    <li>
                    <Image
                    src="/uploads/rec.png"
                    alt="Picture of the author"
                    width={163}
                    height={157}
                />
                    </li>
                </ul>

            </div>
            <div className={Style.content}>
                <h1>Təkər 3333</h1>
                <h1><span>234</span>
                    <span><svg width="42" height="31" viewBox="0 0 42 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.3843 11.2968V28.1679C18.3843 29.6167 19.5588 30.7911 21.0074 30.7911C22.456 30.7911 23.6305 29.6167 23.6305 28.1679V11.3447C32.205 12.8574 36.7461 21.6551 36.7461 28.1678C36.7461 29.6166 37.9206 30.7909 39.3692 30.7909C40.8179 30.7909 41.9924 29.6166 41.9924 28.1678C41.9924 17.9773 34.7278 7.46921 23.6305 6.03994V3.24812C23.6305 1.79934 22.456 0.625 21.0074 0.625C19.5588 0.625 18.3843 1.79934 18.3843 3.24812V6.01076C6.81175 7.24707 0.0224609 17.1674 0.0224609 28.1678C0.0224609 29.6166 1.19696 30.7909 2.64558 30.7909C4.0942 30.7909 5.2687 29.6166 5.2687 28.1678C5.2687 22.7084 8.08888 12.7464 18.3843 11.2968Z" fill="#F60100"/>
                </svg>
                </span>
                </h1>

                <div className={Style.category}>
                    <div>
                        <h4>Seriya nömrəsi: 3</h4>
                        <h4>Kuza nömrəsi</h4>
                    </div>
                    <div>
                        <h4>Kateqoriya</h4>
                        <h4>Vəziyyəti: əla vəziyyətdə</h4>
                    </div>
                </div>

                <div className={Style.text}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex </p>
                </div>
                <div className={Style.contact}>
                    <div></div>
                    <div></div>
                </div>
            </div>
          </div>
        </div>
    )
}

export default DetailBody
