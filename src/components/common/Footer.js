import React from 'react'
// import { SocialIcon } from '../../data/SocialIcon'
import LogoImg from '../../assets/Images/Logo.png'
import { Link } from 'react-router-dom'
import SocialDiv from './SocialDiv'

const Footer = () => {

    const Traning = [
        {
            title: 'ISO Trainings',
            link: '/ios-trainings',
        },
        {
            title: 'Food Safety Trainings',
            link: '/food-safety-trainings',
        },
        {
            title: 'Testing Laboratory Trainings',
            link: '/testing-laboratory-trainings',
        },
        {
            title: 'API Trainings',
            link: '/api-trainings',
        },
        {
            title: 'HSE Trainings',
            link: '/hse-trainings',
        }
    ]

    const contactNumbers = [
        '+1-234-567-8901',
        '+1-234-567-8902',
        // '+1-234-567-8903',
        // '+1-234-567-8904'
    ];

    return (
        <footer className=' bg-bluedianne-950'>
            <div className='w-11/12 mx-auto flex flex-col gap-2 py-5'>

                <div className='flex lg:items-center items-start gap-y-4 flex-col lg:flex-row md:flex-row gap-4 justify-around'>
                    <Link to={"/"}>
                        <img src={LogoImg} alt="TAHWIL" height={10} width={105} />
                    </Link>

                    {/* decription */}
                    <div className='max-w-[300px] flex flex-col items-start justify-start'>
                        <p className='text-bluedianne-400 text-base font-semibold'>
                            TAHWIL
                        </p>
                        <p className='text-bluedianne-200 '>
                            Founded in 2024, TAHWIL aims to become a leading provider in food safety training and consulting, expanding to offer comprehensive QHSE, auditing, and TIC services across key global markets within the next decade.
                        </p>
                    </div>

                    {/* Tranining */}
                    <div className='flex flex-col'>
                        <p className='text-bluedianne-400 text-base font-semibold'>
                            Training Courses
                        </p>
                        <ul>
                            {Traning.map((list, index) => (
                                <li key={index} className=' text-bluedianne-200 hover:text-bluedianne-400'>
                                    <Link to={list.link}>
                                        {list.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className='flex flex-col justify-between '>
                        <p className='text-bluedianne-400 text-base font-semibold'>
                            Contact Us
                        </p>
                        <div className='flex flex-col gap-4 mt-5'>
                            <ul >
                                {contactNumbers.map((number, index) => (
                                    <li className='flex flex-col'>
                                        <a key={index} href={`tel:${number}`} className="mr-4 text-bluedianne-200 hover:text-bluedianne-400">{number}</a>
                                    </li>
                                ))}
                            </ul>
                            <SocialDiv textcolor='text-bluedianne-400' />
                        </div>
                    </div>
                </div>

                <div className='bg-maincolor-first h-[1px]'></div>
                {/* end part */}
                <div className='py-2 flex items-center justify-center lg:flex-row md:flex-row flex-col'>
                    <p className='text-center text-bluedianne-400 text-base font-light'>
                        Copyrights © 2024, Tawaliya, All Rights Reserved{" "}
                    </p>
                    <a href="https://www.linkedin.com/in/tanveer-pathan/" target="_blank" rel="noopener noreferrer"
                        className='text-center text-bluedianne-400 text-base font-light'> – Designed and Developed By ❤️
                        <span className=' text-maincolor-fifth hover:text-bluedianne-200'>@Tanveer</span>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer







{/* <div className=''>
<p className='text-2xl font-semibold text-webcolor-primary'>Training</p>
<ul className='text-webcolor-primary mt-2 gap-1'>
    {Traning.map((list, index) => (
        <li key={index} className=' hover:text-yellow-50'>
            <Link to={list.link}>
                {list.title}
            </Link>
        </li>
    ))}
</ul>
</div> */}

{/* <div className=''>
    <ul className='flex gap-1'>
        {SocialIcon.map((item, index) => (
            <p key={index}>
                <a href={item.link}>
                    {item.icon}
                </a>
            </p>
        ))}
    </ul>
</div> */}

{/* <div className='w-full flex lg:flex-row flex-col items-center justify-center bg-webcolor-primary h-14 py-5 border-t-[1px] border-richblack-600'>
                    <p className='text-center text-webcolor-secondry text-sm font-light'>
                        Copyrights © 2024, Tawaliya, All Rights Reserved {" "}
                    </p>
                    <a href="https://www.linkedin.com/in/tanveer-pathan/" target="_blank" rel="noopener noreferrer"
                        className='text-center text-webcolor-secondry text-sm font-light'>– Designed and Developed By ❤️
                        <span className=' hover:text-yellow-50'>@Tanveer</span>
                    </a>
                </div> */}

{/* <div className='flex flex-col'>
    {contactNumbers.map((number, index) => (
        <a key={index} href={`tel:${number}`} className="mr-4 hover:text-yellow-50">{number}</a>
    ))}
</div> */}