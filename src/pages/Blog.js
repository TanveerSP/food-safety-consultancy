import React from 'react'
import Footer from '../components/common/Footer'
// import BlogImg from '../assets/Images/Blog.jpg'
import { blog } from '../data/blog';
import { MdOutlineAccessTime } from "react-icons/md";
import { MdOutlineDateRange } from "react-icons/md";
import { IoIosPerson } from "react-icons/io";

const Blog = () => {
    return (
        <div className='mt-24'>
            <div className='w-full'>
                <div className=' py-10 px-5 relative flex items-center justify-center h-[50vh] bg-fixed bg-parallaxblog bg-cover '>
                    <div className=' absolute w-full h-full bg-black opacity-60'></div>
                    <div className=' relative flex flex-col items-center gap-4 justify-center'>
                        <h1 className='text-start text-2xl lg:text-6xl md:text-4xl font-bold text-maincolor-first'>
                            Blog's
                        </h1>
                        <p className='text-maincolor-first font-semibold text-center max-w-[700px]'>
                            Explore the latest insights and tips on food safety, quality management, and industry best practices to keep your business compliant and safe.
                        </p>
                    </div>
                </div>
            </div>

            {/* Blogs  */}
            <div className='w-full py-10'>
                <div className=' w-11/12 mx-auto flex flex-col items-center justify-center'>
                    {/* Blog Card */}
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
                        {blog.map((item, index) => (
                            <div key={index} className='flex flex-col max-h-[500px] border-[1px] border-bluedianne-950 rounded-xl overflow-hidden'>
                                <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                                <div className='px-2 py-1 flex flex-col gap-2'>
                                    <p className='text-lg font-semibold text-maincolor-fifth'>
                                        {item.title}
                                    </p>
                                    <div className='flex items-center gap-4 '>
                                        <div className='flex items-center'>
                                            <MdOutlineDateRange />
                                            <p className='text-gray-600 text-sm'>{item.date}</p>
                                        </div>
                                        <div className='flex items-center'>
                                            < MdOutlineAccessTime />
                                            <p p className='text-gray-600 text-sm' > {item.time}</p>
                                        </div>
                                        <div className='flex items-center'>
                                            <IoIosPerson />
                                            <p className='text-gray-600 text-sm'>{item.create}</p>
                                        </div>
                                    </div>
                                    <div className='w-full h-[1px] px-2 bg-bluedianne-950 my-2'></div>
                                </div>
                                <p className='px-2 py-1 mb-3 text-sm text-orange-950'>
                                    {item.dis}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* footer */}
            <Footer />
        </div>
    )
}

export default Blog