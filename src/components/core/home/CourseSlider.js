import React from 'react'
import { Course } from '../../../data/Course'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';

const CourseSlider = () => {
    return (
        <div className='py-8 w-11/12 mx-auto'>
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                }}
                freeMode={true}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[FreeMode, Autoplay]}
                className='w-full'
            >
                {Course.map(product => (
                    <SwiperSlide key={product.id}
                        className=' overflow-hidden rounded-2xl gap-0'
                    >
                        <div className='relative overflow-hidden h-[140px] md:h-[130px] lg:h-[200px]'>
                            <img
                                src={product.image}
                                alt={product.title}
                                className='transform transition duration-500 hover:scale-105 '
                            />
                        </div>
                        <div className='py-3 px-4 text-center bg-bluedianne-950 '>
                            <p className='text-bluedianne-200 font-semibold lg:text-xl text-lg'>
                                {product.title}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default CourseSlider