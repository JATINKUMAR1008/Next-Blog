// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectDB from '@/DataBase/db'
import User from '@/models/Users'
import { NextResponse } from 'next/server'

const handler = async(
req,res
) => {
  console.log("return")
  if(req.method == 'GET'){

    let user = await User.find()
    res.send(user)
  }
  }

export default connectDB(handler)
