import JobList from "../models/JobList.js";

export const getAllJobList = async (req, res) => {
  const data = await JobList.find();
  return res.json(data);
};
