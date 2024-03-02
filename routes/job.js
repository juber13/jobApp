const express = require('express');
const router = express.Router();
const {getJob , postJob , updateJob , deleteJob} = require('../controllers/job')

router.post("", postJob)
router.get("", getJob)
router.put("", updateJob)
router.delete("", deleteJob)


module.exports = router;