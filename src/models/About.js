import mongoose from "mongoose";

const AboutSchema = new mongoose.Schema(
  {
    aboutTitle: String,
    aboutSummary: String,
  },
  { timestamps: true }
);

const About = mongoose.models.About || mongoose.model("About", AboutSchema);

export default About;
