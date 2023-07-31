import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: String,
    password: String,
    email: String,
    img: String,
    subsriptions: [
        {
            userId: String
        }
    ],
    subscribers: Number
})
mongoose.models = {}
export default mongoose.model("User",UserSchema)