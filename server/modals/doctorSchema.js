import mongoose from "mongoose";
//doctor form Schema

const DoctorSchema=mongoose.Schema({
    fullname:{type:String},
    email:{type:String},
    contact:{type:Number},
    whatsapp:{type:Number},
    address1:{type:String},
    address2:{type:String},
    city:{type:String},
    pincode:{type:Number},
    state:{type:String},
    country:{type:String},
    designation1:{type:String},
    designation2:{type:String},
    speciality:{type:String},
    experience:{type:String},
    dob:{type:String},
    bloodgroup:{type:String},
    clinicfee:{type:Number},
    videofee:{type:Number},
    clinicname:{type:String},
    desc:{type:String},
    createdDate:{
        type: Date
      }
})

const doctorModel = mongoose.model("doctor",DoctorSchema)
export default doctorModel;