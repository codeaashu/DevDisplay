import mongoose from "mongoose";

const connectDB = async () => {
    const connectionInstance = await mongoose.connect(`${process.env.DB_URI}/${process.env.DB_NANE}`); // this may throw unexpected error. 
    // In case of error, try hard coding the mongodb uri once.

    try {
        if(connectionInstance.connection.readyState === 1) {
            console.log(`Connected to MongoDB at ${connectionInstance.connection.host}`);
        }
        else {
            console.log(`Could not connect to MongoDB at ${connectionInstance.connection.host}`);
            process.exit(1);
        }
    } catch (error) {
        console.log("Something went wrong while connecting to MongoDB", error);
        process.exit(1);
    }
}

export default connectDB;