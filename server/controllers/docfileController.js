// import docFile from "../modals/docUpload.js"

// export const createFile=async(request,response)=>{
//     console.log(request.body)
//     try{
//         const file = await new docFile(request.body);
//         file.save();
//        response.status(200).json('Doctor Added Successfully')
//     }
//     catch(error){
//         response.status(500).json(error)
//     }
// }