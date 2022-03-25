import React, { useEffect, useState } from 'react'
import { getAllDoctors } from '../../services/api';
import { Link } from 'react-router-dom';
import Doctor from "./DocList"

const DocLists = () => {
    
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            let data = await getAllDoctors();
            console.log(data);
            setDocs(data);
        }
        fetchData();
    }, [])

    return (

        <div className='bg-gradient-to-r from-purple-200 via-violet-300 to-violet-400 block items-center justify-center p-4 md:flex'>
            <div className='mt-16'>
                {
                    docs.map(doc =>
                        <Link to ={`/docDetail/${doc._id}`}>
                            < div className='mt-5 bg-cover bg-white flex flex-col items-center max-w-screen-lg overflow-hidden rounded-lg shadow-lg text-gray-600  '>

                                <h1>{doc._id}</h1>

                                <Doctor doc={doc} />

                            </div>
                        </Link>
                    )
                }
            </div>
        </div>

    )
}

export default DocLists
