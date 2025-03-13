import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    projectImage: String,
    projectName: String,
    projectDescription: String,
    projectGitLink: String,
    projectWebLink: String,
  },
  { timestamps: true }
);

const Project =
  mongoose.models.Project || mongoose.model("Project", ProjectSchema);

export default Project;
