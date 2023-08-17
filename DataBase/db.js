import mongoose from "mongoose";
const connectDB = async(req,res)=>{
    if(await mongoose.connections.readyState){
        return mongoose.connection.asPromise()
    }
    await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(function (data) { console.log("data = ", data.connections); }).catch(function (err) { console.log(err); });
}
export default connectDB