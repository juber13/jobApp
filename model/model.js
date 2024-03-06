const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    // password: {
    //     type: String,
    //     required: true
    // },

    company: {
        type: String,
        required: true,
    },

    location: {
        type: String,
        required: true,
    },

    salary: {
        type: Number,
        required: true,
    }

})

// jobSchema.pre("save", async function () {
//         const salt = await bcrypt.genSalt(10);
//         this.password = await bcrypt.hash(this.password, salt);
// })


const jobModel = mongoose.model('Job', jobSchema);

module.exports = jobModel;



// mongodb + srv://juberkhan:<password>@cluster0.tjhq9rc.mongodb.net/
// juberkhan
// juberkhan123

