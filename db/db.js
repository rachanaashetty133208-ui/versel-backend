import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/rach_note_db");

    console.log("MongoDB Connected Successfully");
    return true;
  } catch (error) {
    console.log("MongoDB Connection Failed", error);
    return false;
  }
};

export default connectToMongoDB;
