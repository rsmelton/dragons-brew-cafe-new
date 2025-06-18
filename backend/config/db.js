import mongoose from "mongoose";

export const connectDB = async() => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${connection.connection.host}`);
    } catch (error) {
        console.log(`Error: ${error}`);
        process.exit(1); // means exited with errors
    }
};