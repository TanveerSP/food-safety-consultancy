import React from 'react'
import { FiArrowRight } from "react-icons/fi";

const RoundedBtn = ({ children, onClick }) => {
    return (
        <button
            onClick={onclick}
            className={` py-2 px-3 rounded-3xl transform transition duration-500 hover:scale-90 border-[1px] border-bluedianne-950 `}>
            <p className='flex items-center gap-1 justify-between text-bluedianne-950'>
                {children} <FiArrowRight size={20} />
            </p>
        </button>
    )
}

export default RoundedBtn