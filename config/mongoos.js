import mongoose from "mongoose";

const connectDB = async() => {
    try{
        await mongoose.connect(process.env.mongo_URI);
        console.log("database connect with mongoDB")
    }catch (err){
        console.error(err.message)
    }
}

export default connectDB;