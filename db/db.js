import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://username:password@cluster.mongodb.net/rach_note_db?retryWrites=true&w=majority",
    );

    console.log("MongoDB Connected Successfully");
    return true;
  } catch (error) {
    console.log("MongoDB Connection Failed", error);
    return false;
  }
};

export default connectToMongoDB;
