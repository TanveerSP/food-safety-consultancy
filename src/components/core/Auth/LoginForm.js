import React, { useState } from 'react';
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

import { login } from '../../../services/operations/authAPI'

const LoginForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const [showPassword, setShowPassword] = useState(false);
  const { email, password } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    dispatch(login(email, password, navigate))
  }

  return (
    <>
      <form
        className='mt-6 flex lg:min-w-[400px] md:min-w-[300px] flex-col gap-y-4'
        onSubmit={handleOnSubmit} // Form submission handler
      >
        {/* Email Field */}
        <label className='w-full'>
          <p className='mb-1 pl-2 text-[0.875rem] leading-[1.375rem] text-maincolor-sixsth'>
            Email Address
          </p>
          <input
            required
            type="text"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="Enter email address"
            className='w-full bg-maincolor-first h-[2.5rem] rounded-lg px-3 border-[1px] border-bluedianne-950 text-bluedianne-950 placeholder-bluedianne-950'
          />
        </label>

        {/* Password Field */}
        <label className='relative'>
          <p className='mb-1 pl-2 text-[0.875rem] leading-[1.375rem] text-maincolor-sixsth'>
            Password
          </p>
          <input
            required
            type={showPassword ? "text" : "password"}
            name="password"
            value={password}
            onChange={handleOnChange}
            placeholder="Enter Password"
            className='w-full mb-1 bg-maincolor-first h-[2.5rem] rounded-lg px-3 border-[1px] border-bluedianne-950 text-bluedianne-950 placeholder-bluedianne-950'
          />
          <span
            className='absolute right-3 top-9 z-[10] cursor-pointer'
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? (
              <FiEye fontSize={20} className='text-bluedianne-950' />
            ) : (
              <FiEyeOff fontSize={20} className='text-bluedianne-950' />
            )}
          </span>
          {/* forget and remaider */}
          <Link to="/forgot-password" >
            <p className="mt-1 ml-auto max-w-max text-sm text-maincolor-fifth">
              Forgot Password
            </p>
          </Link>
        </label>
        {/* Submit Button */}
        <button
          type="submit"
          className='mt-4 bg-maincolor-sixth text-maincolor-first bg-gradient-to-r from-[#B43F3F] to bg-[#FF6728] rounded-lg py-2'
        >
          Login
        </button>
        <div className='w-full h-[1px] bg-bluedianne-950 mt-2'></div>
        <div className='flex  items-center justify-between'>
          <p className='text-carbanblack text-xl'>
            Don’t have an account ?
          </p>
          <Link to={"/signup"}>
            <p className="mt-1 ml-auto max-w-max text-lg text-bluedianne-950">
              Sign Up
            </p>
          </Link>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
