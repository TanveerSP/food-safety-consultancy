import React from 'react'
import ContactForm from './ContactForm'
import Heading from '../../common/Heading'
import { SocialIcon } from '../../../data/SocialIcon'

const GetInTouch = () => {
    return (
        <div className='flex-col flex lg:flex-row md:flex-row items-start justify-around gap-8 '>

            <div className='flex flex-col items-start py-4 gap-4 max-w-[700px] '>
                <Heading text={"Get in Touch"} />
                {/* Phone No */}
                <div className='flex flex-col px-3 items-start justify-between mt-4 '>
                    <p className='text-bluedianne-950 text-base font-semibold'>
                        Phone:
                    </p>
                    <p className='text-bluedianne-950 text-base font-inter'>
                        +1 (123) 456-7890
                    </p>
                </div>

                {/* Email */}
                <div className='flex flex-col px-3 items-start justify-between mt-4 '>
                    <p className='text-bluedianne-950 text-base font-semibold'>
                        Email:
                    </p>
                    <p className='text-bluedianne-950 text-base font-inter'>
                        info@tahwil.com
                    </p>
                </div>

                {/* Office Hours: */}
                <div className='flex flex-col px-3 items-start justify-between mt-4 '>
                    <p className='text-bluedianne-950 text-base font-semibold'>
                        Office Hours:
                    </p>
                    <ul className='text-bluedianne-950 flex flex-col text-base font-inter'>
                        <li>
                            Monday - Friday: 9:00 AM-5:00 PM
                        </li>
                        <li>
                            Saturday: 10:00 AM - 2:00 PM
                        </li>
                        <li>
                            Sunday: Closed
                        </li>
                    </ul>
                </div>

                {/* Socail media */}
                <div className='px-3'>
                    <ul className='flex gap-1'>
                        {SocialIcon.map((item, index) => (
                            <p key={index}>
                                <a href={item.link}>
                                    {item.icon}
                                </a>
                            </p>
                        ))}
                    </ul>
                </div>
            </div>

            <div className='py-2 '>
                <ContactForm />
            </div>
        </div>
    )
}

export default GetInTouch