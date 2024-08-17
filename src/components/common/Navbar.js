import React from 'react'
import { NavbarLinks } from '../../data/NavbarLinks'
import { Link, useLocation, matchPath } from 'react-router-dom'
import Header from './Header'
import SocialDiv from './SocialDiv'


const Navbar = () => {
    const location = useLocation()
    const matchRoute = (route) => {
        return matchPath({ path: route }, location.pathname);
    };
    return (
        <>
            <div className={` fixed flex flex-col bg-bluedianne-950 w-full  z-50  items-center justify-center translate-y- transition-all duration-500`}
            >
                <div className='flex flex-col-reverse gap-y-3  py-4 md:flex-row lg:flex-row w-11/12 max-w-maxContent items-center justify-between'>
                    <Link className=' lg:inline-block hidden' to={'/'}>
                        <p className='text-3xl  font-semibold text-white'>
                            TAHWIL
                        </p>
                    </Link>
                    {/* left side links */}
                    <div className=''>
                        <ul className='flex gap-x-6 text-bluedianne-200 hover:cursor-pointer text-base font-medium'>
                            {NavbarLinks.map((link, index) => (
                                <li key={index}>
                                    <Link to={link.path}>
                                        <p
                                            className={` ${matchRoute(link.path)
                                                ? "text-maincolor-first rounded-lg border-[1px] border-maincolor-first py-1 px-3  "
                                                : "text-bluedianne-100 py-1 px-3  "
                                                }`}
                                        >{link.title}</p>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <SocialDiv textcolor='text-bluedianne-200' />
                    </div>

                </div>

                <Header />
            </div>
        </>
    )
}

export default Navbar