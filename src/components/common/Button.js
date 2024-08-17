import React from 'react'
import { MdOutlineArrowCircleRight } from "react-icons/md";

const Button = ({ 
  children, 
  onclick, 
  variant=" bg-bluedianne-950 bg-orange-400 bg-maincolor-fifth", 
  icon,
  textcolor ="text-white text-black text-maincolor-first",
  textsize = "text-lg text-base text-sm",
}) => {

  return (
    <button onClick={onclick}
      className={` py-2 px-3 lg:py-3 md:py-3 lg:px-6 md:px-6 rounded-lg transform transition duration-500 hover:scale-90 
      ${variant}`}
    >
      <p className={` flex items-center gap-1  ${textsize} ${textcolor}`}>
        {children} 
        {icon}
      </p>
    </button>
  )
}

export default Button