import React from 'react'
import { NavLink } from 'react-router-dom'
function Login() {

  return (
    <div className='w-full lg:h-[820px] sm:h-[780px] h-[720px] sm:bg-[url("/background.jpg")] bg-black '>
      <div className='h-[850px] flex justify-center sm:bg-[rgba(0,0,0,0.4)] '>
        <form className='w-[420px] h-[650px] flex flex-col lg:mt-[110px] sm:mt-[80px] mt-[50px] sm:bg-[rgba(0,0,0,0.9)] p-11 gap-[14px]'>
          <h1 className='text-white text-3xl mb-4 font-bold font-sans'>Sign in</h1>
          <input type='text' className='w-[100%] border-[1px] border-[#5e5f5f] p-4 bg-[rgba(0,0,0,0.1)] text-white ' placeholder='Email or mobile number'/>
          <input type='text' className='w-[100%] border-[1px] border-[#5e5f5f] p-4 bg-[rgba(0,0,0,0.1)] text-white ' placeholder='Password'/>
          <button type='submit' className='bg-[#E50914] text-white text-[17px] py-[8px] hover:bg-[rgb(198,9,20)] rounded border-none cursor-pointer duration-300'>Sign in</button>
          <p className='text-[#a3a5a5] text-center text-[15px]'>OR</p>
          <button type='submit' className='bg-[rgba(71,73,74,0.5)] text-white text-[17px] py-[8px] hover:bg-[rgba(97,99,99,0.5)] rounded border-none cursor-pointer duration-300'>Use a sign-in code</button>
          <NavLink className="text-white text-center text-[16px] underline hover:text-[#a3a5a5]">Forgot password?</NavLink>
          <div className='flex gap-2 '>
            <input type='checkbox' className='relative top-[4px] accent-black w-4 h-4 border-[gray] border-[1px] text-[15px] duration-300'/>
            <span className="text-white text-center text-[17px] ">Remember me</span>
          </div>
          <p className='text-[#a3a5a5] text-[15px]'>New to Netflix?<NavLink className="text-[17px] text-white hover:underline cursor-pointer">Sign up now</NavLink></p>
          <p className='text-[#a3a5a5] text-[15px]'>This page is protected by Google reCAPTCHA to ensure you're not a bot</p>
          <NavLink className="text-[14px] text-[#1960D7] underline cursor-pointer">Learn more</NavLink>
        </form>
      </div>
    </div>
  )
}

export default Login