import registerModel from "../modals/docModels/registerSchema.js"
import signupdocModel from "../modals/docModels/signupdocSchema.js";


export const registerDoctor=async(request,response)=>{
    console.log(request.body)
    try{
        const docregister = await new registerModel(request.body);
        docregister.save();
        response.status(200).json('Doctor Registered Successfully')
    }
    catch(error){
        response.status(500).json(error)
    }
}

export const signupDoctor=async(request,response)=>{
    console.log(request.body)
    try{
        const newdoc = await new signupdocModel(request.body);
        newdoc.save();
        response.status(200).json('Doctor SignUp Successfully')
    }catch{
        response.status(500).json(error);
    }
}

export const getAllDoctors=async(request,response)=>{
    try{
        const docs = await registerModel.find({});
        response.status(200).json(docs)

    }
    catch(error){
        response.status(500).json(error)
    }
}

export const getPost=async(request,response)=>{
    try{
     let post = await registerModel.findById(request.params.id);
     response.status(200).json(post);
    }catch(error){
      response.status(500).json(error);
    }
  }