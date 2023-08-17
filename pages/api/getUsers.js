// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectDB from '@/DataBase/db'
import User from '@/models/Users'
import { NextResponse } from 'next/server'

export default async function handler(req,res){
  try{
    console.log("In GEt ")
    await connectDB()
    let user = await User.find()
    if(user){
      res.status(200).send(user)
    }
  }
  catch(err){
    res.status(504).send({message: "Error Occured"})
  }
}
