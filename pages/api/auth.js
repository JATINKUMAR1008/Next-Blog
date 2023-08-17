    // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectDB from '@/DataBase/db'
import User from '@/models/Users'
var CryptoJS = require('crypto-js')

export default async function handler(
req,res
) {
  console.log("return")
  if(req.method=="POST"){
    try{
      await connectDB()
      let user = await User.findOne({email:req.body.email})
    const bytes = CryptoJS.AES.decrypt(user.password,process.env.NEXT_PUBLIC_CRYPTO_SECRET)
    console.log(bytes.toString(CryptoJS.enc.Utf8))
    let decrypted = bytes.toString(CryptoJS.enc.Utf8)
    if(user){
      if(req.body.email==user.email && req.body.password == decrypted){
        res.status(200).send({success: true,email:user.email,status:user.status,_id:user._id,name:user.name,user:user})
      }
      else{
        res.status(200).send({success: false,error: "Invalid Credentials"})
      }
    }else{
      res.status(200).send({success: false,error: "Invalid Credentials"})
    }
    }catch(err){
      res.status(200).send({success: false,error: "Invalid Credentials"})
    }
    
    }
    else{
      res.status(400).send({message:"Only POST request allowed"})
    }
  }



