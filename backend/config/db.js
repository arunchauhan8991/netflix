import mongoose from "mongoose";
import { ENV_VARS } from "./envVariables.js";

export const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(ENV_VARS.MONGODB_URL)
        console.log("MongoDB connected: " + connectionInstance.connection.host )
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1);
    }
}