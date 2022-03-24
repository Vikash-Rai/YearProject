import React from 'react'
import {Link} from 'react-router-dom';
const DocLogin = () => {
  return (
   <>
   
   <div className='bg-gradient-to-r from-purple-200 via-violet-300 to-violet-400 block items-center justify-center p-4 md:flex'>
       <div className='mt-16 bg-cover bg-purple-700 flex flex-col items-center max-w-screen-lg overflow-hidden rounded-lg shadow-lg text-gray-600 w-full md:flex-row '>

            <div className='backdrop-blur-sm backdrop-filter flex flex-col items-center justify-center p-4 text-white w-full md:w-1/2'>
                <h1 className='font-bold text-3xl'>NameHere</h1>
                <p className='italic text-lg'>For Websites Services</p>

            </div>
            {/**form */}
            <div className='bg-white flex flex-col items-center p-4 space-y-8 w-full md:w-1/2'>
                <div className='flex flex-col items-center'>
                    <h1 className='font-medium text-purple-700 text-xl'>Welcome Doctor</h1>
                    <p>Login Docter Here!</p>
                </div>
            {/**Inputs */}
            <form className='flex flex-col items-center space-y-4'>
                <div className='relative'>
                <label className="block text-violet-700 text-sm  mb-2" for="username">
            Email ID / Mobile Number
          </label>
                    <input className='border border-gray-300 outline-none placeholder-gray-400 pl-9 pr-4 py-1 rounded-md transition focus:ring-2 focus:ring-purple-700' placeholder="username..." type="text"/>
                </div>
                <div className='relative'>
                <label className="block text-violet-700 text-sm  mb-2" for="username">
            Password
          </label>
                    <input className='border border-gray-300 outline-none placeholder-gray-400 pl-9 pr-4 py-1 rounded-md transition focus:ring-2 focus:ring-purple-700' placeholder="password..." type="password"/>
                </div>
                <button className='bg-violet-700 font-medium inline-flex items-center px-3 py-1 rounded-md shadow-md text-white transition hover:bg-violet-500' type="submit">
                    Login 
                </button>

            </form>
            {/**Links */}
            <div className='flex flex-col items-center'>
                <p className='italic'> Get Yourself Register!</p>
                <Link to = "/docSignup"><a className='ml-1 text-violet-700 hover:underline'>Signup Now</a></Link>

            </div>
            <div className='flex flex-col items-center'>
                <p className='italic'> Forgot Password!</p>
                <a className='ml-1 text-violet-700 hover:underline'>Reset Password Here!</a>
            </div>
            </div>
       </div>

   </div>
   </>
  )
}

export default DocLogin