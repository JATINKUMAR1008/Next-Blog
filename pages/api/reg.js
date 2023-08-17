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
    let user = await User.findOneAndUpdate({_id: req.body._id},{
        name: req.body.name,
        img: req.body.img,
        status: true
    })
    await user.save()
    res.status(200).send({success: true,user:user})
  
  }
}
export default connectDB(handler)
