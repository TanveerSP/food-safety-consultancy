import React, { useRef, useState } from 'react'
import { HeaderLinks } from '../../data/HeaderLinks'
import { Link, useLocation, matchPath } from 'react-router-dom'
import { FaChevronDown } from "react-icons/fa";
import useOnClickOutside from '../../hooks/useOnClickOutside'
import Mobile from './Mobile';

const Header = () => {

    // const [subLinks, setSubLinks] = useState([]);
    const [loading, setLoading] = useState(false)
    const location = useLocation()

    const matchRoute = (route) => {
        return matchPath({ path: route }, location.pathname);
    };

    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef(null);
    useOnClickOutside(ref, () => setIsOpen(false));

    return (
        <div className={`flex w-full py-4 bg-maincolor-first border-b-[1px] border-bluedianne-950 h-16 z-50  items-center justify-center translate-y-  transition-all duration-500 `}>
            <div className='flex w-11/12 max-w-maxContent items-center md:justify-between justify-between lg:justify-center gap-x-1 h-full  py-4'>

                {/* Logo */}
                <Link to="/">
                    <p className='text-3xl lg:hidden text-bluedianne-900  md:inline-block inline-block font-semibold '>
                        TAHWIL
                    </p>
                </Link>

                <div className=''>
                    <nav className='hidden lg:inline-block'>
                        <ul className='flex gap-4 py-5 text-bluedianne-900'>
                            {HeaderLinks.map((item, index) => (
                                <li key={index}>
                                    {["Trainigs", "Inspection", "Product Certification"].includes(item.title) ? (
                                        <div className='group relative cursor-pointer flex items-center'>
                                            <p className='flex items-center gap-1 py-2 px-2 text-lg '>
                                                {item.title}
                                                <FaChevronDown />
                                            </p>
                                            <div className='invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-bluedianne-800 p-4 text-maincolor-first  font-semibold opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]'>
                                                <div className='absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-bluedianne-800'></div>
                                                <p>Data is not Found</p>
                                            </div>
                                        </div>
                                    ) : (
                                        <Link to={item?.path}>
                                            <p className={` ${matchRoute(item.path)
                                                ? "bg-bluedianne-900 rounded-xl text-maincolor-first py-2 px-3 text-lg "
                                                : "text-bluedianne-900 py-2 px-3 text-lg "
                                                }`}>
                                                {item.title}
                                            </p>
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                {/* Mobile Navbar */}
                <nav className={` inline-block lg:hidden`}>
                    <Mobile
                        loading={loading}
                        matchRoute={matchRoute}
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                    />
                </nav>
            </div>
        </div>
    )
}

export default Header