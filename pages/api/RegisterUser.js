// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectDB from '@/DataBase/db'
import User from '@/models/Users'
import { NextResponse } from 'next/server'
var CryptoJS = require('crypto-js')
const handler = async(
req,res
) => {
  console.log('post return')
  if(req.method == 'POST'){
    let user = new User({
    
    password: CryptoJS.AES.encrypt(req.body.password,process.env.NEXT_PUBLIC_CRYPTO_SECRET).toString(),
    email: req.body.email,
    status: false,
    verify: false
    })
    await user.save()
    res.status(200).json({success: true,user:user})
  
  }
}
export default connectDB(handler)
