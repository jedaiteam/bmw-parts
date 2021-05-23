import React, { useState } from 'react';
import Footer from './footer'
import Navbar from './Navbar'
import Header from './Header'

function Layout({children}) {
    const [lang, setlang] = useState('az')

    return (
        <div>
         <Header setlang={setlang} lang={lang}/>
            {children}
            
           <Footer/>
        </div>
    )
}

export default Layout