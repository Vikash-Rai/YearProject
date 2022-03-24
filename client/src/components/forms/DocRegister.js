import React from 'react'
import {Link} from 'react-router-dom';
import TextField from '@mui/material/TextField';
//import DateAdapter from '@mui/lab/AdapterDateFns';
const DocRegister = () => {
  return (
    <>
 
   <div className='bg-gradient-to-r from-purple-200 via-violet-300 to-violet-400 block items-center justify-center p-4 md:flex'>
       <div className='mt-16 bg-cover bg-purple-700 flex flex-col items-center max-w-screen-lg overflow-hidden rounded-lg shadow-lg text-gray-600 w-full md:flex-row '>

            <div className='backdrop-blur-sm backdrop-filter flex flex-col items-center justify-center p-4 text-white w-full md:w-1/2'>
                <h1 className='font-bold text-3xl'>Register.Here</h1>
                <p className='italic text-lg'>Enter OTP for succesfully Account Creation</p>
                <textarea class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-purple-200 bg-clip-padding
                                                 border border-solid border-gray-300 rounded transition ease-in-out m-0
                                               focus:text-violet-700 focus:bg-purple-100 focus:border-white focus:outline-none "
                                               placeholder='Please Write Here.........' name='desc'/>
            </div>
            {/**form */}
            <div className='bg-white flex flex-col items-center p-4 space-y-8 w-full md:w-1/2'>
                <div className='flex flex-col items-center'>
                    <h1 className='font-medium text-purple-700 text-xl'>Welcome Doctor</h1>
                    <p>Login Docter Here!</p>
                </div>
            {/**Inputs */}
            <form className='flex flex-col items-center space-y-4'>
            <div className='grid grid-cols-1 lg:grid-cols-2'>

            <div className='relative'>
                                    <label className="block text-purple-700 text-sm  mb-2" for="username">
                                        Full Name
                                    </label>
                                    <input name='fullname'  className='border border-gray-300 outline-none placeholder-gray-400 pl-9 pr-4 py-1 rounded-md transition focus:ring-2 focus:ring-green-400' placeholder="e.g. Vijay Kumar Rai" type="text"  />
                                </div>
                                <div className='relative lg:px-2'>
                                    <label className="block text-violet-700 text-sm  mb-2" for="username">
                                        Email ID
                                    </label>
                                    <input name='email'  className='border border-gray-300 outline-none placeholder-gray-400 pl-9 pr-4 py-1 rounded-md transition focus:ring-2 focus:ring-green-400' placeholder="e.g.mailid@gmail.com" type="text" />
                                </div>
                                <div className='relative mt-2'>
                                    <label className="block text-violet-700 text-sm  mb-2" for="username">
                                        Contact Number
                                    </label>
                                    <input name='contact'  className='border border-gray-300 outline-none placeholder-gray-400 pl-9 pr-4 py-1 rounded-md transition focus:ring-2 focus:ring-green-400' placeholder="e.g. +91-7XXXXXXX48" type="text" />
                                </div>
                                <div className='relative lg:px-2 mt-2'>
                                    <label className="block text-violet-700 text-sm  mb-2" for="username">
                                        WhatsApp Number
                                    </label>
                                    <input name='whatsapp'  className='border border-gray-300 outline-none placeholder-gray-400 pl-9 pr-4 py-1 rounded-md transition focus:ring-2 focus:ring-green-400' placeholder="e.g. +91-7XXXXXXX48" type="text" />
                                </div>

                                <div className='relative mt-2'>
                                    <label className="block text-violet-700 text-sm  mb-2" for="username">
                                        Address 1
                                    </label>
                                    <input name='address1'  className='border border-gray-300 outline-none placeholder-gray-400 pl-9 pr-4 py-1 rounded-md transition focus:ring-2 focus:ring-green-400' placeholder="e.g. B-1/128-4 " type="text" />
                                </div>
                                <div className='relative lg:px-2 mt-2'>
                                    <label className="block text-violet-700 text-sm  mb-2" for="username">
                                        Address 2
                                    </label>
                                    <input name='address2'  className='border border-gray-300 outline-none placeholder-gray-400 pl-9 pr-4 py-1 rounded-md transition focus:ring-2 focus:ring-green-400' placeholder="e.g. AB Colony Flat No 2" type="text" />
                                </div>

                                <div className='relative mt-2'>
                                    <label className="block text-violet-700 text-sm  mb-2" for="username">
                                        City
                                    </label>
                                    <input name='city'  className='border border-gray-300 outline-none placeholder-gray-400 pl-9 pr-4 py-1 rounded-md transition focus:ring-2 focus:ring-green-400' placeholder="e.g.Varanasi/Noida/..." type="text" />
                                </div>
                                <div className='relative lg:px-2 mt-2'>
                                    <label className="block text-violet-700 text-sm  mb-2" for="username">
                                        Pin/Zip Code
                                    </label>
                                    <input name='pincode'  className='border border-gray-300 outline-none placeholder-gray-400 pl-9 pr-4 py-1 rounded-md transition focus:ring-2 focus:ring-green-400' placeholder="e.g. 221005" type="text" />
                                </div>
                                <div className='relative mt-2'>
                                    <label className="block text-violet-700 text-sm  mb-2" for="username">
                                        State
                                    </label>
                                    <select name='state'  className="block appearance-none w-full bg-white border border-gray-300 hover:border-violet-500 px-4 py-1 pr-8 rounded-md transition focus:ring-2 focus:ring-violet-700" placeholder=''>
                                        <option>Select State</option>
                                        <option>Uttar Pradesh</option>
                                        <option>Bangalore</option>
                                        <option>Delhi</option>
                                    </select></div>

                                <div className='relative lg:px-2 mt-2'>
                                    <label className="block text-violet-700 text-sm  mb-2" for="username">
                                        Country
                                    </label>
                                    <select name='country'  className="block appearance-none w-full bg-white border border-gray-300 hover:border-violet-500 px-4 py-1 pr-8 rounded-md transition focus:ring-2 focus:ring-violet-700">
                                        <option>India</option>
                                        <option>Nepal</option>
                                    </select></div>

                                <div className='relative mt-2'>
                                    <label className="block text-violet-700 text-sm  mb-2" for="username">
                                        Designation 1
                                    </label>
                                    <select name='designation1'  className="block appearance-none w-full bg-white border border-gray-300 hover:border-violet-500 px-4 py-1 pr-8 rounded-md transition focus:ring-2 focus:ring-violet-700">
                                        <option>MD General Medicine</option>
                                        <option>MBBS</option>
                                        <option>BAMS</option>
                                    </select></div>

                                <div className='relative lg:px-2 mt-2'>
                                    <label className="block text-violet-700 text-sm  mb-2" for="username">
                                        Designation 2
                                    </label>
                                    <select name='designation2'  className="block appearance-none w-full bg-white border border-gray-300 hover:border-violet-500 px-4 py-1 pr-8 rounded-md transition focus:ring-2 focus:ring-violet-700">
                                        <option>MBBS</option>
                                        <option>BHMS</option>
                                    </select></div>
                                <div className='relative mt-2'>
                                    <label className="block text-violet-700 text-sm  mb-2" for="username">
                                        Speciality
                                    </label>
                                    <select name='speciality'  className="block appearance-none w-full bg-white border border-gray-300 hover:border-violet-500 px-4 py-1 pr-8 rounded-md transition focus:ring-2 focus:ring-violet-700">
                                        <option>General Physician</option>
                                        <option>Physiotherapist</option>
                                        <option>Psychologist</option>
                                    </select></div>
                                <div className='relative lg:px-2 mt-2'>
                                    <label className="block text-violet-700 text-sm  mb-2" for="username">
                                        Total Years of Experience
                                    </label>
                                    <input name='experience'  className='border border-gray-300 outline-none placeholder-gray-400 pl-9 pr-4 py-1 rounded-md transition focus:ring-2 focus:ring-green-400' placeholder="eg.8 months /  2 years" type="text" />
                                </div>


                                {/* <div className='relative mt-2'>
                                    <label className="block text-violet-700 text-sm  mb-2" for="username">
                                        Date Of Berth
                                    </label>
                                    <DatePicker name='dob'  selected={startDate} onChange={(date) => setStartDate(date)}  className='border border-gray-300 outline-none placeholder-gray-400 pl-9 pr-4 py-1 rounded-md transition focus:ring-2 focus:ring-green-400' />
                                </div> */}
                                <div className='relative mt-2'>
                                    <label className="block text-violet-700 text-sm  mb-2" for="username">
                                        Date Of Berth
                                    </label>
                                    <TextField name='dob' type="date" defaultValue="2017-05-25" className='border border-gray-300 outline-none placeholder-gray-400 pl-9 pr-4 py-1 rounded-md transition focus:ring-2 focus:ring-rose-500'  />
                                </div>

                                <div className='relative lg:px-2 mt-2'>
                                    <label className="block text-violet-700 text-sm  mb-2" for="username">
                                        Blood Group
                                    </label>
                                    <select name='bloodgroup'  className="block appearance-none w-full bg-white border border-gray-300 hover:border-violet-500 px-4 py-1 pr-8 rounded-md transition focus:ring-2 focus:ring-violet-700">
                                        <option>AB+</option>
                                        <option>B+</option>
                                        <option>AB-</option>
                                    </select></div>

                                <div className='relative mt-2'>
                                    <label className="block text-violet-700 text-sm  mb-2" for="username">
                                        Consultation Fee at Clinic
                                    </label>
                                    <input name='clinicfee'  className='border border-gray-300 outline-none placeholder-gray-400 pl-9 pr-4 py-1 rounded-md transition focus:ring-2 focus:ring-green-400' placeholder="e.g. 200/500/700..." type="text" />
                                </div>
                                <div className='relative lg:px-2 mt-2'>
                                    <label className="block text-violet-700 text-sm  mb-2" for="username">
                                        Online Video Consultaion Fee
                                    </label>
                                    <input name='videofee'  className='border border-gray-300 outline-none placeholder-gray-400 pl-9 pr-4 py-1 rounded-md transition focus:ring-2 focus:ring-green-400' placeholder="e.g. 200/500/700..." type="text" />
                                </div>
                                <div className='relative mt-2'>
                                    <label className="block text-violet-700 text-sm  mb-2" for="username">
                                        Your Clinic Name
                                    </label>
                                    <input name='clinicname'  className='border border-gray-300 outline-none placeholder-gray-400 pl-9 pr-4 py-1 rounded-md transition focus:ring-2 focus:ring-green-400' placeholder="e.g. ABC Health Clinic" type="text" />
                                </div>
                <Link to = "/docRegister"><button className='mt-7 bg-violet-700 font-medium inline-flex items-center px-3 py-1 rounded-md shadow-md text-white transition hover:bg-violet-500' type="submit">
                    Submit
                </button></Link>
</div>
            </form>
            {/**Links */}
            <div className='flex flex-col items-center'>
                <p className='italic'> Get Yourself Register!</p>
                <Link to = "/docSignup"> <a className='ml-1 text-violet-700 hover:underline'>Back to Sign Up</a></Link>

            </div>
            
            </div>
       </div>

   </div>
   </>
  )
}

export default DocRegister