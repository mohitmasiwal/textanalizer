import React from 'react'

const Alert = (props) => {
  return (
    <div className="alert alert-warning alert-dismissible fade show" role="alert">
    {props.newalert.msg} 
  </div>
  )
}

export default Alert
