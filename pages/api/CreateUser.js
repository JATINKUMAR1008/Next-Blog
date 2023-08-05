// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectDB from '@/DataBase/db'
import { NextApiRequest, NextApiResponse } from 'next'
import User from '@/models/Users'

const handler = async(
req,res
) => {
  if(req.method == 'POST'){
    let user = new User({
    name: req.body.name,
    password: req.body.password,
    email: req.body.email,
    img: req.body.img,
    subsriptions: req.body.subsriptions,
    subscribers: req.body.subscribers
      
    })
    await user.save()
    res.status(200).json({success: "success created"})
  }
}
export default connectDB(handler)
