import { useState } from 'react'
import { faqData } from '../../../../data/faq'
import { IoChevronDown } from 'react-icons/io5';

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-7xl mx-auto p-8 space-y-8 ">

            <div className="space-y-4">
                {faqData.map((faq, index) => (
                    <div key={index} className="border-b border-bluedianne-950 ">
                        <div
                            className="flex justify-between items-center py-4 px-4 cursor-pointer bg-bluedianne-5"
                            onClick={() => toggleFaq(index)}
                        >
                            <h2 className="lg:text-lg md:text-lg text-base font-semibold text-bluedianne-950">{faq.question}</h2>
                            <IoChevronDown
                                className={`w-5 h-5 text-bluedianne-950 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                            />
                        </div>
                        <div
                            className={`overflow-hidden bg-bluedianne-5 transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                        >
                            <p className="pb-4 pt-2 px-4 text-bluedianne-950">
                                {faq.answer}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Faq;