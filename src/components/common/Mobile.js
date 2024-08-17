import React from 'react'
import { HiBars3 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { NavbarLinks } from '../../data/NavbarLinks';
import { FaChevronDown } from "react-icons/fa";
import { HeaderLinks } from '../../data/HeaderLinks';
import { FaBars } from "react-icons/fa6";

const Mobile = ({ loading, matchRoute, isOpen, setIsOpen }) => {

    const navigate = useNavigate();
    // const dispatch = useDispatch();
    const location = useLocation();


    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className='cursor-pointer z-1=50 text-bluedianne-950'
                onClick={handleClick}
            >
                {!isOpen ? <FaBars size={25} /> : <RxCross2 size={30} className='font-bold' />}
            </div>

            <div
                className={`fixed top-32  pt-8 left-0 ${isOpen ? "md:w-[40vw] w-[60vw]" : "w-0"
                    } h-screen ${location.pathname !== "/" ? "bg-bluedianne-600 border-r-[1px] border-bluedianne-700" : "bg-bluedianne-900 border-r-[1px] border-bluedianne-600"
                    } z-50 flex justify-start items-center transition-all duration-[1s] flex-col overflow-hidden`}
            >

                {/* Main Page Content */}
                <ul
                    className={`flex gap-x-2 text-bluedianne-200 hover:cursor-pointer flex-col gap-y-10 justify-center items-start`}
                >
                    {HeaderLinks.map((item, index) => (
                        <li key={index}
                            className='flex flex-col justify-start items-start text-bluedianne-200 '
                        >
                            {["Trainigs", "Inspection", "Product Certification"].includes(item.title) ? (
                                <div className='group relative cursor-pointer flex items-center text-center '>
                                    <p
                                        className='flex items-center gap-1 '
                                    >{item.title}
                                        <FaChevronDown />
                                    </p>
                                </div>
                            )
                                : (<NavLink to={item?.path} onClick={handleClick}>
                                    <p
                                        className={`${matchRoute(item?.path)
                                            ? "text-yellow-25"
                                            : "text-bluedianne-200"
                                            } flex gap-1 justify-center items-center`}
                                    >
                                        {item.title}
                                    </p>
                                </NavLink>)}
                        </li>
                    ))}

                </ul>
            </div>
        </>
    )
}

export default Mobile