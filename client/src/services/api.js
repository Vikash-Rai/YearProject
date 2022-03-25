import axios from 'axios'
const URL = 'http://localhost:8000';

export const createDoctor = async(doc)=>{
    try{
        return await axios.post(`${URL}/create`,doc)
    }
    catch(error){
        console.log('Error while calling creatDoctor api',error)
    }
}

export const getAllDoctors = async()=>{
    try{
        let response =  await axios.get(`${URL}/docs`)
        return response.data
    }
    catch(error){
        console.log('Error while calling creatDoctor api',error)
    }

}

export const getPost = async(id)=>{
    try{
        let response = await axios.get(`${URL}/post/${id}`);
        return response.data;

    }catch(error){
        console.log('Error while calling getallpost api',error);
    }
} 