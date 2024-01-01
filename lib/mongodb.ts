import mongoose from "mongoose";

export const connectMongoDB = async () => {
  let connectName:string = process.env.MONGODB_URI!; 

  try {
    await mongoose.connect(connectName);
    console.log("Connected to MongoDB.")
  } catch (error) {
    console.log("Error connecting to database: ", error);
  }
};
