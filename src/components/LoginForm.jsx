import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

const LoginForm = ({ setIsLoggedIn }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "", password: ""
    })
    const [showPassword, setShowPassword] = useState(false);

    function changeHandler(event) {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value
        }))
    }

    function submitHandler(event) {
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/")
    }
    return (
        <form onSubmit={submitHandler} className='flex flex-col gap-y-4 mt-6'>
            <label className='w-full'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                    Email Address<sup className='text-pink-200'>*</sup>
                </p>
                <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={changeHandler}
                    placeholder="Enter email Address"
                    name="email"
                    className='bg-richblack-800 rounded-[0.5rem] text-red-5 w-full p-[12px] border border-yellow-500'
                />
            </label>
            <label className='w-full relative'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                    Password<sup className='text-pink-200'>*</sup>
                </p>
                <input
                    type={showPassword ? ("text") : ("password")}
                    required
                    value={formData.password}
                    onChange={changeHandler}
                    placeholder="Enter Passwword"
                    name="password"
                    className='bg-richblack-800 rounded-[0.5rem] text-red-5 w-full p-[12px] border border-yellow-500'
                />
                <span className='absolute right-3 top-[38px] cursor-pointer'
                    onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ?
                        (<AiOutlineEyeInvisible fontSize={24} fill='ABF2BF' />) :
                        (<AiOutlineEye fontSize={24} fill='ABF2BF' />)}
                </span>
                <Link to="#" className='text-xs mt-1 text-blue-900 max-w-max ml-auto'>
                    Forgot Password
                </Link>
            </label>

            <button className='bg-yellow-400 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-4'>
                Sign In
            </button>
        </form>
    )
}

export default LoginForm
