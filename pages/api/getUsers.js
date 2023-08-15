// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectDB from '@/DataBase/db'
import User from '@/models/Users'
import { NextResponse } from 'next/server'

const handler = async(
req,res
) => {
  console.log("return")
    let user = await User.find()
    res.status(200).json(user)
  }

export default connectDB(handler)
