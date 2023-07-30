import mongoose from "mongoose";
import internal from "stream";

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

export default mongoose.model("Users",UserSchema)