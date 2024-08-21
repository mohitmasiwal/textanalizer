import React, { useState } from 'react'
 

  
 
const Textarea = (props) => {
    const Change=(e)=>{
        console.log("changed")
    setData(e.target.value)
    }
     
    
    const Clicked=()=>{
        console.log("changed in click")
        let newtext= Data.toUpperCase();
        setData(newtext)


    }
    const Clickedd=()=>{
        console.log("changed in click")
        let newtext= Data.toLowerCase();
        setData(newtext)
    }
    const Clickeddd=()=>{
        console.log("changed in click")
        setData("")
    }


    const [Data,setData]= useState("");
    
      
     
  return (
    <>
    <div class=" container mb-3">
  <label  style={{color:props.mode==='dark'?'white':'black'}} for="exampleFormControlTextarea1" class="form-label"><h3>Enter Text To Analize</h3></label>
  <textarea   value={Data}  style={{ backgroundColor: props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white':'black'} } onChange={Change} className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>

</div>
 <div className="middle container ">
 <button onClick={Clicked} type="button" class="btn btn-primary">To Upper Case</button>
 <button onClick={Clickedd} type="button" class="btn btn-primary">To lower Case</button>
 <button onClick={Clickeddd} type="button" class="btn btn-primary">Clear Text</button>
 </div>
 <div className="container">
    <h3 style={{color:props.mode==='dark'?'white':'black'}} >Text summary</h3>
    <h6  style={{color:props.mode==='dark'?'white':'black'}}>It contain {Data.length} character and {Data.split(" ").length} word </h6>

    <h3  style={{color:props.mode==='dark'?'white':'black'}}>Timing</h3>
    <h6  style={{color:props.mode==='dark'?'white':'black'}}>You can read this in {Data.length*0.8} seconsd</h6>
 </div>
</>
  )
}

export default Textarea
