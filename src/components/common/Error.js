import React from 'react'
import { Link } from 'react-router-dom'
import { RiArrowGoBackFill } from "react-icons/ri";


const Error = () => {
    return (
        <div className='flex flex-col items-center justify-center h-[100vh]'>
            <h1 className="text-5xl font-bold text-yellow-600">🚧 Work in Progress 🚧</h1>
            <p className="mt-4 text-xl text-gray-800">This page is currently under development. Please check back later!</p>
            <Link to="/" className="mt-6 text-blue-500 underline flex items-center gap-1 text-maincolor-fifth">
                Go back to Home <RiArrowGoBackFill fontSize={20} />
            </Link>
        </div>
    )
}

export default Error