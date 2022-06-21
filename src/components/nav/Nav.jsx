import React from 'react'
import "./nav.css"
import {AiOutlineHome, AiOutlineUser,AiOutlineMessage}from "react-icons/ai"
import  {RiSuitcaseLine} from "react-icons/ri"
import {BsCodeSlash} from "react-icons/bs"
import { useState } from 'react'
const Nav = () => {
  const [avtiveNav,setActiveNav]=useState('#')
  return (
<nav> 
  <a className={avtiveNav==='#'&&'active'} onClick={()=>setActiveNav('#')} href="#"><AiOutlineHome/></a>
  <a href="#about" className={avtiveNav==='#about'&&'active'} onClick={()=>setActiveNav('#about')}><AiOutlineUser/></a>
  <a href="#experience" className={avtiveNav==='#experience'&&'active'} onClick={()=>setActiveNav('#experience')}><RiSuitcaseLine/></a>
  <a href="#work" className={avtiveNav==='#work'&&'active'} onClick={()=>setActiveNav('#work')}><BsCodeSlash/></a>
  <a href="#contact" className={avtiveNav==='#contact'&&'active'} onClick={()=>setActiveNav('#contact')}><AiOutlineMessage/></a>

</nav> 
 )
}

export default Nav