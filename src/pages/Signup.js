import React from 'react'
import SignupForm from '../components/core/Auth/SignupForm'
import Heading from '../components/common/Heading'

const Signup = () => {
  return (
    <div className='py-10 h-[100vh] flex flex-col items-center justify-center'>
           <Heading text={"Hi, Welcome! 👋"} textcolor='text-bluedianne-950' />
            <SignupForm />
            <div className='w'></div>
        </div>
  )
}

export default Signup