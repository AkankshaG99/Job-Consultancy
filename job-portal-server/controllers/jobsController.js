const jobsModel = require("../models/jobsModel")

const jobsController = {
    async getAllJobs(req, res) {
       console.log(req.query, "llllllllllllll")
        try {
            
            const { title = '', loc = '' } = req.query || {};
          const jobs = await jobsModel.allJobs(title, loc);
           
          return res.status(200).json({
            success: true,
            message: "Fetch successfully",
            data:jobs
          });
        } catch (error) {
            console.log(error)
          return res.status(500).json({
            success: false,
            message: "Internal server error. Please try again later.",
          });
        }
      },
}

module.exports = jobsController