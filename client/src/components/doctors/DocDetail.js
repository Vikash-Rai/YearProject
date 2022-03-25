import React,{useState,useEffect}from 'react'
import { useParams } from 'react-router-dom';
import { getPost } from '../../services/api';


const DocDetail = () => {
    const params = useParams();
    const [post,setPost] = useState({});   
    useEffect(()=>{
        const fetchData =  async()=>{
        let data = await getPost(params.id);
        console.log(data);
        setPost(data);
       }
       fetchData(); 
},[]);

    return (
                <div className='bg-cover bg-rose-100 flex flex-col items-center  overflow-hidden rounded-lg shadow-lg text-gray-600 w-full md:flex-row '>

                    <div className='mt-16 ml-10 grid grid-cols-1 lg:grid-cols-2'>
                        <div>
                            <div className='flex items-center mt-1'>
                                <div className='flex items-center'>
                                    <img className='h-28 w-28 rounded-full' src="three.jpg" alt="" />
                                    <div className='ml-2'>
                                        <p className='text-gray-800 text-2xl font-semibold '>{post.fullname}</p>
                                        <p className='"text-gray-600 text-sm'>{post.designation1}</p>
                                        <p className='"text-green-600 text-sm'>{post.city}</p>
                                        <p className='"text-gray-600 text-sm'> {post.experience} years experience overall</p>
                                        <p className='"text-gray-600 text-sm'>RS.{post.clinicfee} fee at Clinic </p>
                                        <p className='"text-gray-600 text-sm'>{post.desc}</p>
                              </div>
                                </div>
                            </div>
                            

                        </div>
                        <div>

                            </div>


                    </div>
                </div>
        
    )
}

export default DocDetail