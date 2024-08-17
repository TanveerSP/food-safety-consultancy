import React from 'react'
import { LuMoveUpRight } from "react-icons/lu";

const BlackBtn = ({
  variant = "bg-carbanblack bg-orange-400 ",
}) => {
  return (
    <div className={` flex items-center justify-center rounded-full lg:w-[60px] lg:h-[60px] w-[50px] h-[50px] ${variant} `}>
      <LuMoveUpRight size={30} className='text-maincolor-first text-center' />
    </div>
  )
}

export default BlackBtn