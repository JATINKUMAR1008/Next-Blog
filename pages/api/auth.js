    // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectDB from '@/DataBase/db'
import User from '@/models/Users'
var CryptoJS = require('crypto-js')

const handler = async(
req,res
) => {
  console.log("return")
  let user = await User.findOne({email:req.body.email})
  const bytes = CryptoJS.AES.decrypt(user.password,process.env.NEXT_PUBLIC_CRYPTO_SECRET)
  console.log(bytes.toString(CryptoJS.enc.Utf8))
  let decrypted = bytes.toString(CryptoJS.enc.Utf8)
  if(user){
    if(req.body.email==user.email && req.body.password == decrypted){
      res.status(200).json({success: true,email:user.email,status:user.status,_id:user._id})
    }
    else{
      res.status(200).json({success: false,error: "Invalid Credentials"})
    }
  }else{
    res.status(200).json({success: false,error: "Invalid Credentials"})
  }
  }

export default connectDB(handler)
