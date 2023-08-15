import mongoose from "mongoose"
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
    subscribers: Number,
    status: Boolean,
    verify: Boolean
})
mongoose.models = {}
export default mongoose.model("User",UserSchema)

