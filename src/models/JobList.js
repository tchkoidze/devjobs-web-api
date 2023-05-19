import mongoose from "mongoose";

const { Schema } = mongoose;

const jobListSchema = new Schema({
  id: {
    type: Schema.Types.Number,
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
  requirements: {
    type: new Schema({
      content: {
        type: Schema.Types.String,
        required: true,
      },
      items: {
        type: Schema.Types.Array,
        required: true,
      },
    }),
    required: true,
  },
  role: {
    type: new Schema({
      content: {
        type: Schema.Types.String,
        required: true,
      },
      items: {
        type: Schema.Types.Array,
        required: true,
      },
    }),
    required: true,
  },
});

const JobList = mongoose.model("JobList", jobListSchema);

export default JobList;
