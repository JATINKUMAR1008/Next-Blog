// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectDB from '@/DataBase/db'
import type { NextApiRequest, NextApiResponse } from 'next'
import User from '@/models/Users'
type Data = {
  name: string
}

const handler = async(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
    let user = await User.find()
    res.status(200).json({user})
  }

export default connectDB(handler)
