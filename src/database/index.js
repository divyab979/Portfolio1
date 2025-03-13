import mongoose from "mongoose";

export default async function connectToDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://divyab979:IMDEDFR2004.@cluster0.notqd.mongodb.net/"
    );
    console.log("Database connected successfully biatch");
  } catch (e) {
    console.log(e);
  }
}
