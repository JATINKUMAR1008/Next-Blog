// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectDB from '@/DataBase/db'
import User from '@/models/Users'
import { NextResponse } from 'next/server'
var CryptoJS = require('crypto-js')
export default async function handler(
req,res
)  {
  console.log('post return')
  if(req.method == 'POST'){
    try{
      await connectDB()
      let user = new User({
      
      password: CryptoJS.AES.encrypt(req.body.password,process.env.NEXT_PUBLIC_CRYPTO_SECRET).toString(),
      email: req.body.email,
      status: false,
      verify: false
      })
      await user.save()
      res.status(200).send({success: true,user:user})
    }catch(err){
      res.send(504).send({message: "Error Occured"})
    }
  
  }
  else{
    res.status(400).send({message:"Only POST request allowed"})
  }
}

