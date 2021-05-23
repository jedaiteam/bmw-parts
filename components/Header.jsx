import React from 'react'
import Style from '../styles/Header.module.css'
import Navbar from './Navbar'
import SearchComponent from './SearchComponent'
function Header(lang) {
    
    return (
       <>
            <div className={Style.headerNavbar}>
                <Navbar lang={lang.lang} setlang={lang.setlang}/>
                <SearchComponent/>
            </div>
       </>
    )
}

export default Header
