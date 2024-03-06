const express = require('express');
const router = express.Router();
const {getJob , postJob , updateJob , deleteJob} = require('../controllers/job')

router.post("/post", postJob)
router.get("/get/jobs", getJob)
router.patch("/jobs/update", updateJob)
router.delete("/jobs/delete", deleteJob)


module.exports = router;