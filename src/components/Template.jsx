import React from 'react'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import { FcGoogle } from "react-icons/fc"
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Template = ({ formtype, setIsLoggedIn }) => {

    console.log(formtype)
    return (
        <>
        <div className='my-[23px]'>
        <div className='flex justify-between w-11/12 max-w-[1160px] py-5 mx-auto mt-[70px] border border-black rounded-[40px]'>
            <div className='w-11/12 max-w-[650px] mx-auto '>
                {/* <h1 className='text-richblack-5 font-semibold text-[1.875rem] leding-[2.375rem]'>{title}</h1> */}

                {formtype === "signup" ?
                    (<SignupForm setIsLoggedIn={setIsLoggedIn} />) :
                    (<LoginForm setIsLoggedIn={setIsLoggedIn} />)}
                <div className='flex flex-row w-full items-center my-4 gap-x-4'>
                    <div className='h-[1px] w-full bg-yellow-500'></div>
                    <div className='text-richblack-700'>Or.....</div>
                    <div className='h-[1px] w-full bg-yellow-500'></div>
                </div>
                <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-red
                border border-yellow-500 px-[12px] py-[8px] gap-x-2 mt-6'>
                    <FcGoogle />
                    Sign up with google
                </button>
            </div>
        </div>
        </div>
        <div className='backButton'>
        <Link to={"/"}>
            Back to Home{" "}
          </Link>
        </div>
        </>
    )
}

export default Template