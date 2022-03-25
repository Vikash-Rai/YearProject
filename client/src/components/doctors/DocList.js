import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


const DocList = ({doc}) => {
  return (

       
          <div className='mt-2 mb-2 ml-2 mr-2 grid lg:grid-cols-2'>
            <div className='flex items-center mt-1'>
              <div className='flex items-center'>
                <img className='h-28 w-28 rounded-full' src="../images/image.jpg" alt="profile photo" />
                <div className='ml-2'>
                  <p className='text-gray-800 text-2xl font-semibold '>Dr.{doc.fullname}</p>
                  <p className='"text-gray-600 text-sm'>{doc.designation1}, {doc.designation2} [{doc.speciality}]</p>
                  <p className='"text-green-600 text-sm'>{doc.city}, {doc.state}</p>
                  <p className='"text-gray-600 text-sm'>{doc.experience} years experience overall</p>
                  <p className='"text-gray-600 text-sm'>RS. {doc.clinicfee} fee at Clinic. || RS. {doc.videofee} fee on Video Consult</p>
                  <p className='"text-gray-600 text-sm'>{doc.desc}</p>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-3 lg:grid-cols-1'>
              <div>
                <Link to="/docLists"><button className='mt-2 bg-violet-700 font-medium inline-flex items-center px-3 py-1 rounded-md shadow-md text-white transition hover:bg-violet-500' type="submit">
                  Book Appointment
                </button></Link></div>
              <div>
                <Link to="/docLists"><button className='mt-2 bg-violet-700 font-medium inline-flex items-center px-3 py-1 rounded-md shadow-md text-white transition hover:bg-violet-500' type="submit">
                  Video Call
                </button></Link></div>
              <div>
                <Link to="/docLists"><button className='mt-2 bg-violet-700 font-medium inline-flex items-center px-3 py-1 rounded-md shadow-md text-white transition hover:bg-violet-500' type="submit">
                  Home
                </button></Link></div>
            </div>
          </div>
        
      
    

  )
}

export default DocList
