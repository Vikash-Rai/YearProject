import mongoose from "mongoose";

const DBConnection= async ()=>{
    try{
    const URL = '';//paste mongo connection url here
        //const URL='mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false'
        
        await mongoose.connect(URL,{useNewUrlParser:true})
        console.log("Database connected successfully!")
    }
    catch(error){
        console.log("Error,while connecting to datatbase",error)
    }
}
export default DBConnection;