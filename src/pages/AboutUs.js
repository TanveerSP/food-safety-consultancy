import React from 'react'
import Heading from '../components/common/Heading'
import RoundedBtn from '../components/common/RoundedBtn'
import MissionImg from '../assets/Images/Our Mission.jpg'
import Footer from '../components/common/Footer'
import ContactPage from '../components/core/contactPage/ContactPage'

const AboutUs = () => {
    const widths = [300, 800];
    return (
        <div className='mt-28'>

            <div className='w-full'>
                <div className=' py-10 px-5 relative flex items-center justify-center h-[50vh] bg-fixed bg-parallaxx bg-cover '>
                    <div className=' absolute w-full h-full bg-black opacity-65'></div>
                    <div className=' relative flex flex-col items-center justify-center'>
                        <h1 className='text-start text-2xl lg:text-6xl md:text-4xl font-bold text-maincolor-first'>
                            About TAHWIL Food Safety Consultancy
                        </h1>
                        <p className='text-maincolor-first font-semibold text-start'>
                            Ensuring top-tier food safety with expert guidance and tailored solutions
                        </p>
                    </div>
                </div>
            </div>

            <div className='w-full py-10'>
                <div className='w-11/12 mx-auto relative flex flex-col gap-2 lg:flex-row md:flex-row md:py-10 md:px-10 py-5 px-5 gap-y-4 items-center justify-center lg:justify-between '>
                    <div className='flex flex-col items-start justify-around  gap-4 max-w-[400px] lg:max-w-[800px]'>
                        <Heading text={"Our Mission"} />
                        <p className='text-lg text-bluedianne-950 text-start'>
                            Our mission is simple yet profound: to empower businesses with the knowledge, tools, and support they need to ensure the highest standards of food safety. We believe that food safety is not just about compliance—it's about protecting the health of consumers, the reputation of your brand, and the success of your business.
                        </p>
                        <div className='mt-3'>
                            <RoundedBtn children={"Join With Us"} />
                        </div>
                    </div>
                    <div className=' w-full h-[1px] bg-bluedianne-700 lg:hidden md:hidden'></div>

                    <div className=' max-w-[600px]'>
                        <img src={MissionImg} alt="banner-Img" className=' rounded-xl' />
                    </div>
                </div>
            </div>

            <div className='w-full py-10'>
                <div className='w-11/12 mx-auto flex flex-col items-start px-5'>
                    <div className='mb-8 '>
                        <Heading text={"Why Choose Us?"} />
                    </div>
                    <div className='flex flex-col items-start gap-5'>

                        <p className='text-lg text-bluedianne-950 text-start'>
                            Expertise: With years of experience in the food safety industry, our team of consultants is well-versed in the latest regulations and best practices. We provide practical, actionable advice tailored to your unique needs.
                        </p>
                        <p className='text-lg text-bluedianne-950 text-start'>
                            Customized Solutions: We understand that every business is different. That’s why we offer customized training programs and consulting services designed to address your specific challenges and goals.
                        </p>
                        <p className='text-lg text-bluedianne-950 text-start'>
                            Comprehensive Services: From HACCP implementation to ongoing safety audits and certification support, we offer a full range of services to ensure your food safety systems are robust and compliant.
                        </p>
                        <p className='text-lg text-bluedianne-950 text-start'>
                            Commitment to Excellence: At TAHWIL, we are committed to excellence in everything we do. Our goal is to build long-term partnerships with our clients, helping them achieve and maintain the highest levels of food safety.
                        </p>

                    </div>
                </div>
            </div>

            <div className='w-full py-10 '>
                <div className='w-11/12 px-5 mx-auto gap-y-16 flex flex-col gap-5 lg:flex-row items-start justify-between'>
                    <div className='flex flex-col items-start justify-around  gap-4  lg:max-w-[800px]'>
                        <Heading text={"Our Services"} />
                        <div className='flex flex-col items-start gap-5'>
                            <p className='text-lg text-bluedianne-950 text-start'>
                                Food Safety Training: Equip your team with the essential knowledge to maintain high food safety standards through our tailored training programs.
                            </p>
                            <p className='text-lg text-bluedianne-950 text-start'>
                                HACCP Implementation: Our expert guidance ensures that your business complies with all regulatory requirements through seamless HACCP system implementation.
                            </p>
                            <p className='text-lg text-bluedianne-950 text-start'>
                                Food Safety Consulting: Optimize your food safety practices with our bespoke consulting services, including risk assessments, audit preparation, and certification guidance.
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col items-start justify-around  gap-4  lg:max-w-[800px]'>
                        <Heading text={"Join Us in Elevating Food Safety"} />
                        <p className='text-lg text-bluedianne-950 text-start'>
                            We invite you to join us in our commitment to food safety excellence. Whether you're looking to enhance your current safety protocols or need assistance with compliance and certification, TAHWIL is here to support you every step of the way.
                        </p>
                    </div>
                </div>
            </div>

            <div className='w-full mb-10 border-t-[1px] border-maincolor-fifth mt-5'>
                <div className='w-11/12 px-5 flex flex-col lg:flex-row md:flex-row items-center justify-center gap-10 py-10 mx-auto'>
                    <ContactPage />
                </div>
            </div>

            <Footer />

        </div>
    )
}

export default AboutUs