import React from 'react'

export default function Alert(props) {
  return (
   
    props.alertContent && <div>
        <div className="alert alert-success alert-dismissible fade show" role="alert">
        <strong>{props.alertContent.type}</strong>.  {props.alertContent.msg}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
  </div>
  )
}
