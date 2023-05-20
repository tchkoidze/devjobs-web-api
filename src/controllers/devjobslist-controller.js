import JobList from "../models/JobList.js";

export const getJobListForPage = async (req, res) => {
  const size = req.params.size;
  const page = req.params.page;

  const data = await JobList.find();

  const jobsEachPage = data.slice(size * (page - 1), size * page);

  return res.json(jobsEachPage);
};
