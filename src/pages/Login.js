import React from 'react'
import LoginForm from '../components/core/Auth/LoginForm'
import Heading from '../components/common/Heading'

const Login = () => {
  return (
    <div className=''>
        <div className='py-10 h-[100vh] flex flex-col items-center justify-center'>
           <Heading text={"Hi, Welcome Back! 👋"} textcolor='text-bluedianne-950' />
            <LoginForm />
            <div className='w'></div>
        </div>
    </div>
  )
}

export default Login