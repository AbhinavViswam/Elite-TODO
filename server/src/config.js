import mongoose from "mongoose";

const connectDB= async function(){
    try{
    const connection=await mongoose.connect(process.env.MONGODB_URL)
    console.log("MongoDB Connected");
    }
    catch(err){
        console.log("Error in connecting to mongoDB");
        process.exit(1)
    }
}

export default connectDB