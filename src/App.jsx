import React, { useState } from 'react'
 
import './App.css'
import Navbar from './Component/Navbar'
import Textarea from './Component/Textarea'
import Alert from './Alert';

function App(props) {
  const[mode,setmode]=useState("light");
  const[newalert,setalert] = useState("")
  const Showalert=(message,type)=>{
    
  setalert({
      msg: message,
      type:type
  })
  setTimeout(() => {
    Showalert("")
  }, 3000);}
  
  const toggleMode=()=>{
    if(mode==='light'){
      setmode( 'dark'); 
      document.body.style.backgroundColor="#042743"
      Showalert('Dark mode activated')
      
    }else{
      setmode('light');
      document.body.style.backgroundColor="white"
      Showalert('Light mode activated')
 
    }
  }


  return (
    <>
    <Navbar mode={mode} toggleMode={toggleMode}/>  
    <Alert newalert={newalert} />
    <Textarea mode={mode}  Showalert={Showalert}/>
    </>
  )
}

export default App
