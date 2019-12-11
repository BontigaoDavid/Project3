import React from "react";

export function CardHeader(props){
  return (
    <div className="card-header p-2"{...props}>
      {props.children}
    </div>
  )
}

export function CardBody(props){
  return (
    <div className="card-body p-2 ">
      {props.children}

    </div>
  )
}