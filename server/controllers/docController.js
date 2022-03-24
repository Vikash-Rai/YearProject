import doctorModel from "../modals/doctorSchema.js"


export const createDoctor=async(request,response)=>{
    console.log(request.body)
    try{
        const doc = await new doctorModel(request.body);
        doc.save();
       response.status(200).json('Doctor Added Successfully')
    }
    catch(error){
        response.status(500).json(error)
    }
}

export const getAllDoctors=async(request,response)=>{
    try{
        const docs = await doctorModel.find({});
        response.status(200).json(docs)

    }
    catch(error){
        response.status(500).json(error)
    }
}

export const getPost=async(request,response)=>{
    try{
     let post = await doctorModel.findById(request.params.id);
     response.status(200).json(post);
    }catch(error){
      response.status(500).json(error);
    }
  }