import mongoose from "mongoose";

const HomeSchema = new mongoose.Schema(
  {
    heading: String,
    oneLinesummary: String,
  },
  { timestamps: true }
);

const Home = mongoose.models.Home || mongoose.model("Home", HomeSchema);

export default Home;
