// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectDB from '@/DataBase/db'
import Blog from '../../../models/Blogs_Schema'
import { NextResponse } from 'next/server'
var CryptoJS = require('crypto-js')
export default async function handler(
req,res
)  {
    /*title: String,
    desc: String,
    author: String,
    date: String,
    img: String,
    tags: [
        {tag: String}
    ],
    content: String */
  console.log('post return')
  if(req.method == 'POST'){
    try{
      await connectDB()
      let blog = new Blog({
        title: req.body.title,
        desc: req.body.desc,
        author: req.body.author,
        date: req.body.date,
        tags: req.body.tags,
        content: req.body.content,
        img: req.body.img,
        readTime: req.body.readTime
      })
      await blog.save()
      res.status(200).send({success: true,blog:blog})
    }catch(err){
      res.send(504).send({message: "Error Occured"})
    }
  
  }
  else{
    res.status(400).send({message:"Only POST request allowed"})
  }
}

