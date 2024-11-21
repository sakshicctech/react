import React from 'react'

const Card = ({name = "Unknown"}) => {
    console.log("props",name);
    
  return (
    <div >Card Name : {name }</div>
  )
}

export default Card;
