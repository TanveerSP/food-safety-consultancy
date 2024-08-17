import React from 'react'

const Heading = ({ text,textcolor="text-maincolor-fifth text-bluedianne-950" }) => {
    return (
        <>
            <p className={` lg:text-4xl md:text-3xl text-xl text-center font-bold px-2 ${textcolor}`}>
                {text}
            </p>
        </>
    )
}

export default Heading