import React from 'react'
import {BsPatchCheckFill} from "react-icons/bs"

const Technology = (props) => {
  return (
    <article className="technology__details">
        <BsPatchCheckFill className='technology__details-icon'/>
        <h4>{props.name}</h4>
    </article>
  )
}

export default Technology