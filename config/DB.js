import mongoose  from "mongoose";

export const connectDatabase=()=>{
     mongoose
   .connect(process.env.MONGO_URI, {})
   .then((con) => console.log(`DB connected: ${con.connection.host}`))
   .catch((err) => {
     console.log(err);
   });
}
