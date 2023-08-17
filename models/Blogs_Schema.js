import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
    title: String,
    desc: String,
    author: String,
    date: String,
    img: String,
    tags: [
        {tag: String}
    ],
    content: String
},{timestamps: true})

export default mongoose.model("Blog",BlogSchema)