import mongoose from "mongoose";

const { Schema } = mongoose;

const jobListSchema = new Schema({
  id: {
    type: Schema.Types.String,
    required: true,
  },
  company: {
    type: Schema.Types.String,
    required: true,
  },
  logo: {
    type: Schema.Types.String,
    required: true,
  },
  logoBackground: {
    type: Schema.Types.String,
    required: true,
  },
  position: {
    type: Schema.Types.String,
    required: true,
  },
  postedAt: {
    type: Schema.Types.String,
    required: true,
  },
  contract: {
    type: Schema.Types.String,
    required: true,
  },
  location: {
    type: Schema.Types.String,
    required: true,
  },
  website: {
    type: Schema.Types.String,
    required: true,
  },
  apply: {
    type: Schema.Types.String,
    required: true,
  },
  description: {
    type: Schema.Types.String,
    required: true,
  },
});

const JobList = mongoose.model("JobList", jobListSchema);

export default JobList;
