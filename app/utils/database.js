import mongoose from "mongoose"

const { MONGODB_URL } = process.env;

const connectDB = async() => {
    try {
        await mongoose.connect(MONGODB_URL)
        console.log("Success: Connected to MongoDB")
    }catch {
        console.log("Failure: Unconnected to MongoDB")
        throw new Error()
    }
}

export default connectDB