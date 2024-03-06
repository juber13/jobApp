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
        console.log(err);
        res.json({ success: false, message: "somthing went wrong", error: err.message });
    }
}

const updateJob = async (req, res) => {
    try {
        const user = await jobModel.findOneAndUpdate({ _id: req.body.id }, { $set: req.body }, { new: true });
        if (user) {
            console.log(user);
            return res.status(200).json({ success: true, message: "updated user with this id: " + req.body.id })
        } else {
            return res.status(400).json({ success: false, message: "user not found with this id : " + req.body.id })
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "somthing went wrong", error: error })
    }

}


const deleteJob = async (req, res) => {
    try {
        await jobModel.findByIdAndDelete(req.body.id);
        res.status(200).json({ success: true, message: "job deleted" })
    } catch (error) {
        return res.status(400).json({ success: false, message: "job not found", error: error })
    }
}


module.exports = { getJob, postJob, deleteJob, updateJob }