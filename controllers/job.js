const jobModel = require('../model/model')

const getJob = async (req, res) => {
    try {
        const jobs = await jobModel.find();
        res.json({ success: true, message: jobs })
    } catch (err) {
        res.json({ success: false, message: err });
    }
}

const postJob = async (req, res) => {
    // console.log(req.body);
    try {
        const newJob = new jobModel(req.body);
        await newJob.save();
        res.json({ success: true, message: newJob });

    } catch (err) {
        res.json({ success: false, message: "somthing went wrong" });

    }
}

const updateJob = (req, res) => {
    res.json({ success: true, message: "job updated" })
}


const deleteJob = (req, res) => {
    res.json({ success: true, message: "job deleted" })
}


module.exports = { getJob, postJob, deleteJob, updateJob }