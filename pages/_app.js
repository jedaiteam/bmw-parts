import '../styles/globals.css'
import React, { useState } from 'react';
import {UserContext} from '../contexts/UserContext'
function MyApp({ Component, pageProps }) {

  const [lang, setlang] = useState('az')
 
  return 
  <UserContext.Provider value='k'>
    <Component {...pageProps} lang={lang} setlang={setlang}/>
    </UserContext.Provider>
  
}

export default MyApp
/* test */