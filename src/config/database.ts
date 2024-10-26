import mongoose from "mongoose"
import dotenv from 'dotenv';
dotenv.config()

const connectDB = async () => {
    if (mongoose.connections[0].readyState){
        return true;
    }

    try {
        const mongoUrl = process.env.MONGODB_URL;
        if (!mongoUrl) {
            console.log('MongoDB Connection Failed')
            throw new Error('MONGODB_URL is not defined in the environment variables');
        }
        await mongoose.connect(mongoUrl);
        console.log('MongoDB Connected')
        return true;
    } catch (error) {
        console.log(error)
        console.log('MongoDB Connection Failed')
    }

}

export default connectDB;