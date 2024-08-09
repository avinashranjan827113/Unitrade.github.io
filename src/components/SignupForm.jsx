import React from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'


const SignupForm = ({ setIsLoggedIn }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: "", lastName: "", email: "", password: "", confirmPassword: ""
    })

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [accountType,setAccountType] =useState('Student');

    function changeHandler(event) {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value
        }))
    }
    function submitHandler(event) {
        event.preventDefault();
        if (formData.password != formData.confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }
        setIsLoggedIn(true);
        toast.success("Account Created");
        navigate("/")
    }
    return (
        <div>
            <div className='flex bg-yellow-600 p-1 gap-x-1 rounded-full max-w-max '>
                <button  className={`${accountType==="Student" ? 
                "bg-yellow-400 text-richblack-5" :
                "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-full duration-200`} onClick={()=>{
                    setAccountType("Student");
                }}>
                    Student
                </button>

                <button className={`${accountType==="Admin" ? 
                "bg-yellow-400 text-richblack-5" :
                "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-full duration-200`} onClick={()=>{
                    setAccountType("Admin");
                }}>
                    Admin
                </button>
            </div>

            <form onSubmit={submitHandler}>
                <div className='flex justify-between mt-[10px]'>
                    <label className='w-full'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                            First Name<sup className='text-pink-700'>*</sup> </p>
                        <input
                            required
                            type="text"
                            name="firstName"
                            onChange={changeHandler}
                            placeholder="Enter First Name"
                            value={formData.firstName}
                            className='bg-richblack-800 rounded-[0.5rem] text-red-5 w-full p-[12px] border border-yellow-500'
                        />
                    </label>
                    <label className='w-full ml-4'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                            Last Name<sup className='text-pink-700'>*</sup> </p>
                        <input
                            required
                            type="text"
                            name="lastName"
                            onChange={changeHandler}
                            placeholder="Enter Last Name"
                            value={formData.lastName}
                            className='bg-richblack-800 rounded-[0.5rem] text-red-5 w-full p-[12px] border border-yellow-500'
                        />
                    </label>
                </div>

                <div className='mt-[10px]'>
                    <label className='w-full'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                            Email Address<sup className='text-pink-700'>*</sup> </p>
                        <input
                            required
                            type="email"
                            name="email"
                            onChange={changeHandler}
                            placeholder="Enter Email Address"
                            value={formData.email}
                            className='bg-richblack-800 rounded-[0.5rem] text-red-5 w-full p-[12px] border border-yellow-500'
                        />
                    </label>
                </div>

                <div className='flex justify-between mt-[10px]'>
                    <label className='w-full relative'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                            Create Password<sup className='text-pink-700'>*</sup> </p>
                        <input
                            required
                            type={showPassword ? ("text") : ("password")}
                            name="password"
                            onChange={changeHandler}
                            placeholder="Enter Password"
                            value={formData.password}
                            className='bg-richblack-800 rounded-[0.5rem] text-red-5 w-full p-[12px] border border-yellow-500'
                        />
                        <span className='absolute right-3 top-[38px] cursor-pointer'
                            onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword ?
                                (<AiOutlineEyeInvisible fontSize={24} fill='ABF2BF' />) :
                                (<AiOutlineEye fontSize={24} fill='ABF2BF' />)}
                        </span>
                    </label>
                    <label className='w-full relative ml-4'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                            Confirm Password<sup className='text-pink-700'>*</sup> </p>
                        <input
                            required
                            type={showConfirmPassword ? ("text") : ("password")}
                            name="confirmPassword"
                            onChange={changeHandler}
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            className='bg-richblack-800 rounded-[0.5rem] text-red-5 w-full p-[12px] border border-yellow-500'
                        />
                        <span className='absolute right-3 top-[38px] cursor-pointer'
                            onClick={() => setShowConfirmPassword((prev) => !prev)}>
                            {showConfirmPassword ?
                                (<AiOutlineEyeInvisible fontSize={24} fill='ABF2BF' />) :
                                (<AiOutlineEye fontSize={24} fill='ABF2BF' />)}
                        </span>
                    </label>
                </div>
                <button className='w-full bg-yellow-400 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-4'>
                    Create Account
                </button>
            </form>
        </div>
    )
}

export default SignupForm
