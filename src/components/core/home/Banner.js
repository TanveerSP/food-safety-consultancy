import React from 'react'
import Button from '../../common/Button'
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className=' py-10 px-5 relative flex items-center justify-center h-[50vh] bg-fixed bg-parallax bg-cover '>
      <div className=' absolute w-full h-full bg-black opacity-70'></div>
      <div className=' relative flex flex-col items-center justify-center  py-10 gap-5'>
        <div className=''>
          <h1 className='text-start text-2xl lg:text-6xl md:text-4xl font-bold text-bluedianne-200'>
            Food Safety Consulting TAHWIL
          </h1>
        </div>
        <div className='flex flex-col lg:items-center lg:justify-center md:items-center md:justify-center items-start lg:max-w-[500px] gap-3'>
          <p className='text-bluedianne-200 font-semibold text-start'>
            Achieve complete compliance with experts at your side
          </p>
          <div className='flex mt-4 gap-4 items-start'>
            <Link to={"/signup"} >
              <Button onClick={""} variant="bg-maincolor-fifth" textcolor="text-maincolor-first" textsize='text-sm'
                children={"Learn More"}
              ></Button>
            </Link>
            <Link to={"/login"} >
              <Button onClick={""} variant="bg-orange-400" textcolor="text-maincolor-first" textsize='text-sm'
                children={"Get Start"}
              ></Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner