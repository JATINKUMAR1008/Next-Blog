import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
    title: String,
    desc: String,
    author: String,

})