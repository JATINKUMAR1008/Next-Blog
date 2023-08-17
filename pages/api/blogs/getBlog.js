// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectDB from '@/DataBase/db'
import User from '@/models/Users'
import Blog from '../../../models/Blogs_Schema'
import { NextResponse } from 'next/server'

export default async function handler(req,res){
  try{
    console.log("In GEt ")
    await connectDB()
    let blog = await Blog.find()
    if(blog){
      res.status(200).send(blog)
    }
    else{
        res.status(200).send({message: "No blogs"})
    }
  }
  catch(err){
    res.status(504).send({message: "Error Occured"})
  }
}
