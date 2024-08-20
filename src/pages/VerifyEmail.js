import React, { useEffect, useState } from 'react'
import Loader from '../components/common/Loader'
import OtpInput from 'react-otp-input';
import { useDispatch, useSelector } from 'react-redux';
import { sendOtp, signUp } from '../services/operations/authAPI';
import { useNavigate } from 'react-router-dom';
import { BiReset } from "react-icons/bi";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const VerifyEmail = () => {

    const { signupData, loading } = useSelector((state) => state.auth);
    const [otp, setOtp] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (!signupData) {
            navigate("/signup");
        }
    }, [])

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const {
            accountType,
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
        } = signupData
        dispatch(signUp(accountType, firstName, lastName, email, password, confirmPassword, otp, navigate));;
    }

    return (
        <div className=' mt-52 w-[80%] sm:w-[50%] md:w-[38%] lg:w-[28%] flex flex-col mx-auto my-auto text-white font-inter gap-5 items-center'>
            {
                loading
                    ? (<div> <Loader /></div>)
                    : (
                        <div className='max-w-[500px] p-4 lg:p-8'>
                            <h1 className='text-3xl font-semibold text-bluedianne-950 mb-2'>
                                Verify Email
                            </h1>
                            <p className='my-4 text-bluedianne-950 font-medium'>
                                A Verification code has been sent to you.
                                Enter the code below
                            </p>
                            <form onSubmit={handleOnSubmit}
                                className='flex flex-col gap-10'
                            >
                                <OtpInput
                                    value={otp}
                                    onChange={setOtp}
                                    numInputs={6}
                                    renderSeparator={<span className='text-bluedianne-950'>-</span>}
                                    renderInput={(props) => (
                                        <input {...props}
                                            style={{
                                                boxShadow: "inset 0px -1px 0px rgba(255,255,255,0)",
                                            }}
                                            placeholder='-'
                                            className=' w-[38%] lg:w-[50%] border-1 bg-bluedianne-950 rounded-xl border-[2px] border-bluedianne-200 text-maincolor-first 
                                    aspect-square text-center focus:outline-2 focus:outline-yellow-50  mx-auto ' />
                                    )}

                                />
                                <button type='submit'
                                    className=' w-full font-semibold bg-yellow-50 text-carbanblack py-2 mt-2 mb-2 rounded-md '
                                >
                                    Verify Email
                                </button>
                            </form>

                            <div className='flex flex-row justify-between items-center mt-6'>

                                <Link to='/login'>
                                    <div className='flex flex-row items-center gap-x-2 text-maincolor-fifth'>
                                        <FaArrowLeftLong fontSize={24} />
                                        Back To Login
                                    </div>
                                </Link>

                                <button
                                    onClick={() => dispatch(sendOtp(signupData.email, navigate))}
                                    className='flex flex-row items-center gap-x-2 text-bluedianne-400'
                                >
                                    <BiReset fontSize={24} />
                                    Resend it
                                </button>

                            </div>

                        </div>
                    )
            }
        </div>
    )
}

export default VerifyEmail