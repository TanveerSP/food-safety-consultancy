import React, { useState } from 'react';
import { FiEye, FiEyeOff } from "react-icons/fi";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

import { sendOtp } from "../../../services/operations/authAPI"
import { setSignupData } from '../../../slice/authSlice';
import { ACCOUNT_TYPE } from '../../../utils/constants';

const SignupForm = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    // User account type
    const [accountType, setAccountType] = useState(ACCOUNT_TYPE.USER);

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const { firstName, lastName, email, password, confirmPassword } = formData;

    const handleOnChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };

    // Handle form submission
    const handleOnSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            toast.error("Passwords Do Not Match");
            return;
        }
        const signupData = {
            ...formData,
            accountType,
        };

        // Setting signup data to state
        // To be used after OTP verification
        dispatch(setSignupData(signupData));
        // Send OTP to user for verification
        dispatch(sendOtp(formData.email, navigate));

        // Reset form fields
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
        });
        setAccountType(ACCOUNT_TYPE.USER);
    };

    return (
        <form
            className='mt-6 flex lg:min-w-[400px] md:min-w-[300px] flex-col gap-y-4'
            onSubmit={handleOnSubmit}
        >
            {/* First name and last name */}
            <div className='flex gap-x-4'>
                <label className='w-full'>
                    <p className='mb-1 pl-2 text-[0.875rem] leading-[1.375rem] text-maincolor-sixth'>
                        Enter Your First Name
                    </p>
                    <input
                        required
                        type="text"
                        name="firstName"
                        value={firstName}
                        onChange={handleOnChange}
                        placeholder='Enter First Name'
                        className='w-full bg-maincolor-first h-[2.5rem] rounded-lg px-3 border-[1px] border-bluedianne-950 text-bluedianne-950 placeholder-bluedianne-950'
                    />
                </label>
                <label className='w-full'>
                    <p className='mb-1 pl-2 text-[0.875rem] leading-[1.375rem] text-maincolor-sixth'>
                        Enter Your Last Name
                    </p>
                    <input
                        required
                        type="text"
                        name="lastName"
                        value={lastName}
                        onChange={handleOnChange}
                        placeholder='Enter Last Name'
                        className='w-full bg-maincolor-first h-[2.5rem] rounded-lg px-3 border-[1px] border-bluedianne-950 text-bluedianne-950 placeholder-bluedianne-950'
                    />
                </label>
            </div>

            {/* Email Field */}
            <label className='w-full'>
                <p className='mb-1 pl-2 text-[0.875rem] leading-[1.375rem] text-maincolor-sixth'>
                    Email Address
                </p>
                <input
                    type="email"
                    required
                    name="email"
                    value={email}
                    onChange={handleOnChange}
                    placeholder='Enter email address'
                    className='w-full bg-maincolor-first h-[2.5rem] rounded-lg px-3 border-[1px] border-bluedianne-950 text-bluedianne-950 placeholder-bluedianne-950'
                />
            </label>

            {/* Password Fields */}
            <div className='flex gap-x-4'>
                <label className='relative w-full'>
                    <p className='mb-1 pl-2 text-[0.875rem] leading-[1.375rem] text-maincolor-sixth'>
                        Password
                    </p>
                    <input
                        type={showPassword ? "text" : "password"}
                        name='password'
                        value={password}
                        onChange={handleOnChange}
                        placeholder='Enter Password'
                        className='w-full mb-1 bg-maincolor-first h-[2.5rem] rounded-lg px-3 border-[1px] border-bluedianne-950 text-bluedianne-950 placeholder-bluedianne-950'
                    />
                    <span
                        className='absolute right-3 top-9 z-[10] cursor-pointer'
                        onClick={() => setShowPassword((prev) => !prev)}
                    >
                        {showPassword ? (
                            <FiEye fontSize={20} className='text-bluedianne-950' />
                        ) : (
                            <FiEyeOff fontSize={20} className='text-bluedianne-950' />
                        )}
                    </span>
                </label>

                <label className='relative w-full'>
                    <p className='mb-1 pl-2 text-[0.875rem] leading-[1.375rem] text-maincolor-sixth'>
                        Confirm Password
                    </p>
                    <input
                        type={showConfirmPassword ? "text" : "password"}
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={handleOnChange}
                        placeholder='Enter Password'
                        className='w-full mb-1 bg-maincolor-first h-[2.5rem] rounded-lg px-3 border-[1px] border-bluedianne-950 text-bluedianne-950 placeholder-bluedianne-950'
                    />
                    <span
                        className='absolute right-3 top-9 z-[10] cursor-pointer'
                        onClick={() => setShowConfirmPassword((prev) => !prev)}
                    >
                        {showConfirmPassword ? (
                            <FiEye fontSize={20} className='text-bluedianne-950' />
                        ) : (
                            <FiEyeOff fontSize={20} className='text-bluedianne-950' />
                        )}
                    </span>
                </label>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className='mt-4 bg-maincolor-sixth text-maincolor-first bg-gradient-to-r from-[#B43F3F] to bg-[#FF6728] rounded-lg py-2'
            >
                Sign Up
            </button>

            <div className='w-full h-[1px] bg-bluedianne-950 mt-2'></div>

            <div className='flex items-center justify-between'>
                <p className='text-carbanblack text-xl'>
                    Already have an account?
                </p>
                <Link to={"/login"}>
                    <p className="mt-1 ml-auto max-w-max text-lg text-bluedianne-950">
                        Login
                    </p>
                </Link>
            </div>
        </form>
    );
};

export default SignupForm;
