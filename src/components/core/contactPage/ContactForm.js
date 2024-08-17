import React from 'react'
import ContryCode from '../../../data/countrycode.json'
import { useForm } from 'react-hook-form';

const ContactForm = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful }
    } = useForm();

    return (
        <form
            className=' max-w-[500px] flex flex-col gap-4 border-[1px] bg-maincolor-first border-bluedianne-950 py-8 px-4 rounded-xl'
        >
            <div className='flex flex-col gap-2 '>
                {/* First name */}
                <div className='flex flex-col w-full'>
                    <label htmlFor="FullName" className='mb-1 text-bluedianne-950'>
                        Full Name
                        <sup className='text-maincolor-fifth'>*</sup>
                    </label>
                    <input type="text"
                        name='FullName'
                        id='FullName'
                        placeholder='Enter Full Name'
                        {...register("FullName", { required: true })}
                        className='w-full bg-maincolor-first h-[2.5rem] rounded-md px-3 border-[1px] border-bluedianne-950 text-bluedianne-950 placeholder-bluedianne-950 '
                    />
                </div>

                {/* Phone Number */}
                <div className='flex flex-col w-full'>
                    <label htmlFor="phonenumber" className='mb-1  text-bluedianne-950'>
                        Phone Number <sup className='text-maincolor-fifth'>*</sup>
                    </label>

                    <div className='flex flex-row gap-6 '>
                        {/* dropdown */}
                        <div className='flex w-[25%] lg:w-[15%] gap-5'>
                            <select
                                name="dropdown"
                                id="dropdown"
                                {...register("countrycode", { required: true })}
                                className='w-full bg-maincolor-first h-[2.5rem] rounded-md border-[1px] border-bluedianne-950 text-bluedianne-950 placeholder-bluedianne-950 '
                            >
                                {
                                    ContryCode.map((element, index) => {
                                        return (
                                            <option
                                                value={element}
                                                key={index}
                                            >
                                                {element.code} -{element.country}
                                            </option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        {/* phone number fild */}
                        <div className='w-[80%]'>
                            <input
                                type="number"
                                name='phonenumber'
                                id='phonenumber'
                                placeholder='12345 67891'
                                className='w-full bg-maincolor-first h-[2.5rem] rounded-md px-3 border-[1px] border-bluedianne-950 text-bluedianne-950 placeholder-bluedianne-950'
                                {...register("phoneNo",
                                    {
                                        required: { value: true, message: "Plesse enter Phone Number" },
                                        maxLength: { value: 10, message: "Invalid Phone Number" },
                                        minLength: { value: 8, message: "Invalid Phone Number" }
                                    })}
                            />
                        </div>
                    </div>
                    {
                        errors.phoneNo && (
                            <span>
                                {errors.phoneNo.message}
                            </span>
                        )
                    }
                </div>

                {/* email */}
                <div className='flex flex-col w-full'>
                    <label htmlFor="email" className='mb-1  text-bluedianne-950'>
                        Email Address
                        <sup className='text-maincolor-fifth'>*</sup>
                    </label>
                    <input type="email"
                        name='email'
                        id='email'
                        placeholder='email'
                        {...register("email", { required: true })}
                        className='w-full bg-maincolor-first h-[2.5rem] rounded-md px-3 border-[1px] border-bluedianne-950 text-bluedianne-950 placeholder-bluedianne-950 '
                    />
                    {errors.email && (
                        <span className='text-webcolor-primary'>
                            Please enter your email
                        </span>
                    )}
                </div>

                {/* message */}
                <div className='flex flex-col w-full'>
                    <label htmlFor="message" className='mb-1 text-bluedianne-950'>
                        Message
                        <sup className='text-maincolor-fifth'>*</sup>
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        cols='30'
                        rows="7"
                        placeholder='Enter your message'
                        {...register("message", { require: true })}
                        className='w-full bg-maincolor-first rounded-md py-3 px-3  border-[1px] border-bluedianne-950 text-bluedianne-950 placeholder-bluedianne-950 h-[100px] '
                    >
                    </textarea>
                    {
                        errors.message && (
                            <span>
                                Please enter your message
                            </span>
                        )
                    }
                </div>
            </div>
            
            <button
            type='submit'
            className={`rounded-md bg-bluedianne-950 text-maincolor-first py-2 px-6 text-[16px] font-bold transform transition duration-500 hover:scale-90`}
            >
                Send Message
            </button>
        </form>
    )
}

export default ContactForm