import React from 'react'
import Footer from '../components/common/Footer'
import GetInTouch from '../components/core/contactPage/GetInTouch'

const Contact = () => {
    return (
        <div className='mt-28'>
            <div className='w-full'>
                <div className=' py-10 px-5 relative flex items-center justify-center h-[50vh] bg-fixed bg-parallaxcontact bg-cover '>
                    <div className=' absolute w-full h-full bg-black opacity-60'></div>
                    <div className=' relative flex flex-col items-center gap-4 justify-center'>
                        <h1 className='text-start text-2xl lg:text-6xl md:text-4xl font-bold text-maincolor-first'>
                            Contact Us
                        </h1>
                        <p className='text-maincolor-first font-semibold text-start'>
                            Reach out for expert food safety guidance and tailored solutions
                        </p>
                    </div>
                </div>
            </div>

            <div className='w-full py-16 bg-maincolor-fifth'>
                <div className=' flex items-center justify-center '>
                    <p className='text-xl font-semibold text-maincolor-first max-w-[580px] text-center'>
                        We’d love to hear from you! Whether you have a question about our services, need expert advice, or want to discuss how we can help your business achieve its food safety goals, our team is here to assist you.
                    </p>
                </div>
            </div>

            <div className='w-full mb-10 mt-5'>
                <div className='w-11/12 px-2  flex flex-col lg:flex-row md:flex-row items-center justify-center gap-10 py-10 mx-auto'>
                    <GetInTouch />
                </div>
            </div>

            <Footer />

        </div>
    )
}

export default Contact