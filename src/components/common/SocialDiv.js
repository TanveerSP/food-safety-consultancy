import React from 'react';
import { FaInstagram, FaLinkedinIn, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";

const SocialDiv = ({textcolor="bluedianne-200 bluedianne-400 "}) => {

    const socialIcon = [
        { id: 1, icon: <FaInstagram size={20} /> },
        { id: 2, icon: <FaLinkedinIn size={20} /> },
        { id: 3, icon: <FaPhoneAlt size={20} /> },
        { id: 4, icon: <FaWhatsapp size={20} /> },
        { id: 5, icon: <MdEmail size={20} /> },
        { id: 6, icon: <FaXTwitter size={20} /> },
    ]

    return (
        <div className='flex gap-2'>
            {socialIcon.map((ele, ind) => (
                <div key={ind} className={` hover:scale-90 ${textcolor}`}>
                    {ele.icon}
                </div>
            ))}
        </div>
    )
}

export default SocialDiv;
