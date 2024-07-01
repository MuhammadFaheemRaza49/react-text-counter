import React from 'react'
import './Alert.css'

export default function Alert(props) {
  return (
    <div style={{height:'50px'}}>
    {props.alert && <div id="alert" className="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>{props.alert.type}</strong> : {props.alert.msg}
  
</div>}
</div>

  )
}