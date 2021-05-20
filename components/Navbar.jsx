import React from 'react'
import style from '../styles/Navbar.module.css'
import Link from 'next/link'
const Navbar = () => {
    return (
        <div className={style.nav}>
            <ul>
                <li>
                <Link href="/">
                <a>Əsas səhifə</a>
                </Link>
                </li>
                <li>
                <Link href="/Katalog">
                <a>Kataloq</a>
                </Link>
                </li>
               
                <li>
                <Link href="/avtomobiller">
                <a>Avtomobillər</a>
                </Link>
                </li>
                <li>
                <Link href="/nece-almaq">
                <a>Necə almaq</a>
                </Link>
                </li>
                <li>
                <Link href="/contact">
                <a>Əlaqə</a>
                </Link>
                </li>
            </ul>
            <ul>
                <li>AZ</li>
            </ul>
        </div>
    )
}

export default Navbar
