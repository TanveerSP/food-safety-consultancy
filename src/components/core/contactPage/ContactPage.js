import React from 'react'
import { SocialIcon } from '../../../data/SocialIcon'
import ContactForm from './ContactForm'
import Heading from '../../common/Heading'

const ContactPage = () => {
    return (
        <div className='flex-col flex lg:flex-row md:flex-row items-center justify-between gap-8  '>

            <div className='flex flex-col items-center gap-4 '>
                <div className='py-2 px-3 text-center '>
                    <Heading text={"Contact Us"} />
                    <div className='flex flex-col items-center justify-between mt-4 max-w-[500px]'>
                        <p className='text-bluedianne-950 text-base font-inter'>
                            Please fill out our contact form if you have any inquiries.
                        </p>
                        <p className='text-bluedianne-950 text-base font-inter'>
                            You can also call us directly or message us through Facebook, WhatsApp or LinkedIn.
                        </p>
                    </div>
                </div>
                <div>
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

            <div className='py-2  '>
                <ContactForm />
            </div>
        </div>
    )
}

export default ContactPage