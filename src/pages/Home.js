import React from 'react'
import Banner from '../components/core/home/Banner'
import Img from '../assets/photos/shutterstock_250375195-759x450.jpg'
import CourseSlider from '../components/core/home/CourseSlider';
import BlackBtn from '../components/common/BlackBtn';
import { Link } from 'react-router-dom';
import Faq from '../components/core/home/FAQComp/Faq';
import Heading from '../components/common/Heading';
import ContactPage from '../components/core/contactPage/ContactPage';
import Footer from '../components/common/Footer';
import Button from '../components/common/Button'
import { MdOutlineArrowCircleRight } from "react-icons/md";
import RoundedBtn from '../components/common/RoundedBtn';

const Home = () => {

    const widths = [360, 500, 400];

    return (
        <div className='mt-28'>

            <section className='w-full'>
                <Banner />
            </section>

            {/* Drive Your Business to */}
            <section className='mt-14'>
                <div className='w-11/12 mx-auto relative flex flex-col gap-2 lg:flex-row md:flex-row md:py-10 md:px-10 py-5 px-5 gap-y-4 items-center justify-center lg:justify-around bg-bluedianne-950 rounded-3xl'>

                    <div className='flex flex-col relative '>
                        <div className='lg:max-w-[600px] '>
                            <h1 className='text-start text-3xl md:text-3xl lg:text-5xl font-bold text-bluedianne-200 '>
                                Drive Your Business to Excellence with TAHWIL
                            </h1>
                        </div>
                        <div className='flex flex-col items-start lg:max-w-[500px] mt-5 gap-3'>
                            <p className='text-bluedianne-200 text-start'>
                                Specialized Training, Consultation, Certification, and Inspection Services for the Industrial Market
                            </p>
                        </div>
                        <div className='mt-4'>
                            <Link to={"/"}>
                                <BlackBtn variant='bg-orange-400' />
                            </Link>
                        </div>
                    </div>

                    <div className=' w-full h-[1px] bg-bluedianne-200 lg:hidden md:hidden'></div>

                    <div className=''>
                        <img src={Img} alt="banner-Img" className=' rounded-xl' />
                    </div>
                </div>
            </section>

            {/* Training Courses Categories Swiper card */}
            <section className='my-5'>
                <div className=' py-16'>
                    <Heading text={"Training Courses Categories"} />
                    <div className='py-5 mx-auto'>
                        <CourseSlider />
                    </div>
                    <div className='flex items-center justify-center'>
                        <RoundedBtn children={"All Courses"} />
                    </div>
                </div>
            </section>

            {/* Requset */}
            <section className='bg-maincolor-fifth w-full'>
                <div className='flex flex-col md:flex-col lg:flex-row justify-center gap-2 w-11/12  py-10 mx-auto'>

                    <div className='flex flex-col py-4  gap-2 text-center lg:text-start '>
                        <p className='text-3xl font-bold text-maincolor-first'>
                            Management Systems Consultation
                        </p>
                        <p className='text-maincolor-first font-thin max-w-[900px]'>
                            Providing a consultancy service for different management systems including ISO 9001, ISO 14001, ISO 45001, ISO 22000, FSSC 22000, ISO 17025, ISO 15189...
                        </p>
                    </div>

                    <div className='p-10 px-10 flex items-center justify-center'>
                        <Button onClick={""} variant="bg-bluedianne-950" textcolor="text-maincolor-first" textsize='text-lg'
                            children={"Request a Consultation"} icon={<MdOutlineArrowCircleRight size={25} className='text-maincolor-first' />}
                        ></Button>
                    </div>

                </div>
            </section>

            {/* grid Cards */}
            <section className='w-full py-10 my-16'>
                <div className='w-11/12 flex flex-col mx-auto  bg-maincolor-first border-[1px] border-bluedianne-950 rounded-3xl'>
                    <div className='flex flex-col md:flex-row py-10 px-8 lg:flex-row items-center gap-4 lg:justify-start justify-between'>
                        <p className='text-start text-bluedianne-800 lg:text-4xl md:text-3xl text-xl font-bold max-w-[600px]'>
                            Elevating Food Safety with Specialized Training & Consulting Services
                        </p>
                        <div>
                            <p className='max-w-[600px] text-lg text-bluedianne-950 text-start'>
                                Our tailored training and expert consulting services empower your business to achieve the highest standards in food safety compliance.
                            </p>
                            <div className='mt-3'>
                                <RoundedBtn children={"All Services"} />
                            </div>

                        </div>
                    </div>
                    {/* Cards */}
                    <div className="grid gap-6 md:grid-cols-3 gap-x-4 px-2 md:px-4 lg:px-6 py-6">
                        {/* Food Safety Training */}
                        <div className="bg-maincolor-second relative rounded-3xl p-6 text-gray-900">
                            <h3 className="lg:text-xl text-start text-lg  font-semibold mt-8 lg:mt-4 md:mt-8 w-auto ">
                                Food Safety Training
                            </h3>
                            <p className="my-6">
                                Comprehensive Food Safety Training
                            </p>
                            <div className='h-[2px] w-full my-1 bg-carbanblack'></div>
                            <p>
                                Our training programs ensure your team is equipped with the essential knowledge to maintain high food safety standards. Topics include basic hygiene, HACCP principles, and regulatory compliance.

                            </p>
                            <div className='absolute top-3 right-3'>
                                <Link to={"/"}>
                                    <BlackBtn variant='bg-carbanblack' />
                                </Link>
                            </div>
                        </div>

                        {/* HACCP Implementation */}
                        <div className="bg-maincolor-third relative rounded-3xl p-6 text-gray-900">
                            <h3 className="lg:text-xl text-start text-lg  font-semibold mt-8 lg:mt-4 md:mt-8 w-auto ">
                                HACCP Implementation
                            </h3>
                            <p className="my-6">
                                Seamless HACCP Implementation
                            </p>
                            <div className='h-[2px] w-full my-1 bg-carbanblack'></div>
                            <p>
                                Our expert team guides you through the entire HACCP process, ensuring your food safety management system is fully compliant and effective.
                            </p>
                            <div className='absolute top-3 right-3'>
                                <Link to={"/"}>
                                    <BlackBtn variant='bg-carbanblack' />
                                </Link>
                            </div>
                        </div>

                        {/* Food Safety Consulting */}
                        <div className="bg-maincolor-fourth relative rounded-3xl p-6 text-gray-900">
                            <h3 className="lg:text-xl text-start text-lg  font-semibold mt-8 lg:mt-4 md:mt-8 w-auto ">
                                Food Safety Consulting
                            </h3>
                            <p className="my-6">
                                Expert Food Safety Consulting
                            </p>
                            <div className='h-[2px] w-full my-1 bg-carbanblack'></div>
                            <p>
                                Tailored consulting services to enhance your food safety practices, from risk assessments to certification support, helping you maintain compliance.
                            </p>
                            <div className='absolute top-3 right-3'>
                                <Link to={"/"}>
                                    <BlackBtn variant='bg-carbanblack' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className='w-full py-10'>
                <div className='flex flex-col items-center gap-5'>
                    <div className="space-y-2 flex flex-col items-center justify-center">
                        <Heading text={"Frequently Asked Questions."} />
                        <p className="text-center text-bluedianne-900 py-3">
                            Find answers to common questions about our food safety consultancy services.
                        </p>
                    </div>
                    <Faq />
                </div>
            </section>

            {/* Gallery Section */}
            {/* <section className='w-full py-12 '>
                <div className="container mx-auto px-6">
                    <div className=' mb-14'>
                        <Heading text={" TAHWIL Gallery"} />
                    </div>
                    <Gallery />
                </div>
            </section> */}

            {/* conatct section */}
            <section className='w-full mt-12 border-t-[2px] border-maincolor-fifth'>
                <div className='w-11/12 flex flex-col lg:flex-row md:flex-row items-center justify-center gap-10 py-20 mx-auto'>
                    <ContactPage />
                </div>
            </section>

            <Footer />

        </div>
    )
}

export default Home