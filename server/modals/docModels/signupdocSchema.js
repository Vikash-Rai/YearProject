import mongoose from "mongoose";

const SignupDocSchema = mongoose.Schema({
    docname:{type:String},
    docmail:{type:String},
    docpass:{type:String},
    docpassconfirm:{type:String},
    docphone:{type:Number},
    signupdate:{type:Date}
})

const signupdocModel = mongoose.model("signupdoc",SignupDocSchema)
export default signupdocModel;