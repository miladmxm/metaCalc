import mongoose from "mongoose";
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI||"mongodb://localhost:27017/meta", {})
        console.log(`MongoDB Connected : ${conn.connection.host}`);
    } catch (err) {
        console.log('mongodb err \n', err);
        process.exit(1)
    }
}
export default connectDB