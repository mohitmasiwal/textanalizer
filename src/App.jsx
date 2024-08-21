import React, { useState } from 'react'
 
import './App.css'
import Navbar from './Component/Navbar'
import Textarea from './Component/Textarea'

function App() {
  const[mode,setmode]=useState("light");

  const toggleMode=()=>{
    if(mode==='light'){
      setmode( 'dark'); 
      document.body.style.backgroundColor="#042743"
    }else{
      setmode('light');
      document.body.style.backgroundColor="white"
    }
  }


  return (
    <>
    <Navbar mode={mode} toggleMode={toggleMode}/>  
    <Textarea mode={mode}/>
    </>
  )
}

export default App
