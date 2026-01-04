import mongoose from "mongoose";

export async function connectToDatabase() {
    try {
        const connect = await mongoose.connect(String(process.env.MONGODB_URI));
        return connect;
    } catch (error) {
        console.log(error);
    }
}
