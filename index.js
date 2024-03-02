const express = require('express');
const mongoose = require('mongoose');
const port = 5000;
const app = express();
const router = require('./routes/job')
const dotenv = require('dotenv');
dotenv.config();



mongoose.connect(`mongodb+srv://juberkhan0707:n8crwFDxvUd8Evc5@applicationcluster.06kemck.mongodb.net/`)
  .then(() => {
    console.log('db connected');
  }).catch(err => console.log(err));


app.use(express.json());
app.use("/api/v1/job", router);


app.listen(port, () => {
  console.log('server is runing');
})

// n8crwFDxvUd8Evc5
// juberkhan0707