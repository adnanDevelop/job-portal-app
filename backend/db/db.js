import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected with mongodb");
  } catch (error) {
    console.error(`Error while connecting with database: ${error.message}`);
  }
};

export default connectDb;
